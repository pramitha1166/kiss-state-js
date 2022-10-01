import { Bloc } from './lib/bloc'

export const enum CounterEvent {
    increament = "INCREAMENT",
    decreament = "DECREAMENT"
};

enum CarEvents {
    add = "add",
    remove = "remove"
};

class CarEvent {
    constructor(private _car: Car, private _events: CarEvents) {}
    get car() {
        return this._car
    }; 

    get events() {
        return this._events
    };
}

class Car {

    constructor(private _name: string, private _model: string) {}

    get name(): string {
        return this._name
    }

    get model(): string {
        return this._model
    }

}

export class MyCounterBloc extends Bloc<CounterEvent, number> {
    constructor() {
        super(0)
    }

    async *initialEventWithState(event: CounterEvent) {
        switch(event) {
            case CounterEvent.increament:
                console.log("inc")
                yield this.state + 1;
                break
            case CounterEvent.decreament:
                yield this.state - 1;
                break
        }
    }

    onPromise(event: CounterEvent): Promise<number> {
        return new Promise((res,rej) => {
            res(this.state)
        })
    }

}


export class CartBloc extends Bloc<CarEvent, Car[]>{
    constructor() {
        super([])
    }

    
    async *initialEventWithState(event: CarEvent): AsyncIterableIterator<Array<Car>> {
        switch(event.events) {
            case CarEvents.add:
                this.state.push(event.car)
                yield this.state
            case CarEvents.remove:
                this.state.pop()
                yield this.state
        }
    }
    

    /*
    public async *onPrmise(event: AddEvent): AsyncIterableIterator<Car[]> {
        this.state.push(event.car)
        yield this.state
    }
    */



/*
    onPromise(event: CarEvents): Promise<Car[]> {
        return new Promise((res, rej) => {
            switch(event) {
                case CarEvents.add:
                    const car = new Car("tesla","model s");
                    this.state.push(car)
                    res(this.state)
            }
        })
    }
    */

}

(async function main() {
    //const counterBloc = new MyCounterBloc();
    //counterBloc.execute(CounterEvent.increament);
    //counterBloc.execute(CounterEvent.increament);
    //counterBloc.execute(CounterEvent.decreament);

    const carBloc = new CartBloc()
    const car = new Car("tesla","model s");
    carBloc.execute(new CarEvent(car, CarEvents.add));

    /*
    counterBloc.listen(data => {
        console.log("new state => ", data)
    })
    */

    carBloc.listen(data => {
        console.log("new car state => ", data)
    })

})();


/*
async function wait(ms: number): Promise<void> {
    return new Promise<void>((resolve, _) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
  */