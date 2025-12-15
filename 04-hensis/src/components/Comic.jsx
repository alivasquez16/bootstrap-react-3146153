export const Comic = () => {
  return (
    <>
      <section className="d-flex align-items-end bgblack" style={{ backgroundImage: "url('../public/fondo-comic.png')", backgroundSize: "cover", backgroundPosition: "center", height: "100vh" }}>
        <div className="container text-white pb-5">
          <h1 className="fw-bold display-5">SALDO NEGATIVO</h1>
          <div className="row mt-4">
            <div className="col-12 col-md-6">
              <h5>Intención</h5>
              <p>Saldo Negativo nace como una denuncia visual a los sistemas que deshumanizan.</p>
            </div>
            <div className="col-12 col-md-6">
              <h5>Storyline</h5>
              <p>En una sociedad que pone precio a la existencia, Zaya se une a Mylo e Inara.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-5 text-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-lg-4">
              <h5 className="mb-4">Episodios</h5>

              <div className="d-flex flex-column gap-3">
                <img src="../public/capitulo-1-comic.png" className="img-fluid rounded" alt="Capítulo 1" />
                <img src="../public/capitulo-1-comic.png" className="img-fluid rounded" alt="Capítulo 1" />
                <img src="../public/capitulo-1-comic.png" className="img-fluid rounded" alt="Capítulo 1" />
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <h5 className="mb-4">Personajes</h5>
              <div className="row g-3">
                <div className="col-6">
                  <div className="ratio ratio-1x1 rounded overflow-hidden">
                    <img src="../public/zaya-1.png" className="w-100 h-100" style={{ objectFit: "cover" }} alt="Zaya"/>
                  </div>
                </div>
                <div className="col-6">
                  <div className="ratio ratio-1x1 rounded overflow-hidden">
                    <img src="../public/zaya-2.png" className="w-100 h-100" style={{ objectFit: "cover" }} alt="Zaya"/>
                  </div>
                  <h2>Zaya</h2>
                </div>
                <div className="col-6">
                  <div className="ratio ratio-1x1 rounded overflow-hidden">
                    <img src="../public/inara-1.png" className="w-100 h-100" style={{ objectFit: "cover" }} alt="Inara"/>
                  </div>
                  <h2>Inara</h2>
                </div>
                <div className="col-6">
                  <div className="ratio ratio-1x1 rounded overflow-hidden">
                    <img src="../public/inara-2.png" className="w-100 h-100" style={{ objectFit: "cover" }} alt="Inara"/>
                  </div>
                </div>
                <div className="col-6">
                  <div className="ratio ratio-1x1 rounded overflow-hidden">
                    <img src="../public/mylo-1.png" className="w-100 h-100" style={{ objectFit: "cover" }} alt="Mylo"/>
                  </div>
                </div>
                <div className="col-6">
                  <div className="ratio ratio-1x1 rounded overflow-hidden">
                    <img src="../public/mylo-2.png" className="w-100 h-100" style={{ objectFit: "cover" }} alt="Mylo" />
                  </div>
                  <h2>Mylo</h2>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <h5 className="mb-4">Estado del proyecto</h5>
              <ul className="list-unstyled lh-lg">
                <li>• La verdad está lista para transmitirse.</li>
                <li>• Los datos han sido filtrados.</li>
                <li>• Los primeros episodios llegarán a tus pantallas muy pronto.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}