import express from "express";

const app = express();
app.use(express.json());

const posts = [
    { descricao: "Gato brincando", imagem: "https://placecats.com/millie/300/150", id: 1 },
    { descricao: "Gato à noite", imagem: "https://placecats.com/millie/300/150", id: 2 },
    { descricao: "Gato manhoso", imagem: "https://placecats.com/millie/300/150", id: 3 }
  ];

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function findPostById(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get("/posts/:id", (req, res) => {
    const index = findPostById(req.params.id);

    res.status(200).json(posts[index]);
});
