import { Bloc } from 'kiss-js-bloc';
import * as React from 'react';
declare type BlocElementBuilder<State> = (state: State) => JSX.Element;
declare type BlocBuilderProps<B extends Bloc<any, State>, State> = {
    bloc: B;
    builder: BlocElementBuilder<State>;
};
declare type BlocStateType<State> = {
    blocState: State;
};
export declare class BlocBuilder<B extends Bloc<any, State>, State> extends React.Component<BlocBuilderProps<B, State>, BlocStateType<State>> {
    private bloc;
    private builder;
    constructor(props: BlocBuilderProps<B, State>);
    private subscribe;
    private unsubscribe;
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
