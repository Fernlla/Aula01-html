const José = {
    Nome: "José",
    Idade: 21,
    Cidade: "São Paulo",
    endereço: 'rua quatro, 123',
    nacionalidade: "brasileiro",
    temFilhos: false,
}

const exibirInformações = (Pessoa) =>{
    console.log(`Nome: ${Pessoa.Nome}`);
    console.log(`Idade: ${Pessoa.Idade}`);
    console.log(`Cidade: ${Pessoa.Cidade}`);
    console.log(`Endereço: ${Pessoa.endereço}`);
    console.log(`Nacionalidade: ${Pessoa.nacionalidade}`);
    console.log(`Tem Filhos: ${Pessoa.temFilhos}`);
}

exibirInformações(José);