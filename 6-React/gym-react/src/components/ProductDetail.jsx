import { useEffect, useRef } from 'react'

import { formatPrice } from '@/utils/formatPrice'

const ProductDetail = ({ producto, onClose, onAdd, logueado, guardando }) => {
  const dialogRef = useRef(null)

  useEffect(() => {
    dialogRef.current.showModal()
  }, [])

  return (
    <dialog ref={dialogRef} onClose={onClose} aria-labelledby="producto-titulo">
      <h2 id="producto-titulo">{producto.nombre}</h2>
      <img className="producto-imagen" src={`/products/${producto.imagen}`} alt={producto.nombre} />
      <p>{producto.description}</p>
      <p>Marca: {producto.marca}</p>
      <p>Categoría: {producto.categoria}</p>
      <p>Talles: {producto.talle.join(', ')}</p>
      <p>{formatPrice(producto.precio)}</p>
      <a href={producto.web} target="_blank" rel="noreferrer">Ver en la página de la marca</a>
      <div className="acciones">
        {logueado && (
          <button type="button" disabled={guardando} onClick={() => onAdd(producto)}>
            Agregar al carrito
          </button>
        )}
        <button type="button" onClick={onClose}>Cerrar detalle</button>
      </div>
    </dialog>
  )
}

export default ProductDetail
