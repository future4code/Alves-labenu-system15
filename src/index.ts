import app from "./app";
import createEstudante from "./endpoints/createEstudante";
import createTurma from "./endpoints/createTurma";

app.post("/estudante", createEstudante)
app.post('/criar-turma',createTurma)

