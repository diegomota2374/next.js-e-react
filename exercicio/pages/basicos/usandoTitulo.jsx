import Titulo from "../../components/Titulo"

export default function usandoTitulo(){
    return(
        <div>
            <Titulo
                principal = "Página de Cadastro"
                secundario = "Incuir, alterar e excluir conteudo"
            />
        
            <Titulo
                principal = "Página de Cadastro"
                secundario = "Incuir, alterar e excluir conteudo"
                pequeno 
                />
        </div>
    )
}