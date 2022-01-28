function criarProduto(nome, preco){
  return{
      nome,
      preco,
      desconto: 0.1
  }
}

console.log(criarProduto('Novo Produto', 8.99))
console.log(criarProduto('Notebook', 1199.99))
