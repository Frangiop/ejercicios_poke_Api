/* Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos
 los sonidos favoritos que tienen los usuarios. */

 const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]



let contadorSonidos= 0;
let sumaVolumen = 0;

for (let usuario of users) {
   // console.log(usuario.name);
     for ( let sound in usuario.favoritesSounds ){
        console.log(sound);
         // console.log( usuario.favoritesSounds[sound]); //  obtenemos el v alor de cada propiedad 
          sumaVolumen +=  usuario.favoritesSounds[sound].volume   //  sumaVolumen = sumaVolumen + usuario.favoritesSounds[sound].volume  , esta se la sumatorio que por cada iterracion sse va sumanbdo eñ volumen en nuestra var sumaVolumen
          contadorSonidos++; // contador : contamos las veces que s ehace el bucle que en este caso es cyuantas veces hemos recorrido in osnido 4 usuairo x 3 sonindos 
          
        }
     console.log("- - - ")
}
console.log(sumaVolumen)
console.log(contadorSonidos)
console.log(sumaVolumen/contadorSonidos)
