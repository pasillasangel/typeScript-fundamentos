"use strict";
console.log('------------------App9.ts');
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = 'batiseñal'; }
    var mensaje;
    if (momento) {
        mensaje = quien + " en la " + momento;
    }
    else {
        mensaje = quien + " activo la batise\u00F1al.";
    }
    console.log(mensaje);
}
activar("Wolverine", 'batiseñal', 'tarde');
