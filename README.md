# My Movies

Projeto criado em node.js com express para exercicio da turma do santander coders

# Funcionalidades!

  - Adicionar a um cátalogo os filmes que você quer ou já assitiu
  - Marcar como visto filme que você cadastrou
  
### Instalação

É necessário ter [Node.js](https://nodejs.org/) v10+ to run.

Clone esse projeto e faça os seguintes passos:

```sh
$ cd mymovies
$ npm install
```
Depois da instalação de dependencias, crie um banco de dados vazio e faça as configurações de conexão no arquivo config/database.js e continue com os seguintes comandos:
```sh
$ npx sequelize migrate
$ node index.js
```
Assim será criado as tabelas necessária e irá subir o servidor. Para acessar bastar entrar http://localhost:3000
