import "./styles/login.css"
import { Link } from "react-router-dom"
import logofum from "../assets/svg/logo.svg"
import submit from "../assets/svg/submit.svg"

export const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="log__container">
      <div className="log__content">
        <img className="log__content-img" src={logofum} alt="logo-fum" />
        <form onSubmit={handleSubmit}>
          <h2 className="log__title">
            <span>[</span> Iniciar Sesión <span>]</span>
          </h2>
          <div className="form-group">
            <label htmlFor="cedula">Número de CI</label>
            <input
              type="number"
              name="cedula"
              id="cedula"
              placeholder="Ej. 4870000"
              autoComplete="off"
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Ingrese su password"
              autoComplete="off"
            />
          </div>

          <div className="form__btns">
            <button className="btn btn__danger" type="submit">
              <span>ACCEDER</span>
              <img src={submit} alt="logo-submit" />
            </button>
          </div>

          <div className="form__desc">
            <p>
              No tienes una Cuenta?
              <Link className="form__reg" to="/logout">
                Registrate
              </Link>
            </p>
            <small>Frente de Unidad del Magisterio</small>
          </div>
        </form>
      </div>
    </div>
  )
}
