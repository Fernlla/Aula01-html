// Object.defineProperties
// Object.defineProperty

const propriedadePadrao = (ValorInicial) => ({
    value: ValorInicial,
    writable: false, // se estiver como true => usario.nome = 'novo nome'
    enumerable: true, // se estiver como true => ele será exibido no objeto.
    configurable: false // se estiver como true => pode deletar o nome
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

Usuario.senha = 'Felipe@1402';

console.log(Usuario);