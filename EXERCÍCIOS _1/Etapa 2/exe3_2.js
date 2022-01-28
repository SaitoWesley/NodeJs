const calculaSalario = function(func, horasMes, valorHora){
    let salario = horasMes * valorHora
    return console.log(`Funcionário: ${func}`),
    console.log(`O salario deste mês é: ${salario}`),
    console.log(`Horas Trabalhadas: ${horasMes}`),
    console.log(`Valor Hora: ${valorHora}`),
    console.log('-----------------------')

}

calculaSalario('João', 150, 11.50)
calculaSalario('Felipe', 250, 13.50)
calculaSalario('Maria', 100, 25.50)
calculaSalario('Julio', 600, 9.50)