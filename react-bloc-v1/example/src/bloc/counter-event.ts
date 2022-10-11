export class CounterEvent {}

export class IncreamentEvent extends CounterEvent {
    public increamentVal : number = 0;
}

export class DecreamentEvent extends CounterEvent {
    public decreamentVal : number = 1000;
}