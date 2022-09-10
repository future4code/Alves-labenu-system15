import app from "./app";
import createTurma from "./endpoints/createTurma";
import getTurma from "./endpoints/getTurma";
import putModulo from "./endpoints/putModulo";
import createDocente from "./endpoints/docente/createDocente";
import getDocentes from "./endpoints/docente/getDocente";
import putDocente from "./endpoints/docente/putDocente";
import EstudanteController from "./endpoints/estudante/estudanteController";

const estudanteController = new EstudanteController()

app.get("/selecionar-turmas",getTurma)

app.post('/criar-turma',createTurma)

app.put("/mudanca-modulo",putModulo)

app.get("/estudante", estudanteController.getEstudante)

app.post("/estudante", estudanteController.createEstudante)

app.put("/estudante", estudanteController.putEstudanteTurma)

app.get("/docentes", getDocentes)

app.post("/docente", createDocente)

app.put("/docentes", putDocente)
