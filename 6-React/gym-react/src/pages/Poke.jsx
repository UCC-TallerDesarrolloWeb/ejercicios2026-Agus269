import { useEffect, useState } from 'react'

import PokeCard from '@/components/PokeCard'

const Poke = () => {
  const [pokemons, setPokemons] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    const fetchAllPokemons = async () => {
      try {
        const data = []
        for (let id = 1; id <= 20; id++) {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
            signal: controller.signal,
          })
          if (!response.ok) throw new Error('No se pudo consultar PokeAPI.')
          const pokemon = await response.json()
          data.push(pokemon)
        }
        setPokemons(data)
        setCargando(false)
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError('No se pudieron cargar los Pokémon. Intentá nuevamente más tarde.')
          setCargando(false)
        }
      }
    }

    fetchAllPokemons()
    return () => controller.abort()
  }, [])

  return (
    <section>
      <h2>Pokémon</h2>
      <p>Los primeros 20 Pokémon de PokeAPI.</p>
      {cargando && <p role="status">Cargando Pokémon...</p>}
      {error && <p role="alert">{error}</p>}
      <div className="cards">
        {pokemons.map((pokemon) => <PokeCard key={pokemon.id} pokemon={pokemon} />)}
      </div>
    </section>
  )
}

export default Poke
