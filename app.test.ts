import { MyCounterBloc, CounterEvent } from './app'

/*
test('test cart block ', () => { 

    const cartBloc = CartBloc()



 })
 */

describe('app.ts', () => { 
    test('test block', () => { 

        const myCounterBloc = new MyCounterBloc()
        myCounterBloc.execute(CounterEvent.increament)
    
        myCounterBloc.listen(data=> {
            expect(data).toBe(1)
        })
    
    })
})

