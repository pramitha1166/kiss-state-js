"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlocObserver = void 0;
var BlocObserver = /** @class */ (function () {
    function BlocObserver() {
    }
    //to call whenever event adding
    BlocObserver.prototype.onEvent = function () {
    };
    //to call whenever error occured
    BlocObserver.prototype.onError = function () {
    };
    //to call whenever transition happen
    BlocObserver.prototype.onTransition = function () {
    };
    return BlocObserver;
}());
exports.BlocObserver = BlocObserver;
//# sourceMappingURL=bloc-observer.js.map