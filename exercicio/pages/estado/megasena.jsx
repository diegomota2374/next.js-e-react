import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"
import { mega } from "../../functions/mega"

export default function megasena() {

    const [qtde,setQuat] = useState(6)
    const [numero,setNumero] = useState(mega(qtde))

    function renderNumeros(){
        // renderisa uma lista
        return numero.map(
            numero => 
                 <ContadorDisplay key={numero} numero={numero}/>
            
            )
    }

    return (
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column"
        }
        }>
            <h1>MegaSena</h1>
            <div style={{
                display:"flex",
            }}>
                {renderNumeros()}
            </div>
            <div>
                <input type="number" value={qtde} 
                min={6} max={20} onChange={() => setNumero(mega(qtde))} />
                
                <button onClick={() => setNumero(mega(qtde))}>Gerar Aposta</button>
            </div>
        </div>
    )
}