import { Bloc } from "kiss-js-bloc";
import { CounterEvent, IncreamentEvent } from './counter-event'
import { CounterState, InitState, IncreamentState } from './counter-state'

export class CounterBloc extends Bloc<CounterEvent,number> {

    constructor() {
        super(0)
        this.on<IncreamentEvent>(new IncreamentEvent(12), (val) => {
            return val.increamentVal + 100;
        })
    }

}