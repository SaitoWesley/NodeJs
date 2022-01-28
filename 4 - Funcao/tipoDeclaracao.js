console.log(soma(3, 4))

// forma tradicional function declaration - Se for declarado desta forma, consigo chamar a função mesmo ela estando em baixo

function soma(x, y){
    return x + y
}

// forma tradicional function expression - aqui eu tenho que chamar após a declaração, antes não é possível

const sub = function(x, y){
    return x + y
}

//named function expression   -  aqui eu tenho que chamar após a declaração, antes não é possível. Não é muito utilizado este exemplo named
const mult = function mult(x, y) {
    return x * y
}