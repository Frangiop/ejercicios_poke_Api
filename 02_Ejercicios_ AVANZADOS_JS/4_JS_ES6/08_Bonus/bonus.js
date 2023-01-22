
/*6.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando 
.filter() y usa .reduce() para conseguir la media de sus .score. 
La función .find() también podría ayudarte para encontrar el genero 'RPG' en el 
array .gender. */ 

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
]

// primer ofiltramos por gender


const findPRG = videogames.find(element => element.genders = 'RPG')
console.log(findPRG)

console.log("filter. primer paso............")

var games = videogames.filter(
    function (element) {  
      return element.genders.includes('RPG');
    }
  );
  console.log(games)

// AHORA NECEISTAMOS CREAR matriz con el score de cada videjuego // valores de cada  jeugo con RPG


console.log("map segundo paso............")
var gamescores = games.map(
    function (elemento) {  
          return elemento.score;
    } 
);

console.log(gamescores)

// usamos REDUCE par obtener el total

console.log("reduce  tercer paso............")

var totalgameScore = gamescores.reduce(
    function (acc, score) {  
      return acc + score;
    }, 0
  ); 

  console.log(totalgameScore);


  // ahora hacemos media
  console.log("MEDIA............")

  const socreMEDIO = totalgameScore/gamescores.length;
  console.log(socreMEDIO)