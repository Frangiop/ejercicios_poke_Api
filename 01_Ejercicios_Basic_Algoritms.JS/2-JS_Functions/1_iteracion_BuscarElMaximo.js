// Completa la función que tomando dos números como argumento devuelva el más alto.


function sum(numberOne , numberTwo) {
    if (numberOne>numberTwo){
        return numberOne;
    }
        else return numberTwo;
  }



 console.log(sum(7,4));
 console.log(sum(8,8));
 console.log(sum(4,10 ));

let numeroMayor = sum(2,1);
let numeroMayor2 = sum(3,7);
let numeroMayor3 = sum(10,7);
console.log(numeroMayor,"es el numero mayor");
console.log(numeroMayor2,"es el numero mayor");
console.log(numeroMayor3,"es el numero mayor");



// otra forma : cona VARIALBE VACIA

/*

function sum( numberOne , numberTwo){
let masAlto;
if(numberOne>=numberTwo){
    masAlto = numberOne;
}
else {
       masAlto = numberTwo
}
return masAlto;
}


*/