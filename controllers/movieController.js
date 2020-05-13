const { Movie } = require("../models");

const movieController = {
  index: async (req, res) => {
    // Buscando todos os filmes dentro do banco de dados
    const movies = await Movie.findAll();
    // Passando pra vieew a lista de filmes
    return res.render("index", { movies });
  },
  store: async (req, res) => {
    // Recebendo informações do formulario via post
    const { name, description, watched } = req.body;
    // Recebendo informações do arquivo passadas pelo multer
    const [poster] = req.files;
    // Cadastrando o filme no banco por meio do metodo create e passando as infos do formulario
    const newMovie = await Movie.create({
      name,
      poster: poster.filename,
      description,
      watched,
    });
    // Validando se teve algum problema ao criar o filme
    if (!newMovie) {
      return res.render("index", { msg: "Falha ao cadastrar o filme" });
    }
    // Se deu tudo certo até aqui, o usuario será redirecionado a pagina inicial
    return res.redirect("/");
  },
  checkWatched: (req, res) => {
    // Recebendo o id do filme que queremos marcar como assitido
    const { id } = req.params;
    // Atualizando no banco que ja assitiu o filme
    const movie = Movie.update(
      {
        watched: 1,
      },
      {
        where: {
          id,
        },
      }
    );

    // Validando se teve algum problema ao alterar o filme
    if (!newMovie) {
      return res.render("index", { msg: "Falha ao alterar o filme" });
    }
    // Se deu tudo certo até aqui, o usuario será redirecionado a pagina inicial
    return res.redirect("/");
  },
};
module.exports = movieController;
