console.log(7/0)        // O JS irá gerar um resultado infinito "infinity"
console.log("10" / 2)   //o JS verifica se o valor da String é Number e se for realiza a operação
console.log("3" + 2)   //Neste caso diferente do exemplo de cima, ele concatena e não soma, pois a string tem preferência
console.log("3" - 2)   //Neste caso o JS realiza a operação aritimética, só o exemplo de cima que não realiza a operação.
console.log("Show" * 2) //desta forma ele gera um "NaN" Not a Number
console.log(0.1 + 0.7)  // aqui gera uma imprescisão 0.79 e não 0.8
//console.log(10.toString()) não consigo chamar a função para uma delcaração literal, segue a forma correta:

console.log((10.345).toString())