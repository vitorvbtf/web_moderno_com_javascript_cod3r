//usando for/in em object
const pessoa = {
    nome: 'vitor',
    sobrenome: 'Bruno',
    idade: 19,
    peso: 83 
}

for(atributo in pessoa){
    console.log(`${atributo}: ${pessoa[atributo]}`)
}

//usando for/in em array
const notas= [7.9, 8.5, 8.6, 2.6]
for(i in notas){
    console.log(`${i} ${notas[i]}  `)
} 