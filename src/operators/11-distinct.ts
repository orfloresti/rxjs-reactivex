import { from, of } from "rxjs";
import { distinct } from "rxjs/operators";

const numb$ = of(1, 1, 1, 1, 2, 3, 3, 3, 4, 4, 5, 1, 3);
numb$
    .pipe(
        distinct()
    )
    .subscribe( console.log );

interface User {
    name: string;
}

const users: User[] = [
    { name: 'Megaman' },
    { name: 'X' },
    { name: 'Zero' },
    { name: 'Megaman' },
    { name: 'X' },
    { name: 'Megaman' },
    { name: 'Zero' }
]

from(users)
    .pipe(
        distinct( p => p.name )
    )
    .subscribe(console.log)