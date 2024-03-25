import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    banner: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, // para relacionar com a tabela user
        ref: "User", // colocar exatamente igual com a exportação 
        require: true
    },
    likes: { // outro modo de relacionar tabelas
        type: Array,
        require: true
    },
    comments: {
        type: Array,
        require: true
    }
});

const News = mongoose.model("News", NewsSchema); // é nessas aspas que utilizamos o ref

export default News;