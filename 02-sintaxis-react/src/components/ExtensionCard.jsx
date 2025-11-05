import "../stylesheets/ExtensionCard.css"

export const ExtensionCard = ({cardTitle, cardImage, cardDescription}) => {
  return (
    <>
    <div className="contenedor">
        <div className="contenedor-2">
          <img className="imagen-1" src={cardImage} alt="" />
          <div className="contenedor-textos">
            <h2>{cardTitle}</h2>
            <p>{cardDescription}</p>
          </div>
        </div>
         <div className="contenedor-btn">
          <button className="boton-2">Remove</button>
         </div>
      </div>
    </>
  )
}
  
