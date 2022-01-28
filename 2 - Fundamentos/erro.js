function tratarErroELancar(erro) {
    //throw new Error('Erro de sistema!!!!')
    //throw 10
   // throw true
    //throw 'mensagem'
    throw { nome: erro.name,                     //throw = lançar, é responsavel por exibir o erro e pode ser string, numeber, objeto
            msg: erro.message,
            date: new Date
    }
}

function imprimirNomeGritando(obj) {
    try {                                               //try =  tentar é utilizado para tratar o erro
        console.log(obj.name.toUpperCase() + '!!!')    //catch = Pegar, após o try ele vem para o catch e lá chamará a função do erro
    } catch (Erro) {
        tratarErroELancar(Erro)
    }finally {
        console.log('final')
    }
    
}

const obj = {nome: 'Roberto'}
imprimirNomeGritando(obj)