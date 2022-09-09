import app from "./app";
import createEstudante from "./endpoints/createEstudante";
import createTurma from "./endpoints/createTurma";
import getEstudante from "./endpoints/getEstudante";
import putEstudante from "./endpoints/putEstudante";

app.post("/estudante", createEstudante)

app.get("/estudante", getEstudante)

app.put("/estudante", putEstudante)

app.post('/criar-turma',createTurma)

