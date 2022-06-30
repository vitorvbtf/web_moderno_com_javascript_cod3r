//'use strict'  <- use sempre que puder
this.name = 'valeska'

function sayMyname(){
    console.log(this.name)
}
sayMyname() // Na web mostra valeska


const user = {
    name:'vitor',
    sayMyname: function(){
        console.log(this.name)
    }
}
user.sayMyname()

//console.log(window.name) <-- na web mostra valeska
