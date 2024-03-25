import User from "../models/User.js";
import jwt from "jsonwebtoken";

// encontrar o user aplicando o filtro no email
const loginService = (email) =>
  User.findOne({ email: email }).select("+password");

const generateToken = (id) =>
  jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 }); //token de sessão do usuario

export { loginService, generateToken };