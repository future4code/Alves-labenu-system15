import { Request, Response } from "express";
import {buscarTurmas} from "../data/buscarTurma";

export default async function getTurma(req: Request, res: Response){
    try {
        
        const turmasAtivas = await buscarTurmas()

        if(!turmasAtivas?.length){
            throw new Error("nao há turmas ativas")
        }
 
        res.status(200).send(turmasAtivas)

    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}