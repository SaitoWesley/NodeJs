function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4500,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())  //chamar funcão diretamente
console.log(produto.getPreco())  // chamar funcção a partir de um objeto

const carro = {preco: 50000, desc: 0.20}

console.log(getPreco.call(carro))   
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.10, '$'))  //O call permite que chame a função e passe novos parâmetros
console.log(getPreco.apply(carro, [0.15, '$$$'])) //O apply faz a mesma coisa, o que muda é que os parãmetros vão dentro de um array

