// Transforme uma lista de objetos em um objeto, onde a chave de cada objeto é o nome da pessoa e o valor é um objeto contendo a idade dela.

const lista = [
  { id: 1, nome: 'Ana', idade: 23 , exbir: true},
  { id: 2, nome: 'Bruno', idade: 31 },
  { id: 3, nome: 'Carla', idade: 27 },
  { id: 4, nome: 'Daniel', idade: 45 },
  { id: 5, nome: 'Eduarda', idade: 19 },
  { id: 6, nome: 'Felipe', idade: 34 },
  { id: 7, nome: 'Gabriela', idade: 29 },
  { id: 8, nome: 'Henrique', idade: 52 },
  { id: 9, nome: 'Isabela', idade: 40 },
  { id: 10, nome: 'João', idade: 36 }
];

const FunçaoReduce = (acc, objeto) => {
    return{
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
}

const pessoas = lista.reduce(FunçaoReduce, {});

const chaves = Object.keys(pessoas);

const listadeVoltas = chaves.map((chaves) => ({
    nome: chaves, 
    idade: pessoas[chaves].idade
}));

// console.log(chaves);

// console.log(pessoas);

console.log(listadeVoltas);

