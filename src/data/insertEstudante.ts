import Estudante from "../types";
import connection from "./connection";

const insertEstudante = async (estudante: Estudante):Promise<void> =>{
    try {
        await connection("estudante")
        .insert(estudante)

    } catch (error: any) {
        console.log(error.sqlMessage || error.message);
        throw new Error(
            `Ocorreu um erro com a inserção de dados, verifique os dados enviados e tente novamente. 
            Dica: faça o um get e certifique-se de que o usuário realmente não existe antes de adicionar.
            `)
    }
}

export default insertEstudante