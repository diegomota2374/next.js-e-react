export default function Estilo(props){
    return(
        <div>
            <h1 style={{backgroundColor: props.numero >= 0 ? "green" : "violet"}}>texto</h1>
        </div>
    )
}