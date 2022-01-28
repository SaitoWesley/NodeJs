const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

//Call back é quando utilizando o comando forEach para chamar uma fução dentro de uma outra função e retornar um valor qunado algum evento ocorrer.