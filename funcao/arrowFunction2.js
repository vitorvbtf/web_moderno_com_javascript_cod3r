function pessoa(){
    this.idade = 0

    setInterval(() => { 
        this.idade++
        console.log(this.idade)
    }, 1500)
}
new pessoa()