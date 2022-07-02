class Carro {

    nome;
    ano;
    cor;

    constructor(
        nome,
        ano,
        cor
    ) {
        this.nome = nome;
        this.ano = ano;
        this.cor = cor;
    }

    acelerar() {
        return 'acelerando';
    }

}

const chevete = new Carro('chevete', 2005, 'prata');
const palio = new Carro('palio', 2008, 'azul');

console.log(palio.acelerar());

console.log(chevete);