/* Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. 
 Puedes usar este array para probar tu función:  */
 // el nº de veces que se repita estos es i ++
 const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'

];
	    
function repeatCounter (ListadoPalabras)  { 
  const contadorRepeticiones = []; // el array será un diccioen vacia que iremos rellenando
      for ( let i=0; i<ListadoPalabras.length; i++) { 
       const palabraActual = ListadoPalabras[i]; // tiene el valor de cada iteracion 
       
         if (contadorRepeticiones[palabraActual] === undefined ){    // si la palabra no la habíamos  encontrado aun , ponemos un 1 
          contadorRepeticiones[palabraActual] = 1             //  aquie ya pone code = 1 , el la primera vuuelta asi paras cont todas hgasta la primera que se repite
         } 
         else {
           contadorRepeticiones[palabraActual]++;   // si ya la hemos eocntrado antes , le sumamos 1 al contadorRepeteiciones
         }
      }
      console.log(contadorRepeticiones);
     }
    
   
 repeatCounter(counterWords)
 