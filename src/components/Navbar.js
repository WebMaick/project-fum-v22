import "./styles/navbar.css"

export const Navbar = () => {
  return (
    <nav className="nav__container">
      <div className="nav__content">
        <div className="nav__logo">
          <img
            src="https://images.pexels.com/photos/10013191/pexels-photo-10013191.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="logo"
          />
          <div className="nav__logo-title">
            <h5 className="nav__logo-title">FUM</h5>
            <h6 className="nav__logo-desc">Frente de Unidad del Magisterio</h6>
          </div>
        </div>

        <ul className="nav__links">
          <li>
            <a href="#">Quienes Somos</a>
          </li>
          <li>
            <a href="#">Cursos</a>
          </li>
          <li>
            <a href="#">Contactos</a>
          </li>
          <li>
            <button className="btn btn__primary">Login</button>
          </li>
        </ul>

        <div className="nav__icon hidden">X</div>
      </div>
    </nav>
  )
}
