const escola = "Cod3r"

console.log("charAt")
console.log(escola.charAt(4)) //charAt é utilizado para pegar algum caractere dentro da string e exibir no console.log. No exemplo ele pega o caractere no indice 4 que éo r
console.log("charAt")
console.log(escola.charAt(5)) //aqui é para mostrar que se colocar um indice maior que a string, o JS retorna vazio
console.log("charCodeAt")
console.log(escola.charCodeAt(3)) //Este comando busca o código do caractere a partir do CodeAt
console.log("indexOf")
console.log(escola.indexOf('3')) //?

console.log("substring")
console.log(escola.substring(1)) //Aqui ele exibe a stringdo indice 1 até o fim iginorando o indice 0
console.log("sunstring") 
console.log(escola.substring(0,3)) //Aqui ele exibe o caractere do indice 0 até o 3, mas não exibe o 3 então imprime Cod

console.log('Escola'.concat(escola).concat("!")) //esta funcção permite concatenar caracteres
console.log(escola.replace(3, "e")) //aqui ele substitui o caractere do indice 3 e substituiu pelo "e"

console.log('Ana, Maria, Pedro'.split(',')) //Aqui ele divie a string em um array dividio pelo separador ","