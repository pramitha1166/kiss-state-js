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
var bloc_1 = require("./bloc");
var CounterEvent = (function () {
    function CounterEvent() {
    }
    return CounterEvent;
}());
var IncrementEvent = (function (_super) {
    __extends(IncrementEvent, _super);
    function IncrementEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fNumber = 100;
        return _this;
    }
    return IncrementEvent;
}(CounterEvent));
var CounterBloc = (function (_super) {
    __extends(CounterBloc, _super);
    function CounterBloc() {
        return _super.call(this, 10) || this;
    }
    CounterBloc.prototype.increament = function () {
        return this.addNewState(this.state + 4);
    };
    CounterBloc.prototype.decreament = function () {
        return this.addNewState(this.state - 4);
    };
    return CounterBloc;
}(bloc_1.Bloc));
var bloc = new CounterBloc();
bloc.on(new IncrementEvent(), function (event) {
    return event.fNumber + 2;
});
bloc.call(IncrementEvent);
console.log(bloc.state);
//# sourceMappingURL=test.js.map