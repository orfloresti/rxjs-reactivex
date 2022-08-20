import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

// range(1,5).pipe(
//     map<number, string>( val => (val * 10).toString() )
// )
// .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
keyup$.subscribe(console.log);

/**
 * map must return somthing
 */
const keyupMap$ = keyup$.pipe(map((event) => event.code));
keyupMap$.subscribe((code) => console.log("map", code));

/**
 * pluck return just information if you already know the name
 */
const keyupPluck$ = keyup$.pipe(pluck("target", "baseURI"));
keyupPluck$.subscribe((code) => console.log("pluck", code));

/**
 * mapTo
 */
const keyupMapTo$ = keyup$.pipe(mapTo("tecla presionada"));
keyupMapTo$.subscribe((code) => console.log("mapTo", code));
