"use strict";
exports.__esModule = true;
exports.Transition = void 0;
var Transition = /** @class */ (function () {
    function Transition(currentState, event, newState) {
        this.currentState = currentState;
        this.event = event;
        this.newState = newState;
    }
    return Transition;
}());
exports.Transition = Transition;
