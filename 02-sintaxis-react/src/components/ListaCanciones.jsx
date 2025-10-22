export function ListaCanciones ({songName, artist, miniature}) {
    return (
        <>
        <h1> {songName} </h1>
        <p> {artist} </p>
        <img src= {miniature} alt="" width= "150"/>
        </>
    )
}