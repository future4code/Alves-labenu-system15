import { Request, Response } from "express";


const createEstudante = async (req: Request, res: Response): Promise<void> =>{
    console.log("chegou em create")
    try {
        const {nome, email, data_nasc, turma_id, hobbies} = req.body
    
        if(!(nome || email || data_nasc || turma_id || hobbies)){
            
            res.statusCode = 400
            throw new Error("Todos os campos precisam estar preenchidos corretamente.")
        }
        
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