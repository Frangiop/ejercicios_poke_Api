/*Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y 
un texto y devuelve la posición del array cuando el valor del array sea
 igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.*/


const loco = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']


function findArray(array,text) {
for (let i=0; i< array.length;i++){
  if(array[i]==text){
   // return i 
    return "la posicion es  : " + i + " " + "y el texto para esa psocion es : " +array[i]
}

 }
 
  }

console.log(findArray(loco,'Ajolote'))
console.log(findArray(loco,'Mosquito'))