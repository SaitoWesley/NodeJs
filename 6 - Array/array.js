console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])  //podemos chamar um elemento que não exite, não dará erro, return é undefined

aprovados[3] = 'Paulo'    //atribuição de valor no indice 3, mais utilizado para alterar o valor do indice
aprovados.push('Abia')    //atribuição de valor através do metodo push. O mais utilizado
console.log(aprovados.length)

aprovados[9] = 'Rafael'     //posso definir um valor pulando indices
console.log(aprovados.length)
console.log(aprovados[8] === undefined)  //os indices que foi pulado ficará como undefined

console.log(aprovados)
aprovados.sort()   //o metodo sort ordena os elementos da função em ordem. Ordenação
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') /*  splice permite para adicionar o valor em um determinado indice, 
                                                   apagar o valor de um determinado indice e também permite fazer os dois ao mesmo tempo */
console.log(aprovados)

