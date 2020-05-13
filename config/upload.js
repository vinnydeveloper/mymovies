const multer = require("multer");
const path = require("path");

// Criando um storage que é pra dizer onde  deverá ser salvo os arquivos e com qual nome
const storage = multer.diskStorage({
  // definindo onde será salvo o arquivo
  destination: function (req, file, cb) {
    cb(null, path.join("public", "images"));
  },
  // definindo que nome terá o arquivo
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Dizendo para o multer que é pra usar o nosso storage
const upload = multer({ storage: storage });

// Exportando o objeto upload que contem os métodos de upload
module.exports = upload;
