export declare class Transition<Event, State> {
    currentState: State;
    event: Event;
    newState: State;
    constructor(currentState: State, event: Event, newState: State);
}
