import React from 'react'
import "../stylesheets/NavBar.css"

export const NavBar = () => {
  return (
    <div>
      <div className='contenedor-1'>
        <div className='navegacion'>
          <div className='cont-logo-titulo'>
         <img className='imagen' src="./public/logo.png" alt=""/>
         <h2 className='titulo-h2'>Extensions</h2> 
          </div>
         <button className='btn-mode'>⏾</button>
       </div>
       
      </div>
    </div>
  )
}
