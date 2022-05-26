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
exports.__esModule = true;
exports.CartBloc = exports.MyCounterBloc = void 0;
var bloc_1 = require("./bloc/bloc");
;
var CarEvents;
(function (CarEvents) {
    CarEvents["add"] = "add";
    CarEvents["remove"] = "remove";
})(CarEvents || (CarEvents = {}));
;
var CarEvent = /** @class */ (function () {
    function CarEvent(_car, _events) {
        this._car = _car;
        this._events = _events;
    }
    Object.defineProperty(CarEvent.prototype, "car", {
        get: function () {
            return this._car;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CarEvent.prototype, "events", {
        get: function () {
            return this._events;
        },
        enumerable: false,
        configurable: true
    });
    ;
    return CarEvent;
}());
var Car = /** @class */ (function () {
    function Car(_name, _model) {
        this._name = _name;
        this._model = _model;
    }
    Object.defineProperty(Car.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
var MyCounterBloc = /** @class */ (function (_super) {
    __extends(MyCounterBloc, _super);
    function MyCounterBloc() {
        return _super.call(this, 0) || this;
    }
    MyCounterBloc.prototype.initialEventWithState = function (event) {
        return __asyncGenerator(this, arguments, function initialEventWithState_1() {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = event;
                        switch (_a) {
                            case "INCREAMENT" /* increament */: return [3 /*break*/, 1];
                            case "DECREAMENT" /* decreament */: return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 7];
                    case 1:
                        console.log("inc");
                        return [4 /*yield*/, __await(this.state + 1)];
                    case 2: return [4 /*yield*/, _b.sent()];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 4: return [4 /*yield*/, __await(this.state - 1)];
                    case 5: return [4 /*yield*/, _b.sent()];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    MyCounterBloc.prototype.onPromise = function (event) {
        var _this = this;
        return new Promise(function (res, rej) {
            res(_this.state);
        });
    };
    return MyCounterBloc;
}(bloc_1.Bloc));
exports.MyCounterBloc = MyCounterBloc;
var CartBloc = /** @class */ (function (_super) {
    __extends(CartBloc, _super);
    function CartBloc() {
        return _super.call(this, []) || this;
    }
    CartBloc.prototype.initialEventWithState = function (event) {
        return __asyncGenerator(this, arguments, function initialEventWithState_2() {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = event.events;
                        switch (_a) {
                            case CarEvents.add: return [3 /*break*/, 1];
                        }
                        return [3 /*break*/, 4];
                    case 1:
                        this.state.push(event.car);
                        return [4 /*yield*/, __await(this.state)];
                    case 2: return [4 /*yield*/, _b.sent()];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return CartBloc;
}(bloc_1.Bloc));
exports.CartBloc = CartBloc;
(function main() {
    return __awaiter(this, void 0, void 0, function () {
        var carBloc, car;
        return __generator(this, function (_a) {
            carBloc = new CartBloc();
            car = new Car("tesla", "model s");
            carBloc.execute(new CarEvent(car, CarEvents.add));
            /*
            counterBloc.listen(data => {
                console.log("new state => ", data)
            })
            */
            carBloc.listen(function (data) {
                console.log("new car state => ", data);
            });
            return [2 /*return*/];
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
