import If from "../../components/If";


export default function condicional2(){
    let numero = 5
    return (
        <div>
          <If teste={numero % 2 === 0}>
            <h1>o numero {numero} e par</h1>
          </If>
          <If teste={numero % 2 === 1}>
            <h1>o numero {numero} e ímpar</h1>
          </If>
        </div>
    )
}