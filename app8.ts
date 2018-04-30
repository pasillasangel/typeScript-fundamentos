console.log('------------------App8.ts');

//Concatenacion: Templates literales

function getNam (){
     return "Angel";
}

let nam:string = "Juan";
let apellido:string = "Perez";
let edad:number = 23;

let texto1:string = "Hola, " + nam + " " + apellido +"(" + edad + ")";
let texto2 = `Hola, 
     ${ nam } ${ apellido }(${ edad }) `;

let texto3:string = `${ getNam() }`;

console.log(texto1);
console.log(texto2);
console.log(texto3);