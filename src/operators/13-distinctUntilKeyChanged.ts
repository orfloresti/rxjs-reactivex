import { from, of } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

interface User {
    name: string;
}

const users: User[] = [
    { name: 'Megaman' },
    { name: 'Megaman' },
    { name: 'Zero' },
    { name: 'Megaman' },
    { name: 'X' },
    { name: 'Megaman' },
    { name: 'Zero' }
]

from(users)
    .pipe(
        distinctUntilKeyChanged( 'name' )
    )
    .subscribe(console.log)