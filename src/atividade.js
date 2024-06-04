const joao = new Aluno ("Joao Victor", 9);
const ana = new Aluno ("Ana", 8);
const fred = new Aluno ("Fred", 4);

function Aluno (nome, nota) {
    this.nome = nome;
    this.nota = nota;

    if (nota <= 6) {
        return Aluno
    }
}

const todosAlunos = [joao.nome, ana.nome, fred.nome];
console.log(todosAlunos);