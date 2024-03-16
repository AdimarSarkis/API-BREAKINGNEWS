const userService = require("../services/user.service");

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

const findById =  (req, res) => {
  const user = req.user; // pega o user do middleware

  res.send(user);
};

const update = async (req, res) => {
  // pega os campos do body
  const { name, username, email, password, avatar, background } = req.body;

  if (!name && !username && !email && !password && !avatar && !background) {
    res.status(400).send({ message: "Submit at least one fields for update" });
  }

  const {id, user} = req; // pega do middleware


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
