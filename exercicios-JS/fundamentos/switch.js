const imprimirNota = function(nota){
    switch(Math.ceil(nota)){
        case 10: 
        case 9:
            console.log('Quadro de honra')
        break
        
        case 8: case 7: case 6:
            console.log('Aprovado')
        break

        case 5: case 4: case 3:
            console.log('Recuperação')
        break
        
        case 2: case 1: case 0:
            console.log('Reprovado')
        break
        default:
            console.log('Nota inválida')
    }
}

imprimirNota(10.99)
imprimirNota(9) 
imprimirNota(7.55)
imprimirNota(4.33)
imprimirNota(2.21)
imprimirNota(2)
imprimirNota(-1)