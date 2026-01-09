// Aula 27 - Método forEach em JavaScript

const lista = [
  { id: 1, nome: 'Ana', idade: 23 },
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

let soma = 0;

const somaIdades = (objeto) => {
    soma += objeto.idade;
}

lista.forEach(somaIdades);

console.log('Soma das idades: ', soma);