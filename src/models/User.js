import mongoose from "mongoose";
import bcrypt from "bcrypt"; // criptografar senha
// criando um modelo de uma tabela para tornar o mongoDB relacional
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    avatar: {
        type: String,
        require: true
    },
    background: {
        type: String,
        require: true
    }
});
// essa função não pode ser arrow function
UserSchema.pre("save", async function(next){ // antes de salvar faça a seguinte função
    this.password = await bcrypt.hash(this.password, 10);
    next();
})
const User = mongoose.model("User", UserSchema);

export default User;  