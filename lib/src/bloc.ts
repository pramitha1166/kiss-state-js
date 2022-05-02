import { Observable, Subject } from 'rxjs';


export abstract class Bloc<Event, State> extends Observable<State> {


    private emitted: boolean = false;
    private stateSubject: Subject<State>;
    private eventSubject = new Subject<Event>();


    constructor(private _state: State) {
        super();
        this.stateSubject = new Subject();
    }




}