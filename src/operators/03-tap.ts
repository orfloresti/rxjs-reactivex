import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

const numeros$ = range(1, 5);

numeros$
  .pipe(
    tap((x) => console.log("before", x)),
    map((val) => val * 10),
    tap({
      next: (valor) => console.log("after", valor),
      complete: () => console.log("Se termino"),
    })
  )
  .subscribe((val) => console.log("sub", val));
