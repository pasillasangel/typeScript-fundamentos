console.log('------------------App12.ts');

let prom1 = new Promise( function ( resolve, reject ) {
    setTimeout( () => {
        console.log('Promesa Terminada');
        
        //Termina bien
        resolve();

        //Termina mal
        //reject();

    }, 1500)
})

console.log('Paso 1');

prom1.then( 
    function(){
    console.log('Ejecutarme si sale bien');
    },
    function(){
        console.error('Ejecutar se sale mal.');
    }
)

console.log('Paso 2');