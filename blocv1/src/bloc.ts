import { BlocBase } from "./bloc_base";
import { TypedEvent } from "./event_emitter";

export interface EventHandler<State> {
    (data : State): Function;
}

export abstract class Bloc<Event, State> extends BlocBase<State, Event> {

    add(event: Event) {
        this.eventController.next(event);
    }

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

    on(event: Event, handler: ((event: Event) => State)) {
        //this.emitter.listen(event, handler);
        this.emitter.on(() => handler(event))
    }

    call(event: Event) {
        //this._state = this.emitter.call(event, state)
        //this.emit(this._state)

        this._state = this.emitter.emit(event)
        
    }



    addNewState(state: State) {
        this.emit(state)
    }

    
}