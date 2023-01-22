/* Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40.
 Imprime en un console log el array. Puedes usar este array: */

//NOTA IMPORTANTE:
// el indexoOf , si poenmos placesTotRavel.indeOg("perra"); ìes no esta uy nos devuevel -1
// esto es util para hacer splice,hacemos indexofpara identificar el indice, y luego hacer un splice para eliminar del arrray 


const placesToTravel = [
{id: 5, name: 'Japan'}, 
{id: 11, name: 'Venecia'},
{id: 23, name: 'Murcia'}, 
{id: 40, name: 'Santander'},
{id: 44, name: 'Filipinas'}, 
{id: 59, name: 'Madagascar'}]

const idsEliminar = [11,40]; 

for ( let num of idsEliminar){
    console.log("eliminar elemnto con id " +num);
    let posicion ;
        for ( let i=0 ; i<placesToTravel.length;i++){ // priermo lo busco en el codigo
        const place = placesToTravel[i];
         if(place.id===num){
           posicion = i;
           }
        }
       console.log("eliminar elemento de la posicion " + posicion);     
       placesToTravel.splice(posicion,1);
    }
      console.log(placesToTravel)
      
   
