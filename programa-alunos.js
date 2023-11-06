const alunos = ["josé", "maria","joão", "ClEIton","Isa"];
const medias = [8, 9, 10, 5, 6];

const nomesPadronizados = alunos.map((nome) => nome.toLocaleLowerCase());

                                         
const nomesEMedias = [nomesPadronizados, medias];

const exibirNomesEMedias = (`O aluno ${nomesEMedias[0][0]} tem como média ${nomesEMedias[1][0]}`);


const reprovados = nomesPadronizados.filter((nomesEMedias,indice)=>{
  return medias[indice] < 6
})

const aprovados = nomesPadronizados.filter((nomesEMedias,indice)=>{
    return medias[indice] >= 6
})

console.log(`Os alunos que estão reprovados são: ${reprovados}`)
console.log(`Os alunos que estão aprovados saõ: ${aprovados} parabéns a todos`)



