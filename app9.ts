console.log('------------------App9.ts');

function activar(quien:String, 
    objeto:string = 'batiseñal',
    momento?:string ){

    let mensaje:string;
    if(momento){
        mensaje = `${ quien } en la ${ momento }`;
    } else {
        mensaje = `${ quien } activo la batiseñal.`;
    }
    console.log(mensaje);

}

activar("Wolverine", 'batiseñal', 'tarde');