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
let nombreZ:string = "Ricardo Tapia";
let edadZ:number = 23;
const PERSONAJEZ = {
  nombre: "nombre",
  edad: 32
};

console.log(nombreZ, edadZ, PERSONAJEZ);
 
 
// Cree una interfaz que sirva para validar el siguiente objeto
let batmanZ:DCWarner = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}
interface DCWarner {
    nombre:string,
    artesMarciales:string[];
}
 
 
// Convertir esta funcion a una funcion de flecha
// function resultadoDoble( a, b ){
//   return (a + b) * 2
// }
 
let resultadoDobleZ = (a:number, b:number) => (a + b) * 2;

console.log( resultadoDobleZ(2,2));
 
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string = 'arco' ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};

console.log('Thor', 'Truenos', 'Martillo');
console.log('Spider','Trepar');
console.log('THANOS');
 
 
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo {
    base:number;
    altura:number

    constructor(base:number, altura:number){
        this.base = base;
        this.altura = altura;
    }
    calcularArea(){
        return this.base*this.altura;
    }
}

let nuevoCalculo:Rectangulo = new Rectangulo(10,2);
console.log('El area del rectangulo es:' + nuevoCalculo.calcularArea());
