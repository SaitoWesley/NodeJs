{
    {
        {
            {
                var sera = 'Será??'  //Em JS a variavel do tipo var só será local, quando estiver dentro de uma função. Se estiver fora fica visível para todo código
                console.log(sera)
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)  