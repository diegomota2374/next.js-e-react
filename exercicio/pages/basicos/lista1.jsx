function criaLista(amount = 10){
    let lista = [];
    for(let i = 1; i <= amount; i++){
       lista.push(<span>{i},</span>) 
    }
    return lista
}

export default function lista1(){
    return(
    <div>
        <h1>teste</h1>
        {criaLista(20)}
    </div>
    )
}