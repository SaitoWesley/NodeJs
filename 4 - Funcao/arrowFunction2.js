function Pessoa() {
    this.idade = 0
  
    setInterval(() => {  //Aqui declarei uma função arrow " =>'"
        this.idade++
        console.log(this.idade)
    }, 10)  
}

new Pessoa