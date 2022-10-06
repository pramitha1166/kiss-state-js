import {from} from 'rxjs'

const list: any = new Array();

console.log("sdd")

class List {
    add(element: any) {
        console.log(element)
        list.push(element)
    }
    get(i: number) {
        return list[i];
    }
}


// async function asynFunc(list: List): Promise<List> {
//      await list.add("hello");
// }

function* listIterator(list: any) {
    for (let i = 0; i < list.size; i++) {
        yield list.get(i);
    }
}
const myList = new List();
myList.add(1);
myList.add(3);

from(listIterator(myList))
    .subscribe((i: any) => {

        console.log(i)
    });



