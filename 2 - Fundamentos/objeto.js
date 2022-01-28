// o OBJETO é um conjunto de chaves e valor

const prod1 = {}  //o par de chaves "{}" é uma forma literal de criar objetos
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)

// Um JSON não é a mesma coisa que um objeto, ele armazena atributos também, porém é um string
// Exemplo de JSON:

'{"nome", "Camisa Polo", "preco": 79.90}'