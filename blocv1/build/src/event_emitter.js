"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypedEvent = void 0;
/// 
var TypedEvent = /** @class */ (function () {
    function TypedEvent() {
        var _this = this;
        /// 
        this.listners = [];
        /// 
        this.on = function (listener) {
            _this.listners.push(listener);
            console.log(listener.toString());
            //this.off(listener)
            // return {
            //     dispose: () => this.off(listener)
            // }
        };
        this.off = function (listner) {
            var callbackIndex = _this.listners.indexOf(listner);
            console.log("dispose");
            if (callbackIndex > -1) {
                _this.listners.splice(callbackIndex, 1);
            }
        };
        this.emit = function (event) {
            var state;
            console.log(_this.listners.toString());
            _this.listners.forEach(function (listener) {
                state = listener(event);
            });
            return state;
        };
    }
    return TypedEvent;
}());
exports.TypedEvent = TypedEvent;
