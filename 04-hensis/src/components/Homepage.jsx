import '../stylesheets/Homepage.css'

export const Homepage = () => {
  return (
    <>
      <div className="contenedor-completo">
        <div className="seccion-01 bg-gradient-fondo text-white d-flex flex-column align-items-center justify-content-start pt-5" style={{ width: '100%', height: '175vh' }}>
          <div className="descripcion-general-comic container d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5 py-5">
            <div className="col-12 col-lg-5 mx-auto" style={{ maxWidth: '500px' }}>
              <h2 className="fw-bold fs-1">Saldo Negativo</h2>
              <h2 className="fw-bold fs-1">Comic Interactivo</h2>
              <p className="mt-4  text-justify">
                Retrata un mundo donde el valor humano se mide por el aporte económico mensual.
                Quienes no alcanzan la cuota son excluidos del sistema y marcados como "ciudadanos en saldo negativo".
              </p>
            </div>
            <div className="col-12 col-lg-5 d-flex justify-content-center">
              <img src="../public/teaser-profesional.png" alt="Teaser Comic" className="img-fluid" />
            </div>
          </div>
          <div className="text-center py-5">
            <h1>DESCRIPCIÓN DE LOS CAPÍTULOS</h1>
          </div>
          <div className="container-fluid py-5" style={{width:'100%'}}>
            <div className="container position-relative">
              <div className="row align-items-center">
                <div className="col-2 col-md-1 d-none d-md-flex justify-content-center">
                  <button type="button" className="btn btn-outline-light rounded-circle" aria-label="Anterior">‹</button>
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center mb-4 mb-md-0">
                  <img src="../public/vistazo-cap.png" alt="" className="img-fluid shadow" style={{width:'90%', maxWidth: "100%" }}/>
                </div>
                <div className="col-12 col-md-5 text-center text-md-start text-white">
                  <p className="mb-5 text-align-justify">
                    Zaya descubre que ha sido oficialmente excluida del sistema tras una fría notificación.
                    En un solo día, pierde derechos, voz y pertenencia. Su caída no es violenta, sino silenciosa.
                    Así comienza su vida como una “olvidada”, enfrentando la brutal indiferencia de una sociedad que ya no la reconoce.
                  </p>
                  <div className="d-flex justify-content-center justify-content-md-start">
                    <button className="btn btn-light">Ir al capítulo</button>
                  </div>
                </div>
                <div className="col-2 col-md-1 d-none d-md-flex justify-content-center">
                  <button type="" className="btn btn-outline-light rounded-circle" aria-label="">›</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  SECCIÓN 02 */}
        <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-center gap-lg-5 py-5">
          <div className="col-12 col-lg-6 mx-auto" style={{ maxWidth: '500px' }}>
            <h2 className="fw-bolder fs-2">Una historia original de Hensis</h2>
            <p className="mt-5" style={{ lineHeight: '25px' }}>
              "Porque contar historias no es solo entretener, es provocar algo más profundo."
            </p>
            <p className="mt-4" style={{ lineHeight: '25px' }}>
              Saldo Negativo nace desde nuestra visión de crear narrativas con impacto.
              Sigue leyendo y adéntrate en este universo postapocalíptico creado por nosotras!
            </p>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <img src="../logo-libro.png" alt="Logo Libro" className="img-fluid" />
          </div>
        </div>

        {/* SECCIÓN 03 */}
        <div className='seccion-03'>
          <div style={{ height: '40vh', justifyItems: 'center', alignContent: 'center' }}>
            <h2 style={{ fontFamily: 'sans-serif', fontSize: '48px', fontWeight: 'bold' }}>Tienda</h2>
            <p className='mt-3 p-4'>Nos tomamos el tiempo para crear con sentido. Aquí puedes ver un adelanto del proceso detrás de lo que pronto estará en tus manos.</p>
          </div>
          <div style={{ padding: '2rem', position: 'relative' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
              <img className='m-h' style={{ width: '8%', position: 'absolute' }} src="../public/H verde.png" alt="" />
              <img style={{ width: '83%' }} src="../public/gorra.jpeg" alt="" />
              <div className='bg-turquesa-oscuro m-t p-2' style={{ width: '23%', height: '16vh', position: 'absolute' }}>
                <p style={{ color: 'white', fontSize: '17px', textAlign: 'center' }}>Gorra negra con estampado del logo de Hensis</p>
                <p className='m-2' style={{ color: 'white', fontSize: '17px' }}>34.000 cop</p>
              </div>

            </div>
            <div className='mt-3' style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '30px' }}>
              <img style={{ width: '19%' }} src="../public/camisa-ojos.jpeg" alt="" />
              <div className='bg-turquesa-oscuro m-t2 p-2' style={{ width: '18%', height: '13vh', position: 'absolute' }}>
                <p style={{ color: 'white', fontSize: '15px', textAlign: 'center' }}>Camisa blanca con estampado </p>
                <p className='m-3' style={{ color: 'white', fontSize: '14px' }}>34.000 cop</p>
              </div>

              <img style={{ width: '19%' }} src="../public/camisa-alas.jpeg" alt="" />
              <div className='bg-turquesa-oscuro m-t3 p-2' style={{ width: '18.2%', height: '13vh', position: 'absolute' }}>
                <p style={{ color: 'white', fontSize: '15px', textAlign: 'center' }}>Camisa blanca con estampado de alas</p>
                <p className='precio' style={{ color: 'white', fontSize: '14px' }}>34.000 cop</p>
              </div>

              <img style={{ width: '19%' }} src="../public/sudadera.jpeg" alt="" />
              <div className='bg-turquesa-oscuro m-t4 p-2' style={{ width: '18.2%', height: '13vh', position: 'absolute' }}>
                <p style={{ color: 'white', fontSize: '15px', textAlign: 'center' }}>Sudadera negra con estampado de HENSIS</p>
                <p className='precio2' style={{ color: 'white', fontSize: '14px' }}>34.000 cop</p>
              </div>

              <img style={{ width: '19%' }} src="../public/bolso.jpeg" alt="" />
              <div className='bg-turquesa-oscuro m-t5 p-2' style={{ width: '18.2%', height: '13vh', position: 'absolute' }}>
                <p style={{ color: 'white', fontSize: '15px', textAlign: 'center' }}>Mochila negra con estampado Hensis </p>
                <p className='precio3' style={{ color: 'white', fontSize: '14px' }}>44.000 cop</p>
              </div>

            </div>
            <img className='mb-h' style={{ position: 'absolute', width: '8%' }} src="../public/H roja.png" alt="" />
          </div>
          <div className='d-flex justify-content-center align-items-cente' style={{ width: '100%', height: '30vh' }}>
            <button className='boton-tienda-homepage bg-black  text-white  align-self-center p-3' style={{ border: 'none', height: '30%' }}>Visita la tienda</button>
          </div>
        </div>
      </div>
    </>
  )
}
