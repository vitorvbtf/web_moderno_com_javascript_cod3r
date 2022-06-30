// global scope

this.nome = 'Diego'

function sayMyname(){
    //local scope
    console.log(this.nome) // undefined
}
sayMyname()

//A variavel global não pega no escopo local
