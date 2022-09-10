import app from "./app";
import createEstudante from "./endpoints/createEstudante";
import createTurma from "./endpoints/createTurma";
import getTurma from "./endpoints/getTurma";
import putModulo from "./endpoints/putModulo";
import getEstudante from "./endpoints/getEstudante";
import putEstudante from "./endpoints/putEstudante";

app.post("/estudante", createEstudante)

app.get("/estudante", getEstudante)

app.put("/estudante", putEstudante)


// TURMA

app.post('/criar-turma',createTurma)

app.get("/selecionar-turmas",getTurma)

app.put("/mudanca-modulo",putModulo)


