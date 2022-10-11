export abstract class FundTransferEvent {}
export class FundTransferSendEvent extends FundTransferEvent {
    amount: string = ""
    constructor(amount: string) {
        super()
        this.amount = amount
    }
}