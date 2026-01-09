process.stdin.setEncoding('utf8');

const soma = ( Valor) => {
    if (Valor < 0 || Valor > 1000){
        throw new Error('Valor inválido! O prgrama não aceita esses valores.');
    }
    if (Valor === 0){
        return 0;
    }
    return Valor + soma(Valor - 1);
}

process.stdin.on('data', function(data) {
    try{
        console.log('soma: ', soma(Number(data)));
    }catch(error){
        console.log('Erro: ', error.message);
        process.stdin.pause();
    }
});




