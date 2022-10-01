import { Observable, Subscription } from 'rxjs';
import { Transition } from './transition';
export declare type NextFunction<Event, State> = (event: Event) => Observable<Transition<Event, State>>;
export declare type OnPrmiseCallBack<State> = () => AsyncIterableIterator<State>;
export declare abstract class Bloc<Event, State> extends Observable<State> {
    private _state;
    private emitted;
    private stateSubject;
    private eventSubject;
    private transitionSubscription;
    constructor(_state: State);
    get state(): State;
    execute(event: Event): void;
    listen(onData: (data: State) => void): Subscription;
    abstract initialEventWithState(event: Event): AsyncIterableIterator<State>;
    transformEventIntoObservableWithNextFunc(events: Observable<Event>, next: NextFunction<Event, State>): Observable<Transition<Event, State>>;
    getNewTransitionFromCurrentOne(transition: Observable<Transition<Event, State>>): Observable<Transition<Event, State>>;
    bindStateWithSubscription(): void;
}
