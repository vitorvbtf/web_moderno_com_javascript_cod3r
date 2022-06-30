function cronometro(){
    this.tempo = 0
    const self = this
    setInterval(function(){
        self.tempo++
        console.log(self.tempo)
    }/*.bind(this)*/, 1500)
}
new cronometro()