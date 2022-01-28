// pessoa => 123 => {...}        pessoa aponta para um end de memoria e esse end de memoria aponta para o objeto
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)  //aqui mostramos que é possivel alterar o valor do objeto

//pessoa -> 456 -> {...}   
//pessoa = {nome: 'Ana'}  //mas não conseguimos alterar o end de memória, pois se trata de uma constante "const"

Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome) //Não alterou, pois utilizamos a função freeze, desta forma o objeto é constante e ninguém consegue mudar 

