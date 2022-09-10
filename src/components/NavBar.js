import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold ms-4" href="#">
            Nuevos Rumbos Pasteleria
          </a>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto me-4">
              <li class="nav-item">
                <a class="nav-link fw-bold" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" href="#">
                  Galeria
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" href="#">
                  Quienes Somos
                </a>
                </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    //................................
  );
}

export default NavBar;
