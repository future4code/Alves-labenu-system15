import { Request, Response } from "express-serve-static-core";
import updateEstudante from "../../data/estudante/updateEstudante";

const putEstudante = async (req: Request, res: Response): Promise<void> => {
    try {
        const { aluno_id, turma_id } = req.body

        if (!(aluno_id || turma_id)) {
            res.statusCode = 422
            throw new Error("Por favor preencha todos os campos corretamente.")
        }

        await updateEstudante(aluno_id, turma_id)

        res.send("Estudante transferido com sucesso!")

    } catch (error: any) {
        if (typeof error === "string") {

            res.send(error)
        } else {

            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }
    }
}

export default putEstudante