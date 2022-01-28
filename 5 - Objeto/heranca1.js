
/* Cada objeto aponta por padrão para Object.prototype. O Prototype de um objeto filho deve apontar sempre para o Pai do objeto
O pai aponta para o Avô, o Avô para o Bisavô e por ai vai. Desta forma o objeto pode herdar atributos de seu Pai ou Avô ou Bisavô e 
desta forma não precisamos ficar repetindo os atribitos em todos os objetos
*/


const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)