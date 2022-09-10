import { Request, Response } from "express";
import insertEstudante from "../../data/estudante/insertEstudante";
import { Estudante, Hobbies } from "../../types/estudante";


const createEstudante = async (req: Request, res: Response): Promise<void> => {
    try {
        const { nome, email, data_nasc, turma_id, hobbies } = req.body
        let estudante_id = Date.now().toString()

        if (!(nome || email || data_nasc || turma_id || hobbies)) {

            res.statusCode = 422
            throw new Error("Todos os campos precisam estar preenchidos corretamente.")
        }

        const estudante: Estudante = {
            id: estudante_id,
            nome,
            email,
            data_nasc,
            turma_id
        }
        const Hobbies: Hobbies = { hobbies, estudante_id }

        await insertEstudante(estudante, Hobbies)

        res.send("Aluno adicionado com suceso!")

    } catch (error: any) {
        if (typeof error === "string") {

            res.send(error)
        } else {

            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }
    }
}

export default createEstudante