import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    aprovaEstudante(estudante, curso) {
        return `Estudante ${estudante} passou no curso de ${curso}`;
    }
}

const novoDocente = new Docente('Mariana', 'm@m.com', '2020-01-02');
console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante('Juliana', 'JS'));
