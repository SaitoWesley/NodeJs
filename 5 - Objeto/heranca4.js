 console.log(typeof String)
 console.log(typeof Array)
 console.log(typeof Object)

 String.prototype.reverse = function() {       
     return this.split('').reverse().join('')
 }
console.log('Escola Cod3r'.reverse())

/* a função acima inverte todas a letras de uma String*/




 Array.prototype.first = function() {
     return this[0]
 }

 console.log([1, 2, 3, 4, 5].first())
 console.log(['a', 'b', 'c'].first())


 /*A função Array retorna um elemento de um Array */