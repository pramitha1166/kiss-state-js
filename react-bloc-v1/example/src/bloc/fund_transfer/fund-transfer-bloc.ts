import { Bloc } from "kiss-js-bloc";
import { FTState, FundTransferErrorState, FundTransferLoading, FundTransferSendState, FundTransferState, State } from "./fund-transfer-state";
import { FundTransferEvent, FundTransferSendEvent } from "./fund-transfet-event";

export class FundTransferBloc extends Bloc<FundTransferEvent, FTState> {
    constructor() {
        super(new FTState(State.loading, "loading"))
        this.on<FundTransferSendEvent>(new FundTransferSendEvent(""), (event) => {
            //this.emit(new FTState(State.loading, "loading"))
            setTimeout(() => {
                this.emit(new FTState(State.success, "amount sended " + event.amount))
            }, 1000)
            return new FTState(State.success, "sending " + event.amount)
            //return new FTState(State.error, "error")
            
        })
    }
} 