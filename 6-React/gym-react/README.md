# Gimnasio en React

Ejercicios de clase de las unidades 6 y 7, con React, Vite, React Router, Sass y JSON Server.

## Ejecutar

```bash
npm ci
cp .env.example .env
npm run services
```

En otra terminal, desde esta misma carpeta:

```bash
npm run dev
```

Abrir la dirección que indique Vite (normalmente http://localhost:5173).
Usuario y contraseña de práctica: `admin` / `admin`.
En PowerShell se puede copiar la configuración con `Copy-Item .env.example .env`.
La URL predeterminada de la API es `http://localhost:4000/`; se puede cambiar con `VITE_BASE_URL` en `.env`. Reiniciar Vite después de cambiarla.

## Ejercicios

- `/`: cuatro tarjetas con imágenes; dos se sirven desde `public/home` y dos se importan desde `src/assets/home`.
- `/login`: formulario controlado que redirige a actividades al ingresar.
- `/actividades`: tarjetas con horarios y botón de inscripción visible solo al iniciar sesión.
- `/poke`: consulta con `fetch` y `useEffect` de los primeros veinte Pokémon, incluido Bulbasaur, y tarjetas `PokeCard`.
- `/tienda`: seis productos obtenidos desde la API, detalle en un modal y botón de agregar al carrito solo al iniciar sesión.
- `/carrito`: cantidades, subtotales, total y acciones de sumar, restar, eliminar y vaciar mediante la API. Usa iconos de Google y etiquetas accesibles en los botones.
- Layout compartido con Header, Footer y Outlet; Logout actualiza el estado de sesión.
- `src/components`, `src/pages`, `src/styles`: organización del proyecto.
- Alias `@` para `src`, configurado en Vite y jsconfig.
- `Card` recibe título, subtítulo y contenido mediante `children`; los datos están en `src/data`.

## Mock del backend

`npm run services` sirve `src/data/db.json` con `/activities`, `/products` y `/cart` en el puerto 4000. El carrito se conserva en ese archivo, incluso al recargar el navegador. La sesión es estado local de React: al recargar se debe volver a ingresar para modificarlo.

`src/data/activities.json` conserva el mock del primer ejercicio de backend. Para probar solo ese ejercicio, ejecutar `npm run services:activities` en lugar de `npm run services`. Ambos usan el puerto 4000 y se ejecutan por separado. En el ejercicio final, `db.json` reúne las actividades, los productos y el carrito.

Los archivos de `src/api` contienen las consultas de actividades y las operaciones de productos/carrito. Para vaciar el carrito, `deleteCart` obtiene sus ítems y envía un `DELETE /cart/:id` por cada uno: JSON Server no ofrece `DELETE /cart` para vaciar una colección.

El análisis de PokeAPI y la colección importable de Postman están en `7-backend-api`, en la raíz del repositorio. Las imágenes del gimnasio y de los productos provienen del material de clase. No hace falta versionar `Enunciados` para ejecutarlo.

## Verificar

```bash
npm run build
npm run lint
```
