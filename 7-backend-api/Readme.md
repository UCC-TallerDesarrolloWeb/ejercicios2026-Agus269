## Unidad 7: Backend y APIs

## Resolución

Los ejercicios continúan en `6-React/gym-react`, en la rama `backend-api`.

1. Desde esa carpeta ejecutar `npm ci`, copiar `.env.example` a `.env` y ejecutar `npm run services`.
2. En otra terminal, en la misma carpeta, ejecutar `npm run dev`.
3. Probar `/actividades`, `/poke`, `/tienda` y `/carrito` con los enlaces del menú.
4. Ingresar con usuario `admin` y contraseña `admin` para agregar productos y modificar el carrito.

- Mock del Backend: `src/data/activities.json` y consulta desde `pages/Actividades.jsx`.
- Análisis de PokeAPI: [respuesta analizada](Analisis-PokeAPI.md) y [colección de Postman](postman/PokeAPI.postman_collection.json), ejecutada con Newman.
- APIs en React: `pages/Poke.jsx` y `components/PokeCard.jsx`, con `fetchAllPokemons` para los identificadores del 1 al 20. Primero se implementó y probó la consulta de Bulbasaur y después se amplió a veinte Pokémon.
- Carrito: `pages/Store.jsx`, `pages/Cart.jsx`, `components/ProductDetail.jsx`, `utils/formatPrice.js` y operaciones en `src/api`. `src/data/db.json` es la base integrada del ejercicio final, como indica `MockAPI.html`; contiene actividades, productos y carrito.

El script `services:activities` permite ejecutar únicamente el mock del primer ejercicio. Usar un solo script de servicios por vez porque ambos ocupan el puerto 4000.

Los enunciados originales se conservan debajo.

### Verificación de la resolución

- `npm run build` y `npm run lint`: correctos.
- Colección de Postman ejecutada con Newman: una consulta GET y cuatro comprobaciones correctas.
- Navegador sobre el build de producción: imágenes, actividades desde la API, login/logout, detalle del producto, carrito con POST/PATCH/DELETE, cantidades, total y persistencia. Vaciado de varios productos y estado final del carrito vacío verificados.
- Consulta de Bulbasaur y luego veinte tarjetas reales de PokeAPI verificadas en navegador.
- Mensajes de error de carga verificados con respuestas HTTP 503 en actividades, Pokémon, tienda y carrito.

### Ejercicio: Mock del Backend
1. En la carpeta donde se encuentre el package.json ejecutar:
```
npm i -D json-server
```
2. Crear el archivo src/data/activities.json con la información necesaria para mockear el servicio.
3. Emplear una terminal para levantar el servidor:
```
npx json-server --watch src/data/activities.json --port 4000
```
4. Modificar el código para que en lugar de leer los datos del js se realice un fetch

### Ejercicio: Análisis de Pokeapi
1. Ingresar a https://pokeapi.co/api/v2/pokemon/1
2. Analizar brevemente la información obtenida
3. Empleando POSTMAN realizar un GET a la misma URL
4. Analizar los datos obtenidos

### Ejercicio: APIs en React
1. Crear un archivo Poke en src/page
2. Crear un archivo PokeCard en src/components
3. En Poke emplear el fetch para obtener los datos de bulbasaur. Usar el useEffect para poder visualizar esos datos.

### Ejercicio: APIs en React
1.  Modificar Poke para llamar a la API de 1 a 20

### Ejercicio: Carrito
1. Si aún no tenemos instalado **json-server** en el **package.json** ejecutar:
```bash
npm i -D json-server
```
2. Crear **product.json** con los datos en **src/data** para separar datos de lógica, y mockear
el servicio **get**.
3. Crear un **Store.jsx** en */pages* que contenga .map para iterar y generar las cards
4. Emplear una terminal para levantar el servidor:
```bash
npx json-server --watch src/data/productos.json --port 4000
```
Y otra terminal para levantar el proyecto:
```bash
npm run dev
```
5. Agregar un componente para la ventana con detalle del producto.
6. Crear función **formatPrice** en **src/utils**
7. Modificar la tienda para que el boton de agregar al carrito solo esté disponible cuando el usuario inicio sesión.
8. Modificar el código para que en lugar de leer los datos del **js** se realice un **fetch**
