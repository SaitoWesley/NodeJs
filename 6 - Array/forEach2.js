Array.prototype.forEach2 = function(callback) {  //Fizemos nosso forEach para mostrar como funciona e que podemos criar funções e instanciar para percorrer um array
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)

    
})

console.log('                   ')


aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)   
})

//Podemos ver que o resultado é o mesmo se utilizarmos o forEach, que já existe, forEach2