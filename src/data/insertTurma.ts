import { Turma} from "../types/turma";
import { connection } from "../data/connection";

export async function insertTurma(turma: Turma): Promise<void> {
    const { id, nome } = turma;

    await connection("turma").insert({
        id,
        nome
    })
}