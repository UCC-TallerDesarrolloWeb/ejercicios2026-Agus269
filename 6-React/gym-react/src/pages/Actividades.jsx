import { useEffect, useState } from 'react'

import { request } from '@/api/client'
import Card from '@/components/Card'
import { diasSemana } from '@/data/activities'

const Actividades = ({ logueado }) => {
  const [activities, setActivities] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    request('activities', { signal: controller.signal })
      .then((data) => {
        setActivities(data)
        setCargando(false)
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setError('No se pudieron cargar las actividades. Verificá que el servidor esté iniciado.')
          setCargando(false)
        }
      })

    return () => controller.abort()
  }, [])

  return (
    <section>
      <h2>Actividades</h2>
      {cargando && <p role="status">Cargando actividades...</p>}
      {error && <p role="alert">{error}</p>}
      <div className="cards">
        {activities.map((actividad) => (
          <Card key={actividad.id} titulo={actividad.nombre} subtitulo={actividad.descripcion}>
            <ul>
              {actividad.horarios.map((horario) => (
                <li key={`${actividad.id}-${horario.dia}`}>
                  {diasSemana[horario.dia]}: {horario['hora-inicio']} a {horario['hora-fin']}
                </li>
              ))}
            </ul>
            {logueado && <button type="button">Inscribirse</button>}
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Actividades
