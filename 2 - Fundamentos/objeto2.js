console.log(typeof Object) // isso é uma função
console.log(typeof new Object) // quando é instanciada, a função se torna um objeto

const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {}  //ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())

