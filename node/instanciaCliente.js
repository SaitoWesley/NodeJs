const constadorA =  require('./instanciaUnica')
const constadorB =  require('./instanciaUnica')

const constadorC =  require('./instanciaNova')()
const constadorD =  require('./instanciaNova')()

constadorA.inc() 
constadorA.inc() 
console.log(constadorB.valor, constadorA.valor)

constadorC.inc() 
constadorC.inc() 
console.log(constadorD.valor, constadorC.valor)
