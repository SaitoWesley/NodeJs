function soma(){
    let soma = 0
    for (i in arguments){       // o arguments é um array interno que fica disponível para utilizar na função
        soma += arguments[i]
    } return soma
}

console.log(soma())                                // atraves do array arguments, é possivel passar parametros diferentes
console.log(soma(1))                      
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, 'Teste'))
console.log(soma('A', 'B', 'C', 'Teste'))