import express from "express";
import userRoute from "./src/routes/user.route.js";
import connectDatabase from "./src/database/db.js";
import dotenv from "dotenv";
dotenv.config(); // converte tudo para string
// sempre coloca o dotenv.config onde executa os código com a variavel de ambiente

// ROTA
// Method HTTP - CRUD(CREATE - post, READ - get, UPDATE - put/patch, DELETE)
// GET: Pega um info
// POST: Cria uma info
// PUT: Altera toda a info
// PATCH: Altera parte da info
// DELETE: Apaga uma info

// Name - Um identificador da rota
// Function (Callback) - Responsável por executar algum comando
const app = express();
const port = process.env.PORT || 3000; // PEGA A PORTA DO SERVIDOR, SE NÃO TIVER, PEGA 3000

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
