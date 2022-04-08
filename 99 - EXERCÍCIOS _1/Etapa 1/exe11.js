/* As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false. */

function verificaAno(ano){
    let anoBi = ano % 4
    if (anoBi == 0 ){
        console.log("Esse é um ano Bissexto")
        return console.log(true)
    }else{
        console.log("Não é um ano Bissexto")
        return console.log(false)
    }
}

verificaAno(2024)
verificaAno(2022)
/* verificaAno(2028)
verificaAno(2054)
verificaAno(3015)
verificaAno(4022) */