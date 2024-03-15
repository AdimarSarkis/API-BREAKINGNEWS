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

  if (!mongoose.Types.ObjectId.isValid(id)) {
    // testa o id
    return res.status(400).send({ message: "Invalid ID" });
  }

  const user = await userService.findByIdService(id); // conecta e busca no banco

  !user ? res.status(400).send({ message: "User not found" }) : res.send(user);
};

const update = async (req, res) => {
  // pega os campos do body
  const { name, username, email, password, avatar, background } = req.body;

  if (!name && !username && !email && !password && !avatar && !background) {
    res.status(400).send({ message: "Submit at least one fields for update" });
  }

  const id = req.params.id; // pega o id para ver se tem uma conta cadastrada

  if (!mongoose.Types.ObjectId.isValid(id)) {
    // testa o id
    return res.status(400).send({ message: "Invalid ID" });
  }

  const user = await userService.findAllService(id);
  // procura o user com base no id, se possuir mostra se não, não
  if (!user) {
    res.status(400).send({ message: "User not found" });
  }

  await userService.updateService(
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
  );

  res.send({message: "User Successufully updated"})
};
module.exports = { create, findAll, findById, update };
