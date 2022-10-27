import { fromEvent, interval } from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";

const btn = document.createElement("button");
btn.innerHTML = "Stop timer";

document.querySelector("body").append(btn);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent( btn, 'click');
const clickBtn$ = fromEvent(btn, "click").pipe(
	tap(() => console.log("Before skip")),
	skip(1),
	tap(() => console.log("After skip"))
);

counter$.pipe(takeUntil(clickBtn$)).subscribe({
	next: (val) => console.log("next", val),
	complete: () => console.log("complete"),
});
