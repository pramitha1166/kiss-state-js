import {Observable, Subject, Subscription, of, from, Observer} from 'rxjs'

/// An object that provides acess to a stream of state over time.
export interface Streamable<State extends Object> {
 //The current [stream] of state.
  get state(): State
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

// a object that can emit new state
export interface Emittable<State extends Object> {
    emit(state: State) : void;
}

/// mutiple error can be reported to the sink using addErr method 
export interface ErrorSink extends Closable{
    addError(error: Object) : void;
}

/// object shoud be closed when it no longer use
export interface Closable{
    close(): Promise<void>; 
}



export abstract class BlocBase<State extends Object, Event> implements StateStreamable<State>, Emittable<State>, ErrorSink {

    _state : State;
    //_emitted: boolean;

    private _stateController : Subject<State> = new Subject<State>;
    //eventController = new Subject<Event>;

    
    
    get stream(): Observable<State> {
        return this._stateController;
    };

    
    get state(): State {
        return this._state;
    }


    constructor(initialState: State) {
        this._state = initialState;
        this.emit(initialState)

        var observer = {
            next: function(value: any) {
                console.log("State emited ", value)
            },
            error: function(error: any) {
                console.log(error)
            },
            completed: function() {

            },
        }

        this._stateController.subscribe(observer)
    }


    addError(error: Object): void {
        throw new Error('Method not implemented.');
    }

    close(): Promise<void> {
        throw new Error('Method not implemented.');
    }


    emit(state: State) {
        this._state = state;
        this._stateController.next(state);
    }



    
}