"use strict";
console.log('------------------App11.ts');
//Estructuración de objetos
var avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga"
};
var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
//let nombreA = avenger.nombre;
//let claveA = avenger.clave;
//let poderA = avenger.poder;
console.log(nombre, clave, poder);
//Desctructuración de los objetos
var vengadores = ['Thor', 'Steve', 'Tony'];
var thor = vengadores[0], capi = vengadores[1], tony = vengadores[2];
console.log(thor, capi, tony);
