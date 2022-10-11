import {Bloc} from 'kiss-js-bloc'
import { type } from 'os'
import * as React from 'react'

/// type for element builder
type BlocElementBuilder<State> = (state: State) => JSX.Element;

/// type for BlocBuilder 
type BlocBuilderProps<B extends Bloc<any,State>, State> = {
    bloc: B,
    builder: BlocElementBuilder<State>
}

type BlocStateType<State> = {
    blocState: State
}

//exposing bloc builder for the react 
export class BlocBuilder<B extends Bloc<any, State>, State> extends React.Component<BlocBuilderProps<B, State>, BlocStateType<State>> {

    private bloc: B;
    private builder: BlocElementBuilder<State>

    constructor(props: BlocBuilderProps<B, State>) {
        super(props)
        this.bloc = props.bloc
        this.builder = props.builder
        this.state = {
            blocState: this.bloc.state
        }
    }

    private subscribe(): void {
        this.bloc.stream.subscribe({next: (value: State) => {
            this.setState({blocState:  value})
        }})
        
    }

    private unsubscribe() : void {

    }

    componentDidMount(): void {
        this.subscribe()
    }

    render(): JSX.Element {
        return this.builder(this.state.blocState)
    }



}