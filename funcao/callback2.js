const notas = [10.0, 8.3, 5.5, 9.4, 2.1]

// sem callback
let notasBaixas = []
for(let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//com callback

let notasBaixas2 = notas.filter(function(notas){
    return notas < 7
})
console.log(notasBaixas2)