console.log('------------------App13.ts');

interface Xmen {
    nombre:string,
    poder:string
}

function enviarMission(xmen:any){
    console.log('Enviando a: ' + xmen.nombre);
}

let wolverin:Xmen = {
    nombre: "Wolverine",
    poder: "Regerenación"
};

enviarMission(wolverin);