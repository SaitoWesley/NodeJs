const a = 1
const b = 2
const c = 3

const obj1 = {a: a,b: b, c: c} //forma antiga
const obj2 = {a, b, c}  //ES2015
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr //forma antiga
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}  //ES2015
console.log(obj4)

const obj5 = {
    funcao1: function(){  //forma antiga
        //...
    },
    funcao2(){   //ES2015
        //....
    }
}

console.log(obj5)