var numero = 1
{
    let numero = 2 //Como estamos utilizando o "let" o numero 2 não sobrescreveu o numero 1
    console.log('Dentro =', numero)

}
console.log('Fora =', numero)


console.log('==================')

var numero = 1
{
    let numero2 = 2 //se alterar o nome da variável, a lógica irá verificar se tem a variável dentro do bloco, se não tiver ele busca fora do bloco. Desta forma, se executar será 1 e 1.
    console.log('Dentro =', numero)

}
console.log('Fora =', numero)