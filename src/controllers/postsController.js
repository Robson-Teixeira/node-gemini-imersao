import fs from "fs";
import { getAllPosts, createPost } from "../models/postsModel.js";

export async function listPosts (req, res) {
    const posts = await getAllPosts();
    res.status(200).json(posts);
}

export async function postNewPost (req, res) {
    const newPost = req.body;
    
    try {
        const postCreated = await createPost(newPost);
        res.status(200).json(postCreated);
    } catch (erro) {
        console.log(erro.message);
        res.status(500).json({"Erro":"Falha interna no servidor!"});
    }
}

export async function uploadPicture (req, res) {
    const newPost = req.body;
    
    try {
        const postCreated = await createPost(newPost);
        const pictureUpdated = `uploads/${postCreated.insertedId}.png`;
        fs.renameSync(req.file.path, pictureUpdated);
        res.status(200).json(postCreated);
    } catch (erro) {
        console.log(erro.message);
        res.status(500).json({"Erro":"Falha interna no servidor!"});
    }
}
