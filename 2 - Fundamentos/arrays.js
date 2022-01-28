const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)   // a variavel "length" diz qauntos elementos tem o Array

valores.push({id:3}, false, null, 'teste') // o comando "push" permite que coloque tipos diferentes dentro do Array
console.log('esse:'+ valores)

console.log(valores.pop()) //o comando "pop" retira um elemento do Array
delete valores[0] // o comando "delete" também permite excluir um elemento do Array
console.log(valores)

console.log(typeof valores)

