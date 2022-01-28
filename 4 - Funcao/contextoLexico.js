const valor  = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()   // mesmo que seja chamada de dentrpo de outra função, a função sempre vai bsucar no contexto onde foi criada, por isso neste exemplo ela imprimiu Global
}

exec()