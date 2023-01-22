/*7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
los alumnos usando la función .reduce().*/

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

// 
var totalNotas = exams.reduce(function (accumulator, exam){ 
return accumulator + exam.score;}, 0);
console.log(totalNotas)


//7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los   
//alumnos que esten aprobados usando la función .reduce().
//console.log("aprobads")
var totalNotas2 = exams.reduce(function (accumulator, exam){ 
    return (accumulator )+ (exam.score >5 );}, 0);
    console.log("aprobados",totalNotas2)
    

// 7.2.1 creado
// me busca los que han sacado notas mayor que 5 

console.log("amayor que 5 ")
var totalNotas3 = exams.reduce(function (accumulator, exam){ 
    return (accumulator )+ (exam.score >5);}, 0);
    console.log(totalNotas3)
    

//7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

var totalMedia = exams.reduce(function (accumulator, exam){ 
    return (accumulator + exam.score)  ;}, 0);
    console.log(totalMedia)


    var prmedio = totalMedia/exams.length ;
    console.log(prmedio)