# CLAUDE.md

Aplicación React para el pinzamiento isquiofemoral. La descripción funcional y la puesta en marcha están en `README.md`.

## Comandos

- `npm run dev`: servidor en el puerto 3000 (`tsx server.ts`, con Vite como middleware).
- `npm run lint`: comprobación de tipos (`tsc --noEmit`). El despliegue también la ejecuta y falla si hay errores.
- `npm run check:spec`: comprueba que `spec.md` y `src/data/` coinciden. El despliegue también la ejecuta.
- `npm run build`: compilación de producción.

No hay tests ni ESLint. Verifica los cambios con `npm run lint` y, si afectan a la interfaz, ejecutando la aplicación.

## Arquitectura

- `server.ts`: Express con `POST /api/consultation` (Gemini). Sirve Vite en desarrollo y `dist/` si `NODE_ENV=production`.
- `src/data/clinicalAdvisor.ts`: modelos, instrucciones y contexto del consultor (contenido de `src/data/` y «Mi contexto»), compartidos por el servidor y el navegador.
- `src/utils/browserGemini.ts`: en la versión estática, gestiona la clave del usuario y llama a Gemini desde el navegador.
- `src/App.tsx`: navegación por estado (`activeTab`, `activeWorkoutList`). No hay router ni librería de estado global.
- `spec.md`: fuente de verdad del contenido clínico.
- `src/data/exercisesData.ts` y `src/data/clinicalContent.ts`: copia de ese contenido que usa la interfaz (ejercicios, rutinas, guía, simulador, portada y avisos).
- `src/data/exerciseAnimations.ts`: animaciones, indexadas por `Exercise['diagramType']`. Sus textos y rangos también proceden de `spec.md`; las poses no.
- `src/components/RichText.tsx`: muestra la `**negrita**` del contenido.
- `src/types/index.ts`: todos los tipos compartidos.

Visualización 3D:

- `ExerciseVisual` carga `Exercise3DViewer` de forma diferida y recurre al diagrama SVG de `ExerciseDiagram` si no hay animación o WebGL.
- `utils/mannequin.ts` construye el maniquí, `utils/poseTimeline.ts` interpola las poses y `utils/exerciseProps.ts` crea bandas y accesorios.
- `Hip3DViewer` muestra el modelo de cadera del simulador. Su geometría se genera con SDF (`utils/hipAnatomy.ts`, `utils/sdfMesher.ts`) en un Web Worker, con el hilo principal como alternativa si este falla.

## Restricciones

- **Dos modos de despliegue.** GitHub Pages sirve un sitio estático sin backend (`VITE_STATIC_SITE=true`, con base `/isquiofemoral-care/`). Todo debe funcionar sin servidor y con rutas compatibles con esa base.
- **Claves de Gemini.** `GEMINI_API_KEY` solo se usa en el servidor: nunca la expongas en el cliente ni con el prefijo `VITE_`. En el sitio estático, la clave es la del propio usuario y solo se guarda en `localStorage` si este lo elige.
- **CSP del sitio estático.** `vite.config.ts` la inyecta solo en esa compilación. Si añades un recurso externo, permítelo ahí de forma explícita y no abras `connect-src` a otros sitios, porque protege la clave del usuario.
- **HMR.** No cambies la configuración `hmr`/`watch` de `vite.config.ts`: la controla `DISABLE_HMR`, heredada de AI Studio.
- **Datos personales.** El repositorio y la web son públicos. El caso del usuario y su plan de gimnasio no se escriben en `spec.md` ni en el código: van en «Mi contexto», guardado solo en `localStorage`. Solo se envían a Gemini al consultar.

## Animaciones

- Las poses se definen solo con ángulos articulares (`Pose`), y deben coincidir con el texto de `Exercise.instructions` (`AnimationPhase.stepIndex` apunta a cada paso).
- La pierna de trabajo se define siempre como la **izquierda**; el visor refleja la escena para la derecha.
- La pierna afectada del usuario es `AFFECTED_SIDE` (derecha), que es el lado por defecto de los ejercicios.
- `rootY` se calcula al cargar para que el cuerpo apoye en el suelo; no la ajustes a mano.

## Contenido clínico

- **Cambia primero `spec.md`** y traslada el cambio a `src/data/`, sin escribir contenido clínico en los componentes. Si el usuario pide aplicar la especificación, cambia solo los datos y lo imprescindible de la interfaz; no regeneres componentes enteros.
- Ejecuta siempre `npm run check:spec`. Si un ejercicio es nuevo, crea también su animación en `exerciseAnimations.ts` y revísala en el navegador.
- Es información de salud: redáctala con prudencia y coherencia entre la guía, los ejercicios y el prompt del consultor. Si cambias un criterio clínico, búscalo en todas las secciones de `spec.md`.
- No corrijas por tu cuenta los «Puntos para la revisión clínica» de `spec.md` salvo que te lo pidan.
- Presenta el alivio con la tracción como compatible con el diagnóstico, nunca como confirmación. El diagnóstico requiere valoración médica y resonancia magnética.
- No inventes datos clínicos. Si no puedes respaldar una afirmación, indícalo en lugar de incluirla.

## Convenciones

- Todo el texto de la interfaz y los comentarios nuevos van en español.
- Estilos con clases de Tailwind directamente en el JSX. Iconos de `lucide-react`.
- Commits en inglés con Conventional Commits (`feat:`, `fix:`, `ci:`, `chore:`).
