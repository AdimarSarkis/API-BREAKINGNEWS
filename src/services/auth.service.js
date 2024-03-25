import User from "../models/User.js";
// encontrar o user aplicando o filtro no email
const loginService = (email) =>
  User.findOne({ email: email }).select("+password");

export { loginService };
