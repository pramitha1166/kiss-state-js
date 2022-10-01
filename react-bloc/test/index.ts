import { Bloc } from '../../lib/bloc'

enum CounterEvent {
    increament = "INCREAMENT"
}

class MyCounterBloc extends Bloc<CounterEvent, number> {
    constructor() {
        super(0)
    }

    async *initialEventWithState(event: CounterEvent) {
        yield this.state + 1
    }
}

(async function main() {
    const counterBloc = new MyCounterBloc();
    counterBloc.execute(CounterEvent.increament);
    console.log(counterBloc.state)
})();

async function wait(ms: number): Promise<void> {
    return new Promise<void>((resolve, _) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }