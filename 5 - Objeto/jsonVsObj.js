const obj = {a: 1, b: 2, c: 3, soma(){return a + b + c} }
console.log(JSON.stringify(obj)) //Aqui estou convertendo um objeto em JSON. O JSON é um formato de dados e por isso a função ou semelhantes são removidos quando convertidos.

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1, "b": "String", "c": true, "d": {}, e: [] }'))




