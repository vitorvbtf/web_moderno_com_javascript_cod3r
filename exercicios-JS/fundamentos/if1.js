function soNoticaBoa(nota){
    if(nota >= 7){ 
        console.log(nota)
    }
}

soNoticaBoa(8)
soNoticaBoa(7)
soNoticaBoa(6)

function seForVerdade(valor){
    if(valor){
        console.log('é verdade...' + valor)
    }
}

seForVerdade
seForVerdade(0)
seForVerdade(NaN)
seForVerdade(undefined)
seForVerdade(null)
seForVerdade(' ')
seForVerdade(-1)
seForVerdade('?')
seForVerdade([])
seForVerdade([7, 9])
seForVerdade({})