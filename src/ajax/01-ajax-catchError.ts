import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError, map, pluck } from "rxjs/operators";

const url = "https://api.github.com/users?per_page=5";

const handleErrors = (response: Response) => {
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	return response;
};

const handlerErrorRxjs = (err: AjaxError) => {
	console.warn("error: ", err.message);
	return of([]);
};

// const fetchPromise = fetch(url);

// fetchPromise
//   .then((resp) => resp.json())
//   .then((data) => console.log("data: ", data))
//   .catch((err) => console.warn("error: ", err));

// fetchPromise
// 	.then(handleErrors)
// 	.then((resp) => resp.json())
// 	.then((data) => console.log("data: ", data))
// 	.catch((err) => console.warn("error: ", err));

ajax(url)
	.pipe(pluck("response"), catchError(handlerErrorRxjs))
	.subscribe((users) => console.log("usuarios:", users));
