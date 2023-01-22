/* Crea una función que reciba por parámetro , un array y el valor que desea comprobar que existe dentro de dicho array ( array,param)-comprueba
 si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.
Puedes usar este array para probar tu función:  */

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
 

const buscador = (array,param)=> {
    for ( let i=0 ;i< array.length;i++){
           let  element = array[i];
         if (element=== param) {
                console.log(true,i);                
         } 
       
         }
           if(!array.includes(param)){   
                console.log(false);
           }
    }
 
    buscador(nameFinder,"Steve");    
 
 
 
 
 
 



