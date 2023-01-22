/*Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". 
Usa la función .includes de javascript.*/


const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

let camisetacontador=0;
for(let i=0;i<products.length;i++){
    let camiseta = products[i];
{
    console.log( "imrando si "+camiseta + "aparece");
    if(camiseta.includes("Camiseta")){
        camisetacontador++ ;
        console.log("aparece!");
    }
      else{ 
        console.log
      }
      console.log("tenemos " +camisetacontador);
}
   console.log(camisetacontador + "prodcut tienen camisetas")

 }

