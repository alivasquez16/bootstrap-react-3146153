// Crear funcion
export function UserCard ({image, userName}) {
    return (
        <>
        <h1> {userName} </h1>
        <img src={image} alt="" gwidth="150"/>
        <small> {userName} </small>
        </>
    )
}