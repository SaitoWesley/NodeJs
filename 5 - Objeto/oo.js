//objeto é uma coleção de pares e chave/valor
const produto = new Object
produto.nome =  'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 20

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome:'Raul',
        idade: 19,
        endereco:{
            logradouro: 'Rua abc',
            numero: 123
        }
    },
    condutores:[{
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 42
    }]
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores //se deletar ele deleta tudo para baixo de condutores na linha 20
delete carro.proprietario.endereco

console.log(carro)
console.log(carro.condutores) //se o objeto carro existe, eu consigo acessar algo que ainda não existe, sera retornado undefined
//console.log(carro.condutores.length)//o problema é se tento ver o conteudo de algo que não foi defindo.

