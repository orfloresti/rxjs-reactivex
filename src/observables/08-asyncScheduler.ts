import { asyncScheduler } from "rxjs";

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log("Hello world");
const saludar2 = (nombre: any) => console.log(`Hello ${nombre}`);

// As setTimeout
// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule(saludar2, 2000, "RxJs in typescript");

// As setInterval
const subs = asyncScheduler.schedule(
  function (state: any) {
    console.log("state", state);
    this.schedule(state + 1, 1000);
  },
  3000,
  0
);

// setTimeout(() => { subs.unsubscribe(); }, 6000)

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
