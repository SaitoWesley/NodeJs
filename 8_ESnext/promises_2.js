// Isso é a famosa calback rel, que não é uma boa pratica após a criação do Promise
/* setTimeout(function() {
    console.log('Executando callback...')
    
    setTimeout(function(){
        console.log('Executando callback...')

        setTimeout(function(){
            console.log('Executando callback...')
        }, 2000)

    }, 2000)
}, 2000) */


//O mesmo exeplo de cima utilizando promise
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function(){
            console.log('Executando promise...')
            resolve('Vishh')
        }, tempo)
    })
}

esperarPor(3000)
    .then(() => esperarPor())
    .then(esperarPor)
