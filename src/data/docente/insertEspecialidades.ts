import { Especialidades } from "../../types/docente";
import connection from "../connection";

const insertEspecialidades = async (especialidade: Especialidades): Promise<void> => {
    try {
        await connection("especialidades")
            .insert(especialidade)

    } catch (error: any) {
        console.log(error.sqlMessage || error.message);
        throw new Error("Certifique-se de que os dados estão corretos.")
    }
}

export default insertEspecialidades