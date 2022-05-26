"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartBloc = exports.MyCounterBloc = void 0;
const bloc_1 = require("./bloc/bloc");
;
var CarEvents;
(function (CarEvents) {
    CarEvents["add"] = "add";
    CarEvents["remove"] = "remove";
})(CarEvents || (CarEvents = {}));
;
class CarEvent {
    constructor(_car, _events) {
        this._car = _car;
        this._events = _events;
    }
    get car() {
        return this._car;
    }
    ;
    get events() {
        return this._events;
    }
    ;
}
class Car {
    constructor(_name, _model) {
        this._name = _name;
        this._model = _model;
    }
    get name() {
        return this._name;
    }
    get model() {
        return this._model;
    }
}
class MyCounterBloc extends bloc_1.Bloc {
    constructor() {
        super(0);
    }
    initialEventWithState(event) {
        return __asyncGenerator(this, arguments, function* initialEventWithState_1() {
            switch (event) {
                case "INCREAMENT" /* increament */:
                    console.log("inc");
                    yield yield __await(this.state + 1);
                    break;
                case "DECREAMENT" /* decreament */:
                    yield yield __await(this.state - 1);
                    break;
            }
        });
    }
    onPromise(event) {
        return new Promise((res, rej) => {
            res(this.state);
        });
    }
}
exports.MyCounterBloc = MyCounterBloc;
class CartBloc extends bloc_1.Bloc {
    constructor() {
        super([]);
    }
    initialEventWithState(event) {
        return __asyncGenerator(this, arguments, function* initialEventWithState_2() {
            switch (event.events) {
                case CarEvents.add:
                    this.state.push(event.car);
                    yield yield __await(this.state);
                case CarEvents.remove:
                    this.state.pop();
                    yield yield __await(this.state);
            }
        });
    }
}
exports.CartBloc = CartBloc;
(function main() {
    return __awaiter(this, void 0, void 0, function* () {
        //const counterBloc = new MyCounterBloc();
        //counterBloc.execute(CounterEvent.increament);
        //counterBloc.execute(CounterEvent.increament);
        //counterBloc.execute(CounterEvent.decreament);
        const carBloc = new CartBloc();
        const car = new Car("tesla", "model s");
        carBloc.execute(new CarEvent(car, CarEvents.add));
        /*
        counterBloc.listen(data => {
            console.log("new state => ", data)
        })
        */
        carBloc.listen(data => {
            console.log("new car state => ", data);
        });
    });
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
//# sourceMappingURL=app.js.map