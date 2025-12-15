import './App.css'
import { Navbar } from './components/Navbar'
import { Homepage } from './components/Homepage'
import { Footer } from './components/Footer'
import { NuestraMarca } from './components/NuestraMarca'
import { Comic } from './components/Comic'
import { Tienda } from './components/Tienda'

export const App = () => {
    return (
        <>
            <Navbar CambioImage="./public/Logo.png" />
            <Homepage />
            <Footer />
            <Navbar CambioImage="./public/hensis-negro.png" />
            <NuestraMarca />
            <Footer />
            <div className="w-100 comic-section" style={{backgroundImage: "url('../public/fondo-comic.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", minHeight: "100vh"}}>
                <Navbar CambioImage="./public/hensis-blanco.png"/>
                <Comic />
            </div>
            <Footer />
            <Navbar CambioImage="./public/hensis-negro.png" />
            <Tienda />
            <Footer />
        </>
    )
}
