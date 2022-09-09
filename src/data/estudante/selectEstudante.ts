import { Estudante } from "../../types/estudante";
import connection from "../connection";

const selectEstudante = async (nome: string): Promise<any> => {

    try {
        const estudantes: Estudante[] = await connection("estudante")
            .where("nome", "LIKE", `%${nome ? nome : ""}%`)

        return estudantes

    } catch (error: any) {
        throw new Error(`Um erro inesperado aconteceu :/.`)
    }
}

export default selectEstudante