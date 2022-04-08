const moduloA = require('../moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC/index')   
console.log(c.ola2)
const d = require('./pastaC')   //mesmo que não informe o "index", por padrão, sempre irá buscar pelo index, quando não for especificado nenhum outro arquivo.
console.log(d.ola2)

/* const http = require('http')
const { listenerCount } = require('process')
http.createServer((req, res)=> {
    res.write('Bom Dia')
    res.end()
}).listen(8080) */