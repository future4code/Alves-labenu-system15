import { Request, Response } from "express-serve-static-core"
import insertDocente from "../../data/docente/insertDocente"
import insertEspecialidades from "../../data/docente/insertEspecialidades"
import { Docente, Especialidades } from "../../types/docente"


const createDocente = async (req: Request, res: Response): Promise<void> => {

    try {
        const { nome, email, data_nasc, turma_id, especialidade } = req.body
        let docente_id = Date.now().toString()

        if (!(nome || email || data_nasc || turma_id || especialidade)) {

            res.statusCode = 422
            throw new Error("Todos os campos precisam estar preenchidos corretamente.")
        }

        const docente: Docente = {
            id: docente_id,
            nome,
            email,
            data_nasc,
            turma_id
        }
        const Especialidades: Especialidades = { especialidade, docente_id }

        await insertDocente(docente)

        await insertEspecialidades(Especialidades)

        res.send("Docente adicionado com suceso!")

    } catch (error: any) {
        if (typeof error === "string") {

            res.send(error)
        } else {

            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }
    }
}

export default createDocente