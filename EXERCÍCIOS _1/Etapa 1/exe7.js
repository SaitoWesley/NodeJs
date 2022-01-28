/* 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. */


function calculaEquacao(a, b, c, delt, x1, x2){
    const resposta = []
    delt = ((Math.pow(b, 2)) - 4 * a * c)
    if (delt >= 0){
    x1 = ((-1 * b) + (Math.sqrt(delt))) / (2 * a)
    x2 = ((-1 * b) - (Math.sqrt(delt))) / (2 * a)
    resposta.push(x1)
    resposta.push(x2)
    //const resposta = ['O delta é: ' + delt, 'X1 é: ' + x1, 'X2 é: ' + x2] 
    return resposta
    } 
    else {return 'Delta é negativo'}

    
}


console.log(calculaEquacao(3, 5, -12))
console.log(calculaEquacao(3, -5, 12))




