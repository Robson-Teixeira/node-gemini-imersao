import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getAllPosts() {
    const db = conexao.db("sample_mflix");
    const collection = db.collection("posts");
    return collection.find().toArray();
}
