//par nome/valor

const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'Falaa' //contexto léxico 2
    return saudacao
}
//eu posso ter duas variaveis iguais desde que estejam em contextos diferentes
//objetos são grupos aninhados de pares nome//valor

const cliente = {
    nome:'Pedro',
    peso:'32',
    endereco:{
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)