export interface Listener<Event, State> {
    (event: Event): State;
}
export interface Disposable {
    dispose(): any;
}
export declare class TypedEvent<Event, State> {
    private listners;
    on: (listener: Listener<Event, State>) => any;
    off: (listner: Listener<Event, State>) => void;
    emit: (event: Event) => State;
}
