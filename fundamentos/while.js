const valorAleatorio = function (max, min){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) 
}
let opcao = 0

while(opcao != -1){
    opcao = valorAleatorio(-1, 10)
    console.log(`o numero escolhido foi ${opcao}`)
}
console.log('Até a próxima')

let n1 = 0
while(n1 < 20){
    console.log(n1)
    n1 ++
}
console.log(n1)