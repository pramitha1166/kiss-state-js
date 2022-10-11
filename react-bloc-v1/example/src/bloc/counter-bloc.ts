import { Bloc } from "kiss-js-bloc";
import { CounterEvent, DecreamentEvent, IncreamentEvent } from './counter-event'

class CounterBloc extends Bloc<CounterEvent,number> {

    constructor() {
        super(0)
    }

}

export default CounterBloc