function notas (){
    let notas = 0
    for(i in arguments){
        notas += arguments[i]
    }
    return notas / 2
}
console.log(notas(7,10))
console.log(notas(6,5))
