const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove sempre o utimo elemento do Array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // massa saiu
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Aqui ele cria um novo array com os elementos a partir de um indice, no caso é 2. Então ele monta um novo array com os elementos do indece 2 em diante
console.log(algunsPilotos1)
console.log('             ')
console.log('             ')


console.log('Função Slice com inicio e fim')
const algunsPilotos2 = pilotos.slice(1, 4) //Semelhante ao exemplo de cima, ele gera um novo array do indice 1 até o 3, neste caso o indice 4 ele não considera
console.log(algunsPilotos2)
