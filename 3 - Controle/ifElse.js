const imprimiResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimiResultado(10)
imprimiResultado(4)
imprimiResultado('Epa!')    //cuidado que o JS é fracamente tipada, porém neste caso não iria gerar um erro, iria retornar false e mostrar Reprovado.  