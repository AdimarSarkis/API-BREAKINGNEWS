const userService = require("../services/user.service");
const mongoose = require("mongoose");
const create = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  // verifica se algum campo requerido não foi preenchido, dessa forma não vai ter processamento gasto sem motivo
  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({ message: "Submit all fields for registration" });
  }

  const user = await userService.createService(req.body);

  if (!user) {
    return res.status(400).send({ message: "Error creating User" });
  }
  res.status(201).send({
    message: "User created successfully",
    user: {
      id: user._id,
      name,
      username,
      email,
      avatar,
      background,
    },
  });
};

const findAll = async (req, res) => {
  const users = await userService.findAllService();

  // com operador ternario:

  users.length === 0
    ? res.status(400).send({ message: "There are no registered users" })
    : res.send(users);
  /*if (users.length === 0) {
    res.status(400).send({ message: "There are no registered users" });
  }
  res.send(users);*/
};

const findById = async (req, res) => {
  const id = req.params.id; // peguei o id

  if (!mongoose.Types.ObjectId.isValid(id)){ // testa o id
    return res.status(400).send({ message: "Invalid ID" });
  }

  const user = await userService.findByIdService(id); // conecta e busca no banco

  !user ? res.status(400).send({ message: "User not find" }) : res.send(user);
};

module.exports = { create, findAll, findById };
