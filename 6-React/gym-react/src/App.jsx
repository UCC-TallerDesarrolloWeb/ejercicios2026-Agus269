import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Actividades from '@/pages/Actividades'
import Home from '@/pages/Home'
import Layout from '@/components/Layout'
import Login from '@/pages/Login'
import Poke from '@/pages/Poke'

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
          <Route path="/poke" element={<Poke />} />
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
