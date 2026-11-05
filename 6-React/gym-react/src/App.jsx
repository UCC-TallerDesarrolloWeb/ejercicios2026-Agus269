import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Actividades from './Actividades'
import Login from './Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/actividades" element={<Actividades />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App