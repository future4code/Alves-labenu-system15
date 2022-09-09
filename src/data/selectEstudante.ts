import Estudante from "../types";
import connection from "./connection";

const selectEstudante = async (nome: string): Promise<any> => {

    try {
        const aluno = await connection("estudante")
            .where("nome", "LIKE", `%${nome ? nome : ""}%`)

        return aluno

    } catch (error: any) {
        console.log(error.sqlMessage || error.message);
        throw new Error(
            `Urro inesperado aconteceu :/.`)
    }
}

export default selectEstudante