/* Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
 Recuerda que puedes usar la función 
.includes() para comprobarlo.Puedes usar este array: */
// se podria hacer por in for of y luego un for normal 

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
    
    let eliminarGato=[];
    for(let i=0; i<toys.length; i++){
        const jugetes = toys[i];
        if(jugetes.name.includes("gato")){  //  o bien if(toy[i].name.inclues("gato")  y no creamos variable)
            eliminarGato.push(i);  // hasta aqui en encotrado las posiciones : [ 'gato', 3, 4 ]
        }
    }
    console.log(eliminarGato);

             for(let i = eliminarGato.length-1; i>=0; i--){
             const posicion = eliminarGato[i]; // calcular la nueva posición del menor
               console.log('tendría que eliminar lo que haya en personas la posición '+posicion);
                 toys.splice(posicion,1);
           }
    
    console.log('Me han quedado estas juguetes');
    console.log(toys);
    

    
/*  OTRA FORMA 
 
let NewToy=[];
for ( const toy of toys){
    if (!toy.name.includes("gato")){
        newToys.push(toy)
    }
}
console.log(newToys)
*/








