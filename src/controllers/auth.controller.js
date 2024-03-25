import bcrypt from "bcrypt";
import { loginService, generateToken } from "../services/auth.service.js";

const login = async (req, res) => {
  try {
    // formulario preenchido sempre retorna pelo body
    const { email, password } = req.body;

    const user = await loginService(email);

    if(!user){
      res.status(404).send({ message: "User or password not found"});
    }
    // retorna uma Promisse, então é async
    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      return res.status(404).send({ message: "User or password not found" });
    }

    const token = generateToken(user.id);
    res.send({token: token});

  } catch (err) {
    res.status(500).send(err.message);
  }
};

export { login };
