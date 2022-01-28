function Pessoa() {
    this.idade = 0

    const self = this  //podemos utilizar desta forma ao invés de usar o bind, também é uma opção
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)  //o bind aponta para o this da funcao de origem, que no caso é pessoa.
}

new Pessoa