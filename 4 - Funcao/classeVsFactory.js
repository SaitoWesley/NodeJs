class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)     // Na Classe o this pode variar conforme a chamada.
    }
}

const p1 = new Pessoa('João')
p1.falar()


console.log('------------------------')


const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)            // Na função construtora, isso não ocorre.
    }
}

const p2 = criarPessoa('Jão')
p2.falar()