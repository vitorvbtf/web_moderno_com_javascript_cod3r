let numeros = [1, 2, 3, 4, 5, 6, 7]

for(a in numeros){
    if(a == 5)
    break
    console.log(`${a}: ${numeros[a]}`)  
}
console.log("fim")

for(a in numeros){
    if(a == 5)
    continue
    console.log(`${a}: ${numeros[a]}`)
}