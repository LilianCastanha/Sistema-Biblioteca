# Sistema-Biblioteca
Entrega Final Projeto Mensal 4 Faculdade

Sistema de Biblioteca em JavaScript

Este projeto tem como objetivo praticar a programação orientada a objetos, trabalhando com classes, herança, e interação entre objetos.

Uma classe base chamada EntidadeBibliografica com os seguintes atributos:

Atributos:
-titulo
-autor
-anoPublicacao
-codigo
-emprestado: booleano
-usuarioEmprestimo: usuário (objeto) que pegou emprestado (null se não estiver emprestado)
Métodos:
+emprestar(usuario)
+devolver()

 Duas classes que herdam de EntidadeBibliografica: Livro e Revista. A classe Livro deve ter um atributo adicional chamado genero.

Livro
Atributos:
-genero
Metodos:
+informacoes()

Revista
Atributos:
-edicao
Metodos:
+informacoes()

Uma classe Usuario com os seguintes atributos:

Atributos:
-nome
-registroAcademico
-dataNascimento (no formato "YYYY-MM-DD") 

Uma classe Biblioteca com os seguintes atributos:

Atributos:
-acervo: array para armazenar as entidades bibliográficas
-usuarios: array para armazenar os usuários

Métodos:
+adicionarItem(item): Adiciona uma entidade bibliográfica ao acervo.
+listarAcervo(): Exibe o acervo da biblioteca.
+adicionarUsuario(usuario): Adiciona um usuário à biblioteca.
+emprestarItem(codigo, registroAcademico): Empréstimo de um item para um usuário.
+devolverItem(codigo): Devolução de um item ao acervo.

Instanciados Livros e Revista a partir da api:
https://api-biblioteca-mb6w.onrender.com/acervo

Para instanciar inicialmente foram criados:
 1 objeto biblioteca
 5 objetos Usuarios

Html (adicional) - Prompts para adicionar livros e Revistas, usuários, para fins de registro, visualização no console.
 
