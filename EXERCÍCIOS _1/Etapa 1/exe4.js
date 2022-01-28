/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

const calculaDivisao = function(dividendo, divisor){
    let resultado = dividendo / divisor
    let resto = dividendo % divisor
    console.log('O Resultado é: ' + resultado)
    console.log('O Resto é: ' + resto)
}

calculaDivisao(10, 2)