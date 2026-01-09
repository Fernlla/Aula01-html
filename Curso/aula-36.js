// Aula 36 - Herança em JavaScript

class Usuario {
    email;
    senha;
    nome;

    constructor(email, senha, nome) {
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }

}

class Administrador extends Usuario {
    permissoes;

    constructor(email, senha, nome, permissoes) {
        super(email, senha, nome);
        this.permissoes = permissoes;

    }

}

class Comprador extends Usuario {
    compras;

}

const admin = new Administrador('luisfelipenn60@gmail.com', 'senha123', 'Luis Felipe', [1,6]);

const comprador = new Comprador();
comprador.senha = 'Senha333';

console.log(admin.email);
console.log(comprador);