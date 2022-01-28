const pessoa = {
    saudacao: 'Bom dia',
    falar() {
      console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //Conflito de paradigmas: funcional e Orientado a Objeto

const falarDePessoa = pessoa.falar.bind(pessoa)  //o bind "mostra" para a função de qual contexto ele deve pegar.
falarDePessoa()

