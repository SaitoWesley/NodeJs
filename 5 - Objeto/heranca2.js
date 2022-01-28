// Cadeia de prototipos (prototype chain)

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0)  //aqui ele retorna undefined, pois ele sobe na herança até o avo e o Avô por padrão aponta para object.prototype
console.log(filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // Nesta linha ocorre o sombreamento, no caso, a variável velMax está declarada no escopo local que sombreia o atributo que está no Pai.
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)   //Essa funcão setPrototypeOf permite definir o protoripo de um objeto, no exemplo, está passando para ferrari que o Carro é seu prototyo.
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)   
console.log(volvo)   

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())

