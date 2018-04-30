console.log('------------------App10.ts');

// Funciones
let miFunction = function( a:string ){
    return a;
}

let miFunctionF = (a:string) => a;

console.log( miFunction("Normal") );
console.log( miFunctionF("Flecha") );

let miFunction2 = function(a:number, b:number) {
    return a + b;
}

let miFunction2F = (a:number, b:number) => a + b;

console.log( miFunction2(2,2) );
console.log( miFunction2F(3,3) );

let miFunction3 = function( nombre:string ) {
    nombre = nombre.toUpperCase();
    return nombre;
}

let miFunction3F = ( nombre:string ) => {
    nombre = nombre.toUpperCase();
    return nombre;
}

let hulk = {
    nombreS: 'Hulk',
    smash(){
        setTimeout(()=> console.log(this.nombreS + ' smash!!'), 1500 );
    }
}

hulk.smash();