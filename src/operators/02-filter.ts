import { from, fromEvent, range } from "rxjs";
import { filter, map } from "rxjs/operators";

range(20, 30).pipe(
  filter((val, i) => {
    console.log("index", i);
    return val % 2 === 1;
  })
); //.subscribe( console.log );

interface PersonajeInterface {
  tipo: string;
  nombre: string;
}
const personajes: PersonajeInterface[] = [
  { tipo: "heroe", nombre: "Batman" },
  { tipo: "heroe", nombre: "Robin" },
  { tipo: "villano", nombre: "Joker" },
];

from(personajes).pipe(
  filter((personaje: any) => {
    return personaje.tipo === "heroe";
  })
); // .subscribe( console.log );

/**
 * When condadenate pipes
 * the order is important
 */

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((event) => event.code),
  filter((key) => key === "Enter")
);

keyup$.subscribe(console.log);
