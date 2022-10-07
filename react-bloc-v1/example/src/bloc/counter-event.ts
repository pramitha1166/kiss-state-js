export class CounterEvent {}

export class IncreamentEvent extends CounterEvent {
    public increamentVal : number;
    constructor(increamentVal : number) {
        super()
    }
}