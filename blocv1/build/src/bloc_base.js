"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlocBase = void 0;
var rxjs_1 = require("rxjs");
var BlocBase = /** @class */ (function () {
    function BlocBase(initialState) {
        //_emitted: boolean;
        this._stateController = new rxjs_1.Subject;
        this._state = initialState;
        this.emit(initialState);
        var observer = {
            next: function (value) {
                console.log("State emited ", value);
            },
            error: function (error) {
                console.log(error);
            },
            completed: function () {
            },
        };
        this._stateController.subscribe(observer);
    }
    Object.defineProperty(BlocBase.prototype, "stream", {
        //eventController = new Subject<Event>;
        get: function () {
            return this._stateController;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(BlocBase.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    BlocBase.prototype.addError = function (error) {
        throw new Error('Method not implemented.');
    };
    BlocBase.prototype.close = function () {
        throw new Error('Method not implemented.');
    };
    BlocBase.prototype.emit = function (state) {
        this._state = state;
        this._stateController.next(state);
    };
    return BlocBase;
}());
exports.BlocBase = BlocBase;
