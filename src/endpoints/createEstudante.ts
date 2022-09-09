import { Request, Response } from "express";
import insertEstudante from "../data/insertEstudante";
import Estudante from "../types";


const createEstudante = async (req: Request, res: Response): Promise<void> => {
    console.log("chegou em create")
    try {
        const { nome, email, data_nasc, turma_id, hobbies } = req.body

        const estudante: Estudante = {
            id: Date.now().toString(),
            nome,
            email,
            data_nasc,
            turma_id
        }

        if (!(nome || email || data_nasc || turma_id)) {

            res.statusCode = 400
            throw new Error("Todos os campos precisam estar preenchidos corretamente.")
        }

        await insertEstudante(estudante)

        res.send("Aluno adicionado com suceso!")

    } catch (error: any) {
        if (typeof error === "string") {

            res.send(error)
        } else {

            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }
    }
}

export default createEstudante