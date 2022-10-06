import { Bloc } from "./src/bloc";
import { BlocAction } from "./src/bloc-action";


export class CounterBloc extends Bloc<number> {

    action: BlocAction<number> = () => {
        this.value + 1;
    };

    public increament() {
        this.next(this.action);
    }

}

(async function main() {
    
    const bloc = new CounterBloc(0);
    bloc.increament();

    console.log(bloc.value)
    console.log("asd")

})();
