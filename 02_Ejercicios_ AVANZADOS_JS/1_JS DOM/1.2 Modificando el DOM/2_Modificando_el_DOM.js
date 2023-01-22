'use strict'
//2.1 Inserta dinamicamente en un html un div vacio con javascript.
   let newDiv = document.createElement('div');
   //var Newp= document.createElement('span')
   //newDiv.appendChild(Newp)
   document.body.append(newDiv); 
  

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
      
    let anotherDIV = document.createElement('div')
    let parrafo = document.createElement('p')
    anotherDIV.appendChild(parrafo)
    document.body.append(anotherDIV)
//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
  
   let newDiv2 = document.createElement('div');
   //document.body.append(newDiv2)  
  
   for ( let i = 0 ; i < 6 ;i++){
      var  parrafo2 = document.createElement('p');
      newDiv2.append(parrafo2);
  }  
    document.body.append(newDiv2)


//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
//  var newDiv ...
    let newParrafo = document.createElement('p');
    newParrafo.innerHTML= "Hola que tal ?"
    document.body.append(newParrafo);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
   
let insertHere = document.querySelector('.fn-insert-here');
insertHere.textContent = "Wubba Lubba dub dub"; // insertHere.innerHTML = "Wubba Lubba dub dub"; // 


//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

    const lista = document.createElement("ul"); // queda afuera del bulce solo necesitamos una

    for (let i=0; i <apps.length;i++){
        var listItem = document.createElement("li");
        listItem.innerText = apps[i]; 
        lista.append(listItem); 
    }
    document.body.append(lista); 




//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me   // es un array 
    // BUCLE 
    let fnRemoveMe = document.querySelectorAll('.fn-remove-me');
    for ( let i = 0; i < fnRemoveMe.length; i++) { 
        //console.log(fnRemoveMe[i]);
        fnRemoveMe[i].remove();
      }

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//	Recuerda que no solo puedes insertar elementos con .appendChild.
let allDivs = document.querySelectorAll('div')
let secondDiv = allDivs[1];
console.log(secondDiv)
let parrafos2 = document.createElement('p');
parrafos2.innerText='Voy en medio!';
secondDiv.append(parrafos2)
document.body.insertBefore(parrafos2,secondDiv)


//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here ( ).
// esto me dará todos los "p" por lo que me devuelve un array es un bucle...


let voyDentro2 = document.querySelectorAll('.fn-insert-here');  
for ( let i = 0; i < voyDentro2.length; i++) {  
let p3 = document.createElement('p');
p3.innerText='Voy en dentro!';
voyDentro2[i].append(p3);  
 }

