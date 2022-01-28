 const pai = { nome: 'Pedro', corCabelo: 'preto'}

 const filha1 = Object.create(pai)   //o Object.create é uma função que cria objetos e já define seu protótipo.
 filha1.nome = 'Ana'
 console.log(filha1.corCabelo)

 
 const filha2 = Object.create(pai, {                                    
     nome: { value: 'Bia', writable: false, enumerable: true}          
 })

 /*No Object.create pode passar além do Prototipo(que no caso é o pai) 
 também atributos e definir sua propriedades(writable e etc...).*/

 console.log(filha2.nome)
 filha1.nome = 'Carla'
 console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

 console.log(Object.keys(filha1))
 console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?                             
    console.log(key) : console.log(`Por Heranca ${key}`)    
}


/*hasOwnProperty é uma função que retorna true quando se trata de um atributo do objeto e false caso o atributo seja por herança */