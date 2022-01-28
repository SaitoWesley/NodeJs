// Object.preventExtensions - Essa função não permite que seja incluido novos atributos, mas permnite alterar o valor desses atributos e apagar atributos que já excistem.
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) //A função isExtensible retorna se o objeto é extensível ou não

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar brnca'  //essa linha é ignorada, pois o preventsExtensions não permnite inserir novos atributos.
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = {nome: 'Juliana', idade: 35 }
Object.seal(pessoa)   //A função Seal não permite que seja inserido e nem excluido atributos neste objeto. Mas permite que seja alterado os valores desses atributos.
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze é igual ao Seal, mas congela também os valores dos atributos.