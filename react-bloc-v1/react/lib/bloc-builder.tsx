import {Bloc} from 'kiss-js-bloc'
import { type } from 'os'
import * as React from 'react'

/// type for element builder
type BlocElementBuilder<State> = (state: State) => JSX.Element;

/// type for BlocBuilder 
type BlocBuilderProps<B extends Bloc<Event, State>, Event, State> = {
    bloc: B,
    builder: BlocElementBuilder<State>
}

type BlocStateType<State> = {
    blocState: State
}

//exposing bloc builder for the react 
export class BlocBuilder<B extends Bloc<Event, State>, Event, State> extends React.Component<BlocBuilderProps<B, Event, State>, BlocStateType<State>> {

    private bloc: B;
    private builder: BlocElementBuilder<State>

    constructor(props: BlocBuilderProps<B, Event, State>) {
        super(props)
        this.bloc = props.bloc
        this.builder = props.builder
        this.state = {
            blocState: this.bloc.state
        }
    }

    private subscribe(): void {
        this.setState({blocState:  this.bloc.state})
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