import { Bloc } from "./bloc";

abstract class CounterEvent{}

class IncrementEvent extends CounterEvent {
    public fNumber: number = 10;
}


class DecreamentEvent extends CounterEvent {
    public fNumber: number = 10;
}

class CounterBloc extends Bloc<CounterEvent, number> {
    public increament()  {
        return this.addNewState(this.state + 4);
    }
    constructor() {
        super(0);
    }
    public decreament() {
        return this.addNewState(this.state - 4);
    }

}


// increamentE(val: number) {

// }

let bloc = new CounterBloc();
// bloc.on<IncrementEvent>(new IncrementEvent(), (event) => {
//     return event.fNumber + 10;
// });
// bloc.call(IncrementEvent)
// console.log(bloc.state);


bloc.on("increament", (event) => {
    //bloc.state + 
    console.log("state when adding event "+bloc.state)
    return  bloc.state  + 1;
});

bloc.on("decreament", (event) => {
    return  bloc.state - 1;
});
//bloc.increament()
//bloc.decreament()

bloc.call(IncrementEvent)
bloc.call(DecreamentEvent)
console.log(bloc.state);