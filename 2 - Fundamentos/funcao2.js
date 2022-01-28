// Armazenando uma função em uma variável

const imprimirSoma = function(a,b){
    console.log(a+b)

}

imprimirSoma(2,3)

//Armazenando uma funcao arrow em uma variável
const soma = (a,b) => {
    return a + b
}

console.log(soma(2,6))

//retorno implícito
const subtracao = (a,b) => a - b
console.log(subtracao(9,5))


const imprimir2 = (a,b) => console.log(a)
imprimir2('Wesley')
