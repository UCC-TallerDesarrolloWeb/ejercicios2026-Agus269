import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './styles/Login.scss'

const Login = () => {
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const ingresar = (event) => {
    event.preventDefault()

    if (usuario === 'admin' && password === 'admin') {
      console.log('Login OK')
      navigate('/actividades')
    } else {
      console.log('Login Incorrecto')
    }
  }

  return (
    <main className="login">
      <form onSubmit={ingresar}>
        <h1>Login</h1>

        <label htmlFor="usuario">Usuario</label>
        <input
          id="usuario"
          type="text"
          value={usuario}
          onChange={(event) => setUsuario(event.target.value)}
        />

        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">
          Ingresar
        </button>
      </form>
    </main>
  )
}

export default Login