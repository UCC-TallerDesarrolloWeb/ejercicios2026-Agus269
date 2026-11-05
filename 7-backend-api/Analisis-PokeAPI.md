# Análisis de PokeAPI

Petición: `GET https://pokeapi.co/api/v2/pokemon/1`.
No requiere autenticación ni cuerpo. La respuesta obtenida es `200 OK`, en formato JSON.

| Campo | Valor | Significado |
| --- | --- | --- |
| `id` | `1` | Identificador del Pokémon |
| `name` | `bulbasaur` | Nombre |
| `height` | `7` | Altura en decímetros: 0,7 metros |
| `weight` | `69` | Peso en hectogramos: 6,9 kilogramos |
| `types` | `grass`, `poison` | Tipos planta y veneno |
| `abilities` | `overgrow`, `chlorophyll` | Habilidades, con una marca para la habilidad oculta |
| `sprites.front_default` | URL de una imagen | Imagen para mostrar en la tarjeta |
| `stats` | Array de estadísticas | Vida, ataque, defensa, etc. |

La respuesta combina valores simples, objetos y arrays. Para obtener el nombre de un tipo se accede a `types[0].type.name`. `response.json()` convierte el cuerpo de la respuesta en un objeto JavaScript que React puede usar para mostrar la tarjeta.

## Consulta desde Postman

Importar `postman/PokeAPI.postman_collection.json`, abrir **GET Bulbasaur** y pulsar **Send**. Revisar el estado, los encabezados y el cuerpo; la pestaña de resultados muestra las comprobaciones de identidad, tipos y medidas.

La misma colección se puede ejecutar con Newman, el ejecutor de colecciones de Postman:

```bash
npx newman run 7-backend-api/postman/PokeAPI.postman_collection.json
```

El comando se ejecuta desde la raíz del repositorio. Esta consulta se verificó mediante HTTP y la colección se ejecutó con Newman; no se utilizó la interfaz gráfica de Postman.

Referencia de campos y unidades: [documentación de PokeAPI](https://pokeapi.co/docs/v2#pokemon).
