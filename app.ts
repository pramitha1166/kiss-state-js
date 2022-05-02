import { Observable }  from 'rxjs';



let agents: Observable<String> = new Observable(
    function(observer) {
        try {
            observer.next("Ram");
            observer.next("Mark");
            observer.next("Sita");
        } catch(e) {
            observer.error(e);
        }
    }
);

agents.subscribe(data => console.log(data))

console.log("gfgf")