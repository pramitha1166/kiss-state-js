import { BlocAction } from "./bloc-action";

export interface BlocActionWrapper<State> {
    action: BlocAction<State>;
    resolve: () => void;
}
