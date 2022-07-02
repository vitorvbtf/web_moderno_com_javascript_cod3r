class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}
const informacao = new Pessoa('vitor', 20)
console.log(informacao)
