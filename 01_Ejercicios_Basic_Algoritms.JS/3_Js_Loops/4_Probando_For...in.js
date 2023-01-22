// Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}



for ( let i in alien){
    console.log(i);
}

console.log("_______otra maera abajo _______")

//o bien :
for ( let i in alien){
    console.log(i);
    console.log(alien[i]);
    console.log(i,alien[i]);
}

