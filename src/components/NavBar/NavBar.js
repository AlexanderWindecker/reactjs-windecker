import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold ms-4" href="#">
            Nuevos Rumbos Pasteleria
          </a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto me-4">
              <li className="nav-item">
                <a className="nav-link fw-bold" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  Galeria
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  Quienes Somos
                </a>
                </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
        <CartWidget/>
      </nav>
      
    </div>

    //................................
  );
}

export default NavBar;

