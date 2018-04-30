console.log('------------------App15.ts');

function consola( constructor:Function ){
    console.log( constructor );
}

@consola
class Villano {
    constructor(public nombre:string) {

    }
}