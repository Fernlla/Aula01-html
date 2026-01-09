function Multiplos13(Valor1, valor2){
    let Maior = 0;
    let menor = 0;
    let soma = 0;

    if(Valor1 > valor2){
        Maior = Valor1;
        menor = valor2;
    } else{
        Maior = valor2;
        menor = Valor1;
    }

    for(; menor <= Maior; menor++){
        if(menor % 13 != 0){
            soma += menor;
        }
    }
    return soma;
}

console.log(Multiplos13(200, 100));