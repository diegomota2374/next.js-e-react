import Filho from "./Filho";

export default function Pai(props){
    return (
        <div>
           <Filho nome="Diego" familia={props.familia}/>
           <Filho nome="Isa" familia={props.familia}/>
            <Filho {...props} nome="Atonio" />
        </div>
    )
}