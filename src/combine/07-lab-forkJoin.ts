import { forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

const GITHUB_API_URL = "https://api.github.com/users";
const GITHUB_USER = "orlandofloresti";

forkJoin({
	user: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
	repost: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`),
	gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`),
})
	.pipe(catchError((err) => of(err)))
	.subscribe(console.log);
