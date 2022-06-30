// function.call()
// call do inglês chamar
// retornar o this do contexto que eu enviar

this.name = 'Camila'

function sayMyname(){
    this.age = arguments[0]
    this.cor = arguments[1]
    this.roupa = arguments[2]
    console.log(this.name, this.age, this.cor, this.roupa)
}

const dev = {
    name: 'julia',
}
//sayMyname.call(this, 18)
//sayMyname.call(dev, 19)

//console.log(this.age)
//console.log(dev.age)


// function.apply(this, [arg1, arg2])
// retorna o this do contexto que eu enviar

sayMyname.apply(this, [19, 'banana', 'vestido'])