/*
Completa la función que tomando un array de strings como argumento devuelva el más largo, 
en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función:
*/

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function PalabraMasLarga(param) {
  let masLargo =param[0];   // let masLargo="0"
  for ( let i=0; i < param.length;i++) {
         if(param[i].length > masLargo.length){  // compara palabra masLarga // // como la variable masAlto guarda los numeros , pues se compara el numerp>con la variable que sabe cual de momento es el mas alto
               masLargo=param[i];    //este es el resultado de la linea de arriba, si  el numoer> ( es amyor) pues ese numoer pasa a la variable  "numero" y se guarda como el mas alto 
         }
         
    }

    console.log(masLargo);
    
 }

PalabraMasLarga(avengers);