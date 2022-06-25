let numeros = [ 10, 9, 6, 5, 2, 8, 6]

for(i in numeros){
    console.log(`${i} = ${numeros[i]}`)
}

function soma(){
let soma = 0
for(i in arguments){
    soma += arguments[i]
}
   return soma
}
console.log(soma())