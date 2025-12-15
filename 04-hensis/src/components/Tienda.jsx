export const Tienda = () => {
    return (
        <>
            <section className="py-5 text-center">
                <div className="container">
                    <div className="row justify-content-center align-items-center mb-4">
                        <div className="col-2 col-md-1 d-flex justify-content-end">
                            <img src="../public/ala-buho-izquierda.png" alt="ala izquierda" style={{ width: "60px" }} />
                        </div>
                        <div className="col-8 col-md-6">
                            <p className="fw-semibold mb-0">¡Muy pronto podrás llevar contigo parte de nuestras historias!</p>
                            <p className="fw-semibold mt-4">¡Lo que viene!</p>
                        </div>
                        <div className="col-2 col-md-1 d-flex justify-content-start">
                            <img src="../public/ala-buho.png" alt="ala derecha" style={{ width: "60px" }} />
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row g-4 justify-content-center">
                        <div className="col-12 col-md-4">
                            <div className="position-relative">
                                <img src="../public/sudadera.jpeg" className="img-fluid w-100" style={{ opacity: 0.6 }} alt="" />
                                <div className="position-absolute bottom-0 start-0 w-100 p-2 text-white">
                                    <p className="m-0">Buzo negro con estampado de búho</p>
                                    <p className="m-0 fw-bold">34.000 COP</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="position-relative">
                                <img src="../public/camisa-alas.jpeg" className="img-fluid w-100" alt="" />
                                <div className="position-absolute bottom-0 start-0 w-100 p-2 text-white">
                                    <p className="m-0">Camisa blanca con estampado de alas</p>
                                    <p className="m-0 fw-bold">34.000 COP</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="position-relative">
                                <img src="../public/camisa-ojos.jpeg" className="img-fluid w-100" style={{ opacity: 0.6 }} alt="" />
                                <div className="position-absolute bottom-0 start-0 w-100 p-2 text-white">
                                    <p className="m-0">Camisa blanca con estampado</p>
                                    <p className="m-0 fw-bold">34.000 COP</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="py-5 mt-5">
                    <div className="container">
                        <div className="row justify-content-center align-items-start g-5">
                            <div className="col-12 col-md-6 text-center">
                                <p className="fw-semibold">¿Quieres enterarte cuando lancemos nuestra primera colección?</p>
                                <div className="position-relative d-flex justify-content-center">
                                    <form className="bg-black text-white p-4 rounded w-100" style={{ maxWidth: "400px" }}>
                                        <fieldset>
                                            <div className="mb-3 text-start">
                                                <label className="form-label">Nombre:</label>
                                                <input type="text" className="form-control" placeholder="Tu nombre" />
                                            </div>
                                            <div className="mb-3 text-start">
                                                <label className="form-label">Correo:</label>
                                                <input type="email" className="form-control" placeholder="Tu correo" />
                                            </div>
                                            <button className="btn btn-secondary w-50">Enviar</button>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 text-center">
                                <p className="fw-semibold mb-4">¿Qué te gustaría encontrar en la tienda?</p>
                                <div className="position-relative d-flex justify-content-center">
                                    <form className="bg-black text-white p-4 rounded w-100" style={{ maxWidth: "400px" }}>
                                        <fieldset>
                                            <div className="mb-3 text-start">
                                                <textarea className="form-control" rows="" placeholder=""></textarea>
                                            </div>
                                            <button className="btn btn-secondary w-75">Enviar sugerencia</button>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
