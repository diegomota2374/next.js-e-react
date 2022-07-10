import { RespostaModel } from "./resposta"

export interface QuestaoModel{
    id?: number
    enunciado: string
    respostas: RespostaModel[]
    acertou?: boolean
    created_at?: string
    updated_at?: string
}