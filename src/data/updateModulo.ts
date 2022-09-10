import { connection } from "../data/connection";

export async function updateModulo(id: string, modulo: string): Promise<void> {
    try {
        await connection("turma")
        .update({ modulo: modulo })
        .where({id})

    } catch (error: any) {
        console.log(error)
        throw new Error(`Um erro inesperado aconteceu :/.`)
    }
    
}