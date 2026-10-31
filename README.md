# IsquioFemoral Care

Aplicación web en español para el alivio del pinzamiento isquiofemoral (IFI): un protocolo de ejercicios de descompresión con bandas elásticas y de fortalecimiento de los estabilizadores pélvicos.

> **Aviso:** esta aplicación es informativa y no sustituye una consulta médica individualizada. El diagnóstico de pinzamiento isquiofemoral requiere valoración médica y confirmación por resonancia magnética.

## Funcionalidades

- **Simulador biomecánico:** modelo 3D de la cadera que muestra cómo cambia el espacio isquiofemoral según la postura y la tracción.
- **Catálogo de ejercicios:** 10 ejercicios repartidos en tres fases (descompresión, estabilización e integración funcional), con animaciones 3D y los errores de técnica más habituales.
- **Rutinas:** rutinas predefinidas y personalizables, con un reproductor guiado por temporizador y sonido.
- **Plan de gimnasio:** dos sesiones semanales (pierna; torso y resto) y un catálogo de ejercicios clasificados según la guía.
- **Guía clínica:** explicación de la patología y de los criterios de resonancia magnética.
- **Consultor IA:** chat sobre biomecánica basado en Gemini. Las preguntas se envían a la API de Google. En la versión publicada, cada usuario pone su propia clave.

## Requisitos

- Node.js 24 (la versión que usa el despliegue)
- Una clave de la API de Gemini, solo si quieres usar el consultor IA

## Puesta en marcha

```bash
npm install
cp .env.example .env   # edita GEMINI_API_KEY
npm run dev
```

La aplicación queda disponible en <http://localhost:3000>. El puerto se puede cambiar con la variable `PORT`.

Sin `GEMINI_API_KEY`, el resto de la aplicación funciona con normalidad y el consultor responde con un texto fijo.

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor Express con Vite en modo middleware |
| `npm start` | Igual que `dev`; sirve `dist/` si `NODE_ENV=production` |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Sirve `dist/` con Vite, sin la API del consultor |
| `npm run lint` | Comprueba los tipos con `tsc --noEmit` |
| `npm run check:spec` | Comprueba que `spec.md` y `src/data/` coinciden |
| `npm run clean` | Borra `dist/` |

Para ejecutar la versión de producción con el consultor IA:

```bash
npm run build
NODE_ENV=production npm start
```

## Contenido clínico

[`spec.md`](spec.md) es la fuente de verdad de los ejercicios, los consejos y los textos de seguridad. Para cambiarlos, edita ese archivo y pide a Claude Code que traslade el cambio a `src/data/`. `npm run check:spec` y el despliegue fallan si ambos no coinciden.

## Despliegue

Cada push a `main` publica un sitio estático en GitHub Pages mediante [`deploy-pages.yml`](.github/workflows/deploy-pages.yml). Esa versión se compila con `VITE_STATIC_SITE=true` y no tiene servidor, así que el navegador llama directamente a Gemini con la clave del usuario:

- La clave se queda en memoria hasta recargar o cerrar la página. Solo se guarda en `localStorage`, sin cifrar, si el usuario marca «Recordar en este navegador», y se puede borrar desde el propio consultor.
- La clave y las preguntas solo se envían a Google, y una política de seguridad de contenido (CSP) bloquea las conexiones a otros sitios.
- El coste y las condiciones de uso de los datos dependen de la cuenta de Google de cada usuario.

## Tecnologías

React 19, TypeScript, Vite, Tailwind CSS 4, three.js con React Three Fiber, Express y `@google/genai`.
