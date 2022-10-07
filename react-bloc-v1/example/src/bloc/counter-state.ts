export abstract class CounterState {}

export class InitState extends CounterState {}

export class IncreamentState extends CounterState {
    public result : number;
    constructor(result: number) {
        super()
        this.result = result
    }
}