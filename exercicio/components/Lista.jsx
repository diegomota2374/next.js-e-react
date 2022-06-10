export default function Lista(props) {
    return (
        <div>
            <h1>Lista de algo</h1>
            <ul style={{listStyle:"none"}}>{props.children}</ul>
        </div>
    )
}