import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Actividades from './Actividades'
import Home from './Home'
import Layout from './Layout'
import Login from './Login'

const App = () => {
  const [logueado, setLogueado] = useState(false)

  const cerrarSesion = () => {
    setLogueado(false)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout
              logueado={logueado}
              cerrarSesion={cerrarSesion}
            />
          }
        >
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login setLogueado={setLogueado} />}
          />
          <Route
            path="/actividades"
            element={<Actividades logueado={logueado} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App