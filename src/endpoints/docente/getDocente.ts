import { Request, Response } from "express-serve-static-core"
import selectDocente from "../../data/docente/selectDocente"
import { Docente } from "../../types/docente"

const getDocentes = async (req: Request, res: Response): Promise<void> => {

    try {
        let nome = req.query.nome as string

        const docentes: Docente[] = await selectDocente(nome)
        res.send(docentes)

    } catch (error: any) {

        if (typeof error === "string") {

            res.status(404).send(error)
        } else {

            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }
    }
}

export default getDocentes