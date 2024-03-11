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
/* app.get("/", (req, res) => {
    const soma = 1 + 7;
    //res.json(soma)
    res.send({soma: soma});
})*/

app.use("/soma", userRoute)
app.listen(3000);