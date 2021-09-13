//alert("Hola Mundo");

/*
batman en comentario multilinea

*/

//variables en comentario multilinea
var nombre = 'Hugo Bruno';
var apellidos = 'Perez Garcia';
var edad = 25;

let colorFavorito = 'Azul';
let comidafavotita = 'Spaguet';

//Constantes 
const gravedad = 9.8;
const estudiantes = 30;

//Tipos de datos
/*console.log(typeof(nombre));
console.log(typeof(edad));
*/

// let y var diferencias

var numero = 40; 
if (true) {
    var numero =50;
    console.log(numero); //50
}
console.log(numero); //50

//variables globales con var 
let otronumero = 200;
var numero2 = 100; //100
console.log(numero2);
if (true){
    let numero2 = 5; //5 variables de scope , alcance o ambito
    console.log(numero2);
    var numero3= 27;
    console.log(numero3);
}
console.log(numero2); //100
console.log(numero3); //27
console.log(otronumero); //100