import app from "./app";
import createEstudante from "./endpoints/createEstudante";

app.post("/estudante", createEstudante)