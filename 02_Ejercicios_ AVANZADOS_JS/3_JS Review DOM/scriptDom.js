'use strict'
/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.*/
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];  

const  list = document.createElement('ul');

for (let i=0; i < countries.length;i++){
    const listItem = document.createElement('li');
    listItem.innerText= countries[i];
    list.append(listItem);
}

document.body.append(list); // da igusl ponerlo fuera que dentro 


// CON FOR OF
/*for (const countrie of countries){
    const listItem = document.createElement('li');
    listItem.innerText= countries
    list.append(listItem);
    document.body.append(list); // da igusl ponerlo fuera que dentro 
}
*/

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const eliminateFn =document.querySelector(".fn-remove-me");
eliminateFn.remove();


//const eliminateFn =document.querySelector(".fn-remove-me").remove();
 

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere". */
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const voyDentro = document.querySelector('[data-function="printHere"]');
const  listcars = document.createElement('ul');

for (let i=0; i < cars.length;i++){
    const listItemcar = document.createElement('li');
    listItemcar.innerText= cars[i];
    listcars.append(listItemcar);    
    voyDentro.append(listcars)

}
//document.body.append(voyDentro); 


/* 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.*/

const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];


 for (let country of countries2){
    const contendorPadre = document.createElement('div');
    const titulo = document.createElement('h4');
    const imagen = document.createElement('img');
    titulo.innerText = country.title ; // se puede con setAttribute
    imagen.setAttribute("src", country.imgUrl);
    contendorPadre.appendChild(titulo);     
    contendorPadre.appendChild(imagen);    
    document.body.appendChild(contendorPadre);
     }    



/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista. */


function handleClick (){
 
    let listDiv = document.getElementsByTagName('div');
     listDiv[listDiv.length -1].remove();     
   console.log(listDiv);
}
 document.getElementById("btn").addEventListener("click", handleClick);



/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html.*/

 
const countries3 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];


const divPadre = document.createElement("div");
document.body.appendChild(divPadre)  

const remove = (elemento) => {
    elemento.remove()
}

for (const country of countries3){
    const lis = document.createElement("div")
    const titulo = document.createElement("h4");
    const imagen = document.createElement("img");
    const  boton =  document.createElement("button");
    //boton.addEventListener('click',borrarElement);   // es borra y ok 

    boton.innerText="remove"
    imagen.setAttribute("src", country.imgUrl)

    boton.addEventListener("click", ()=> remove(lis))  // qioer remover todo el lis cuando le meto borrar
      
    lis.appendChild(titulo)
    lis.appendChild(imagen)
    lis.appendChild(boton)
    divPadre.appendChild(lis)
   
     } 

    // function borrarElement(){
      //      console.log(this.parentNode.remove(true)) // remove por ids  // getelementsbyid ,setattribue, split 
             // rhis es una variable que representa la etoqueta que ha lanzado el evento en este caso solo, 
     //}



     