import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'

const Layout = ({ logueado, cerrarSesion }) => {
  return (
    <>
      <Header logueado={logueado} cerrarSesion={cerrarSesion} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
