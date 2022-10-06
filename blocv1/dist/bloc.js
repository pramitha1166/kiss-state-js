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
var bloc_base_1 = require("./bloc_base");
var event_emitter_1 = require("./event_emitter");
var Bloc = (function (_super) {
    __extends(Bloc, _super);
    function Bloc(initialState) {
        var _this = _super.call(this, initialState) || this;
        _this.emitter = new event_emitter_1.TypedEvent();
        return _this;
    }
    Bloc.prototype.on = function (event, handler) {
        this.emitter.on(function () { return handler(event); });
    };
    Bloc.prototype.call = function (event) {
        this._state = this.emitter.emit(event);
    };
    Bloc.prototype.addNewState = function (state) {
        this.emit(state);
    };
    return Bloc;
}(bloc_base_1.BlocBase));
exports.Bloc = Bloc;
//# sourceMappingURL=bloc.js.map