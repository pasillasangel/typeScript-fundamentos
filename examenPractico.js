"use strict";
// CODIGO ORIGINAL
// // Uso de Let y Const
// var nombre = "Ricardo Tapia";
// var edad = 23;
// var PERSONAJE = {
//   nombre: nombre,
//   edad: edad
// };
// // Cree una interfaz que sirva para validar el siguiente objeto
// var batman = {
//   nombre: "Bruno Díaz",
//   artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
// }
// // Convertir esta funcion a una funcion de flecha
// function resultadoDoble( a, b ){
//   return (a + b) * 2
// }
// // Función con parametros obligatorios, opcionales y por defecto
// // donde NOMBRE = obligatorio
// //       PODER  = opcional
// //       ARMA   = por defecto = "arco"
// function getAvenger( nombre, poder, arma ){
//   var mensaje;
//   if( poder ){
//      mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
//   }else{
//      mensaje = nombre + " tiene un " + poder
//   }
// };
// // Cree una clase que permita manejar la siguiente estructura
// // La clase se debe de llamar rectangulo,
// // debe de tener dos propiedades:
// //   * base
// //   * altura
// // También un método que calcule el área  =  base * altura,
// // ese método debe de retornar un numero.
// Uso de Let y Const
var nombreZ = "Ricardo Tapia";
var edadZ = 23;
var PERSONAJEZ = {
    nombre: "nombre",
    edad: 32
};
console.log(nombreZ, edadZ, PERSONAJEZ);
// Cree una interfaz que sirva para validar el siguiente objeto
var batmanZ = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
// Convertir esta funcion a una funcion de flecha
// function resultadoDoble( a, b ){
//   return (a + b) * 2
// }
var resultadoDobleZ = function (a, b) { return (a + b) * 2; };
console.log(resultadoDobleZ(2, 2));
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = 'arco'; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un " + poder;
    }
}
;
console.log('Thor', 'Truenos', 'Martillo');
console.log('Spider', 'Trepar');
console.log('THANOS');
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}());
var nuevoCalculo = new Rectangulo(10, 2);
console.log('El area del rectangulo es:' + nuevoCalculo.calcularArea());
