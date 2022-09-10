import { Request, Response } from "express-serve-static-core";
import updateDocente from "../../data/docente/updateDocente";

const putDocente = async (req: Request, res: Response): Promise<void> => {
    try {
        const { docente_id, turma_id } = req.body

        if (!(docente_id || turma_id)) {
            res.statusCode = 422
            throw new Error("Por favor preencha todos os campos corretamente.")
        }

        await updateDocente(docente_id, turma_id)
        res.send("Docente transferido com sucesso!")

    } catch (error: any) {
        if (typeof error === "string") {

            res.send(error)
        } else {

            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }
    }
}

export default putDocente