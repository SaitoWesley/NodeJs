const times = new Set()
times.add('Vasco')
times.add('São Pualo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.has('Vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomeSet = new Set(nomes)
console.log(nomeSet)