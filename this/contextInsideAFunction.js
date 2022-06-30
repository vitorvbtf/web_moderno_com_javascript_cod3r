//context inside a function
// Não pega o this global, mas se estiver sem o modo estrito, pega

this.name = 'vitor'

function sayMyname(){
    console.log(this.name)
}
sayMyname()
