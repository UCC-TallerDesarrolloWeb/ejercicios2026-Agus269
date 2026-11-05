import yoga from '@/assets/home/yoga.webp'
import funcional from '@/assets/home/funcional.jpg'

export const activities = [
  {
    id: '1',
    nombre: 'Taekwondo',
    descripcion: 'Arte marcial coreana',
    imagen: '/home/taekwondo.jpg',
    horarios: [
      { dia: 2, 'hora-inicio': '18:30', 'hora-fin': '20:00' },
      { dia: 4, 'hora-inicio': '18:30', 'hora-fin': '20:00' },
    ],
  },
  {
    id: '2',
    nombre: 'Zumba',
    descripcion: 'Ritmos latinos',
    imagen: '/home/zumba.jpg',
    horarios: [
      { dia: 1, 'hora-inicio': '19:30', 'hora-fin': '20:30' },
      { dia: 3, 'hora-inicio': '19:30', 'hora-fin': '20:30' },
    ],
  },
  {
    id: '3',
    nombre: 'Yoga',
    descripcion: 'Flexibilidad y relajación',
    imagen: yoga,
    horarios: [{ dia: 2, 'hora-inicio': '10:00', 'hora-fin': '11:00' }],
  },
  {
    id: '4',
    nombre: 'Funcional',
    descripcion: 'Entrenamiento de fuerza y resistencia',
    imagen: funcional,
    horarios: [{ dia: 5, 'hora-inicio': '18:00', 'hora-fin': '19:00' }],
  },
]

export const diasSemana = [
  'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado',
]
