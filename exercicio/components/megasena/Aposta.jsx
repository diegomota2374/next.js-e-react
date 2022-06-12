export default function Aposta(props){


    function calAposta(){
        return mega()
    }

    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            alignItems:"center",
            height:"70px",
        }}>
            <span>{calAposta()}</span>
            <button onClick={calAposta}>Apostar</button>
        </div>
    )
}