let num1 = 1
let num2 = 2

num1++  //Pos fixada

console.log(num1)

--num1  //pré fixada e tema maior precedencia que o Pos fixado

console.log(num1)

console.log(++num1 === num2--)  // Aqui ele da resultado true, pois até o momento da comparação, o mun2 não decrementou ainda.
console.log(num1 === num2)