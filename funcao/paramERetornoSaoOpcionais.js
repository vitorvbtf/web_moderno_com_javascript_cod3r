function area(largura, altura){
    const area = largura * altura
    if(area > 20){ 
        console.log(`o resultado foi ${area}`)}
    else{
       return area
    }
}

console.log(area())
console.log(area(9))
console.log(area(7, 9, 3, 5, 9))
console.log(area(2, 1))
console.log(area(7, 9))
