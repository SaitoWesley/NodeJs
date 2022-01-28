

let jogos1 = "10 20 20 8 25 3 0 30 1"

let recorde = -1
let jogos = jogos1.split(' ')  
let piorJogo = 1
let melhorJogo = -1
let contPiorJogo = 0

console.log(jogos)

const avaliaJogos = function() {
for (let i = 0; i < jogos.length; i++ ){
    if(melhorJogo < jogos[i]){
        recorde  += 1
        melhorJogo = jogos[i]
    }
    if(jogos[i] < piorJogo){
        piorJogo = jogos[i]
        contPiorJogo = i+1
    }

}return [melhorJogo, recorde, contPiorJogo, piorJogo]

}

console.log(avaliaJogos())

