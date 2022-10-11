import { Observable } from 'rxjs';
export interface Streamable<State extends Object> {
    get state(): State;
}
/**
 * Object that represents rxjs stream obervable
 *
 *
 * @interface StateStreamable<T extends Object>
 */
export interface StateStreamable<State extends Object> extends Streamable<State> {
    get stream(): Observable<State>;
}
export interface Emittable<State extends Object> {
    emit(state: State): void;
}
export interface ErrorSink extends Closable {
    addError(error: Object): void;
}
export interface Closable {
    close(): Promise<void>;
}
export declare abstract class BlocBase<State extends Object, Event> implements StateStreamable<State>, Emittable<State>, ErrorSink {
    _state: State;
    private _stateController;
    get stream(): Observable<State>;
    get state(): State;
    constructor(initialState: State);
    addError(error: Object): void;
    close(): Promise<void>;
    emit(state: State): void;
}
