import { useEffect, useState } from 'react'

import { deleteCart, getCart, removeItem, updateQty } from '@/api/cart'
import { formatPrice } from '@/utils/formatPrice'

const Cart = ({ logueado }) => {
  const [items, setItems] = useState([])
  const [cargando, setCargando] = useState(true)
  const [guardando, setGuardando] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    getCart({ signal: controller.signal })
      .then((data) => {
        setItems(data)
        setCargando(false)
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setError('No se pudo cargar el carrito. Verificá que el servidor esté iniciado.')
          setCargando(false)
        }
      })
    return () => controller.abort()
  }, [])

  const modificar = async (accion) => {
    if (!logueado || guardando) return
    setGuardando(true)
    setError('')
    try {
      await accion()
      setItems(await getCart())
    } catch {
      setError('No se pudo actualizar el carrito. Intentá nuevamente.')
    } finally {
      setGuardando(false)
    }
  }

  const cantidad = items.reduce((total, item) => total + item.cantidad, 0)
  const total = items.reduce((suma, item) => suma + item.precio * item.cantidad, 0)

  return (
    <section>
      <h2>Carrito</h2>
      {!logueado && <p>Iniciá sesión para modificar el carrito.</p>}
      {cargando && <p role="status">Cargando carrito...</p>}
      {error && <p role="alert">{error}</p>}
      {!cargando && !error && items.length === 0 && <p>El carrito está vacío.</p>}
      {items.map((item) => (
        <article className="card item-carrito" key={item.id}>
          <h3>{item.nombre}</h3>
          <p>Precio unitario: {formatPrice(item.precio)}</p>
          <p>Cantidad: {item.cantidad}</p>
          <p>Subtotal: {formatPrice(item.precio * item.cantidad)}</p>
          <div className="acciones">
            <button
              type="button"
              aria-label={`Restar uno de ${item.nombre}`}
              disabled={!logueado || guardando || item.cantidad <= 1}
              onClick={() => modificar(() => updateQty(item.id, item.cantidad - 1))}
            >
              <span className="material-symbols-outlined" aria-hidden="true">remove</span>
            </button>
            <button
              type="button"
              aria-label={`Sumar uno de ${item.nombre}`}
              disabled={!logueado || guardando}
              onClick={() => modificar(() => updateQty(item.id, item.cantidad + 1))}
            >
              <span className="material-symbols-outlined" aria-hidden="true">add</span>
            </button>
            <button
              type="button"
              aria-label={`Eliminar ${item.nombre}`}
              disabled={!logueado || guardando}
              onClick={() => modificar(() => removeItem(item.id))}
            >
              <span className="material-symbols-outlined" aria-hidden="true">delete</span>
            </button>
          </div>
        </article>
      ))}
      {!cargando && items.length > 0 && (
        <div className="resumen-carrito" aria-live="polite">
          <p>Productos: {cantidad}</p>
          <p><strong>Total: {formatPrice(total)}</strong></p>
          <button
            type="button"
            disabled={!logueado || guardando}
            onClick={() => modificar(deleteCart)}
          >
            <span className="material-symbols-outlined" aria-hidden="true">delete_sweep</span>{' '}
            Vaciar carrito
          </button>
        </div>
      )}
    </section>
  )
}

export default Cart
