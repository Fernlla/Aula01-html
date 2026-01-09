// Aula 34 - flatMap em JavaScript

const lista = [
  { nome: 'Ana', idade: 23, exbir: true, cartao:['0001','0043'] },
  { nome: 'Bruno', idade: 31, cartao: ['0002', '0023'] },
  { nome: 'Carla', idade: 27, cartao: ['0003', '2345'] },
  { nome: 'Daniel', idade: 45, cartao: ['0004', '2345']},
  { nome: 'Eduarda', idade: 19, cartao:['0005', '3304'] },
  { nome: 'Felipe', idade: 34, cartao: ['0006','3345'] },
  { nome: 'Gabriela', idade: 29, cartao: ['0007', '2345'] },
  { nome: 'Henrique', idade: 52, cartao: ['0008','2543'] },
  { nome: 'Isabela', idade: 40, cartao: ['0009','2390'] },
  { nome: 'João', idade: 36, cartao: ['0010', '3498'] }
];

const Cartoes = lista.flatMap((cartao) => cartao.cartao);

console.log('Cartoes:', Cartoes);