/* 
var edad = prompt('¿Cual es tu edad?');

if(edad >=18){
    //console.log('Eres mayor de edad');
    document.write('Eres menor de edad');
 } else{
        //console.log('Eres menor de edad');
document.write('Eres menor de edad');
        }
    
Preguntarle al usuario su edad por prompt. Despues hacer una condicional if 
con las siguientes situaciones, si el usuario es mayor de 18 y menor de 29 años 
mostrar mensaje "Felicidades has sido aceptado en el bootcam de generation", 
en caso contrario mostrar mensaje: 
"No cumples con los requisitos del programa" */

var edad = prompt('¿Cual es tu edad?');

if(edad >=18 && edad <=30){
    //console.log('Eres mayor de edad');
    document.write('Felicidades has sido aceptado en el programa Generation');
}else{
        document.write('No cumples con los requisitos del programa. Disculpa.');
        //console.log('Si no te aparece nada arriba, no fuiste admitido');
}
        
