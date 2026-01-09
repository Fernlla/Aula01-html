Process.stdin.setEncoding('utf8');

function contarCaracteres(Valor) {
    let retorno = ' ';
    const removerEnter = Valor.replace('\n', '');
    const split = removerEnter.split(' ');
    
    for (let i = 0; i < split.length; i++) {
        if (i === 0){
            retorno = `${split[i].length}`;
        } else{
            retorno = `${retorno}-${split[i].length}`
}       } 
    
    return retorno;
}

Process.stdin.on('data', function(data) {
    console.log('Você digitou: ' + data);
    console.log('Digite Novamente:');

    if(data == 0){
        process.stdin.pause();
    }
})
