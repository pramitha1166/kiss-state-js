import { BlocBase } from "./bloc_base";
export interface EventHandler<State> {
    (data: State): Function;
}
export declare abstract class Bloc<Event extends Object, State extends Object> extends BlocBase<State, Event> {
    private emitter;
    constructor(initialState: State);
    on<E extends Event>(event: E, handler: ((event: E) => State)): void;
    call(event: Event): void;
    addNewState(state: State): void;
}
