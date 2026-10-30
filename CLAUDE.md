# CLAUDE.md

Aplicación React para el pinzamiento isquiofemoral. La descripción funcional y la puesta en marcha están en `README.md`.

## Comandos

- `npm run dev`: servidor en el puerto 3000 (`tsx server.ts`, con Vite como middleware).
- `npm run lint`: comprobación de tipos (`tsc --noEmit`). El despliegue también la ejecuta y falla si hay errores.
- `npm run build`: compilación de producción.

No hay tests ni ESLint. Verifica los cambios con `npm run lint` y, si afectan a la interfaz, ejecutando la aplicación.

## Arquitectura

- `server.ts`: Express con `POST /api/consultation` (Gemini, incluye el prompt del sistema). Sirve Vite en desarrollo y `dist/` si `NODE_ENV=production`.
- `src/App.tsx`: navegación por estado (`activeTab`, `activeWorkoutList`). No hay router ni librería de estado global.
- `src/data/exercisesData.ts`: contenido clínico de los ejercicios.
- `src/data/exerciseAnimations.ts`: animaciones, indexadas por `Exercise['diagramType']`.
- `src/types/index.ts`: todos los tipos compartidos.

Visualización 3D:

- `ExerciseVisual` carga `Exercise3DViewer` de forma diferida y recurre al diagrama SVG de `ExerciseDiagram` si no hay animación o WebGL.
- `utils/mannequin.ts` construye el maniquí, `utils/poseTimeline.ts` interpola las poses y `utils/exerciseProps.ts` crea bandas y accesorios.
- `Hip3DViewer` muestra el modelo de cadera del simulador. Su geometría se genera con SDF (`utils/hipAnatomy.ts`, `utils/sdfMesher.ts`) en un Web Worker, con el hilo principal como alternativa si este falla.

## Restricciones

- **Dos modos de despliegue.** GitHub Pages sirve un sitio estático sin backend (`VITE_STATIC_SITE=true`, con base `/isquiofemoral-care/`). Todo salvo el consultor IA debe funcionar sin servidor y con rutas compatibles con esa base.
- **La clave de Gemini solo se usa en el servidor.** Nunca la expongas en el cliente ni con el prefijo `VITE_`.
- **Datos del usuario.** El diario de síntomas se guarda solo en `localStorage`; no lo envíes a ningún servicio sin una decisión explícita.
- **HMR.** No cambies la configuración `hmr`/`watch` de `vite.config.ts`: la controla `DISABLE_HMR`, heredada de AI Studio.

## Animaciones

- Las poses se definen solo con ángulos articulares (`Pose`), y deben coincidir con el texto de `Exercise.instructions` (`AnimationPhase.stepIndex` apunta a cada paso).
- La pierna de trabajo se define siempre como la **izquierda**; el visor refleja la escena para la derecha.
- La pierna afectada del usuario es `AFFECTED_SIDE` (derecha), que es el lado por defecto de los ejercicios.
- `rootY` se calcula al cargar para que el cuerpo apoye en el suelo; no la ajustes a mano.

## Contenido clínico

- Es información de salud: redáctala con prudencia y coherencia entre la guía, los ejercicios y el prompt de `server.ts`. Si cambias un criterio clínico, búscalo en los tres sitios.
- Presenta el alivio con la tracción como compatible con el diagnóstico, nunca como confirmación. El diagnóstico requiere valoración médica y resonancia magnética.
- No inventes datos clínicos. Si no puedes respaldar una afirmación, indícalo en lugar de incluirla.

## Convenciones

- Todo el texto de la interfaz y los comentarios nuevos van en español.
- Estilos con clases de Tailwind directamente en el JSX. Iconos de `lucide-react`.
- Commits en inglés con Conventional Commits (`feat:`, `fix:`, `ci:`, `chore:`).
