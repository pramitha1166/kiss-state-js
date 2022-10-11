import { Bloc } from 'kiss-state-js';

enum FTEvent {
    ftLoading,
    ftSend
}

class FTState {
    state: string
    constructor(state: string) {
        this.state = state;
    }
}

// class FundTransferBloc extends Bloc<FTEvent, FTState> {
//     initialEventWithState(event: FTEvent): AsyncIterableIterator<FTState> {
//         switch(event) {
//             case FTEvent.ftLoading:
//                 yield  this.state
//                 break
//         }
//     }

// }