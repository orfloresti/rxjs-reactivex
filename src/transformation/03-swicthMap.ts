import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
	debounceTime,
	map,
	mergeAll,
	mergeMap,
	pluck,
	switchMap,
} from "rxjs/operators";
import {
	GithubUser,
	GithubUsersResp,
} from "../interfaces/github-users.interfaces";

// reference
const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");

body.append(textInput, orderList);

// helpers
const showUsers = (users: GithubUser[]) => {
	orderList.innerHTML = "";

	for (const user of users) {
		const li = document.createElement("li");
		const img = document.createElement("img");
		img.src = user.avatar_url;

		const anchor = document.createElement("a");
		anchor.href = user.html_url;
		anchor.text = "Open bio";
		anchor.target = "_blank";
		li.append(img);
		li.append(user.login + " ");
		li.append(anchor);

		orderList.append(li);
	}
};

const getUrl = (user) => `https://api.github.com/search/users?q=${user}`;

const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$.pipe(
	debounceTime<KeyboardEvent>(500),
	pluck<KeyboardEvent, string>("target", "value"),
	mergeMap<string, Observable<GithubUsersResp>>((text) =>
		ajax.getJSON(getUrl(text))
	),
	pluck<GithubUsersResp, GithubUser[]>("items")
);
// .subscribe((users) => {
// 	// console.log(users);
// 	showUsers(users);
// });

const url = "https://httpbin.org/delay/1?arg=";

input$
	.pipe(
		pluck("target", "value"),
		switchMap((texto) => ajax.getJSON(url + texto))
	)
	.subscribe(console.log);
