/*import { Bloc } from '../bloc'
import * as React from 'react'
import { Subscription } from 'rxjs'

export type BlocBuilderCondition<S> =(previousState: S, currentState: S) => boolean
export type BlocElementBuilder<State> = (state: State) => JSX.Element

export type BlocBuilderProps<B extends Bloc<any, State>, State> = {
    bloc: B,
    builder: BlocElementBuilder<State>,
    
}

export type BlocStateType<State> = {
    blocState: State
}

export class BlocBuilder<B extends Bloc<any, State>, State> extends React.Component<BlocBuilderProps<B, State>, BlocStateType<State>> {

    private bloc: B;
    private builder: BlocElementBuilder<State>
    private subscription: Subscription

    constructor(props: BlocBuilderProps<B, State>) {
        super(props)
        this.bloc = props.bloc
        this.builder = props.builder
        this.state = {
            blocState : this.bloc.state
        }
        this.subscription = Subscription.EMPTY
    }


    private subscribe(): void {
        this.subscription = this.bloc.listen((state: State) => {
            this.setState({blocState: state})
        })
    }

    private unsubscribe(): void {
        this.subscription.unsubscribe()
    }

    componentDidMount(): void {
        this.subscribe()
    }


    componentWillUnmount(): void {
        this.unsubscribe()
    }

    render(): JSX.Element {
        return this.builder(this.state.blocState);
    }



}*/