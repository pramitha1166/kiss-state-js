/// interface that take event and return the state
export interface Listener<Event, State> {
    (event: Event) : State;
}

/// interface that dispose the event
export interface Disposable{
    dispose();
}

/// 
export class TypedEvent<Event, State> {

    /// 
    private listners: Listener<Event, State>[] = [];

    /// 
    on = (listener: Listener<Event, State>): Disposable => {
        this.listners.push(listener)
        return {
            dispose: () => this.off(listener)
        }
    }

    off = (listner: Listener<Event, State>) => {
        var callbackIndex = this.listners.indexOf(listner)
        if(callbackIndex>-1) {
            this.listners.splice(callbackIndex, 1)
        }
    }

    emit = (event: Event) : State => {
        var state;
        this.listners.forEach((listener) => {
            state =  listener(event)

        })

        return state;
    }


}