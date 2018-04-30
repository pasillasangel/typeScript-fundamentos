console.log('------------------App11.ts');
//Estructuración de objetos

let avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga"
}

let {nombre, clave, poder } = avenger;

//let nombreA = avenger.nombre;
//let claveA = avenger.clave;
//let poderA = avenger.poder;

console.log(nombre, clave, poder);

//Desctructuración de los objetos

let vengadores:string[] = ['Thor', 'Steve', 'Tony'];

let [ thor, capi, tony ] = vengadores;

console.log(thor, capi, tony);
