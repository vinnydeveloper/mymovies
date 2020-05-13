const express = require("express");
// importanto o objeto de configuração do multer para usar na rota
const upload = require("../config/upload");
//importanto controller dos filmes
const movieController = require("../controllers/movieController");

const router = express.Router();

// Rota principal que exibira os filmes
router.get("/", movieController.index);

// rota que irá receber as informações do formulario e o poster do filme. E primeiro ela passara pro multer salvar o arquivo pra depois passar ao controller
router.post("/cadastrar", upload.any(), movieController.store);
// Rota para marca que ja assitiu um filme
router.get("/assitir/:id", movieController.checkWatched);

module.exports = router;
