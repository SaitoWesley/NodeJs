/*2) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/



    function identificaTriangulo(x, y, z) {

            if(x < (y+z) && y < (x+z) && z < (x+y)){

                    if (x == y && x == z){
                    return 'Este é um triângulo Equilátero!'}
                
                else if (x == y || y == z || z == x){
                   return 'Este é um triangulo Isósceles!'} 

                else if(x != y && y != z && z != x){
                   return 'Este é um triangulo Escaleno!'}
                   
                } else { return 'Triângulo inválido'}
               }          
    




console.log(identificaTriangulo(10, 5, 5))
console.log(identificaTriangulo(6, 6, 6))
console.log(identificaTriangulo(10, 6, 6))
console.log(identificaTriangulo(10, 7, 6))

