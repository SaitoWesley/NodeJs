//Faça um algoritmo que calcule o fatorial de um número.

function calculaFatorial(){
    let x = 5
    let res = x
 while(x > 1){
     res = res * (x - 1)
 }   return console.log(res)
}

calculaFatorial()