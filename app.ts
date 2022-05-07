import { Bloc } from './lib/bloc'

enum CounterEvent {
    increament = "INCREAMENT",
    decreament = "DECREAMENT"
}

class MyCounterBloc extends Bloc<CounterEvent, number> {
    constructor() {
        super(0)
    }

    async *initialEventWithState(event: CounterEvent) {
        switch(event) {
            case CounterEvent.increament:
                console.log("inc")
                yield this.state + 1
                break
            case CounterEvent.decreament:
                yield this.state - 1;
                break
        }
    }
}

(async function main() {
    const counterBloc = new MyCounterBloc();
    counterBloc.execute(CounterEvent.increament);
    counterBloc.execute(CounterEvent.increament);
    counterBloc.execute(CounterEvent.decreament)

    counterBloc.listen(data => {
        console.log("new state => ", data)
    })
})();

async function wait(ms: number): Promise<void> {
    return new Promise<void>((resolve, _) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }