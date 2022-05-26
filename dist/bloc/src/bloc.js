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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bloc = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const transition_1 = require("./transition");
class Bloc extends rxjs_1.Observable {
    constructor(_state) {
        super();
        this._state = _state;
        this.emitted = false;
        this.eventSubject = new rxjs_1.Subject();
        this.transitionSubscription = rxjs_1.Subscription.EMPTY;
        this.stateSubject = new rxjs_1.Subject();
        this.bindStateWithSubscription();
        //this.bindStateWithPromise()
    }
    //return state
    get state() {
        return this._state;
    }
    //execute event which are initialy map
    execute(event) {
        this.eventSubject.next(event);
    }
    listen(onData) {
        return this.stateSubject.subscribe(onData);
    }
    onPrmise(event) {
        return;
    }
    //abstract onPromise(event: Event): Promise<State>
    transformEventIntoObservableWithNextFunc(events, next) {
        events.subscribe(event => console.log(event));
        return events.pipe((0, operators_1.concatMap)(next));
    }
    getNewTransitionFromCurrentOne(transition) {
        return transition;
    }
    bindStateWithSubscription() {
        console.log("binding state");
        this.transitionSubscription = this.getNewTransitionFromCurrentOne(this.transformEventIntoObservableWithNextFunc(this.eventSubject, (event) => {
            return asyncToObservable(this.initialEventWithState(event)).pipe((0, operators_1.map)((newState, _) => {
                console.log(newState);
                return new transition_1.Transition(this.state, event, newState);
            }));
        })).subscribe((transition) => {
            try {
                this._state = transition.newState;
                this.stateSubject.next(transition.newState);
            }
            catch (error) {
            }
        });
    }
    bindStateWithPromise() {
        console.log("binding state");
        this.transitionSubscription = this.getNewTransitionFromCurrentOne(this.transformEventIntoObservableWithNextFunc(this.eventSubject, (event) => {
            return asyncToObservable(this.onPrmise(event)).pipe((0, operators_1.map)((newState, _) => {
                console.log(newState);
                return new transition_1.Transition(this.state, event, newState);
            }));
        })).subscribe((transition) => {
            try {
                this._state = transition.newState;
                this.stateSubject.next(transition.newState);
            }
            catch (error) {
            }
        });
    }
}
exports.Bloc = Bloc;
function singleAsyncToObservable(item) {
    return new rxjs_1.Observable(observer => void (() => __awaiter(this, void 0, void 0, function* () {
        item.then(res => {
            observer.next(res);
            observer.complete();
        }).catch(err => {
            observer.error(err);
        });
    })));
}
function asyncToObservable(iterable) {
    console.log("async to ons");
    return new rxjs_1.Observable(observer => void (() => __awaiter(this, void 0, void 0, function* () {
        var e_1, _a;
        try {
            try {
                for (var iterable_1 = __asyncValues(iterable), iterable_1_1; iterable_1_1 = yield iterable_1.next(), !iterable_1_1.done;) {
                    const item = iterable_1_1.value;
                    console.log(item);
                    observer.next(item);
                    observer.complete();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) yield _a.call(iterable_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        catch (error) {
        }
    }))());
}
//# sourceMappingURL=bloc.js.map