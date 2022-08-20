import { of, from } from "rxjs";
import fetch from "node-fetch";

/*
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */

const observer = {
  next: (val: any) => console.log("NEXT: ", val),
  complete: () => console.log("COMPLETE"),
};

const myGenerator = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  yield 6;
};

const myIterable = myGenerator();

from(myIterable).subscribe(observer);

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = from("String");

const source$ = from(fetch("https://api.github.com/users/orlandofloresti"));

// source$.subscribe(async (resp) => {
//     console.log(resp);
//     const dataResp = await resp.json();
//     console.log(dataResp);
// });
