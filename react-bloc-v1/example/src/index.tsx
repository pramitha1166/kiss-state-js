//import logo from './logo.svg';
import './App.css';
import React from 'react'
import ReactDOM from 'react-dom';
import {CounterBloc} from './bloc/counter-bloc'
import {BlocBuilder} from 'kiss-js-bloc-react'

const App: React.FC = () => {

    const bloc = new CounterBloc()

    return (
        <div>
            <BlocBuilder bloc={bloc} builder={(state: number) => {
                return <p>{state}</p>
            }} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
