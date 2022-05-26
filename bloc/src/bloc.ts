import { Observable, Subject,EMPTY, Subscription, async } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators'
import { Transition } from './transition';


export type NextFunction<Event, State> = (event: Event) => Observable<Transition<Event, State>>
export type OnPrmiseCallBack<State> = () => AsyncIterableIterator<State>

export abstract class Bloc<Event, State> extends Observable<State> {


    private emitted: boolean = false;
    private stateSubject: Subject<State>;
    private eventSubject = new Subject<Event>();
    private transitionSubscription: Subscription = Subscription.EMPTY;


    constructor(private _state: State) {
        super();
        this.stateSubject = new Subject();
        this.bindStateWithSubscription()
        //this.bindStateWithPromise()
    }


    //return state
    get state(): State {
        return this._state;
    }

    //execute event which are initialy map
    execute(event: Event) {
        this.eventSubject.next(event)
    }

    listen(
        onData: (data: State) => void
    ): Subscription {
        return this.stateSubject.subscribe(onData)
    }

    //map each events with state
    abstract initialEventWithState(event: Event) : AsyncIterableIterator<State>

    public onPrmise(
        event: Event
    ): AsyncIterableIterator<State> {
        return 
    }

    //abstract onPromise(event: Event): Promise<State>

    transformEventIntoObservableWithNextFunc(
        events: Observable<Event>,
        next: NextFunction<Event, State>
    ): Observable<Transition<Event, State>>{
        events.subscribe(event => console.log(event))
        return events.pipe(concatMap(next))
    }



    getNewTransitionFromCurrentOne(transition: Observable<Transition<Event, State>>) : Observable<Transition<Event, State>> {
        return transition;
    }

    
    public bindStateWithSubscription() {
        console.log("binding state")
        this.transitionSubscription = this.getNewTransitionFromCurrentOne(
            this.transformEventIntoObservableWithNextFunc(this.eventSubject, (event: Event) => {
                return asyncToObservable(this.initialEventWithState(event)).pipe(
                    map((newState: State, _: number) => {
                        console.log(newState)
                        return new Transition(this.state, event, newState);
                    })
                )
            })
        ).subscribe((transition: Transition<Event, State>)=> {
            try {
                this._state = transition.newState
                this.stateSubject.next(transition.newState)
            } catch (error) {
                
            }
        })
    }
    

    public bindStateWithPromise() {
        console.log("binding state")
        this.transitionSubscription = this.getNewTransitionFromCurrentOne(
            this.transformEventIntoObservableWithNextFunc(this.eventSubject, (event: Event) => {
                return asyncToObservable(this.onPrmise(event)).pipe(
                    map((newState: State, _: number) => {
                        console.log(newState)
                        return new Transition(this.state, event, newState);
                    })
                )
            })
        ).subscribe((transition: Transition<Event, State>)=> {
            try {
                this._state = transition.newState
                this.stateSubject.next(transition.newState)
            } catch (error) {
                
            }
        })
    }

/*
    public bindStateWithPromise() {
        this.transitionSubscription = this.getNewTransitionFromCurrentOne(
            this.transformEventIntoObservableWithNextFunc(this.eventSubject, (event: Event) => {
                return singleAsyncToObservable(this.onPromise(event)).pipe(
                    map((newState: State, _: number) => {
                        console.log(newState)
                        return new Transition(this.state, event, newState);
                    })
                )
            })
        ).subscribe((transition: Transition<Event, State>)=> {
            try {
                this._state = transition.newState
                this.stateSubject.next(transition.newState)
            } catch (error) {
                
            }
        })
    }
    */

}

function singleAsyncToObservable<T>(item: Promise<T>): Observable<T> {
    return new Observable<T> (
        observer => void(async() => {
            item.then(res => {
                observer.next(res)
                observer.complete()
            }).catch(err => {
                observer.error(err)
            })
        })
    )
}

function asyncToObservable<T>(iterable:AsyncIterableIterator<T>): Observable<T> {
    console.log("async to ons")
    return new Observable<T> (
        observer => void (async() => {
            try {
                for await (const item of iterable) {
                    console.log(item)
                    observer.next(item)
                    observer.complete()
                }
            } catch (error) {
                
            }
        })()
    )
}