import express from "express";
import connectDatabase from "./src/database/db.js";
import dotenv from "dotenv";

import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";
import newsRoute from "./src/routes/news.route.js";

// ROTA
// Method HTTP - CRUD(CREATE - post, READ - get, UPDATE - put/patch, DELETE)
// GET: Pega um info
// POST: Cria uma info
// PUT: Altera toda a info
// PATCH: Altera parte da info
// DELETE: Apaga uma info

// Name - Um identificador da rota
// Function (Callback) - Responsável por executar algum comando

dotenv.config(); // converte tudo para string
// sempre coloca o dotenv.config onde executa os código com a variavel de ambiente

const app = express();
const port = process.env.PORT || 3000; // PEGA A PORTA DO SERVIDOR, SE NÃO TIVER, PEGA 3000

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/news", newsRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
