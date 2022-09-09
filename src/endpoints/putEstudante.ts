import { Request, Response } from "express-serve-static-core";
import updateEstudante from "../data/updateEstudante";

const putEstudante = async (req: Request, res: Response): Promise<void> =>{
    try {
        console.log("entrou no put estudante")
        const {aluno_id, turma_id} = req.body

        if(!(aluno_id || turma_id)){
            res.statusCode = 422
            throw new Error("Por favor preencha todos os campos corretamente.")
        } 

        await updateEstudante(aluno_id, turma_id)

    } catch (error: any) {
        if (typeof error === "string") {

            res.send(error)
        } else {
    
            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }
       }
    }

export default putEstudante