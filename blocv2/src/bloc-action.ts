import { Bloc } from "./bloc";

export type BlocAction<State> = (
    b: Bloc<State>,
    next: (s: State) => void,
  ) => void | Promise<void>;
  