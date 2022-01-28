/* 
ATRIBUIÇÃO POR REFERÊNCIA: Ocorre quando é atribuido em uma variável a atribuição do endereço de memória de um objeto, ou seja, eu eu crio um objeto (const a = {'Teste})
e em seguida eu faço a atribuicao desta variável a em outra variável (const b = a), a varialvel b recebeu o end de memória do objeto e não o seu conteúdo 
(que no exemplo seria o 'Teste'). Mas se fizer isso em com tipo primitivo (let c = 3) e seguida atribuir o valor de c em outra variável d, neste caso a variável d irá
receber o conteúdo da variável c que no caso é 3.
*/

let valor //Foi declarado mas não inicializada
console.log(valor)

valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString()) //Essa linha da erro, pois não consigo pegar algum valor de uma string quando a variável é NULL

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //Evitar de atribuir undefined
console.log(!!produto.preco)
//delete produto.preco utilizado para deletar o atributo de um objeto.
console.log(produto)


produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto )