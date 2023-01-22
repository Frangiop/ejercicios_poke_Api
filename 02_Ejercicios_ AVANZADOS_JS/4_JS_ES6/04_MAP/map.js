
/*4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map(). */ 
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];


const userName = users.map(user => user.name);
console.log(userName); 



/*4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'. */
const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

// PRIMERO CON UN BUCLE

for ( let i=0; i < users.length;i++){
    const user = users[i];
    if ( user.name[0] === 'A' ) { // includes "A " o bien  ==='A'
         user.name = "Anacleto"
}
 }
 console.log(users);
// ahora con MAP 
 
const modifiedUsers = users2.map((user) =>{
    if (user.name[0] ==='A'){ 
      user.name = "Anacleto" 
    }     
    return user.name  
 } ) 

 console.log(modifiedUsers)


/* 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true. */
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];


const citie = cities.map((citiesDeCities) => {
    if ( citiesDeCities.isVisited === true ){
      citiesDeCities.name = citiesDeCities.name + ' ,visited ' 
       
    }
    return citiesDeCities.name
});
console.log(citie)

