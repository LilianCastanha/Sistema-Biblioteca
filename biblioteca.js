class EntidadeBibliografica {
    constructor(titulo, autor, anoPublicacao, codigo,) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.codigo = codigo;
        this.emprestado = false;
        this.usuarioEmprestimo = null;
    }

    emprestar(usuario) {
        if (this.emprestado) {
            console.log("Livro indisponível, o livro já está emprestado");
        }
        else {
            this.emprestado = true;
            this.usuarioEmprestimo = usuario;
            console.log("Livro emprestado");
        }
    }

    devolver() {
        if (!this.emprestado) {
            console.log("Livro não está emprestado");
        }
        else {
            this.emprestado = false;
            this.usuarioEmprestimo = null;
            console.log("Livro devolvido com sucesso");
        }
    }
}

//Subclasse Revista

class Revista extends EntidadeBibliografica {
    constructor(titulo, autor, anoPublicacao, codigo, edicao, emprestado, usuarioEmprestimo) {
        super(titulo, autor, anoPublicacao, codigo, edicao, emprestado, usuarioEmprestimo);
        this.edicao = edicao;
    }

    informacoesRevista() {
        console.log("Título: " + this.titulo + " Autor: " + this.autor + " Ano de Publicação: " + this.anoPublicacao + " Código: " + this.codigo + "emprestado: " + this.emprestado + " Usuário do Empréstimo: " + this.usuarioEmprestimo + " Edição: " + this.edicao)
    }

}

//Subclasse Livro

class Livro extends EntidadeBibliografica {
    constructor(titulo, autor, anoPublicacao, codigo, genero, emprestado, usuarioEmprestimo) {
        super(titulo, autor, anoPublicacao, codigo, genero, emprestado, usuarioEmprestimo);
        this.genero = genero;
    }

    informacoesLivro() {
        console.log("Título: " + this.titulo + " Autor: " + this.autor + " Ano de Publicação: " + this.anoPublicacao + " Código: " + this.codigo + " Emprestado: " + this.emprestado + " Usuário do Empréstimo: " + this.usuarioEmprestimo + " Gênero: " + this.genero)
    }
}
const genero = [{
    Acao: "Ação",
    Suspense: "Suspense",
    Comedia: "Comedia",
    Terror: "Terror",
    Ficcao_Científica: " Ficção Científica",
    Policial: "Policial",
    Historia: "Historia",
    Drama: "Drama",
}]


class Usuario {
    constructor(nome, registroAcademico, dataNascimento) {
        this.nome = nome;
        this.registroAcademico = registroAcademico;
        this.dataNascimento = dataNascimento;
    }
}

//Classe Biblioteca

class Biblioteca {
    constructor(acervo = [], usuario = []) {
        this.acervo = [];
        this.usuario = [];
    }

    adicionarItem(item) {
        this.acervo.push(item);
        console.log("Item cadastrado com sucesso");
        console.log(this.acervo);

    }

    adicionarUsuario(usuario) {
        this.usuario.push(usuario);
        console.log("Usuário cadastrado com sucesso");
        console.log(this.usuario);

    }

    listarAcervo(item) {
        this.acervo.forEach(item => {
            console.log(item);
        });
    }

    listarUsuarios() {
        for (let i = 0; i < this.usuario.length; i++) {
            console.log("Nome: " + this.usuario[i].nome + " Registro Acadêmico: " + this.usuario[i].registroAcademico + " Data de Nascimento: " + this.usuario[i].dataNascimento)
        }
    }

    emprestarItem(codigo, registroAcademico) {
        let item = this.acervo.find(item => item.codigo == codigo);
        if (item) {
            let usuario = this.usuario.find(usuario => usuario.registroAcademico == registroAcademico);
            if (usuario) {
                item.emprestar(usuario);
                console.log("Item emprestado com sucesso");
            } else {
                console.log("Usuário não encontrado");
            }
        } else {
            console.log("Item não encontrado");
        }
    }

    devolverItem(codigo, registroAcademico) {

        let item = this.acervo.find(item => item.codigo == codigo);

        if (item) {
            let usuario = this.usuario.find(usuario => usuario.registroAcademico == registroAcademico);
            if (usuario) {
                item.devolver(usuario);
                console.log("Item devolvido com sucesso");
            } else {
                console.log("Usuário não encontrado");
            }
        } else {
            console.log("Item não encontrado");
        }
    }
}

const biblioteca = new Biblioteca();

const usuario1 = new Usuario("Lucas", "2020", "2005/09/10");
const usuario2 = new Usuario("Ana Paula", "2021", "1998/07/01");
const usuario3 = new Usuario("Veronica", "2022", "2000/05/20");
const usuario4 = new Usuario("José", "2023", "2001/01/01");
const usuario5 = new Usuario("Pedro", "2024", "2002/02/02");

const livro1 = new Livro("A arte da Guerra", "Sun Tzu", "2019", "123", "Ação", false, null);
const livro2 = new Livro("Alice no País Das Maravilhas", "Márcio M.Rodrigues", "1998", "456", "Ficção", false, null);
const revista1 = new Revista("Super Interessante", "Abril", "2013", "789", "1ª Edição", false, null);
const revista2 = new Revista("Quatro Rodas", "Abril", "2023", "101", "Edição 776", false, null);

const acervoApi = 'https://api-biblioteca-mb6w.onrender.com/acervo';

function obterDadosApi() {
    fetch(acervoApi)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(item => {
                console.log(item);
            });
        });
}

obterDadosApi();

biblioteca.adicionarUsuario(usuario1);
biblioteca.adicionarUsuario(usuario2);
biblioteca.adicionarUsuario(usuario3);
biblioteca.adicionarUsuario(usuario4);
biblioteca.adicionarUsuario(usuario5);

biblioteca.adicionarItem(livro1);
biblioteca.adicionarItem(livro2);
biblioteca.adicionarItem(revista1);
biblioteca.adicionarItem(revista2);


biblioteca.emprestarItem("123", "2020");
biblioteca.listarAcervo
biblioteca.devolverItem("123", "2020");
biblioteca.listarAcervo();















