import { BlocBase } from "./bloc_base";
import { TypedEvent } from "./event_emitter";

export interface EventHandler<State> {
    (data : State): Function;
}

export abstract class Bloc<Event extends Object, State extends Object> extends BlocBase<State, Event> {

    // private add(event: Event) {
    //     this.eventController.next(event);
    // }

    private emitter : TypedEvent<Event, State>;

    constructor(initialState: State) {
        super(initialState);
        this.emitter = new TypedEvent<Event, State>();
        //this.on(eventHandler);
    }

    // on<E extends Event>(callback: EventHandler<State>) {
    //     this.eventController.subscribe({
    //         next: (event: E) => {
    //             console.log("Calling an event ", event.toString());
    //            function onEmit(state : State) {
    //             this.emit(state);
    //            }
    //            onEmit(callback())

    //         }
    //     })
    // }

    on<E extends Event>(event: E, handler: ((event: E) => State)) {
        //this.emitter.listen(event, handler);
        this.emitter.on(() => handler(event))
        console.log("state after adding event " + this._state)
    }

    call(event: Event) {
        //this._state = this.emitter.call(event, state)
        //this.emit(this._state)
        this.emit(this.emitter.emit(event))
        
    }


    addNewState(state: State) {
        this.emit(state)
    }

    
}