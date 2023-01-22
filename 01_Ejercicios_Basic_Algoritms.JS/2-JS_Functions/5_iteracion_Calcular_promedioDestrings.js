
// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y 
// de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu funcion 


const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function sumAll(listNumber) {
    let sumAll = 0;
    for(let i=0;i< listNumber.length;i++){
        if( typeof listNumber[i]  == 'number'){
            sumAll = listNumber[i] + sumAll;
     } 
     else if( typeof listNumber[i] == 'string' ) { 
        sumAll = sumAll + listNumber[i].length;  
       }
       console.log(sumAll);
       console.log("- - - ");
    }
    console.log(sumAll);
}
sumAll(mixedElements);