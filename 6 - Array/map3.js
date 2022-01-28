Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}



const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',  
    '{"nome": "Caderno", "preco": 13.90}',  
    '{"nome": "Kit de Lapis", "preco": 41.22}',  
    '{"nome": "Borracha", "preco": 7.50}',  
]

//Retornar um Array somente com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco


resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
resultado2 = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
console.log(resultado2)