import { useState } from "react"

export default function formulario() {
    
    const [value,setValeu] = useState("inicial")

    return (
        <div>
            <input type="text" value={value} onChange={e => setValeu(e.target.value)} name="text" id="text" />
        </div>
    )
}