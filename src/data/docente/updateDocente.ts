import connection from "../connection";

const updateDocente = async (id: string, turma_id: string): Promise<void> => {
    try {
        await connection("docentes")
            .update({ turma_id: turma_id })
            .where({ id })

    } catch (error: any) {
        throw new Error(`Um erro inesperado aconteceu :/.`)
    }
}

export default updateDocente