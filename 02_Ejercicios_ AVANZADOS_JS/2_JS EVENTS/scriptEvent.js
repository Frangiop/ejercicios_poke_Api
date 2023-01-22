/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click  */



function handleClick(event){
    console.log(event);
    console.log(event.target.innerHTML);
}


document.getElementById("btnToClick").addEventListener("click",handleClick);
 


/*1.2 Añade un evento 'focus' que ejecute un console.log con el  valor del input.*/


function focusinput(event){
    console.log(event);
    console.log(event.target.innerHTML); 
}

document.querySelector(".focus").addEventListener("focus",focusinput);


/*1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.*/

function focusinput(event){
    console.log(event);
    console.log(event.target.innerHTML);
}

document.querySelector(".value").addEventListener("input",focusinput);

