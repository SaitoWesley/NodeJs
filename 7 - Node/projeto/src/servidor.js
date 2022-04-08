const porta = 3003;
     
const express = require("express");
const app = express();
const bancoDeDados = require("./bancoDeDados");
 
app.use(express.json());
 
app.get("/produtos", (req, res) => {
  res.send(bancoDeDados.getProdutos()); //aqui o metodo send converte o objeto para JSON automaticamente
});
 
app.get("/produtos/:id", (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id));
});
 
app.post("/produtos", (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto); //onde eu acho que está o erro!!!!
});
 
app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}.`);
});