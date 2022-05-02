"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
let agents = new rxjs_1.Observable(function (observer) {
    try {
        observer.next("Ram");
        observer.next("Mark");
        observer.next("Sita");
    }
    catch (e) {
        observer.error(e);
    }
});
agents.subscribe(data => console.log(data));
console.log("gfgf");
//# sourceMappingURL=app.js.map