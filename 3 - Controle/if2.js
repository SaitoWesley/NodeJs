function teste1(num) {
    if(num > 7)
        console.log(num)
        console.log('Final')
}

teste1(6)
teste1(8)


function teste2(num) {
    if(num > 7) ; {                   // cuidado com o ; ele é uma sentença de código vazia, não irá gear um erro, mas o código não irá funcinar da forma correta.
        console.log(num)
    }   
}

teste2(6)
teste2(8)