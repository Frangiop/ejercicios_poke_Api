//2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando  async-await.
const runTimeOut = () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })

    promise.then(() => {console.log('Time out!')})
};

runTimeOut();



/*2.2 Convierte la siguiente función con un fetch utilizando async-await. 
/Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;

function getCharacters () {
    fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
}

getCharacters();*/




const getCharacter2 = async () => {
   
    const responseApi = await fetch(`https://rickandmortyapi.com/api/character`); // la i sería una array
    const res = await responseApi.json();
    console.log(res);
  

};
getCharacter2()
