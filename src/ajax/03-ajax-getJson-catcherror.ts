import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

const url = "https://Ahttpbin.org/delay/1";

const handleError = (resp: AjaxError) => {
	console.warn("error", resp.message);
	return of({
		ok: false,
		usuarios: [],
	});
};

// const obs1$ = ajax.getJSON(url).pipe(
// 	catchError( handleError )
// );
// const obs2$ = ajax(url).pipe(
// 	catchError( handleError )
// );

const obs1$ = ajax.getJSON(url);
// const obs2$ = ajax(url);

obs1$.subscribe({
	next: (val) => console.log("next: ", val),
	error: (err) => console.warn("error", err),
	complete: () => console.log("complete"),
});
// obs2$.subscribe( data => console.log('ajax: ', data) )
