import express from "express";
import userRoute from "./src/routes/user.route.js";
import connectDatabase from "./src/database/db.js";
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
const port = 3000;

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
