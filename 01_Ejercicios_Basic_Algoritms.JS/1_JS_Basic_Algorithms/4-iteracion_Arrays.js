
/* NOTA : el ejercicio 1.4 tuve que cnovertir en notas el apartado */ 

//1.1 Consigue el valor "HULK" del array de cars y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers[0]);


//1.2 Cambia el primer elemento de avengers a "IRONMAN"
//const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

avengers[0]="IRONMAN";
console.log(avengers);

//1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
//const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers.length);

//1.4 Añade 2 elementos al array: "Morty" y "Summer". 
//Muestra en consola el último personaje del array

const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.splice(3,0,"Morty" ,"Summer");

console.log(rickAndMortyCharacters2)
console.log(rickAndMortyCharacters2[4]);


//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.

/* ULITMO ELEMENTO : console.log(arr[arr.length - 1]) // escribe en consola 'este es el último elemento' */

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters);
console.log("el primer elemento es : " + rickAndMortyCharacters[0] + " y el último elemento es: " +   rickAndMortyCharacters[rickAndMortyCharacters.length -1]);



//1.6 Elimina el segundo elemento del array y muestra el array por consola.
//const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1,1);
 console.log(rickAndMortyCharacters);

 