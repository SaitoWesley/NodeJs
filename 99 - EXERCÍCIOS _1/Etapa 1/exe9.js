





        

function verificaNota (notaAluno) {
    let notaCorr = arredonda(notaAluno) 
    
    if (notaCorr >= 40){
      console.log(`ALUNO APROVADO com ${notaCorr}`);
    }else{
      console.log(`ALUNO REPROVADO com ${notaCorr}`); 
    }
    return notaAluno
  }
    
function arredonda(notaAluno) {
        let notaArr = (Math.ceil(notaAluno / 5) * 5)
        let res = (notaArr - notaAluno)
        if (res < 3){
          return notaArr
          }else{
          return notaAluno
          } 
       }
    



console.log(verificaNota(38))
console.log('------------')
console.log(verificaNota(12))
//console.log(arredonda(43))