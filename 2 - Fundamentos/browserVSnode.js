let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'texte'

console.log(this.a)
console.log(this.c)

console.log(global.a)
console.log(global.b)


console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma variavel maluca: sem var e let!
abc = 3 //não façam isso em casa
console.log(global.abc)

// o module.exports tem a mesma função do this aqui mo backand
//essa aula teve com objetivo entender que alguns comando como o this por exemplo tem ocntextos diferentes no node e no browser. Conhecer o "Run Time"