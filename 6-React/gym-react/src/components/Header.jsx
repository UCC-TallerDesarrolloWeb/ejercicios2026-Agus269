import { NavLink } from 'react-router-dom'

const Header = ({ logueado, cerrarSesion }) => {
  return (
    <header>
      <h1>Gym React</h1>
      <nav aria-label="Navegación principal">
        <NavLink to="/">Inicio</NavLink>{' '}
        <NavLink to="/actividades">Actividades</NavLink>{' '}
        <NavLink to="/poke">Pokémon</NavLink>{' '}
        {logueado ? (
          <button type="button" onClick={cerrarSesion}>Cerrar sesión</button>
        ) : (
          <NavLink to="/login">Ingresar</NavLink>
        )}
      </nav>
    </header>
  )
}

export default Header
