// pintar personaes
//Recuperar la lista con el id "podekex" y almacenarla en una variable.

const myListaContainer = document.getElementById("pokedex");
console.log(myListaContainer);

//Ejecutar el fetch mediante una función recuperando los 150 primeros Pokemon a través de un bucle for
//e indicar el endpoint correcto de la API. En este caso los vamos a recuperar de la siguiente url: https://pokeapi.co/api/v2/pokemon/

// LA funcions de abajo lo unico que hacemos es acceder a los datos de la api

const getCharacter = async () => {
  const arrayPokemon = [];

  for (let i = 1; i <= 151; i++) {
    const responseApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`); // la i sería una array
    const res = await responseApi.json();
    arrayPokemon.push(res);
  }
  return arrayPokemon;
};

// CAda elemento del array sufre una transofmracion y al final transofrma el array con loas nuevas modificaciones 
const  MapPokemon = (pokemons) =>{ // mapeamos y nos quedamos con lo que nosotrod queramos
    return pokemons.map((pokemon)=> ({ // me esta recorriend characters del character(sin s) de arriba, cada charracter es un ID una lunea de la api que savamos,nos quedmoas con la propiedades
            name:pokemon.name,
            image: pokemon.sprites['front_default'],
            type:pokemon.types.map((type) => type.type.name).join(', '),
            id:pokemon.id
      // me retorna estos de arriba : 
         }))
    }


const  ShowPokemon = (pokemons) => {
         myListaContainer.innerHTML =" "; // para vaciasr aarray 
    for ( const pokemon of pokemons ){
 
    const myLi =  document.createElement('li')   
    myLi.className = "card";// es ol  por eso metemos una li 
    //myLi.innerText = pokemon.name + " " + pokemon.type + pokemon.id
    
    let characterName = document.createElement("h2");
    characterName.innerText=pokemon.name ;
    characterName.className="card-title"

    let characterImage = document.createElement("img");
    characterImage.setAttribute("src", pokemon.image);
    characterImage.setAttribute("alt", pokemon.name);
    characterImage.className = "card-image"

    let characterRole = document.createElement("p");
    characterRole.textContent = pokemon.type;
    characterRole.className="card-subtitle"

    let characterOrigin = document.createElement("p");
    characterOrigin.textContent = pokemon.id;

    myLi.appendChild(characterName);
    myLi.appendChild(characterImage);
    myLi.appendChild(characterRole);
    myLi.appendChild(characterOrigin);


    myListaContainer.appendChild(myLi)
    
        }
        
}


const drawInput = (pokemons) => {   
    const input$$ = document.querySelector("input");  // seleccionamos el input 
    input$$.addEventListener("input", ()=> // evento input, cuando usuario escribe .escucha el evento y asiga una funcion 
      searchPokemons(input$$.value, pokemons) //tenemos estos dos valores:  input$$.value : lo que el usuario ha escrito   - pokemons : array de pokemons original 
    );
  };
  
  searchPokemons = (filtro, pokemons) => { // filtro : es lo que el usuario ha escrito   , pokdemons : array original de pokemons
    let filteredPokemons  = pokemons.filter((pokemon) => //a filter hay que pasarle tru o false y deuvle el array filtrado, es decir los elementos que hayan tenido un resultado de true
      pokemon.name.toLowerCase().includes(filtro.toLowerCase()) || pokemon.type.toLowerCase().includes(filtro.toLowerCase()) // de cada nombre en minuscula del pokeons compurebo si constiene lo que ha secrito el usuario 
    ); // todo los true se acumular en un array en la vaariable filteredPokemons
    ShowPokemon(filteredPokemons);
  };
  


  const init = async () => {
  const pokemons = await getCharacter();
  const mappedPokemons = MapPokemon(pokemons);
  console.log(pokemons);
  console.log(mappedPokemons)
  ShowPokemon(mappedPokemons) 
  drawInput(mappedPokemons)
  // de aquie ir sacando pasos pintar pintar y pintar
};

init();
