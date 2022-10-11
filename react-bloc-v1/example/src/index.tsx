//import logo from './logo.svg';
import './App.css';
import React from 'react'
import ReactDOM from 'react-dom';
import {BlocBuilder} from 'kiss-js-bloc-react'
import { Bloc } from "kiss-js-bloc";
import CounterBloc from './bloc/counter-bloc'
import { DecreamentEvent, IncreamentEvent } from './bloc/counter-event';
import { FundTransferBloc } from './bloc/fund_transfer/fund-transfer-bloc';
import { FTState, FundTransferErrorState, FundTransferLoading } from './bloc/fund_transfer/fund-transfer-state';
import { FundTransferSendEvent } from './bloc/fund_transfer/fund-transfet-event';


const App: React.FC = () => {

    const bloc = new CounterBloc()
    bloc.on<DecreamentEvent>(new DecreamentEvent(), (val) => {
        return bloc.state + val.decreamentVal - 1;
    })
    bloc.on<IncreamentEvent>(new IncreamentEvent(), (val) => {
        return bloc.state + 1;
    })

    const ftBloc = new FundTransferBloc()

    //ftBloc.call(new FundTransferSendEvent("0"))

    return (
        <div>
            <BlocBuilder bloc={bloc} builder={(state: number) => {
                return <p>{state}</p>
            }} />
            <button onClick={() => bloc.call(IncreamentEvent)}>Plus</button>
            <button onClick={() => bloc.call(DecreamentEvent)}>Minus</button>
            <BlocBuilder bloc={ftBloc} builder={(state: FTState) => {
                // if(state==new FundTransferLoading()) {
                //     return <p>Loading...</p>
                // }
                // if(state == new FundTransferErrorState()) {
                //     return <p>Error...</p>
                // } 
                return <p>{state.message}</p>
            }} />
            <p>Amount: 5000</p>
            <button onClick={() => ftBloc.call(new FundTransferSendEvent("1000"))}>Send Amount</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
