import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"
import styles from "../../styles/Contador.module.css"

export default function contador() {

    const [value,setValue] = useState(0)

    const inc = () =>  setValue(value + 1) 

    const dec = () =>  setValue(value - 1) 

    return (
        <div className={styles.wrapper}>
            <h1>Contador</h1>
            <ContadorDisplay value={value} />
            <div  className={styles.btn}>
            <button onClick={dec}>-</button>
            <button onClick={inc}>+</button>
            </div>
        </div>
    )
}