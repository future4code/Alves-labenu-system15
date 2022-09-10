import { TurmaBancoDeDados,tipageTurma} from "../types/turma";
import { connection } from "../data/connection";

export async function buscarTurmas(): Promise<TurmaBancoDeDados[] | undefined> {
    const result = await connection()
    .select("*")
    .from("turma")
    .where("modulo", "like", "%*%")

    if (result) {
        const tipoTurma = result.map((turma) => {
            return tipageTurma(turma)
        })
        return tipoTurma
    } else {
        return undefined
    }
}

export async function buscarTurma(idTurma: string): Promise<TurmaBancoDeDados | undefined> {
    const [result] = await connection("turma").where("id", `${idTurma}`)

    if (result) {
        return tipageTurma(result)
    } else {
        return undefined
    }

}