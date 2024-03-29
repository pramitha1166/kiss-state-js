"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var transition_1 = require("./transition");
var Bloc = /** @class */ (function (_super) {
    __extends(Bloc, _super);
    function Bloc(_state) {
        var _this = _super.call(this) || this;
        _this._state = _state;
        _this.emitted = false;
        _this.eventSubject = new rxjs_1.Subject();
        _this.transitionSubscription = rxjs_1.Subscription.EMPTY;
        _this.stateSubject = new rxjs_1.Subject();
        _this.bindStateWithSubscription();
        return _this;
        //this.bindStateWithSubscriptionV1()
        //this.bindStateWithPromise()
    }
    Object.defineProperty(Bloc.prototype, "state", {
        //return state
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    //execute event which are initialy map
    Bloc.prototype.execute = function (event) {
        this.eventSubject.next(event);
    };
    Bloc.prototype.listen = function (onData) {
        return this.stateSubject.subscribe(onData);
    };
    Bloc.prototype.on = function (event, callback) {
        this.bindStateWithSubscriptionV1(callback(this.state));
        this.execute(event);
    };
    // public onPrmise(
    //     event: Event
    // ): AsyncIterableIterator<State> {
    //     return 
    // }
    //abstract onPromise(event: Event): Promise<State>
    Bloc.prototype.transformEventIntoObservableWithNextFunc = function (events, next) {
        events.subscribe(function (event) { return console.log(event); });
        return events.pipe((0, operators_1.concatMap)(next));
    };
    Bloc.prototype.getNewTransitionFromCurrentOne = function (transition) {
        return transition;
    };
    Bloc.prototype.bindStateWithSubscription = function () {
        var _this = this;
        console.log("binding state");
        this.transitionSubscription = this.getNewTransitionFromCurrentOne(this.transformEventIntoObservableWithNextFunc(this.eventSubject, function (event) {
            return asyncToObservable(_this.initialEventWithState(event)).pipe((0, operators_1.map)(function (newState, _) {
                console.log(newState);
                return new transition_1.Transition(_this.state, event, newState);
            }));
        })).subscribe(function (transition) {
            try {
                _this._state = transition.newState;
                _this.stateSubject.next(transition.newState);
            }
            catch (error) {
            }
        });
    };
    Bloc.prototype.bindStateWithSubscriptionV1 = function (state) {
        var _this = this;
        console.log("binding state");
        this.transitionSubscription = this.getNewTransitionFromCurrentOne(this.transformEventIntoObservableWithNextFunc(this.eventSubject, function (event) {
            return convertSateToObservable(state).pipe((0, operators_1.map)(function (newState, _) {
                console.log(newState);
                return new transition_1.Transition(_this.state, event, newState);
            }));
        })).subscribe(function (transition) {
            try {
                _this._state = transition.newState;
                _this.stateSubject.next(transition.newState);
            }
            catch (error) {
            }
        });
    };
    return Bloc;
}(rxjs_1.Observable));
exports.Bloc = Bloc;
function singleAsyncToObservable(item) {
    var _this = this;
    return new rxjs_1.Observable(function (observer) { return void (function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            item.then(function (res) {
                observer.next(res);
                observer.complete();
            }).catch(function (err) {
                observer.error(err);
            });
            return [2 /*return*/];
        });
    }); }); });
}
function asyncToObservable(iterable) {
    var _this = this;
    console.log("async to ons");
    return new rxjs_1.Observable(function (observer) { return void (function () { return __awaiter(_this, void 0, void 0, function () {
        var iterable_1, iterable_1_1, item, e_1_1, error_1;
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 13, , 14]);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 12]);
                    iterable_1 = __asyncValues(iterable);
                    _b.label = 2;
                case 2: return [4 /*yield*/, iterable_1.next()];
                case 3:
                    if (!(iterable_1_1 = _b.sent(), !iterable_1_1.done)) return [3 /*break*/, 5];
                    item = iterable_1_1.value;
                    console.log(item);
                    observer.next(item);
                    observer.complete();
                    _b.label = 4;
                case 4: return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _b.trys.push([7, , 10, 11]);
                    if (!(iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _a.call(iterable_1)];
                case 8:
                    _b.sent();
                    _b.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12: return [3 /*break*/, 14];
                case 13:
                    error_1 = _b.sent();
                    return [3 /*break*/, 14];
                case 14: return [2 /*return*/];
            }
        });
    }); })(); });
}
function convertSateToObservable(item) {
    var _this = this;
    return new rxjs_1.Observable(function (observer) { return void (function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                observer.next(item);
            }
            catch (error) {
            }
            return [2 /*return*/];
        });
    }); }); });
}
