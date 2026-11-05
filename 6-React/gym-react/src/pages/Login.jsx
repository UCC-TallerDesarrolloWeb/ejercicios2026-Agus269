import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '@/styles/Login.scss'

const Login = ({ setLogueado }) => {
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const ingresar = (event) => {
    event.preventDefault()

    if (usuario === 'admin' && password === 'admin') {
      console.log('Login OK')
      setLogueado(true)
      navigate('/actividades')
    } else {
      console.log('Login Incorrecto')
    }
  }

  return (
    <section className="login">
      <form onSubmit={ingresar}>
        <h2>Login</h2>

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

        <button type="submit">Ingresar</button>
      </form>
    </section>
  )
}

export default Login
