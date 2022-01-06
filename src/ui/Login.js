import React from "react"
import { Link } from "react-router-dom"
import logofum from "../assets/svg/logo.svg"
import submit from "../assets/svg/submit.svg"

export const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="login__container">
      <div className="login__content">
        <img src={logofum} alt="logo-fum" />
        <form onSubmit={handleSubmit}>
          <h2 className="login__title">Iniciar Sesión</h2>
          <div className="login__form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Ej. fum@gmail.com"
              autoComplete="off"
              autoFocus
            />
          </div>

          <div className="login__form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Ingrese su password"
              autoComplete="off"
            />
          </div>

          <div className="login__form-btns">
            <button className="btn btn__danger" type="submit">
              <span>ACCEDER</span>
              <img src={submit} alt="logo-submit" />
            </button>
          </div>

          <div className="login__form-desc">
            <p>
              No tienes una Cuenta?
              <Link className="login__form-reg" to="/logout">
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
