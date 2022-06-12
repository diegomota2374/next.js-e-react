export default function ContadorDisplay(props) {
    return(
        <div style={{
            height: "100px",
            width: "100px",
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "dimgray",
            borderRadius: "50%",
            margin:"10px",
        }}>
            {props.numero}
        </div>
    )
}