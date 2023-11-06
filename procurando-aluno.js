const alunos = ["Ana", "João", "Mari", "Douglas"];
const medias = [8, 6.5, 7, 9];

const alunosEMedias = [alunos, medias];

function exibeNomeEMedia(aluno) {
    if(alunosEMedias [0].includes(aluno)){
        const [alunos, medias] = alunosEMedias
        const indice = alunosEMedias [0].indexOf(aluno)
        const mediaDoAluno = alunosEMedias[1][indice];
        console.log(`${aluno} tem a média ${mediaDoAluno}`)
    }else{
        (`aluno não encontrado`);
    }
}

exibeNomeEMedia("Ana");