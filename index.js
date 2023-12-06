const express = require("express");
const product = require("./api/product");

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const port = 3000;

app.use("/meu-curso-online", product);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`O servidor está rodando em http://localhost:${port}`);
});
