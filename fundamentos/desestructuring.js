const cliente = {
    nome: 'vitor',
    idade: 19,
    endereco:'ceilandia',
    mais_informacao: {
        ponto_de_referencia: 'perto do mercado',
        cidade: 'ceilândia norte'
    }
}

console.log(cliente)

//desestruturando...
const {nome, idade} = cliente
console.log(cliente)
console.log(nome, idade)

//desestruturando...
const {mais_informacao:{ponto_de_referencia, cidade}} = cliente

console.log(ponto_de_referencia, cidade)

//Tentou realizar a desestruturação, mas não encrontou nada nesse objeto
const {endereco:{lugar, rua}} = cliente
console.log(lugar, rua) 


const produto = {
    objeto: 'garrafa',
    valor: 20,
    secao:{
        material:'plastico',
        cor:'transparente'
    }
} 
//console.log(objeto) // vai dar erro
const {objeto, valor} = produto
console.log(objeto, valor)