// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

function sumAll(param) {
    let sumAll = 0;
    for(let i=0;i< param.length;i++){
       sumAll = sumAll + param[i]/param.length;        
    }
    console.log(sumAll);
}
sumAll(numbers);
