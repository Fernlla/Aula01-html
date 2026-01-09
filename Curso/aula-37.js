class Usuario {
    email;
    senha;
    nome;

    validarSenha(email, senha) {
        return email + senha === this.nome;
    };


    constructor(email, senha, nome) {
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }

}

class Administrador extends Usuario {
    permissoes;

    validarSenha(email, senha) {
        return email === this.email && senha === this.senha;
    };

    constructor(email, senha, nome, permissoes) {
        super(email, senha, nome);
        this.permissoes = permissoes;

    }

}

class Comprador extends Usuario {
    compras;

}

const admin = new Administrador('luisfelipenn60@gmail.com', 'senha123', 'Luis Felipe', [1,6]);

const usuario = new Usuario('emaill','senha','nome');

const comprador = new Comprador();
comprador.senha = 'Senha333';


console.log(usuario.validarSenha('email', 'senha'));
console.log(admin.validarSenha('luisfelipenn60@gmail.com', 'senha123'));