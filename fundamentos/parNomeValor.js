//par nome/valor
const saudacao = 'olá'

function fala(){
    const saudacao = 'Oi'
    return saudacao
}

const endereco = {
    nome:'vitor',
    rua: 'Ceilandia',
    casa: 43,
    moradores:{
        nomes: 'pai, tio, tia',
        idades: '52,  33,  44'
    }
}

console.log(saudacao)
console.log(fala())
console.log(endereco)
console.log(endereco.moradores)