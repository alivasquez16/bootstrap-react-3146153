import '../stylesheets/Navbar.css'

export const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-white">
        <div class="container-fluid bg-white">
        <a class="navbar-brand" href="#" style={{width: '34%'}}><img src="../public/Logo.png" alt="" style={{width: '22%'}}/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav" style={{gap: '45px'}}>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Nuestra Marca</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Comic</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Tienda</a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
