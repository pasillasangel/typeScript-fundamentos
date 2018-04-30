"use strict";
console.log('------------------App8.ts');
//Concatenacion: Templates literales
function getNam() {
    return "Angel";
}
var nam = "Juan";
var apellido = "Perez";
var edad = 23;
var texto1 = "Hola, " + nam + " " + apellido + "(" + edad + ")";
var texto2 = "Hola, \n     " + nam + " " + apellido + "(" + edad + ") ";
var texto3 = "" + getNam();
console.log(texto1);
console.log(texto2);
console.log(texto3);
