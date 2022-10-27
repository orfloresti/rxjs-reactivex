import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (sum: number, currentValue: number) => {
	return sum + currentValue;
};

const total = numbers.reduce(totalReducer, 0);

// console.log('total arr', total);

/**
 * Reduce accumulate value values and return just in the end
 *
 */
interval(500)
	.pipe(take(6), tap(console.log), reduce(totalReducer))
	.subscribe({
		next: (val) => console.log("next: ", val),
		complete: () => console.log("complete"),
	});
