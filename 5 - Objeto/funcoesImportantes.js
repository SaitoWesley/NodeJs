const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))  // a função keys retorna os atributos do objeto
console.log(Object.values(pessoa)) // a função values retorna os valores do objeto
console.log(Object.entries(pessoa)) // a função entries retorna as cahves e valores do objeto em um array


Object.entries(pessoa).forEach(([chave, valor]) => {   //utiliznado destructuring para percorrer o array
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {  //a função defineProperty permite que possa definir propriedades desse objeto.
    enumerable: true,
    writable: false,  //aqui estou travando para que nãos eja alterada
    value: '01/01/2019'

})

pessoa.dataNascimento = '01/01/2017'  //essa atribuição foi desconsiderada.
console.log(pessoa.dataNascimento)


//Object.assing (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)  //a função assing permite concatenar os atributos de vários objetos no primeiro que for passado como parâmetro

Object.freeze(obj)
obj.c = 1234

console.log(obj)
