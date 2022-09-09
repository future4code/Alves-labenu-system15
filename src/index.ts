import app from "./app";
import createEstudante from "./endpoints/estudante/createEstudante";
import createTurma from "./endpoints/createTurma";
import getEstudante from "./endpoints/estudante/getEstudante";
import putEstudante from "./endpoints/estudante/putEstudante";
import createDocente from "./endpoints/docente/createDocente";
import getDocentes from "./endpoints/docente/getDocente";
import putDocente from "./endpoints/docente/putDocente";

app.get("/estudante", getEstudante)

app.post("/estudante", createEstudante)

app.put("/estudante", putEstudante)

app.post('/criar-turma',createTurma)

app.get("/docentes", getDocentes)

app.post("/docente", createDocente)

app.put("/docentes", putDocente)