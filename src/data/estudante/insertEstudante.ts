import { Estudante, Hobbies } from "../../types/estudante";
import connection from "../connection";

const insertEstudante = async (estudante: Estudante, hobbies: Hobbies): Promise<void> => {
    try {
        await connection("estudante")
            .insert(estudante)

        await connection("hobbies")
            .insert(hobbies)

    } catch (error: any) {
        throw new Error(
            `Ocorreu um erro com a inserção de dados, verifique os dados enviados e tente novamente.`)
    }
}

export default insertEstudante