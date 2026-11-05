import Card from '@/components/Card'

const PokeCard = ({ pokemon }) => {
  return (
    <Card
      titulo={`#${pokemon.id} ${pokemon.name}`}
      subtitulo={pokemon.types.map((tipo) => tipo.type.name).join(', ')}
    >
      <img className="pokemon" src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Altura: {pokemon.height / 10} m</p>
      <p>Peso: {pokemon.weight / 10} kg</p>
    </Card>
  )
}

export default PokeCard
