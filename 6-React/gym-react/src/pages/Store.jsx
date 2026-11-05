import { useEffect, useState } from 'react'

import { addToCart } from '@/api/cart'
import { getProducts } from '@/api/products'
import Card from '@/components/Card'
import ProductDetail from '@/components/ProductDetail'
import { formatPrice } from '@/utils/formatPrice'

const Store = ({ logueado }) => {
  const [productos, setProductos] = useState([])
  const [seleccionado, setSeleccionado] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [guardando, setGuardando] = useState(false)
  const [error, setError] = useState('')
  const [mensaje, setMensaje] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    getProducts({ signal: controller.signal })
      .then((data) => {
        setProductos(data)
        setCargando(false)
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setError('No se pudo cargar la tienda. Verificá que el servidor esté iniciado.')
          setCargando(false)
        }
      })
    return () => controller.abort()
  }, [])

  const agregar = async (producto) => {
    if (!logueado || guardando) return
    setGuardando(true)
    setError('')
    setMensaje('')
    try {
      await addToCart(producto)
      setMensaje(`${producto.nombre} agregado al carrito.`)
      setSeleccionado(null)
    } catch {
      setError('No se pudo agregar el producto al carrito.')
      setSeleccionado(null)
    } finally {
      setGuardando(false)
    }
  }

  return (
    <section>
      <h2>Tienda</h2>
      {!logueado && <p>Iniciá sesión para agregar productos al carrito.</p>}
      {cargando && <p role="status">Cargando productos...</p>}
      {error && <p role="alert">{error}</p>}
      {mensaje && <p role="status">{mensaje}</p>}
      <div className="cards">
        {productos.map((producto) => (
          <Card key={producto.id} titulo={producto.nombre} subtitulo={producto.categoria}>
            <img className="producto-imagen" src={`/products/${producto.imagen}`} alt={producto.nombre} />
            <p>{formatPrice(producto.precio)}</p>
            <div className="acciones">
              <button type="button" onClick={() => setSeleccionado(producto)}>Ver detalle</button>
              {logueado && (
                <button type="button" disabled={guardando} onClick={() => agregar(producto)}>
                  Agregar al carrito
                </button>
              )}
            </div>
          </Card>
        ))}
      </div>
      {seleccionado && (
        <ProductDetail
          producto={seleccionado}
          onClose={() => setSeleccionado(null)}
          onAdd={agregar}
          logueado={logueado}
          guardando={guardando}
        />
      )}
    </section>
  )
}

export default Store
