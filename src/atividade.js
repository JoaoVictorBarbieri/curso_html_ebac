const joao = new Aluno ("Joao Victor", 9);
const ana = new Aluno ("Ana", 8);
const fred = new Aluno ("Fred", 4);

function Aluno (nome, nota) {
    this.nome = nome;
    this.nota = nota;
}
const todosAlunos = [joao, ana, fred];

function filtraAlunosAprovados(aluno){
    return aluno.nota >= 6;
}
const alunosAprovados = todosAlunos.filter(filtraAlunosAprovados);
console.log(alunosAprovados);