/*

Crea una función llamada **rollDice()** que reciba como parametro el numero de caras que 
queramos que tenga el dado que deberá silumar el codigo dentro de la función. Como hemos dicho,
que la función use el parametro para simular una tirada de dado y retornar el resultado. 
Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca información sobre 
la función de javascript **Math.random();**  */ 




function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

console.log(getRandomInt(6))
console.log(getRandomInt(3))
  



/*for(let i=0; i<20; i++){
    const numeroAleatorio = Math.random()*10; // entre 0 y 1
    const parteEntera = Math.ceil(numeroAleatorio);
    console.log(numeroAleatorio + ' -> ' + parteEntera);
} */