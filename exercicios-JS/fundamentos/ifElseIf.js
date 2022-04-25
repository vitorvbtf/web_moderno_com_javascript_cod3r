const imprimirResultado = function(nota){
    if(9 <= nota && nota <= 10){
    console.log('quadro de honra')
    }
    else if(nota >= 7 && nota <= 8.99 ){
    console.log('Aprovado')
    }
    else if(nota >= 4 && nota <= 6.99){
    console.log('Recuperação')
    }
    else if(nota >= 0 && nota <= 3.99){
    console.log('reprovado')
    }
    else{
    console.log('nota inválida')
    }
}
imprimirResultado(11)
imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(4)
imprimirResultado(3)
imprimirResultado(-1)




