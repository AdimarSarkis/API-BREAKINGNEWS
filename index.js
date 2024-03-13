const express = require("express");
const app = express();
const userRoute = require("./src/routes/user.route")

// ROTA
    // Method HTTP - CRUD(CREATE - post, READ - get, UPDATE - put/patch, DELETE)
        // GET: Pega um info
        // POST: Cria uma info
        // PUT: Altera toda a info
        // PATCH: Altera parte da info
        // DELETE: Apaga uma info

    // Name - Um identificador da rota
    // Function (Callback) - Responsável por executar algum comando 
const port = 3000;
app.use(express.json());
app.use("/user", userRoute)
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));