function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function (){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }
    // Metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
} 

const uno = new Carro
uno.acelerar()
console.log(`Uno aceleração 1: ${uno.getVelocidadeAtual()}`)

const ferrari = new Carro(350, 20)

ferrari.acelerar()
console.log('Ferrari aceleração 1: ' + ferrari.getVelocidadeAtual())
ferrari.acelerar()
ferrari.acelerar()
console.log('Ferrari aceleração 3: ' + ferrari.getVelocidadeAtual())
