import { from } from "rxjs";
import { map, reduce, scan } from "rxjs/operators";


const numbers = [1, 2, 3, 4, 5]

// const totalAccomulate = (acc, cur) => {
//     return acc + cur;
// }

const totalAccomulate = (acc, cur) => acc + cur;

// Reduce
from(numbers).pipe(
    reduce(totalAccomulate, 0)
)
    .subscribe(console.log);

/**
 * Scan accumulate but return the values
 */

from(numbers).pipe(
    scan(totalAccomulate, 0)
)
    .subscribe(console.log);

// Redux
interface User {
    id?: string,
    auth?: boolean,
    token?: string,
    edad?: number,
}
const user: User[] = [
    { id: 'fher', auth: false, token: null  },
    { id: 'fher', auth: true, token: 'ABC'  },
    { id: 'fher', auth: true, token: 'ABC123'  },
]

const state$ = from (user).pipe(
    scan<User>( (acc, curr) => {
        return {...acc, ...curr}
    }, {edad: 33})
);

const id$ = state$.pipe(
    map( ( state:User ) => state.id )
)

id$.subscribe(console.log);