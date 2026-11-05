import { request } from '@/api/client'

export const getCart = (options = {}) => request('cart', options)

export const updateQty = (id, cantidad) => request(`cart/${id}`, {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ cantidad }),
})

export const addToCart = async (producto) => {
  const cart = await getCart()
  const existente = cart.find((item) => item.productoId === producto.id)

  if (existente) return updateQty(existente.id, existente.cantidad + 1)

  return request('cart', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      productoId: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
      cantidad: 1,
    }),
  })
}

export const removeItem = (id) => request(`cart/${id}`, { method: 'DELETE' })

export const deleteCart = async () => {
  // JSON Server elimina por id; para vaciar la colección se borra cada ítem.
  const cart = await getCart()
  for (const item of cart) {
    await removeItem(item.id)
  }
}
