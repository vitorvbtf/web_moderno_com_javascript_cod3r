const soma =  function(x, y){
    return x + y
}

const imprimirResultado = function (a,b,operacao = soma){
    console.log(operacao(a,b))
}
imprimirResultado(5,2)
imprimirResultado(5,2,soma)
imprimirResultado(5,2,function subtracao(x,y){
    return x-y
})
imprimirResultado(5,2, (x,y) => x *  y )

const pessoa = {
    falar: function (){
        console.log('ola')
    }
}
pessoa.falar()

