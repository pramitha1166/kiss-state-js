import { Bloc } from "./bloc";

abstract class CounterEvent{}

class IncrementEvent extends CounterEvent {
    public fNumber: number = 100;
}

class CounterBloc extends Bloc<CounterEvent, number> {
    public increament()  {
        return this.addNewState(this.state + 4);
    }
    constructor() {
        super(10);
    }
    public decreament() {
        return this.addNewState(this.state - 4);
    }

}


// increamentE(val: number) {

// }

let bloc = new CounterBloc();
bloc.on<IncrementEvent>(new IncrementEvent(), (event) => {
    return event.fNumber + 2;
});
//bloc.increament()
//bloc.decreament()

bloc.call(IncrementEvent)

console.log(bloc.state);