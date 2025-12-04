import '../stylesheets/Homepage.css'

export const Homepage = () => {
  return (
    <>
      <div className='contenedor-completo' style={{height:'500vh'}}>
        <div className='seccion-01 bg-gradient-fondo text-white' style={{ width: '100%', height: '180vh', }}>
          <div className='descripcion-general-comic' style={{width: '100%', padding: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10%'}}>
            <div className='textos-1' style={{width: '37%', }}> 
              <h2 style={{fontFamily:'sans-serif', fontSize:'40px', fontWeight: 'bold'}}>Saldo Negativo</h2> 
              <h2 style={{fontFamily:'sans-serif', fontSize:'40px', fontWeight: 'bold'}}>Comic Interactivo</h2> <br/>
              <p style={{textAlign: 'justify'}}>Retrata un mundo donde el valor humano se mide
                por el aporte económico mensual. Quienes no alcanzan la cuota son
                excluidos del sistema y marcados como "ciudadanos en saldo
                negativo"</p>
            </div>
            <div><img src="../public/teaser-profesional.png" alt="" /></div>
          </div>
          <div style={{height: '20vh', justifyItems: 'center', alignContent: 'center'}}><h1>DESCRIPCIÓN DE LOS CAPÍTULOS</h1></div>
          <div className='seccion-02'>
            
          </div>
        </div>
        <div style={{display:'flex', padding:'8rem', gap: '10%',}}>
          <div style={{width:'53%', alignContent: 'center'}}>
            <h2 style={{fontFamily:'sans-serif', fontSize:'34px', fontWeight: 'bolder'}}>Una historia original de Hensis</h2> <br/>
            <p style={{lineHeight:'25px'}}>"Porque contar historias no es solo entretener, es provocar algo más profundo."</p> <br/>
            <p style={{lineHeight: '25px'}}>Saldo Negativo nace desde nuestra visión de crear narrativas con impacto. Sigue leyendo y adéntrate en este universo postapocalíptico creado por nosotras!</p>
          </div>
          <div style={{justifyItems:'center', alignContent: 'center'}}><img src="../logo-libro.png" alt="" /></div>
        </div>
        <div className='seccion-03'>
          <div style={{height:'40vh', justifyItems:'center', alignContent: 'center'}}>
            <h2 style={{fontFamily:'sans-serif', fontSize:'48px', fontWeight: 'bold'}}>Tienda</h2> 
            <p className='mt-3'>Nos tomamos el tiempo para crear con sentido. Aquí puedes ver un adelanto del proceso detrás de lo que pronto estará en tus manos.</p>
          </div> 
          <div style={{padding: '2rem',position: 'relative'}}>
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
              <img className='m-h' style={{width:'8%', position:'absolute'}} src="../public/H verde.png" alt="" />
              <img style={{width: '83%'}} src="../public/gorra.jpeg" alt="" />
              <div className='bg-turquesa-oscuro m-t p-2' style={{width: '23%', height: '16vh', position: 'absolute'}}>
                <p style={{color: 'white', fontSize: '17px', justifyContent: 'center'}}>Gorra negra con estampado del logo de Hensis</p>
                <p style={{color: 'white', fontSize: '17px'}}>34.000 cop</p>
              </div>
              
            </div> 
            <div className='mt-3' style={{width:'100%', display: 'flex', justifyContent: 'center', gap:'30px'}}>
              <img style={{width: '19%'}} src="../public/camisa-ojos.jpeg" alt="" />
              <img style={{width: '19%'}} src="../public/camisa-alas.jpeg" alt="" />
              <img style={{width: '19%'}} src="../public/sudadera.jpeg" alt="" />
              <img style={{width: '19%'}} src="../public/bolso.jpeg" alt="" />
            </div>
            <img className='mb-h' style={{position: 'absolute', width: '8%'}} src="../public/H roja.png" alt="" />
          </div>
        </div>
      </div>


    </>
  )
}
