import { Docente } from "../../types/docente";
import connection from "../connection";

const insertDocente = async (docente: Docente): Promise<void> => {
    try {
        await connection("docentes")
            .insert(docente)

    } catch (error: any) {
        throw new Error(
            `Ocorreu um erro com a inserção de dados, verifique os dados enviados e tente novamente. 
            Dica: faça o um get e certifique-se de que o docente realmente não existe antes de adicionar.
            `)
    }
}

export default insertDocente