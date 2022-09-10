import app from "./app";
import createEstudante from "./endpoints/estudante/createEstudante";
import createTurma from "./endpoints/createTurma";
import getTurma from "./endpoints/getTurma";
import putModulo from "./endpoints/putModulo";
import getEstudante from "./endpoints/getEstudante";
import putEstudante from "./endpoints/putEstudante";
import createDocente from "./endpoints/docente/createDocente";
import getDocentes from "./endpoints/docente/getDocente";
import putDocente from "./endpoints/docente/putDocente";


app.get("/selecionar-turmas",getTurma)

app.post('/criar-turma',createTurma)

app.put("/mudanca-modulo",putModulo)

app.get("/estudante", getEstudante)

app.post("/estudante", createEstudante)

app.put("/estudante", putEstudante)

app.get("/docentes", getDocentes)

app.post("/docente", createDocente)

app.put("/docentes", putDocente)
