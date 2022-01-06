import "./styles/logout.css"
import { Link } from "react-router-dom"
import logofum from "../assets/svg/logo.svg"
import submit from "../assets/svg/submit.svg"
import cancel from "../assets/svg/cancel.svg"

export const Logout = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="log__container">
      <div className="log__content logout__content">
        <img className="log__content-img" src={logofum} alt="logo-fum" />
        <form onSubmit={handleSubmit}>
          <h2 className="formui__title">
            <span>[</span> Registrate <span>]</span>
          </h2>
          <div className="form__group-tablet">
            <div className="form-group">
              <label htmlFor="nombre">Ingresar tu Nombre</label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Ej. Nombre Completo "
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cedula">Ingresar tu C.I.</label>
              <input
                type="number"
                name="cedula"
                id="cedula"
                placeholder="Ej. 1234567 "
                autoComplete="off"
              />
            </div>
          </div>

          <div className="form__group-tablet">
            <div className="form-group">
              <label htmlFor="telefono">Numero de celular</label>
              <input
                type="number"
                name="telefono"
                id="telefono"
                placeholder="Ej. 77244000 "
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="distrito">Distrito Educativo</label>
              <input
                type="text"
                name="distrito"
                id="distrito"
                placeholder="Ej. DM-27 "
                autoComplete="off"
              />
            </div>
          </div>

          <div className="form__group-tablet">
            <div className="form-group">
              <label htmlFor="colegio">Unidad Educativa</label>
              <input
                type="text"
                name="colegio"
                id="colegio"
                placeholder="Colegio Juancito "
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Crea tu Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Ingrese su password"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="form__group-tablet">
            <div className="form-group">
              <label htmlFor="nivel">Seleccione el Nivel</label>
              <select name="nivel" id="nivel">
                <option value=""> -- Selecciones Nivel --</option>
                <option value="1">Inicial en Familia Comunitaria</option>
                <option value="2">Primaria Comunitaria Vocacional</option>
                <option value="3">Secundaria Comunitaria Productiva</option>
                <option value="4">Alternativa y Especial</option>
                <option value="5">Administrativos</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="especialidad">Seleccione el Especialidad</label>
              <select name="especialidad" id="especialidad">
                <option value=""> -- Selecciones Especialidad --</option>
                <option value="1">Lenguas Castellanas y Originarias</option>
                <option value="2">Lengua Extranjera</option>
                <option value="3">Ciencias Sociales</option>
                <option value="4">Educacion Fisica y Deportes</option>
                <option value="5">Educacion Musical</option>
                <option value="6">Artes Plasticas y Visuales</option>
                <option value="7">Matematicas</option>
                <option value="8">Tecnica Tecnologia</option>
                <option value="9">Biologia Geografia</option>
                <option value="10">Fisica</option>
                <option value="11">Quimica</option>
                <option value="12">Cosmovisiones, Filosofia Psicologia</option>
                <option value="13">Valores Espirituales y Religiones</option>
              </select>
            </div>
          </div>

          <div className="form__btns form__btns-logout">
            <button className="btn btn__primary" type="submit">
              <span>REGISTRARSE</span>
              <img src={submit} alt="logo-submit" />
            </button>
            <button className="btn btn__danger" type="reset">
              <span>CANCELAR</span>
              <img src={cancel} alt="logo-submit" />
            </button>
          </div>

          <div className="form__desc">
            <p>
              Ya tienes una Cuenta?
              <Link className="form__reg" to="/login">
                Inicia Sesión
              </Link>
            </p>
            <small>Frente de Unidad del Magisterio</small>
          </div>
        </form>
      </div>
    </div>
  )
}
