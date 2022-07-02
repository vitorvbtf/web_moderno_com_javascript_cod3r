const pessoa = {
    nome: 'Vítor',
    idade: '20',
    saudacao: 'Olá mundo',
    escrever(){
        console.log(`O ${this.nome} de ${this.idade} anos, disse ${this.saudacao}`)
    }
}
pessoa.escrever()
const escrevendo = pessoa.escrever.bind(pessoa)
escrevendo()

falar = (nome,saudacao) => `${saudacao}, meu nome é ${nome}`

console.log(falar('leandro','olá'))