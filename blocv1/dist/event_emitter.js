"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypedEvent = void 0;
var TypedEvent = (function () {
    function TypedEvent() {
        var _this = this;
        this.listners = [];
        this.on = function (listener) {
            _this.listners.push(listener);
            return {
                dispose: function () { return _this.off(listener); }
            };
        };
        this.off = function (listner) {
            var callbackIndex = _this.listners.indexOf(listner);
            if (callbackIndex > -1) {
                _this.listners.splice(callbackIndex, 1);
            }
        };
        this.emit = function (event) {
            var state;
            _this.listners.forEach(function (listener) {
                state = listener(event);
            });
            return state;
        };
    }
    return TypedEvent;
}());
exports.TypedEvent = TypedEvent;
//# sourceMappingURL=event_emitter.js.map