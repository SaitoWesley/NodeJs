console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2' isso não muito utilizado
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome  //o this deixa o atributo "publico" e pode ser instanciado fora do contexto
    this.exec = function(){ //isso ocorre também com a função
        console.log('Exec...')
    }
}
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
