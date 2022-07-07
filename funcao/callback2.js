const notas = [7.7, 5.2, 9.0, 8.6, 3.2, 5.1]

// Sem callback 
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// com Callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)

const notasMenorQue7 = notas => notas < 7
const notasBaixas3 = notas.filter(notasMenorQue7)

console.log(notasBaixas3)