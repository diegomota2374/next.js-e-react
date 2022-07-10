import { QuestaoModel } from "../model/questao";
const quet: Array<QuestaoModel> = [
    {
        id: 306,
        enunciado:'Qual bicho transmite a doença de chagas?',
        respostas:[
            {valor:'Abelha',certa:false, revelada: false},
            {valor:'Barata',certa:false, revelada: false},
            {valor:'Pulga',certa:false, revelada: false},
            {valor:'Barbeiro',certa:true, revelada: false}
        ]
    },
    {
        id: 202,
        enunciado: 'Qual fruto é conhecido no norte e nordeste como "jerimum"?',
        respostas: [
            {valor: 'Caju', certa: false, revelada: false},
            {valor: 'Côco', certa: false, revelada: false},
            {valor: 'Chuchu', certa: false, revelada: false},
            {valor: 'Abóbora', certa: true, revelada: false}
        ]
    },
    {
        id: 203,
        enunciado: 'Qual é o coletivo de cães?',
        respostas: [
            {valor: 'Manada', certa: false, revelada: false},
            {valor: 'Alcateia', certa: false, revelada: false},
            {valor: 'Rebanho', certa:false, revelada: false},
            {valor: 'Matilha', certa: true, revelada: false}
        ]
    },
    {
        id: 204,
        enunciado: 'Qual é o triângulo que tem todos os lados diferentes?',
        respostas: [
            {valor: 'Equilátero', certa: false, revelada: false},
            {valor: 'Isóceles', certa: false, revelada: false},
            {valor: 'Trapézio', certa:false, revelada: false},
            {valor: 'Escaleno', certa: true, revelada: false}
        ]
    }
    
]

export default quet
