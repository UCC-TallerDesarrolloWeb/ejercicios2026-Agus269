const Card = ({ titulo, subtitulo, children }) => {
  return (
    <article className="card">
      <h3>{titulo}</h3>
      <p>{subtitulo}</p>
      {children}
    </article>
  )
}

export default Card
