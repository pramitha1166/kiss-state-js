// import { Subject, map } from "rxjs";
// interface EmiiterBase<Event, Handler, State> {
//     listen(event: Event, handler: Handler) : void;
//     call(event: Event, state: State): void;
//     dispose(): void;
// }
// export class Emitter<Event, State, Handler> implements EmiiterBase<Event, Handler, State> {
//     constructor() {
//          this.events = new Subject<Event>();
//     }
//     private events : Subject<Event>;
//     listen(event: Event, handle : Handler): void {
//         var observer = {
//             next: (value) => {
//             },
//             error: (error) => {
//             },
//             completed: () => {
//             }
//          }
//         this.events.pipe(map((value, index) => {
//             return handle()
//         })).subscribe(observer)
//     }
//     call(event, state): State {
//         return this.events[event].next(state)
//     }
//     dispose(): void {
//         throw new Error("Method not implemented.");
//     }
// }
// function Emitter() {
//     this.subjects = {}
// }
// Emitter.prototype.emit = (name, data) => {
// } 
