import { connection } from "../data/connection";

export async function updateModulo(idTurma: string, modulo: string): Promise<void> {
    await connection("turma")
    .where("id", `${idTurma}`)
    .update({ modulo })
}