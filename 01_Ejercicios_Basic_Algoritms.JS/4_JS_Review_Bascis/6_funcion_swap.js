/*Crea una función llamada `swap()` que reciba un array y dos parametros que 
sean indices del array. La función deberá intercambiar la posición de los valores de
 los indices que hayamos enviado como parametro. Retorna el array resultante.
Sugerencia de array:  */

loco=['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap(array,i1,i2){
    const valor1 = array[i1]
    const valor2 = array[i2] 
    array [i1] = valor2
    array[i2] = valor1
    return array 
}

console.log(swap(loco,[0],[2]));
