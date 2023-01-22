/*5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18*/
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]; 

var newAges = ages.filter(element=> element > 18);
console.log(newAges)
console.log(":..")

//ECMAScript 5 on funcion 
var newAges1 = ages.filter(function(element2) {
	 return element2 >18})

	 console.log(newAges1)
console.log("...")


/*5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par. */
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
console.log("par")
let otherAge = ages2.filter(pares => pares % 2==0)
console.log(otherAge)


/*5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'.*/
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
]

var streamPeople = streamers.filter(function (league) {  
    return league.gameMorePlayed === "League of Legends";});
    console.log(streamPeople);

    // arrow
console.log("arrow")
const arrowStream = streamers.filter(arrowpeople => arrowpeople.gameMorePlayed === "League of Legends");
console.log(arrowStream)

console.log("streamers")
// con funcion 
let newStreamers = streamers.filter((streamleague ) => {
    if (streamleague.gameMorePlayed == "League of Legends" ){
        return true;
    }
    else{
        return false;
    }
});
console.log(newStreamers)




/*5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación.*/

const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const tienesU = streamers2.filter(dame => dame.name.includes('u') )
console.log(tienesU)



/*5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35.*/


const tienesDos = streamers2.filter(
    dame2 =>dame2.gameMorePlayed.includes('Legends') )
  


for (let i = 0; i<streamers2.length;i++) {
     if( streamers2[i].age > 35 ){
		//console.log(streamers2[i].age)
		streamers2[i].gameMorePlayed = streamers2[i].gameMorePlayed.toUpperCase()
	 }

}
console.log(tienesDos)


/*5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.*/
const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

/* EN CONSOLA */
const handleChange = () => {
 
	const filteredStreamers = streamers3.filter((streamer) =>
	  streamer.name.toLowerCase().includes(input$$.value.toLowerCase())
	);
  
  
	console.log(filteredStreamers);
  };
  
  const input$$ = document.querySelector('[data-function="toFilterStreamers"]');
  
  input$$.addEventListener("input", handleChange);
  

/* también lo hice para que aparezca en pantalla  como la pokeAPI


const myListaContainer = document.getElementById("div");
console.log(myListaContainer);

const  showJugador = (jugadores) => {
	myListaContainer.innerHTML =" ";
for ( const jugador of jugadores ){
         
const myLi =  document.createElement('li')    
myLi.innerText = jugador.name
myListaContainer.appendChild(myLi)
   }
}
const drawJugador = (jugadores) => {   
    const input$$ = document.querySelector("input");  
    input$$.addEventListener("input", ()=> 
      searchJugadores(input$$.value, jugadores)  
    );
  };
searchJugadores = (filtro, jugadores) => { 
    let filteredJUgadores  = jugadores.filter((jugador) => 
    jugador.name.toLowerCase().includes(filtro.toLowerCase())  
    ); 
    showJugador(filteredJUgadores);
  };
 // showJugador()
  drawJugador(streamers3)
  //searchJugadores()
  
*/ 

/*5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.*/

const streamers4 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

// aquie pasando el evento al botón --


const handleChange2 = () => {
 
	const filteredStreamers = streamers4.filter((streamer) =>
	  streamer.name.toLowerCase().includes(input2$$.value.toLowerCase())
	);
  
  
	console.log(filteredStreamers);
  };
  
  const input2$$ = document.querySelector('input');
  
  const button =document.querySelector('button').addEventListener("click", handleChange2);
  
