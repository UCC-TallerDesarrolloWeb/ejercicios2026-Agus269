import Card from '@/components/Card'
import { activities, diasSemana } from '@/data/activities'

const Actividades = ({ logueado }) => {
  return (
    <section>
      <h2>Actividades</h2>
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
