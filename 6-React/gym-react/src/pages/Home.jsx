import Card from '@/components/Card'
import { activities } from '@/data/activities'

const Home = () => {
  return (
    <section>
      <h2>Actividades del gimnasio</h2>
      <div className="cards">
        {activities.map((actividad) => (
          <Card key={actividad.id} titulo={actividad.nombre} subtitulo={actividad.descripcion}>
            <img src={actividad.imagen} alt={`Clase de ${actividad.nombre}`} />
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Home
