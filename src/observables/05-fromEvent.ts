import { fromEvent } from "rxjs";

/*
 * Form DOM Events
 */

const src1$ = fromEvent<MouseEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
  next: (val: any) => console.log("[NEXT]", val),
};

src1$.subscribe(({ x, y }) => {
  console.log(x, y);
});

src2$.subscribe((evnt) => {
  console.log(evnt);
});
