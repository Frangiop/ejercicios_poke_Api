/*1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un .js. */



fetch("https://api.agify.io?name=michael")  
.then(respuesta =>respuesta.json())            
.then (respuesta => { 
    console.log(respuesta);             
})



/*2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input. */
const baseUrl = 'https://api.nationalize.io';


const getName = async () => { 

    let input = document.getElementById("input2");

    i=input.value
    //i=input.value
    console.log(i)
    //input.inerHTML=""
    const response = await fetch(`https://api.nationalize.io?name=${i}`);
    const res = await response.json();
    console.log(res) 
     return res
   }
    
    
  getName() 

  document.querySelector('button').addEventListener('click',getName)     


/* 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ.*/

const getName2 = async () => { 

    let input = document.getElementById("input2");
  
    i=input.value
    //i=input.innerText
    console.log(i)
    
    const response = await fetch(`https://api.nationalize.io?name=${i}`);
    const res = await response.json();
    console.log(res) 
    let p$$ = document.createElement('p')
    p$$.innerText=`si te llamas ${i} ,tienes una probabilidad de ${res.country[0].probability}  de ser de  ${res.country[0].country_id} y una probabilidad de ${res.country[4].probability} de ser de  ${res.country[4].country_id}`
    //console.log(p$$)
    //console.log(`si te llamas ${i} ,tiene una probabilidad de ${res.country[0].probability} de ser de  ${res.country[0].country_id} y una probabilidad de ${res.country[4].probability}de ser de  ${res.country[4].country_id} `)
    document.body.append(p$$)
    console.log(p$$)
     
     return res
   }
    
    
  getName2() 
  
  document.querySelector('button').addEventListener('click',getName2)     
       





/* 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado.*/

const getName3 = async () => { 

    let input = document.getElementById("input2");
  
    i=input.value
    console.log(i)
    
    const response = await fetch(`https://api.nationalize.io?name=${i}`);
    const res = await response.json();
    console.log(res) 
    // new p 
    let p$$ = document.createElement('p')
    p$$.innerText=`si te llamas ${i} ,tienes una probabilidad de ${res.country[0].probability}  de ser de  ${res.country[0].country_id} y una probabilidad de ${res.country[4].probability} de ser de  ${res.country[4].country_id}`
    //console.log(p$$)
    document.body.append(p$$)
    console.log(p$$)
     
    //botnn
  const boton =  document.createElement('button') 
  boton.innerText='"X"'
  boton.className="main__buton"   
  document.body.append(boton)
  
  console.log(boton)
  
  boton.addEventListener("click", ()=> remove(p$$))
  boton.addEventListener("click", ()=> remove(boton))
     return res
   }
    
    
  getName3() 
  
  document.querySelector('button').addEventListener('click',getName3)     
  //document.querySelector('.main__buton').addEventListener('click',getName2)     
  
  const remove = (elemento) => {
    elemento.remove()
  }