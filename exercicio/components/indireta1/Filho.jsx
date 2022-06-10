export default function Filho(props) {
    console.log(props.funcao)
    return (
        <div>
            <h1>filho</h1>
            <button onClick={() => props.funcao("Passei no enem!")}>Falar com o filho</button>
        </div>
    )
}