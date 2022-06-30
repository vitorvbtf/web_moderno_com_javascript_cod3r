//context Inside A Method
//Não pega o this global, somente do objeto 

this.name = 'joão'

const user ={
    name: 'felipe',
    sayMyname(){
        console.log(this.name)
    }
}
user.sayMyname()
