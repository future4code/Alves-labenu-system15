export type Estudante = {
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string
}

export type Hobbies = {
    hobbies: string,
    estudante_id: string
}