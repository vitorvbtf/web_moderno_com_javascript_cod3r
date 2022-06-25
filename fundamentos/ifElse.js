function boletim(nota){
    if(nota >= 7){
        console.log('Aprovado')}
    else {
        console.log('Reprovado')
}
}

boletim(7)
boletim(5)
boletim('ops!') //Como ele não vai conseguir fazer a comparação ele vai achar que é falso, mas na verdade era para ter dado erro, pois não é uma nota, então deve TOMAR CUIDADO.