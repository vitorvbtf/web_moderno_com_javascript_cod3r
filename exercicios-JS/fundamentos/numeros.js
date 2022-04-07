const peso1 = 1.0
const peso2 = Number('2.0')

console.log(typeof peso2) //para saber o tipo da variavel

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / 3

if(media >= 10){
    console.log(10)
}else if(media < 10){
    console.log(media.toFixed(2))
}
//.tofixed serve para limitar as casas decimais
