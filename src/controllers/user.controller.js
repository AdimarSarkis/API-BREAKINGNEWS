const create = (req, res) => {
    const {name, username, email, password, avatar, background} = req.body;

    // verifica se algum campo requerido não foi preenchido, dessa forma não vai ter processamento gasto sem motivo
    if(!name || !username || !email || !password || !avatar || !background){
        res.status(400).send({"message": "Submit all fields for registration"})
    }

    res.status(201).send({
        message: "User created successfully",
        user: {
            name, 
            username,
            email,  
            avatar, 
            background
        }
    });
}

module.exports = {create};