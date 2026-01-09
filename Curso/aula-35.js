
class pessoa{
    nome;
    idade;
    filhos;

    quantosFilhos() {
        if (this.filhos) {
            return this.filhos.length;
        }
        return 0;
    }

    constructor(nome, idade, filhos){
        this.nome = nome;
        this.idade = idade;
        this.filhos = filhos;
    }

}

const Filho1 = new pessoa('Ana', 5);
const Filho2 = new pessoa('Bruno', 8);

const peessoa1 = new pessoa('Felipe', 21, [Filho1, Filho2]);

console.log('Quantidade de filhos:', peessoa1.quantosFilhos());
console.log('Filho2 tem filhos:', Filho2.quantosFilhos());
console.log(peessoa1);

