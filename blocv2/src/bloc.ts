import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { concatMap } from 'rxjs/operators'
import { BlocAction } from './bloc-action';
import { BlocActionWrapper } from './bloc-action-wrap';

interface NewState<State> {
    next: State;
    resolve: () => void;
}

const getObservableFromAction = <State>(b: Bloc<State>) => ({
    action,
    resolve
}: BlocActionWrapper<State>) => new Observable<NewState<State>>((subscribe) => {
    Promise.resolve(action(b, (next: State) => subscribe.next({ next, resolve })))
        .catch(err => subscribe.error(err))
})

export abstract class Bloc<State> extends Observable<State> {

    constructor(initialState: State) {
        super()
        this._state = new BehaviorSubject<State>(initialState)

        this.transformActionsToObservable(this._actions)
            .pipe(concatMap(getObservableFromAction(this)))
            .subscribe(({ next, resolve }) => {
                this._state.next(next)
                resolve()
            },
                (err) => this._state.error(err)
            )
    }


    protected _state: BehaviorSubject<State>;
    protected _actions = new Subject<BlocActionWrapper<State>>();

    protected transformActionsToObservable(input: Observable<BlocActionWrapper<State>>): Observable<BlocActionWrapper<State>> {
        return input;
    }

    public get value() {
        return this._state.value;
    }


    public next = (action: BlocAction<State>): Promise<void> =>
        new Promise((resolve) => {
            this._actions.next({ action, resolve })
        })

    
        
}