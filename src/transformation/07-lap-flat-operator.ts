import { fromEvent, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
	catchError,
	exhaustMap,
	map,
	mergeMap,
	pluck,
	switchMap,
	tap,
} from "rxjs/operators";

//helper
const httpLoggin = (userPass) =>
	ajax.post("https://reqres.in/api/login?delay=1", userPass).pipe(
		pluck("response", "token"),
		catchError((err) => of("error"))
	);

// new form
const form = document.createElement("form");
const inputEmail = document.createElement("input");
const inputPass = document.createElement("input");
const submitBtn = document.createElement("button");

// config
inputEmail.type = "email";
inputEmail.placeholder = "Email";
inputEmail.value = "eve.holt@reqres.in";

inputPass.type = "password";
inputPass.placeholder = "Password";
inputPass.value = "cityslicka";

submitBtn.innerHTML = "Submit";

form.append(inputEmail, inputPass, submitBtn);

document.querySelector("body").append(form);

// streams
const submitForm$ = fromEvent<Event>(form, "submit").pipe(
	tap((ev) => ev.preventDefault()),
	map((ev) => ({
		email: ev.target[0].value,
		password: ev.target[0].value,
	})),
	//mergeMap(httpLoggin)
	//switchMap(httpLoggin)
	exhaustMap(httpLoggin)
);

submitForm$.subscribe((token) => {
	console.log(token);
});
