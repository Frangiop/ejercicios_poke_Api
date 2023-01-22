
/* Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
 Recuerda que puedes usar la función .includes() para comprobarlo.Puedes usar este array: */


// en este ejercicio de repite un 40 u no logro sacarlo belen explcia un bucle al reves ....... 
//ESTE EJERCICIO ES similar , un ejemplo con varias personas y hay que ekiminar a las que son menores de edad, primero
// haciendo un bucle para ver donde estan los elementos que 
//queremos eliminar  y luego hacer otro bucle apara ir recorriendo esas posiciones y ir eliminado lo que hay en esas posiciones


const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

   // const DeleteGato=["gato"];

let eliminarGato=["gato"]
for(let i=0; i<toys.length; i++){
    const jugetes = toys[i];
    if(jugetes.name.includes("gato")){
        eliminarGato.push(i);  // hasta aqui en encotrado las posiciones : [ 'gato', 3, 4 ]
    }
}
console.log(eliminarGato);
         for(let posicion of eliminarGato){
                     // calcular la nueva posición del menor
           console.log('tendría que eliminar lo que haya en personas la posición '+posicion);
             toys.splice(posicion,1);
       }

console.log('Me han quedado estas personas');
console.log(toys);


// queremos dejar solo a las que sean mayores de edad

// primero busco a las menores de edad
/*
let posicionMenores = [];
for(let i=0; i<personas.length; i++){
    const persona = personas[i];
    if(persona.edad<18){
        posicionMenores.push(i);
    }
}
console.log(posicionMenores);

// ahora que tengo las posiciones, voy a ir eliminado lo que haya en esas posiciones
for(let i = posicionMenores.length-1; i>=0; i--){
    const posicion = posicionMenores[i]; // calcular la nueva posición del menor
    console.log('tendría que eliminar lo que haya en personas la posición '+posicion);
    personas.splice(posicion,1);
}

console.log('Me han quedado estas personas');
console.log(personas);







for ( let num of idsEliminar){
    console.log("eliminar elemnto con id " +num);
    let posicion ;
        for ( let i=0 ; i<placesToTravel.length;i++){ // priermo lo busco en el codigo
        const place = placesToTravel[i];
         if(place.id===num){
           posicion = i;
           }
        }
       console.log("eliminar elemento de la posicion " + posicion);     
       placesToTravel.splice(posicion,1);
    }
      console.log(placesToTravel);
        
   */



