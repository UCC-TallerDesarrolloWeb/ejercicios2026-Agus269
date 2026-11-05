# Gimnasio en React

Ejercicios de clase de la unidad 6, con React, Vite, React Router y Sass.

## Ejecutar

```bash
npm ci
npm run dev
```

Abrir la dirección que indique Vite (normalmente http://localhost:5173).
Usuario y contraseña de práctica: `admin` / `admin`.

## Ejercicios

- `/`: cuatro tarjetas con imágenes; dos se sirven desde `public/home` y dos se importan desde `src/assets/home`.
- `/login`: formulario controlado que redirige a actividades al ingresar.
- `/actividades`: tarjetas con horarios y botón de inscripción visible solo al iniciar sesión.
- Layout compartido con Header, Footer y Outlet; Logout actualiza el estado de sesión.
- `src/components`, `src/pages`, `src/styles`: organización del proyecto.
- Alias `@` para `src`, configurado en Vite y jsconfig.
- `Card` recibe título, subtítulo y contenido mediante `children`; los datos están en `src/data`.

## Verificar

```bash
npm run build
npm run lint
```
