// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { embaralhar } from '../../../functions/arrays'
import BancoDeQuestoes from '../bancoDeQuestoes'

export default function handler(req, res) {
    const idSelecionado = +req.query.id

    const unicaQuestaoOuNada = BancoDeQuestoes.filter(questoes => questoes.id === idSelecionado)
   
    if(unicaQuestaoOuNada.length === 1){
        const ids = unicaQuestaoOuNada.map(questao => questao.id)
        res.status(200).json(embaralhar(ids))
    }else{
        res.status(204).send()
    }
}