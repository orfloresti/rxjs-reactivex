import { of } from "rxjs";

const obs$ = of(
	[1, 2],
	{ a: 1, b: 2 },
	function () {},
	true,
	Promise.resolve(true)
);

console.log("Inicio del obs$");
obs$.subscribe(
	(next) => console.log("[NEXT] ", next),
	null,
	() => console.log("Terminamos la secuencia")
);
