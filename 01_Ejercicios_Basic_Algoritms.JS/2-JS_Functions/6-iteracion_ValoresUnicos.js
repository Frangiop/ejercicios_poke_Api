/* Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
en caso que existan los elimina para retornar un array sin los elementos duplicados. 
Puedes usar este array para probar tu función:  */


 'use strict'

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];



  function removeDuplicates(duplicates){
    const elementosNoDuplicados = [];
    for(let i=0 ;i<duplicates.length;i++){                     // si no está repietid ( ! negacion) , pasa a añadirse con el push al nuevo array creado , si es reptido pues no se Hace el push
       if ( !elementosNoDuplicados.includes(duplicates[i]) ){  // vamos aladiendo cada elelnto nuevo que va recorriendo, excepto aquellos que vayan siendo repetidos que se hayan añadido antes.
          elementosNoDuplicados.push(duplicates[i])
       }
  
    }
   return  elementosNoDuplicados ;  // retorna array ,debajo de esto no se ejecuta nada mas 
 
   }
  
   console.log(removeDuplicates(duplicates))

