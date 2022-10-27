import { from, of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

const numb$ = of(1, 1, 1, 1, 2, 3, 3, 3, 4, 4, 5, 1, 3);
numb$.pipe(distinctUntilChanged()).subscribe(console.log);

interface User {
	name: string;
}

const users: User[] = [
	{ name: "Megaman" },
	{ name: "Megaman" },
	{ name: "Zero" },
	{ name: "Megaman" },
	{ name: "X" },
	{ name: "Megaman" },
	{ name: "Zero" },
];

from(users)
	.pipe(distinctUntilChanged((b, a) => b.name === a.name))
	.subscribe(console.log);
