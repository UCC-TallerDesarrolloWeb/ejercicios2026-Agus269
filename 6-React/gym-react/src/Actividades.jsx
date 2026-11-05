const activities = [
  {
    nombre: 'taekwondo',
    descripcion: 'Arte marcial coreana',
    horarios: [
      { dia: 2, 'hora-inicio': '18:30', 'hora-fin': '20:00' },
      { dia: 4, 'hora-inicio': '18:30', 'hora-fin': '20:00' },
    ],
  },
  {
    nombre: 'zumba',
    descripcion: 'Ritmos latinos',
    horarios: [
      { dia: 1, 'hora-inicio': '19:30', 'hora-fin': '20:30' },
      { dia: 3, 'hora-inicio': '19:30', 'hora-fin': '20:30' },
    ],
  },
]

const diasSemana = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
]

const Actividades = () => {
  return (
    <main>
      <h1>Actividades</h1>

      {activities.map((actividad) => (
        <article key={actividad.nombre}>
          <h2>{actividad.nombre}</h2>
          <p>{actividad.descripcion}</p>

          <ul>
            {actividad.horarios.map((horario) => (
              <li key={`${actividad.nombre}-${horario.dia}`}>
                {diasSemana[horario.dia]}: {horario['hora-inicio']} a{' '}
                {horario['hora-fin']}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </main>
  )
}

export default Actividades