const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')


app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res) => {
    res.send({nome: 'Notebook', preco: 123.45}) //aqui o metodo send converte o objeto para JSON automaticamente
})


app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))

})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
        
    })
    res.send(produto)
})


app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})


/* app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    //next()
}) */


/* app.use((req, res, next) => {
    res.send({nome: 'Notebook', preco: 123.45}) //aqui o metodo send converte o objeto para JSON automaticamente
}) */