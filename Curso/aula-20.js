const Idade = 12;

const ExibirIdade = () => {
    const Idade = 30;
    console.log(`A idade é: ${Idade}`);
}

const exibirIdadeGlobal = () => {
    exibirIdadeGlobal();
}

ExibirIdade();