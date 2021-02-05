import { interval, timer } from "rxjs";

const observer = {
    next: (val: any) => console.log("NEXT: ", val),
    complete: () => console.log("COMPLETE"),
}

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

// const interval$ = interval(1000);
const timer$ = timer(hoyEn5);

console.log("Start");
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log("End");
