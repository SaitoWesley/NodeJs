function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com: ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdade(valor) {
    if(valor) {      //quando não tenho nenhuym operador relacional, o JS já entende que o retorno será true ou false, ele só vai retornar o que for verdadeiro
        console.log('É verdadeiro... ' + valor)
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)  //deste para cima o return é false
seForVerdade(-1) //deste para baixo é true
seForVerdade(' ')
seForVerdade('?')
seForVerdade([])
seForVerdade([1, 2])
seForVerdade({})


