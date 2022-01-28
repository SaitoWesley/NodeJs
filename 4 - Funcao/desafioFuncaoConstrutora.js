function Pessoa(nome){
    this.nome = nome

    this.falar = function(){
        console.log(`O Meu nome é ${this.nome}`)
    }
}
const pessoa1 = new Pessoa('Joãzinho')

pessoa1.falar()