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
var CounterEvent = /** @class */ (function () {
    function CounterEvent() {
    }
    return CounterEvent;
}());
var IncrementEvent = /** @class */ (function (_super) {
    __extends(IncrementEvent, _super);
    function IncrementEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fNumber = 10;
        return _this;
    }
    return IncrementEvent;
}(CounterEvent));
var DecreamentEvent = /** @class */ (function (_super) {
    __extends(DecreamentEvent, _super);
    function DecreamentEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fNumber = 10;
        return _this;
    }
    return DecreamentEvent;
}(CounterEvent));
var CounterBloc = /** @class */ (function (_super) {
    __extends(CounterBloc, _super);
    function CounterBloc() {
        return _super.call(this, 0) || this;
    }
    CounterBloc.prototype.increament = function () {
        return this.addNewState(this.state + 4);
    };
    CounterBloc.prototype.decreament = function () {
        return this.addNewState(this.state - 4);
    };
    return CounterBloc;
}(bloc_1.Bloc));
// increamentE(val: number) {
// }
var bloc = new CounterBloc();
// bloc.on<IncrementEvent>(new IncrementEvent(), (event) => {
//     return event.fNumber + 10;
// });
// bloc.call(IncrementEvent)
// console.log(bloc.state);
bloc.on(new IncrementEvent(), function (event) {
    //bloc.state + 
    console.log("state when adding event " + bloc.state);
    return bloc.state + 1;
});
bloc.on(new DecreamentEvent(), function (event) {
    return bloc.state - 1;
});
//bloc.increament()
//bloc.decreament()
bloc.call(IncrementEvent);
bloc.call(DecreamentEvent);
console.log(bloc.state);
