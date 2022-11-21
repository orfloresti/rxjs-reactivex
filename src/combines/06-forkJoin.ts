import { forkJoin, interval, of } from "rxjs";
import { delay, take } from "rxjs/operators";

const numbers$ = of(1, 2, 3, 4);
const interval$ = interval(1000).pipe(take(3));
const letters$ = of("a", "b", "c").pipe(delay(3500));

// forkJoin([numeros$, interval$, letters$]).subscribe(console.log);

// forkJoin([numbers$, interval$, letters$]).subscribe((resp) => {
// 	console.log("numbers: ", resp[0]),
// 		console.log("interval: ", resp[1]),
// 		console.log("letters: ", resp[2]);
// });

forkJoin({ numbers$, interval$, letters$ }).subscribe(console.log);
