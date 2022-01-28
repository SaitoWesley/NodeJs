// o "==" ou "===" é utilizado para comparar se duas variaveis são iguais
console.log('01)', '1' == 1) //aqui ele relaciona somente o valor
console.log('02)', '1' === 1) // aqui ele compara valor e tipo para ver se são estritamente iguais. O recomendável é utilizar sempre o estritamento igual "==="

// !== ou !== diz se uma variável é diferente de uma outra variável
console.log('03)', '3' !== 3) //aqui ele relaciona somente o valor
console.log('04)', '3' !== 3) //aqui ele compara valor e tipo para ver se são estritamente iguais

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('12)', d1.getTime() === d2.getTime())
console.log('13)', undefined == null)
console.log('14)', undefined === null)






