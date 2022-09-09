import { Request, Response } from "express-serve-static-core";
import selectEstudante from "../../data/estudante/selectEstudante";
import { Estudante } from "../../types/estudante";

const getEstudante = async (req: Request, res: Response): Promise<void> => {

    try {
        let nome = req.query.nome as string

        const estudante: Estudante = await selectEstudante(nome)
        res.send(estudante)

    } catch (error: any) {

        if (typeof error === "string") {

            res.status(404).send(error)
        } else {

            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }
    }
}

export default getEstudante