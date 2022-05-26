"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
/*
test('test cart block ', () => {

    const cartBloc = CartBloc()



 })
 */
describe('app.ts', () => {
    test('test block', () => {
        const myCounterBloc = new app_1.MyCounterBloc();
        myCounterBloc.execute("INCREAMENT" /* increament */);
        myCounterBloc.listen(data => {
            expect(data).toBe(1);
        });
    });
});
//# sourceMappingURL=app.test.js.map