const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in nums) {
    if (x == 5) {
        break    //o break não funciona em if, desta forma ele sempre vai buscar o For mais perto, se necessário, pode utilizar rotulo, porém não é das melhores práticas
    }
    console.log(`${x} = ${nums[x]}`)
}
console.log( '--------------')
for (let y in nums) {
    if (y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}
console.log( '--------------')

externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo //utilizacao de rotulo, mas não muito utilizado, pois tme outras formas de fazer isso atrás de métodos.
        console.log(`Par = ${a}, ${b}`)
    }
   
}