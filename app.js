// Importa o framework Express, usado para criar o servidor e gerenciar rotas
import express from "express";
// Importa as rotas relacionadas a carros (carroRoutes.js)
import carroRoutes from "./routes/carroRoutes.js";

// Cria uma instância do aplicativo Express
const app = express();

// Middlewares
app.use(express.json());

// Rotas
app.use("/carros", carroRoutes);

// Inicializa o servidor para executar na porta 3000
app.listen(3000, () => {
  // Quando o servidor for iniciado, imprime no console que ele está rodando na porta 3000
  console.log("Servidor Rodando com Sucesso na porta 3000");
});
