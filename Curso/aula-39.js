// Object.defineProperties
// Object.defineProperty

const propriedadePadrao = (ValorInicial) => ({
    get: () => ValorInicial,
    set: (Value) => {
        if(Value.length < 4){
            throw new TypeError('Senha está muito curta, digite uma senha com mais de 4 caracteres');
        }
    }
});

class usuario {
    email;
    senha;

    constructor(nome, email, senha) {
        Object.defineProperties(this, {
            nome: propriedadePadrao(nome),
            senha: propriedadePadrao(senha),
            email: propriedadePadrao(email),
        });
    }
}


const Usuario = new usuario('nome', 'email', 'senha');

Usuario.senha = 'fELIPE12';
Usuario.nome = 'Luis';

console.log(Usuario.nome);