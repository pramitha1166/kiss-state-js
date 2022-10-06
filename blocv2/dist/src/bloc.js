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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bloc = void 0;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var getObservableFromAction = function (b) { return function (_a) {
    var action = _a.action, resolve = _a.resolve;
    return new rxjs_1.Observable(function (subscribe) {
        Promise.resolve(action(b, function (next) { return subscribe.next({ next: next, resolve: resolve }); }))
            .catch(function (err) { return subscribe.error(err); });
    });
}; };
var Bloc = (function (_super) {
    __extends(Bloc, _super);
    function Bloc(initialState) {
        var _this = _super.call(this) || this;
        _this._actions = new rxjs_1.Subject();
        _this.next = function (action) {
            return new Promise(function (resolve) {
                _this._actions.next({ action: action, resolve: resolve });
            });
        };
        _this._state = new rxjs_1.BehaviorSubject(initialState);
        _this.transformActionsToObservable(_this._actions)
            .pipe((0, operators_1.concatMap)(getObservableFromAction(_this)))
            .subscribe(function (_a) {
            var next = _a.next, resolve = _a.resolve;
            _this._state.next(next);
            resolve();
        }, function (err) { return _this._state.error(err); });
        return _this;
    }
    Bloc.prototype.transformActionsToObservable = function (input) {
        return input;
    };
    Object.defineProperty(Bloc.prototype, "value", {
        get: function () {
            return this._state.value;
        },
        enumerable: false,
        configurable: true
    });
    return Bloc;
}(rxjs_1.Observable));
exports.Bloc = Bloc;
//# sourceMappingURL=bloc.js.map