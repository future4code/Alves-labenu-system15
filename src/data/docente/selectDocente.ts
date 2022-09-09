import { Docente } from "../../types/docente";
import connection from "../connection";

const selectDocente = async (nome: string): Promise<any> => {

    try {
        const docentes: Docente[] = await connection("docentes")
            .where("nome", "LIKE", `%${nome ? nome : ""}%`)

        return docentes

    } catch (error: any) {
        throw new Error(`Um erro inesperado aconteceu :/.`)
    }
}

export default selectDocente