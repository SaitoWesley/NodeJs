const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo){
            resolve(conteudo.toString())
        })
    })
}

console.log('Já passou por aqui meu grande amigo')

const caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho)

    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é:${conteudo}`)
    .then(console.log)
