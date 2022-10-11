export enum State {
    loading,
    success,
    error
}

export class FTState {
    state: State = State.loading
    message: string = ""
    constructor(state: State, message: string) {
        this.state = state
        this.message = message
    }
}

export abstract class FundTransferState {}

export class FundTransferLoading extends FundTransferState {}

export class FundTransferSendState extends FundTransferState {
    status: string = "";
    constructor(status: string) {
        super()
        this.status =  status;
    }
}

export class FundTransferErrorState extends FundTransferState{
    error: string = ""
    constructor(error: string) {
        super()
        this.error = error;
    }
}