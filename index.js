const express = require("express");
const product = require("./api/product");

const app = express();

const port = 3000;

app.use("/meu-curso-online", product);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`O servidor está rodando em http://localhost:${port}`);
});
