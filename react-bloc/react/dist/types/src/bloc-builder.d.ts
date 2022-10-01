import { Bloc } from 'kiss-state-js';
import * as React from 'react';
export declare type BlocBuilderCondition<S> = (previousState: S, currentState: S) => boolean;
export declare type BlocElementBuilder<State> = (state: State) => JSX.Element;
export declare type BlocBuilderProps<B extends Bloc<any, State>, State> = {
    bloc: B;
    builder: BlocElementBuilder<State>;
};
export declare type BlocStateType<State> = {
    blocState: State;
};
export declare class BlocBuilder<B extends Bloc<any, State>, State> extends React.Component<BlocBuilderProps<B, State>, BlocStateType<State>> {
    private bloc;
    private builder;
    private subscription;
    constructor(props: BlocBuilderProps<B, State>);
    private subscribe;
    private unsubscribe;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
