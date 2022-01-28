function imprimirSoma(a,b) {
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2,3,4,5,6,7,8) //aqui ele soma somente os dois primeiros
imprimirSoma(2) //retur NaN
imprimirSoma()

//Funcao com retorno
function soma(a, b = 0){         // o b = 0 indica um padrão de numero caso não venho nos parametros qunado a função é chamada
        return a + b    
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())