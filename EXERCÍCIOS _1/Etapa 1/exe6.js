/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

//c = capital, i = taxa de juros, t = tempo de aplic, j = calculo do juros simples

function investimento(c, i, t, j, res1, res2, montSimples, montComposto){
this.calcJurosSimples = function(){
  //j = c x i x t
  j = i / 100
  Math.floor(res1 = c * j * t)
  Math.floor(montSimples = c + res1)
  return `
  Capital Aplicado: ${c}
  Tempo Aplicação: ${t}
  Lucro: ${res1}
  Montante com Juros Simples: ${montSimples}`
}

this.calcJurosComposto = function(){
    //j = c x i x t
  j = i / 100
  res2 = c * Math.pow((1 + j), t)
  montComposto = c + res2
  return `
  Capital Aplicado: ${c}
  Tempo Aplicação: ${t}
  Lucro: ${Math.floor(res2)}
  Montante com Juros Composto: ${Math.floor(montComposto)}`
 }

}



const teste = new investimento(620, 1.5, 24)
console.log(teste.calcJurosSimples())
console.log(teste.calcJurosComposto())






/* console.log(calcJurosSimples(1200, 2, 14))
console.log(calcJurosComposto(620, 1.5, 24)) */

/* let app = 5*5*5 
console.log(app) */