function Calcular(valor){
    if(valor === 0){
        throw new Error("O valor não pode ser 0");
    }
    return valor / 2;
}


try{
    const resultado = Calcular(1222);
    console.log('resultado', resultado);
} catch(Error){
    console.log(Error.message);
} finally{
    console.log("Execução finalizada");
}

console.log("Código continua...");