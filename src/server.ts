import express, { response } from "express";

const app = express();

/**
 * GET = Buscas
 * POST = Criar
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação especifica
 */

app.get("/", (request, response) =>{
    return response.json({message: "Óla NLW 05",})
})
app.post("/users", (request,response) =>{return response.json({message: "Usuário salvo com sucesso!"})});

app.listen(3333, () => console.log('Server is running on port 3333'));
