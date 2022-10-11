import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Bloc} from 'kiss-state-js'
import {BlocBuilder} from 'kiss-state-js-react'

enum CounterEvent {
  increment,
  decrement
}

class CounterBloc extends Bloc<CounterEvent, number> {

  initialEventWithState(event: CounterEvent): AsyncIterableIterator<number> {
    return this.mapEventToState(event);
  }

  constructor() {
    super(0)
  }

  async *mapEventToState(event: CounterEvent) {
    switch (event) {
      case CounterEvent.increment:
        //
        yield this.state + 1
        break
      case CounterEvent.decrement:
        yield this.state - 1
        break
    }
  }
}

const App: React.FC = () => {
  let bloc = new CounterBloc();
  return (
    <div className="App">
      <p>Counter</p>
      <BlocBuilder
        bloc={bloc}
        builder={(count: number) => {
          return <p>{count}</p>;
        }}
      />
      <button onClick={() => bloc.execute(CounterEvent.increment)}>Increase Counter</button>
      <button onClick={() => bloc.execute(CounterEvent.decrement)}>Decrement Counter</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));








