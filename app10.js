"use strict";
console.log('------------------App10.ts');
// Funciones
var miFunction = function (a) {
    return a;
};
var miFunctionF = function (a) { return a; };
console.log(miFunction("Normal"));
console.log(miFunctionF("Flecha"));
var miFunction2 = function (a, b) {
    return a + b;
};
var miFunction2F = function (a, b) { return a + b; };
console.log(miFunction2(2, 2));
console.log(miFunction2F(3, 3));
var miFunction3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFunction3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var hulk = {
    nombreS: 'Hulk',
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombreS + ' smash!!'); }, 1500);
    }
};
hulk.smash();
