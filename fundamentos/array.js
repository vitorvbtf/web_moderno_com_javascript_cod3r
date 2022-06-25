const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)

console.log(valores.length) //quantos elementos estão no array

valores.push({id: 3}, null, 3, "teste, false") // tem a função de adicionar elementos no array
console.log(valores)

console.log(valores.pop(5))// vai deletar até o indice 5

delete valores[7] // vai deletar apenas o indice 7
console.log(valores)
