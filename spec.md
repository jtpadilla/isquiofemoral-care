# Especificación de contenido clínico: IsquioFemoral Care

Este documento reúne el contenido médico de la aplicación: ejercicios, consejos, umbrales y textos de seguridad. Está pensado para que un especialista o un LLM de salud lo revise y lo amplíe sin tocar código.

> **Este archivo es la fuente de verdad del contenido clínico.** La aplicación usa una copia en `src/data/`: tras cambiar algo aquí, pide a Claude Code que lo aplique. `npm run check:spec` y el despliegue fallan si `spec.md` y el código no coinciden.

## Cómo editar este documento

### Reglas generales

- **Conserva la estructura:** no cambies los títulos ni las etiquetas en negrita (`**Dificultad:**`, por ejemplo). Permiten trasladar el contenido al código sin ambigüedad.
- **Una línea por dato:** cada campo o elemento de lista ocupa una sola línea.
- **Negrita:** en los textos de la guía se escribe `**así**`.
- **Identificadores existentes:** el valor entre comillas invertidas de cada ejercicio no debe cambiar, porque las rutinas lo usan como referencia.

### Ficha de ejercicio

Copia una ficha completa de la sección «Ejercicios» y respeta estas reglas:

| Campo | Formato |
|---|---|
| Título | ``### Ejercicio: `identificador-unico` ``, en minúsculas, con guiones y sin acentos |
| Fase | `1`, `2` o `3` |
| Dificultad | `Fácil`, `Moderado` o `Avanzado` |
| Series | Número entero |
| Duración y Retención | Opcionales, en segundos: `45 s` |
| Material | Entre comillas invertidas y separado por comas: `banda_traccion_larga`, `miniband_circular`, `esterilla`, `cojin_o_bloque` o `ninguno` |
| Diagrama | ``Único por ejercicio, entre comillas invertidas, en minúsculas y con guiones bajos: `mi_diagrama` `` |
| Músculos y estructuras | Separados por `; ` |

Todos los ejercicios necesitan estos apartados, con título de nivel `####`:

| Apartado | Formato de cada línea |
|---|---|
| Instrucciones | `1. Texto`, numeradas en orden |
| Claves de técnica | `- Texto` |
| Señales de alarma | `- Texto` |
| Errores frecuentes | `- **Error:** por qué es un problema y cómo corregirlo` |
| Rangos correctos | `- **Medida:** 80 a 90°` o `- **Medida:** 10 a 30 cm` |
| Animación | `- **Zona resaltada:** Texto` y después `- **Fase 1 (paso 2):** Texto`, donde «paso» es el número de la instrucción |

Describe las posiciones con grados y lado de trabajo: Claude Code necesita esos datos para crear la animación 3D y el diagrama. El despliegue falla si un ejercicio no tiene animación. Un material distinto de los permitidos requiere cambios en el código, así que indícalo aparte.

### Rutina

Añade un título de nivel `###` en «Rutinas predefinidas», antes de «Recomendación al terminar una sesión», con este formato:

```text
### Nombre de la rutina

Descripción en un solo párrafo.

- **Duración:** ~10 min

- `identificador-de-ejercicio`
- `otro-identificador`
```

Usa solo identificadores de ejercicios que existan en este documento.

### Otros contenidos

- **Guía clínica:** los consejos se añaden como `- **Título:** Texto`. Un apartado nuevo de la guía requiere cambios en la interfaz.
- **Preguntas frecuentes:** título de nivel `####` con la pregunta y un solo párrafo con la respuesta.
- **Simulador:** conserva las columnas de las tablas. Los decimales se escriben con coma: `0,35 mm`.

### Al proponer cambios

- Devuelve solo los bloques nuevos o modificados.
- Indica por separado las fuentes de cada dato clínico y lo que sea criterio propio sin fuente.
- No inventes cifras ni afirmes certezas que la evidencia no respalde. Presenta el alivio como compatible con el diagnóstico, nunca como confirmación.
- Comprueba que no contradices otras secciones ni los «Puntos para la revisión clínica».

## Qué no está en este documento

Estas partes siguen siendo código y no se editan desde aquí:

- Las poses de las animaciones 3D (ángulos articulares por fase) y las cámaras.
- La geometría del modelo 3D de cadera.
- Los rótulos de los diagramas de ejercicios, que forman parte del dibujo.
- La selección inicial de ejercicios en «Rutinas» y las posturas neutras del simulador.
- El diseño y los textos de interfaz sin contenido clínico.

## Fases del protocolo

### Fase 1: `fase1_descompresion`

- **Título:** Fase 1: Descompresión Articular y Alivio Inmediato
- **Título corto:** Fase 1: Descompresión
- **Etiqueta:** Alivio y Liberación
- **Descripción:** Tracción pasiva y activa con bandas elásticas para decoaptar la cadera y abrir el estrechamiento entre el trocánter menor y el isquion.

### Fase 2: `fase2_estabilizacion`

- **Título:** Fase 2: Fortalecimiento de la Musculatura Estabilizadora
- **Título corto:** Fase 2: Estabilización
- **Etiqueta:** Estabilidad y Sostén
- **Descripción:** Activación del glúteo medio, glúteo menor y rotadores seguros para evitar la aducción relativa y la caída de la pelvis.

### Fase 3: `fase3_funcional`

- **Título:** Fase 3: Control Motor Funcional y Reeducación de Marcha
- **Título corto:** Fase 3: Readaptación
- **Etiqueta:** Integración Funcional
- **Descripción:** Integración en apoyo monopodal, cadena lateral y ajuste de la zancada para prevenir recidivas al caminar.

## Ejercicios

### Ejercicio: `traccion-lateral-cuadrupedia`

- **Nombre:** Tracción Lateral de Cadera con Banda Elástica
- **Subtítulo:** Decoaptación de la articulación coxofemoral y apertura directa del espacio isquiofemoral
- **Fase:** 1
- **Dificultad:** Fácil
- **Series:** 3
- **Repeticiones o tiempo:** 45 - 60 seg por pierna
- **Duración:** 45 s
- **Retención:** 45 s
- **Material:** `banda_traccion_larga`, `esterilla`
- **Diagrama:** `lateral_traction`
- **Músculos y estructuras:** Cuadrado femoral (descompresión); Cápsula coxofemoral; Nervio ciático (alivio de presión)
- **Objetivo biomecánico:** Aplica una fuerza de tracción perpendicular al fémur que desplaza el trocánter menor lateralmente, alejándolo de la tuberosidad isquiática y descomprimiendo el músculo cuadrado femoral.
- **Por qué alivia:** El pinzamiento ocurre por choque entre el trocánter menor y el isquion. La goma elástica tracciona el fémur hacia afuera, abriendo milímetros críticos que liberan de inmediato el atrapamiento muscular y el roce neural.

#### Instrucciones

1. Ancla una banda elástica de tracción fuerte a un punto fijo bajo a la altura de tu cadera.
2. Colócate en posición de cuadrupedia (a 4 apoyos) de costado respecto al anclaje.
3. Pasa la banda por el pliegue inguinal de la pierna más cercana al anclaje, lo más alto posible en el muslo (en la raíz articular).
4. Aléjate del anclaje hasta sentir una tracción lateral firme y constante que "tira" de tu fémur hacia afuera.
5. Mantén la cadera en 80-90° de flexión. Realiza micromovimientos suaves hacia atrás (oscilaciones lentas) dejando que la goma separe la articulación.
6. Respira de forma pausada y diafragmática durante los 45-60 segundos.

#### Claves de técnica

- La banda debe quedar en la raíz del muslo, nunca en la mitad del fémur.
- No dejes que el tronco se incline perdiendo tensión.
- No cruces la pierna hacia adentro (evita la aducción).

#### Señales de alarma

- Si notas dolor agudo en la ingle anterior, reduce la flexión a 70°.
- Si notas tirón ciático, disminuye ligeramente la tensión de la goma.

#### Errores frecuentes

- **Goma en mitad del muslo:** La goma debe ir en la raíz del muslo. Colocada más abajo tira del fémur como una palanca en lugar de separar la articulación.
- **La pierna se cruza hacia dentro:** Llevar el muslo hacia la línea media (aducción) cierra el espacio que la tracción intenta abrir. Mantén la rodilla bajo la cadera.

#### Rangos correctos

- **Flexión de cadera:** 80 a 90°
- **Aducción del muslo:** -2 a 5°

#### Animación

- **Zona resaltada:** Zona de descompresión
- **Fase 1 (paso 4):** La goma, en la raíz del muslo, tira de la cadera hacia el anclaje
- **Fase 2 (paso 5):** Oscila despacio llevando la pelvis un poco hacia atrás (80-90° de cadera)
- **Fase 3 (paso 6):** Vuelve sin perder tensión y respira de forma pausada

### Ejercicio: `descompresion-axial-supino`

- **Nombre:** Tracción Axial Longitudinal en Supino a 80°
- **Subtítulo:** Descompresión caudal de la cabeza femoral en rango seguro de flexión
- **Fase:** 1
- **Dificultad:** Fácil
- **Series:** 3
- **Repeticiones o tiempo:** 60 seg por pierna
- **Duración:** 60 s
- **Retención:** 60 s
- **Material:** `banda_traccion_larga`, `esterilla`
- **Diagrama:** `axial_distraction`
- **Músculos y estructuras:** Espacio isquiofemoral; Rotadores externos profundos; Cápsula articular posterior
- **Objetivo biomecánico:** La flexión de cadera a 80° orienta el trocánter menor en una posición anteroinferior alejada del isquion. La tracción axial alarga el espacio posterior sin comprimir el nervio ciático.
- **Por qué alivia:** Permite descansar los tejidos inflamados sin carga de peso ni compresión de superficies óseas, restaurando el flujo microvascular del cuadrado femoral.

#### Instrucciones

1. Túmbate boca arriba con una banda larga anclada en un punto firme delante de ti a nivel del suelo.
2. Engancha la banda alrededor del tobillo de la pierna afectada, con una tobillera acolchada si dispones de ella.
3. Eleva la cadera en una flexión suave de 70° a 80° con la rodilla semi-relajada.
4. Permite que la tracción de la banda estire suavemente la pierna hacia el punto de anclaje de forma distal.
5. Mantén la pelvis bien apoyada en el suelo, sin dejar que el lado afecto se despegue de la esterilla.

#### Claves de técnica

- Mantén los músculos de la pierna en reposo absoluto; la goma hace todo el trabajo mecánico.
- Coloca una pequeña toalla enrollada bajo el sacro si necesitas mayor comodidad.

#### Señales de alarma

- No extiendas la rodilla por completo si tienes tensión en los isquiotibiales.

#### Errores frecuentes

- **La pelvis se despega:** Si el lado afectado se levanta, la tracción deja de actuar sobre la cadera. Mantén las dos caderas apoyadas en la esterilla.
- **Rodilla totalmente extendida:** Extender la rodilla del todo pone en tensión los isquiotibiales. Déjala semi-relajada.

#### Rangos correctos

- **Flexión de cadera:** 70 a 80°
- **Flexión de rodilla:** 10 a 30°
- **Giro de la pelvis:** -3 a 3°

#### Animación

- **Zona resaltada:** Zona de descompresión
- **Fase 1 (paso 2):** Goma en el tobillo y pelvis apoyada
- **Fase 2 (paso 3):** Eleva la pierna hasta 70-80° de cadera con la rodilla relajada
- **Fase 3 (paso 4):** Deja la pierna en reposo: la goma la estira suavemente hacia el anclaje
- **Fase 4 (paso 5):** Mantén la pelvis bien apoyada en la esterilla
- **Fase 5 (paso 3):** Baja la pierna con suavidad

### Ejercicio: `neurodinamica-ciatico-slider`

- **Nombre:** Deslizamiento Neurodinámico del Ciático (Slider)
- **Subtítulo:** Movilización longitudinal sin tensión de tracción neural a través del canal isquiofemoral
- **Fase:** 1
- **Dificultad:** Fácil
- **Series:** 2
- **Repeticiones o tiempo:** 12 - 15 deslizamientos rítmicos
- **Duración:** 40 s
- **Material:** `esterilla`
- **Diagrama:** `sciatic_slider`
- **Músculos y estructuras:** Nervio ciático; Túnel subglúteo
- **Objetivo biomecánico:** Mueve el nervio ciático hacia craneal y caudal a través del canal isquiofemoral estrechado para evitar adherencias y reoxigenar la vaina nerviosa, sin someterlo a tracción elongatoria perjudicial.
- **Por qué alivia:** El nervio ciático pasa rozando el músculo cuadrado femoral edematoso. Un estiramiento tradicional empeora la clínica, pero un deslizamiento rítmico (slider) reduce la hipersensibilidad mecánica.

#### Instrucciones

1. Túmbate boca arriba con las manos detrás del muslo de la pierna afectada (cadera a 90°).
2. Paso 1: Al extender suavemente la rodilla hacia arriba, relaja la cabeza hacia atrás sobre la esterilla (mirada al techo). Mantén el tobillo relajado.
3. Paso 2: Al flexionar la rodilla hacia abajo, levanta la cabeza acercando suavemente la barbilla al pecho. Así, cuando un extremo del nervio se tensa, el otro se afloja.
4. El movimiento debe ser continuo, fluido y rítmico como una polea de dos extremos.

#### Claves de técnica

- Nunca mantengas la posición final estática: es un deslizamiento dinámico continuo.
- La intensidad debe ser 0 sobre 10 de dolor o tirón.

#### Señales de alarma

- Si notas calambre o sensación eléctrica por detrás de la rodilla, reduce la amplitud del movimiento de rodilla a la mitad.

#### Errores frecuentes

- **Rodilla estirada + barbilla al pecho:** Así tensas los dos extremos del nervio a la vez: pasa de deslizar a estirar. Cuando la rodilla se extiende, la cabeza va hacia atrás.
- **Forzar la extensión de rodilla:** La intensidad debe ser 0 sobre 10 de dolor o tirón. Reduce la amplitud antes de notar tensión o calambre detrás de la rodilla.

#### Rangos correctos

- **Flexión de rodilla:** 25 a 90°
- **Flexión de cuello:** 0 a 35°

#### Animación

- **Zona resaltada:** Nervio ciático (trayecto)
- **Fase 1 (paso 2):** Extiende la rodilla mientras la cabeza se relaja hacia atrás
- **Fase 2 (paso 3):** Flexiona la rodilla mientras la barbilla se acerca al pecho

### Ejercicio: `puente-gluteo-abduccion-banda`

- **Nombre:** Puente de Glúteo con Abducción Isométrica con Miniband
- **Subtítulo:** Activación del glúteo mayor y glúteo medio manteniendo el espacio articular abierto
- **Fase:** 2
- **Dificultad:** Moderado
- **Series:** 3
- **Repeticiones o tiempo:** 10 - 12 repeticiones (3s isométrica arriba)
- **Duración:** 72 s
- **Retención:** 3 s
- **Material:** `miniband_circular`, `esterilla`
- **Diagrama:** `band_bridge`
- **Músculos y estructuras:** Glúteo mayor; Glúteo medio; Rotadores externos estabilizadores
- **Objetivo biomecánico:** La resistencia de la miniband obliga a empujar las rodillas en abducción continua. Esta abducción mantiene el trocánter menor alejado del isquion mientras se extiende la cadera en un rango controlado.
- **Por qué alivia:** Evita que el glúteo mayor trabaje con fémur aducido. Fortalece el sostén posterior de la pelvis sin comprimir el espacio isquiofemoral.

#### Instrucciones

1. Coloca una miniband de resistencia media 3-5 cm por encima de las rodillas.
2. Túmbate boca arriba con las rodillas flexionadas a 90° y pies separados a la anchura de las caderas.
3. Separa activamente las rodillas empujando contra la goma para crear tensión.
4. Presiona con los talones y eleva la pelvis en línea recta entre rodillas, caderas y hombros.
5. Aprieta con fuerza ambos glúteos arriba manteniendo la tensión lateral de la goma durante 3 segundos.
6. Desciende de forma lenta y controlada sin permitir que las rodillas se junten.

#### Claves de técnica

- La fuerza de empuje debe provenir de los talones y glúteos, no de los lumbares.
- Mantén la tensión en la goma durante TODO el recorrido de subida y bajada.

#### Señales de alarma

- Si sientes compresión lumbar, no subas la pelvis tan alto (mantén un puente medio).

#### Errores frecuentes

- **Las rodillas se juntan:** Se pierde la tensión de la goma y el fémur se acerca a la aducción, justo lo que estrecha el espacio. Empuja hacia fuera en todo el recorrido.
- **Subir demasiado arqueando la espalda:** La fuerza pasa a la zona lumbar en lugar de a los glúteos. Detente cuando rodillas, caderas y hombros formen una línea.

#### Rangos correctos

- **Separación de rodillas:** 10 a 30 cm
- **Cadera (0° = en línea):** -4 a 4°
- **Arqueo lumbar:** -3 a 3°

#### Animación

- **Zona resaltada:** Glúteo mayor
- **Fase 1 (paso 3):** Separa las rodillas contra la goma
- **Fase 2 (paso 4):** Empuja con los talones hasta alinear rodillas, caderas y hombros
- **Fase 3 (paso 5):** Aprieta los glúteos 3 segundos sin dejar de empujar la goma
- **Fase 4 (paso 6):** Baja despacio sin que las rodillas se junten

### Ejercicio: `abduccion-decubito-lateral-30flex`

- **Nombre:** Abducción en Decúbito Lateral a 30° de Flexión
- **Subtítulo:** Aislamiento selectivo del glúteo medio anterior sin riesgo de pinzamiento posterior
- **Fase:** 2
- **Dificultad:** Moderado
- **Series:** 3
- **Repeticiones o tiempo:** 12 - 15 repeticiones por lado
- **Duración:** 60 s
- **Material:** `esterilla`, `miniband_circular`
- **Diagrama:** `side_abduction`
- **Músculos y estructuras:** Glúteo medio (fibras anteriores); Glúteo menor; Tensor de la fascia lata (estabilizador)
- **Objetivo biomecánico:** Realizar la abducción con 30° de flexión de cadera y leve rotación interna neutraliza la extensión y rotación externa que desencadenan el choque isquiofemoral.
- **Por qué alivia:** El glúteo medio es el principal músculo que impide la caída contralateral de la pelvis (signo de Trendelenburg). Al fortalecerlo, evitamos que la cadera caiga en aducción durante la marcha.

#### Instrucciones

1. Túmbate de costado sobre el lado no afecto, con el cuerpo alineado y la cabeza descansando sobre el brazo.
2. La pierna de apoyo (inferior) permanece flexionada a 90° para dar máxima estabilidad pélvica.
3. Lleva la pierna superior 30° hacia adelante (en ligera flexión).
4. Orienta la punta del pie ligeramente hacia el suelo (ligera rotación interna del fémur).
5. Eleva la pierna de forma controlada unos 25-30 cm sin mover la pelvis ni rotar el pie hacia arriba.
6. Pausa 1 segundo arriba y baja de manera suave.

#### Claves de técnica

- No dejes que la pierna se desplace hacia atrás (extensión de cadera).
- Siente la activación en la parte alta y lateral de la nalga, nunca en la zona del isquion.

#### Señales de alarma

- Si sientes molestia en el isquion, adelanta la pierna un poco más (a 40° de flexión).

#### Errores frecuentes

- **La pierna se va hacia atrás:** Al perder los 30° de flexión, la cadera se acerca a la extensión que provoca el choque. Mantén la pierna adelantada durante toda la elevación.
- **El pie gira hacia el techo:** La rotación externa desplaza el trabajo y acerca el trocánter menor al isquion. Mantén la punta del pie un poco hacia el suelo.

#### Rangos correctos

- **Flexión de cadera:** 25 a 45°
- **Rotación (+ interna):** 0 a 15°
- **Abducción:** -5 a 20°

#### Animación

- **Zona resaltada:** Glúteo medio
- **Fase 1 (paso 4):** Pierna 30° adelantada, con la punta del pie un poco hacia el suelo
- **Fase 2 (paso 5):** Eleva la pierna 25-30 cm sin mover la pelvis
- **Fase 3 (paso 6):** Pausa de 1 segundo arriba
- **Fase 4 (paso 6):** Baja de manera suave

### Ejercicio: `monster-walk-semisentadilla`

- **Nombre:** Monster Walk / Pasos Laterales con Miniband en Semi-Sentadilla
- **Subtítulo:** Co-contracción funcional de abductores en bipedestación con cadera en ángulo protector
- **Fase:** 2
- **Dificultad:** Moderado
- **Series:** 3
- **Repeticiones o tiempo:** 10 - 12 pasos por dirección
- **Duración:** 45 s
- **Material:** `miniband_circular`
- **Diagrama:** `monster_walk`
- **Músculos y estructuras:** Glúteo medio; Glúteo mayor (fibras superiores); Core lumbo-pélvico
- **Objetivo biomecánico:** La posición de semi-sentadilla (flexión de cadera de ~30-45°) ensancha naturalmente el espacio isquiofemoral, mientras que el paso lateral entrena el control frontal de la pelvis.
- **Por qué alivia:** Entrena a tu musculatura para mantener la pelvis horizontal y con base ancha al caminar, eliminando el hábito de cruzar los pies por la línea media.

#### Instrucciones

1. Coloca una miniband circular sobre las rodillas (o en los tobillos para mayor dificultad).
2. Adopta una postura atlética: flexiona caderas y rodillas en semi-sentadilla con el pecho erguido.
3. Separa los pies a la anchura de hombros (tensión inicial en la goma).
4. Da un paso lateral firme con la pierna derecha sin que la rodilla se colapse hacia adentro.
5. Controla el paso de la pierna izquierda, dejando siempre una separación mínima de anchura de caderas.
6. Realiza 10 pasos hacia un lado y luego 10 pasos en dirección contraria.

#### Claves de técnica

- Mantén la pelvis a la misma altura horizontal: no subas ni bajes como si fueras un barco.
- Pies apuntando al frente o ligeramente hacia afuera, rodillas alineadas con el 2º dedo del pie.

#### Señales de alarma

- Si se te cansan los cuádriceps rápidamente, empuja el peso un poco más hacia los talones.

#### Errores frecuentes

- **Las rodillas caen hacia dentro:** La goma gana y el fémur se va a la aducción y rotación que cierran el espacio. Mantén las rodillas alineadas con el segundo dedo del pie.
- **La pelvis sube y baja:** Al estirar las piernas en cada paso pierdes el ángulo protector de la cadera. Mantén la misma altura, sin moverte como un barco.

#### Rangos correctos

- **Flexión de cadera:** 30 a 45°
- **Separación de rodillas:** 20 a 40 cm

#### Animación

- **Zona resaltada:** Glúteo medio
- **Fase 1 (paso 4):** Paso lateral con la pierna derecha, sin que la rodilla caiga hacia dentro
- **Fase 2 (paso 4):** Apoya el pie derecho con tensión en la goma
- **Fase 3 (paso 5):** Acerca la pierna izquierda con control
- **Fase 4 (paso 5):** Los pies quedan a la anchura de las caderas o algo más
- **Fase 5 (paso 6):** Regresa en dirección contraria: paso con la pierna izquierda
- **Fase 6 (paso 6):** Apoya el pie izquierdo con tensión en la goma
- **Fase 7 (paso 6):** Acerca la pierna derecha con control
- **Fase 8 (paso 6):** Mantén la semi-sentadilla y la pelvis a la misma altura

### Ejercicio: `reverse-clamshell-rotacion-interna`

- **Nombre:** Clamshell Invertido (Rotación Interna de Cadera)
- **Subtítulo:** Control excéntrico de los rotadores profundos y apertura del canal posterior
- **Fase:** 2
- **Dificultad:** Fácil
- **Series:** 3
- **Repeticiones o tiempo:** 12 repeticiones lentas por lado
- **Duración:** 60 s
- **Material:** `esterilla`
- **Diagrama:** `reverse_clamshell`
- **Músculos y estructuras:** Tensor de la fascia lata; Glúteo menor; Control excéntrico del Cuadrado Femoral
- **Objetivo biomecánico:** En el pinzamiento isquiofemoral, la rotación externa excesiva lleva el trocánter menor hacia atrás contra el isquion. El clamshell invertido entrena la rotación interna, orientando el trocánter menor hacia adelante y descomprimiendo el receso posterior.
- **Por qué alivia:** Reequilibra el tono entre rotadores externos (a menudo espasmados y acortados) y rotadores internos, aliviando la compresión directa sobre el nervio ciático.

#### Instrucciones

1. Túmbate de costado con rodillas flexionadas a 90° y caderas a 45°.
2. Mantén las rodillas pegadas una con otra en todo momento (la rodilla actúa de bisagra o pivote).
3. Eleva el tobillo y pie superior hacia el techo, rotando internamente el muslo de forma controlada.
4. Mantén la posición alta durante 1-2 segundos sintiendo el trabajo en la cadera lateral/anterior.
5. Baja el pie despacio hasta contactar nuevamente con el tobillo inferior.

#### Claves de técnica

- No gires la pelvis hacia adelante para compensar; el movimiento debe ser 100% de la cadera.
- El movimiento es suave y sin rebotes.

#### Señales de alarma

- Si sientes molestia en la cara anterior de la cadera (choque anterior), disminuye el ángulo de elevación del pie.

#### Errores frecuentes

- **La pelvis gira hacia delante:** El pie sube, pero gracias al giro del tronco y no a la rotación de la cadera. Mantén la pelvis apilada: una cadera justo encima de la otra.
- **Las rodillas se separan:** La rodilla deja de ser el pivote y el movimiento se convierte en una apertura de la pierna. Mantén las rodillas pegadas durante todo el recorrido.

#### Rangos correctos

- **Rotación interna:** 0 a 30°
- **Giro de la pelvis:** -3 a 3°
- **Separación de rodillas:** 0 a 2 cm

#### Animación

- **Zona resaltada:** Cadera lateral/anterior
- **Fase 1 (paso 2):** Rodillas juntas y tobillos en contacto
- **Fase 2 (paso 3):** Sube el tobillo hacia el techo; la rodilla no se mueve
- **Fase 3 (paso 4):** Mantén arriba 1-2 segundos
- **Fase 4 (paso 5):** Baja despacio hasta tocar el otro tobillo

### Ejercicio: `rdl-unipodal-asistido`

- **Nombre:** Peso Muerto Rumano Unipodal Asistido (Single-Leg RDL)
- **Subtítulo:** Estabilización de cadera en cadena cinética cerrada con control pélvico estricto
- **Fase:** 3
- **Dificultad:** Avanzado
- **Series:** 3
- **Repeticiones o tiempo:** 8 - 10 repeticiones por pierna
- **Duración:** 45 s
- **Material:** `ninguno`
- **Diagrama:** `single_leg_rdl`
- **Músculos y estructuras:** Glúteo medio en apoyo; Glúteo mayor; Isquiotibiales (trabajo excéntrico seguro); Multífidos
- **Objetivo biomecánico:** Entrena al glúteo medio para sostener la pelvis nivelada contra la fuerza de la gravedad en apoyo monopodal, imitando la fase de apoyo de la marcha.
- **Por qué alivia:** Evita la basculación pélvica durante la marcha cotidiana, que es el momento biomecánico exacto donde el trocánter menor colisiona con el isquion.

#### Instrucciones

1. De pie, apóyate sobre la pierna afectada con una ligera micro-flexión de rodilla (nunca bloqueada).
2. Coloca una mano apoyada ligeramente en una pared o respaldo de silla para eliminar el factor de equilibrio inestable.
3. Lleva la pierna libre recta hacia atrás mientras flexionas el tronco desde las caderas (bisagra de cadera).
4. Punto crucial: Mantén la pelvis totalmente horizontal al suelo. No dejes que la cadera que vuela se caiga hacia el suelo ni se rote hacia arriba.
5. Regresa apretando el glúteo de la pierna de apoyo hasta volver a la bipedestación.

#### Claves de técnica

- La espalda debe permanecer recta y neutra.
- Imagina que tienes un nivel de burbuja sobre el sacro y no se puede mover hacia ningún lado.

#### Señales de alarma

- No busques bajar mucho el tronco si no puedes controlar la horizontalidad de la pelvis.

#### Errores frecuentes

- **La cadera libre se abre:** Al rotar la pelvis, el glúteo medio deja de sostenerla: es la basculación que ocurre también al caminar. Imagina un nivel de burbuja sobre el sacro.
- **La espalda se redondea:** Bajas doblando la columna en lugar de la cadera. Mantén la espalda neutra y baja solo hasta donde controles la pelvis.

#### Rangos correctos

- **Giro de la pelvis:** -3 a 3°
- **Curva de la espalda:** -3 a 3°
- **Rodilla de apoyo:** 5 a 20°

#### Animación

- **Zona resaltada:** Glúteo de apoyo
- **Fase 1 (paso 2):** De pie sobre la pierna de trabajo, rodilla sin bloquear y mano en la pared
- **Fase 2 (paso 3):** Lleva la pierna libre recta hacia atrás mientras el tronco bascula desde la cadera
- **Fase 3 (paso 4):** Pelvis totalmente horizontal: ni cae ni rota
- **Fase 4 (paso 5):** Regresa apretando el glúteo de la pierna de apoyo

### Ejercicio: `plancha-lateral-rodillas`

- **Nombre:** Plancha Lateral con Rodillas Flexionadas
- **Subtítulo:** Fortalecimiento de la cadena lateral lumbo-pélvica y cuadrado lumbar
- **Fase:** 3
- **Dificultad:** Moderado
- **Series:** 3
- **Repeticiones o tiempo:** 20 - 30 seg por lado
- **Duración:** 30 s
- **Retención:** 30 s
- **Material:** `esterilla`
- **Diagrama:** `side_plank`
- **Músculos y estructuras:** Cuadrado lumbar; Oblicuos abdominales; Glúteo medio; Transverso del abdomen
- **Objetivo biomecánico:** Crea un corsé lateral fuerte que previene la inclinación lateral del tronco al caminar (marcha de Duchenne), que suele sobrecargar la cadera.
- **Por qué alivia:** Al estabilizar el tronco y la pelvis de forma sinérgica, descarga la musculatura rotadora profunda de la cadera de tener que actuar como estabilizador compensatorio.

#### Instrucciones

1. Túmbate de lado apoyando el antebrazo bajo el hombro.
2. Flexiona las rodillas a 90° de modo que los pies queden alineados con la pelvis y hombros.
3. Eleva la pelvis del suelo empujando con la rodilla y el antebrazo hasta alinear rodillas, cadera y cabeza.
4. Mantén el abdomen activado y la respiración fluida sin aguantar el aire durante 20-30 segundos.

#### Claves de técnica

- El codo debe quedar justo debajo de la articulación del hombro para protegerlo.
- La pelvis no debe hundirse hacia abajo ni rotar hacia el suelo.

#### Señales de alarma

- Si notas tensión en el cuello, mira hacia el frente y desciende los hombros lejos de las orejas.

#### Errores frecuentes

- **La pelvis se hunde:** Al caer la cadera, el tronco deja de sostenerse con su cadena lateral. Empuja el suelo con la rodilla y el antebrazo hasta recuperar la línea.
- **La pelvis rota hacia el suelo:** El tronco se abre o se cierra y el esfuerzo se reparte mal. Mantén hombro, cadera y rodilla en el mismo plano.

#### Rangos correctos

- **Caída de la cadera:** 0 a 5°
- **Rotación de la pelvis:** -3 a 3°

#### Animación

- **Zona resaltada:** Cadena lateral de apoyo
- **Fase 1 (paso 2):** Antebrazo bajo el hombro y rodillas a 90°
- **Fase 2 (paso 3):** Eleva la pelvis hasta alinear rodillas, cadera y cabeza
- **Fase 3 (paso 4):** Mantén el abdomen activo y respira sin aguantar el aire
- **Fase 4 (paso 2):** Baja con control

### Ejercicio: `reeducacion-marcha-higiene`

- **Nombre:** Protocolo de Zancada Segura y Reeducación de la Marcha
- **Subtítulo:** Ajustes biomecánicos para eliminar el pinzamiento dinámico al caminar
- **Fase:** 3
- **Dificultad:** Fácil
- **Series:** 2
- **Repeticiones o tiempo:** Práctica de 3 a 5 minutos
- **Duración:** 180 s
- **Material:** `ninguno`
- **Diagrama:** `gait_hygiene`
- **Músculos y estructuras:** Patrón locomotor; Glúteo medio; Psoas en rango seguro
- **Objetivo biomecánico:** Elimina la combinación patomecánica de hiperextensión + aducción en la pierna de despegue y corrige la base de sustentación estrecha.
- **Por qué alivia:** Caminar con pasos largos y cruzando los pies lleva la cadera a la extensión y aducción que estrechan el espacio isquiofemoral. Estos ajustes buscan reducir esa combinación al desplazarte.

#### Instrucciones

1. Paso 1 - Acorta la zancada: Reduce un 10% la longitud del paso. No dejes que la pierna trasera se quede muy estirada hacia atrás en hiperextensión.
2. Paso 2 - Ensancha la base de apoyo: Camina con los pies separados unos centímetros más (evita la marcha "en cuerda floja" o con cruce de pies).
3. Paso 3 - Aumenta la cadencia: Da pasos un poco más rápidos y ligeros (alrededor de un 5-10% más que tu ritmo habitual) en lugar de zancadas pesadas y largas.
4. Paso 4 - Postura al sentarse: Siéntate apoyado sobre los muslos posteriores con caderas ligeramente abiertas, nunca con las piernas cruzadas o con la cadera colapsada hacia adentro.

#### Claves de técnica

- Siente que tus pies caminan sobre dos raíles de tren paralelos, no sobre una sola línea.
- Empuja el suelo con suavidad; la marcha debe ser silenciosa y ligera.

#### Señales de alarma

- Si debes caminar distancias largas, haz pequeñas pausas de descompresión cada 15-20 minutos.

#### Errores frecuentes

- **Zancada larga:** La pierna de atrás llega a mucha extensión de cadera, la posición en la que se estrecha el espacio isquiofemoral. Acorta el paso.
- **Pies que cruzan la línea media:** Caminar como sobre una cuerda floja mantiene la cadera en aducción. Deja que cada pie pise su propio raíl.

#### Rangos correctos

- **Cadera izq. (− extensión):** -8 a 25°
- **Separación de pies:** 15 a 35 cm

#### Animación

- **Zona resaltada:** Glúteo medio
- **Fase 1 (paso 1):** Zancada corta: la pierna de atrás no se queda muy estirada
- **Fase 2 (paso 2):** Base ancha: cada pie sobre su propio raíl, sin cruzar la línea media
- **Fase 3 (paso 1):** Zancada corta también con la otra pierna
- **Fase 4 (paso 3):** Pasos ligeros y algo más rápidos, en lugar de zancadas largas

## Rutinas predefinidas

### Rutina de inicio rápido

- **Duración:** 15 min

- `traccion-lateral-cuadrupedia`
- `descompresion-axial-supino`
- `puente-gluteo-abduccion-banda`
- `abduccion-decubito-lateral-30flex`
- `monster-walk-semisentadilla`

### Alivio Inmediato Express

Enfocado 100% en decoaptación con bandas y deslizamiento neural. Ideal para crisis de dolor o tras estar mucho tiempo sentado.

- **Duración:** ~8 min

- `traccion-lateral-cuadrupedia`
- `descompresion-axial-supino`
- `neurodinamica-ciatico-slider`

### Descompresión + Glúteo Medio

Tracción con gomas seguida de activación abductora sin colapso pélvico. Protocolo recomendado de mantenimiento.

- **Duración:** ~18 min

- `traccion-lateral-cuadrupedia`
- `descompresion-axial-supino`
- `puente-gluteo-abduccion-banda`
- `abduccion-decubito-lateral-30flex`
- `monster-walk-semisentadilla`
- `reverse-clamshell-rotacion-interna`

### Activación Pre-Caminata

Prepara el espacio isquiofemoral y despierta el glúteo para evitar el pinzamiento por zancada larga al salir a caminar.

- **Duración:** ~12 min

- `traccion-lateral-cuadrupedia`
- `puente-gluteo-abduccion-banda`
- `monster-walk-semisentadilla`
- `reeducacion-marcha-higiene`

### Recomendación al terminar una sesión

Al terminar la tracción, camina 1-2 minutos con zancada corta y base ligeramente ancha para que el sistema nervioso integre la nueva amplitud sin comprimir el canal isquiofemoral.

## Guía clínica

### Introducción

El pinzamiento isquiofemoral es una causa extraarticular frecuentemente subdiagnosticada de dolor en la nalga y cadera posterior. Ocurre por un estrechamiento mecánico del espacio comprendido entre la **tuberosidad isquiática** (el hueso sobre el que nos sentamos) y el **trocánter menor del fémur**, atrapando al músculo **cuadrado femoral** y comprimiendo el **nervio ciático**.

### Qué evitar durante la rehabilitación

- **Estiramientos clásicos de isquiotibiales hacia adelante:** Inclinarse hacia los dedos de los pies con las piernas rectas aplasta el vientre del cuadrado femoral contra el fémur y somete al nervio ciático irritado a una tensión excesiva. Sustitúyelo siempre por deslizamientos neurodinámicos sin tensión (sliders).
- **Sentarse con las piernas cruzadas o en rotación forzada:** Cruzar una pierna sobre otra o sentarse sobre un pie coloca la cadera en aducción profunda y rotación extrema, reduciendo al mínimo el espacio isquiofemoral. Mantén siempre las rodillas separadas a la anchura de las caderas.
- **Zancadas largas hacia atrás o hiperextensión:** En cada zancada amplia de marcha o carrera, la pierna retrasada entra en hiperextensión combinada con aducción, produciendo un impacto repetitivo del trocánter menor contra el isquion.
- **Asientos duros o muy bajos sin descarga isquiática:** El apoyo directo sobre superficies rígidas o asientos hundidos (donde las rodillas quedan más altas que las caderas) comprime el túnel subglúteo inferior. Utiliza un cojín firme o toalla doblada bajo los muslos para liberar la tuberosidad isquiática.
- **Apoyo monopodal asimétrico al estar de pie:** Descansar todo el peso del cuerpo sobre una sola pierna dejando caer la pelvis contraria reproduce el signo de Trendelenburg y cierra mecánicamente el canal isquiofemoral del lado de apoyo. Reparte el peso en ambas piernas por igual.

### Por qué alivia la tracción

Cuando una articulación presenta un conflicto de choque óseo, la respuesta fisiológica automática es la contractura refleja de los rotadores profundos para "bloquear" la articulación. Esto crea un **círculo vicioso patomecánico**:

1. **Estrechamiento inicial:** Choque del trocánter menor con el isquion
2. **Inflamación y edema:** El cuadrado femoral aumenta de volumen, ocupando aún más espacio
3. **Tracción con banda:** Ejerce fuerza decoaptante perpendicular que desplaza el fémur 3-6 mm lateralmente
4. **Alivio instantáneo:** Cesa la compresión, se restaura la microcirculación y se alivia el ciático

**La clave a largo plazo:** La goma da un alivio inmediato extraordinario, pero para que el beneficio sea permanente necesitamos que el **glúteo medio y los estabilizadores pélvicos** tomen el relevo de mantener abierto el espacio durante la marcha normal.

### Higiene postural

- **Al dormir de lado:** Coloca un cojín o almohada gruesa entre las rodillas y tobillos. Esto mantiene la pierna superior en posición neutra o ligera abducción y previene que caiga cruzada por delante durante la noche.
- **Al dormir boca arriba:** Pon un cojín pequeño debajo de las rodillas para mantener una ligera flexión de cadera y evitar que las piernas roten excesivamente hacia afuera durante el sueño.
- **Al conducir o trabajar sentado:** Evita asientos bajos o hundidos donde las rodillas superen la altura de las caderas. Utiliza una cuña pélvica que eleve ligeramente el sacro, mantén los pies bien apoyados en el suelo y realiza pausas activas poniéndote de pie cada 30-45 minutos.
- **Al caminar o pasear:** Camina como si pisaras sobre dos raíles paralelos de tren, nunca sobre una sola línea. Acorta ligeramente la zancada, aumenta un poco la cadencia y evita arrastrar o hiperextender la pierna que queda atrás.
- **Al subir escaleras o pendientes:** Inclina levemente el tronco hacia adelante desde las caderas, apoya todo el pie en el escalón e impúlsate activando el glúteo sin dejar que la rodilla se hunda hacia adentro (evita el valgo dinámico).
- **Para la cintura escapular y el tórax:** Evita encorvarte hacia adelante (postura antálgica en cifosis) para compensar la molestia de cadera. Mantén el pecho suavemente abierto sin forzar una retracción rígida y practica respiraciones diafragmáticas bajas para evitar la sobrecarga tensional en pectorales altos y escápulas.

### Actividad física y deporte

> **Origen:** Claude Code redactó la primera versión de esta sección a partir de la biomecánica, y después se revisó con `spec_update.md`. Claude Code ajustó la redacción de «Cuándo parar» y «Busca atención urgente». Ningún profesional sanitario la ha validado, así que revísala con prioridad.

**Es una orientación general, no una lista validada:** no hay estudios que clasifiquen cada deporte para esta patología. Se basa en evitar la posición que suele provocar los síntomas: extensión de cadera con aducción y rotación externa. La tolerancia varía de una persona a otra, así que acuerda tu caso con tu médico o fisioterapeuta.

#### Suelen tolerarse mejor

- **Bicicleta estática o de paseo:** La cadera trabaja en flexión constante, lo que evita la extensión y mantiene el espacio isquiofemoral abierto. Ajusta el sillín a una altura intermedia para no estirar la pierna en exceso al bajar el pedal, usa un sillín ancho o acolchado si hay molestia por presión y mantén las rodillas alineadas en paralelo sin que se cierren hacia el cuadro.
- **Caminar en el agua y ejercicios acuáticos suaves:** La flotabilidad reduce drásticamente la carga axial y permite activar los estabilizadores sin compresión articular. Camina con pasos cortos, evita cruzar las piernas al girar y mantén el abdomen activo.
- **Ejercicios de esta guía y Pilates clínico adaptado:** Fortalecen el glúteo medio y el core lumbo-pélvico en ángulos protectores. Sigue la progresión por fases y omite cualquier ejercicio de pilates que implique extensión de cadera boca abajo (decúbito prono) o rotaciones externas forzadas en posición de rana.

#### Posibles con adaptaciones

- **Caminar al aire libre y senderismo suave:** Aplica el protocolo de zancada corta, pies sobre dos raíles paralelos y ritmo ligero. Evita pendientes pronunciadas de bajada (que fuerzan la extensión de la pierna retrasada y el frenado excéntrico) y aumenta la distancia de forma gradual en terreno llano.
- **Elíptica con configuración conservadora:** Al no tener impacto contra el suelo ofrece buen trabajo cardiovascular, pero el recorrido fijo del pedal puede llevar la pierna demasiado atrás. Elige máquinas de zancada corta, usa poca resistencia, no apures la extensión trasera y detén el ejercicio si reproduce el dolor glúteo.
- **Musculación y entrenamiento de fuerza:** Prioriza ejercicios bilaterales y máquinas guiadas en rangos seguros: prensa de piernas (pies separados a la anchura de los hombros y sin bajar hasta el tope), sentadilla a cajón alto (box squat), abductores y puente de glúteo sin hiperextender el tronco. Evita por completo la máquina de aductores (cerrar piernas).
- **Natación (estilo crol o espalda):** Empieza con sesiones suaves usando patada corta desde la cadera sin hiperextender la columna lumbar, o utiliza un pull-buoy alto entre los muslos (sin apretarlo con fuerza para no activar los aductores). Evita el estilo braza porque su patada circular combina aducción brusca y rotación externa.
- **Yoga restaurativo o Hatha suave:** Avisa a tu instructor y omite las posturas que cierran el canal posterior o tensan el nervio ciático: evita la postura de la paloma, las flexiones profundas hacia delante con piernas estiradas, las torsiones sentadas cruzando la pierna (Gomukhasana) y los guerreros con zancada muy amplia.

#### Mejor evitar mientras haya síntomas

- **Correr y trotar (especialmente a ritmo rápido o en asfalto):** El ciclo de carrera exige extensión máxima de cadera en el despegue combinada con impacto repetitivo y estrechamiento de la base de paso. Su retorno debe ser progresivo, iniciando con intervalos de marcha-trote de alta cadencia y paso corto bajo supervisión profesional.
- **Zancadas (lunges), desplantes y sentadilla búlgara:** Anclan la pierna retrasada exactamente en extensión de cadera con tendencia a la aducción pélvica, la combinación biomecánica directa que atrapa al músculo cuadrado femoral.
- **Peso muerto pesado y sentadilla profunda libre:** Someten la cadera a grandes cargas axiales en rangos extremos donde, si el glúteo medio se fatiga, los rotadores profundos se espasman por compensación. El peso muerto unipodal asistido de la fase 3 se introduce sin carga externa cuando las fases previas no dan síntomas.
- **Fútbol, artes marciales y deportes de patada:** Combinan sprints, cambios bruscos de dirección, patadas cruzadas y gestos explosivos en rotación que provocan cizallamiento en el espacio subglúteo.
- **Deportes de raqueta y cancha (pádel, tenis, baloncesto):** Implican frenadas en seco, desplazamientos laterales con zancada baja forzada y giros de pivote difíciles de controlar en fase inflamatoria.

#### Cuándo parar

- **Cuándo parar:** Interrumpe la actividad de inmediato si aparece dolor punzante en la nalga profunda, sensación de enganche articular, hormigueo, adormecimiento, dolor o calambre que baja por la pierna, o si el dolor basal empeora a las 24 horas de haber entrenado. Coméntalo con tu médico o fisioterapeuta antes de retomar ese deporte.
- **Busca atención urgente:** Acude a urgencias si notas pérdida de fuerza en la pierna o el pie, adormecimiento en la zona genital o perineal (en silla de montar) o alteraciones en el control de la orina o las heces.

### Preguntas frecuentes

#### ¿Por qué la resonancia magnética es la prueba definitiva?

La RMN pélvica permite medir con precisión milimétrica el Espacio Isquiofemoral (IFS) y el Espacio del Cuadrado Femoral (QFS). Un IFS menor a 15 mm (normal ~23 mm) y un QFS menor a 10 mm en presencia de edema de señal alta (T2/STIR) en el vientre muscular del cuadrado femoral confirman el diagnóstico.

#### ¿Por qué siento dolor tipo "ciática" o calambre si el problema es en la cadera?

El nervio ciático desciende inmediatamente posterior al músculo cuadrado femoral dentro del estrecho túnel isquiofemoral. Cuando el espacio se reduce o el músculo se inflama (edema), el nervio sufre compresión mecánica e isquemia local, generando pseudociática o dolor irradiado por la cara posterior del muslo.

#### ¿Por qué los estiramientos tradicionales de isquiotibiales empeoran mi dolor?

Al doblar el tronco hacia adelante con piernas estiradas, la tuberosidad isquiática bascula hacia atrás y arriba, comprimiendo con fuerza brutal los tejidos profundos contra el fémur. Estirar los isquiotibiales de forma pasiva es uno de los errores más frecuentes que cronifican el pinzamiento isquiofemoral.

#### ¿Cuánto tiempo al día debo aplicar los ejercicios de tracción con goma?

Se recomiendan de 2 a 3 series de 45-60 segundos por sesión, 1 o 2 veces al día (por ejemplo por la mañana y al terminar el día). La tracción no debe forzarse con dolor, sino experimentarse como una suave apertura y alivio descompresivo.

#### ¿Debo realizar los ejercicios solo en la pierna con dolor o en ambas?

Depende del objetivo del ejercicio. Los ejercicios de descompresión y tracción con banda (así como la neurodinámica del ciático) tienen un fin local y descompresivo, por lo que se realizan prioritariamente en la pierna afectada para decoaptar la articulación y liberar el cuadrado femoral inflamado. En cambio, los ejercicios de fortalecimiento y control motor (glúteo medio, abductores, rotación interna y estabilidad lumbo-pélvica) deben realizarse en ambas piernas desde el primer momento. Durante la marcha, el glúteo medio de la pierna de apoyo es imprescindible para evitar la caída de la pelvis contraria (signo de Trendelenburg), que cierra el espacio isquiofemoral del lado de apoyo. Además, trabajar la pierna sana previene sobrecargas compensatorias, estimula adaptaciones neurales positivas (educación cruzada) y permite integrar el patrón motor correcto libre de dolor antes de replicarlo en el lado afecto, adaptando en este último las repeticiones al umbral de confort.

#### ¿Puede una alteración en la cadera o pelvis provocar dolor en la escápula y pectorales altos?

Sí. La pelvis y la cintura escapular forman una unidad funcional vinculada por cadenas miofasciales cruzadas. Cuando la cadera o la pelvis sufren asimetría o dolor, el tronco compensa mediante una torsión defensiva: el dorsal ancho (unido a la pelvis por la fascia toracolumbar) tracciona hacia la escápula para mantener la horizontalidad de la mirada. Al mismo tiempo, la tendencia a cerrar la cadena anterior acorta el pectoral menor y adelanta los hombros (protracción escapular), sometiendo a los músculos fijadores de la escápula (romboides, serrato y trapecio) a una tensión excéntrica continua y dolorosa. Además, el espasmo pélvico suele inducir un patrón respiratorio apical que sobrecarga crónicamente los pectorales altos y escalenos. Por ello, el abordaje debe ser postural y global, siendo recomendable una valoración médica cervical y dorsal para descartar radiculopatías o síndromes del desfiladero torácico.

## Simulador biomecánico

El simulador estima el espacio isquiofemoral (IFS) según la postura. La dirección de cada efecto sigue la literatura, pero **los coeficientes son ilustrativos, no valores medidos**.

### Fórmula del IFS estimado

Valor base: 21,0 mm. El resultado se redondea a un decimal, con un mínimo de 4,0 mm.

| Movimiento | Efecto por grado | Límite del efecto |
|---|---|---|
| Extensión | -0,35 mm | Sin límite |
| Flexión | +0,08 mm | +6,0 mm |
| Aducción | -0,45 mm | Sin límite |
| Abducción | +0,28 mm | +8,0 mm |
| Rotación externa | -0,32 mm | Sin límite |
| Rotación interna | +0,18 mm | +5,0 mm |

Tracción con goma: hasta +8,5 mm, proporcional a la intensidad (0-100 %).

### Estados según el IFS estimado

| IFS estimado | Estado | Descripción |
|---|---|---|
| < 12 mm | Pinzamiento Severo (Conflicto Activo) | El trocánter menor colisiona directamente con el isquion. El músculo cuadrado femoral está atrapado y el nervio ciático sufre compresión e isquemia. |
| 12 a < 16 mm | Espacio Crítico / En Riesgo | Espacio inferior al umbral normal de resonancia (< 15 mm). Hay fricción miofascial repetitiva al caminar o sentarse. |
| 16 a < 24 mm | Espacio Fisiológico Libre | Rango anatómico estándar. El cuadrado femoral dispone de espacio de deslizamiento sin compresión ósea. |
| ≥ 24 mm | Descompresión Terapéutica Máxima | En este modelo, la tracción lateral con goma elástica amplía el túnel isquiofemoral, lo que explicaría el alivio que puedes notar. |

### Referencias

- **Normal:** 18 - 25 mm
- **Patológico:** < 15 mm
- **Objetivo terapéutico:** **Mantener el espacio > 18 mm** mediante tracción y fuerza abductora.

### Posturas predefinidas

| Postura | Cadera | Plano frontal | Rotación | Goma |
|---|---|---|---|---|
| Tracción con Goma (Alivio) | 75° flexión | 15° abducción | 10° interna | 90 % |
| Marcha / Zancada Larga (Pinzamiento) | 12° extensión | 8° aducción | 15° externa | Sin goma |
| Piernas Cruzadas | 70° flexión | 15° aducción | 20° externa | Sin goma |

### Textos explicativos

- **Modelo:** En el pinzamiento isquiofemoral, el trocánter menor puede chocar con la tuberosidad isquiática al caminar (cuando la pierna va hacia atrás en extensión y aducción). La goma busca generar una **fuerza de tracción decoaptante** que amplíe ese canal, lo que explicaría el alivio.
- **Límites:** Las cifras son una estimación ilustrativa, no una medición de tu cadera, y sentir alivio no confirma el diagnóstico: el espacio real solo se mide con una resonancia magnética.
- **Goma:** Ejerce un vector perpendicular que tracciona lateralmente la cabeza del fémur, separándola mecánicamente del isquion.

## Portada

### Presentación

Si los ejercicios de tracción con gomas elásticas te producen alivio inmediato, estás experimentando el efecto directo de la **decoaptación lateral del fémur**: abrir milímetros críticos entre el trocánter menor y el isquion para liberar el músculo cuadrado femoral y el nervio ciático.

### Protocolo en tres fases

#### Descompresión Inmediata

- **Descripción:** Tracción lateral y longitudinal con banda elástica en decúbito y cuadrupedia. Abre el espacio y permite la revascularización del cuadrado femoral.
- **Resultado:** Alivio sintomático y decoaptación

#### Estabilización del Glúteo Medio

- **Descripción:** Fortalecimiento de abductores en rangos que evitan la extensión. Impide la caída contralateral de la pelvis (signo de Trendelenburg).
- **Resultado:** Mantiene el espacio abierto de forma activa

#### Integración y Reeducación

- **Descripción:** Modificación del patrón de zancada (acortar paso, evitar cruce de pies) y ejercicios monopodales con pelvis estrictamente nivelada.
- **Resultado:** Prevención de recidivas en la vida diaria

## Plan de gimnasio

### Introducción

**Es una propuesta orientativa, no una pauta validada:** combina los criterios de la guía con principios generales de entrenamiento. No hay estudios que definan un plan de fuerza para esta patología. Revísala con tu médico o fisioterapeuta. El objetivo es conservar músculo y fuerza con dos sesiones por semana, evitando la extensión de cadera con aducción y rotación externa.

### Agradecimientos

Los entrenamientos de gimnasio en los que se basa este plan fueron planificados de forma personalizada por Bernardo González, de Activación Muscular Vila Real, a quien agradezco su trabajo. Esta adaptación a la situación actual de la cadera y los ejercicios nuevos están pendientes de su verificación.

Enlace: https://www.activacionmuscularcastellon.com/bernardo-gonzalez-2/

### Criterios

- **Mantener la intensidad:** Una revisión sobre la dosis mínima señala que la intensidad es lo más importante para mantener el rendimiento, aunque bajen la frecuencia y el volumen. En adultos mayores, conservar el tamaño muscular puede requerir hasta dos sesiones y de 2 a 3 series por ejercicio. No hay datos suficientes para recomendaciones específicas en deportistas (Spiering et al., 2021; Bickel et al., 2011).
- **Adaptación a partir de 60 años:** Está pensado para una persona de unos 60 años, en forma y con experiencia. Antes del primer ejercicio de cada grupo muscular haz 1 o 2 series de aproximación con poca carga, no llegues al fallo muscular y da prioridad a la técnica. Como conservar músculo puede requerir más dosis con la edad, cada día incluye un ejercicio de la otra zona, para trabajarla dos veces por semana. Es un criterio propio basado en esas revisiones, no en ensayos con este plan.
- **Sustituir sin dejar de trabajar el músculo:** Las zancadas se cambian por prensa y sentadilla a cajón alto, y la máquina de aductores por la de abductores. Es un criterio derivado de la guía, no un resultado de estudios.
- **Organización:** Separa las dos sesiones al menos 48 horas, y mejor 72, por ejemplo lunes y jueves. Haz en ambas la preparación antes de empezar. Calcula entre 60 y 70 minutos por sesión; es una estimación.

### Día A: Pierna

| Bloque | Ejercicio | Series | Repeticiones | Descanso | Clave |
|---|---|---|---|---|---|
| Preparación | Tracción lateral en cuadrupedia con goma | 1 | 45-60 s por lado | - | Es el ejercicio de la fase 1 de esta aplicación. Debe sentirse como apertura, sin dolor. |
| Preparación | 90/90 con corcho | 2 | 60 s | 30 s | Empuja con el talón y mantén la pelvis basculada. |
| Principal | Prensa de piernas | 3 | 10-12 | 2-3 min | Pies a la anchura de los hombros, rodillas alineadas y sin bajar hasta el tope. Baja menos si notas el pinzamiento. |
| Principal | Sentadilla a cajón alto con mancuerna al pecho | 3 | 8-10 | 2-3 min | Elige una altura sin molestias. Empuja el suelo con todo el pie. |
| Principal | Femoral sentado | 3 | 10-12 | 2 min | Pelvis basculada. Reduce recorrido o carga si molesta en la tuberosidad isquiática. |
| Principal | Abductores en máquina | 2 | 12-15 | 1 min 30 s | Sustituye a la máquina de aductores. Movimiento lento y sin balancear el tronco. |
| Principal | Puente de glúteo con pies en pared | 2 | 10-12 | 1 min 30 s | Mantén la retroversión y sube solo hasta alinear el cuerpo, sin hiperextender. |
| Principal | Extensión de rodilla en máquina | 2 | 15-20 | 1 min 30 s | Si duele la rodilla, reduce recorrido o carga. |
| Principal | Pallof isométrico | 2 | 8-12 por lado | 1 min 30 s | Pies paralelos, costillas cerradas y sin girar el tronco. |
| Otra zona | Remo sentado en máquina sin apoyar el pecho | 2 | 10-12 | 2 min | Segundo estímulo semanal de espalda, sin llegar al fallo. |

### Día B: Torso y resto

| Bloque | Ejercicio | Series | Repeticiones | Descanso | Clave |
|---|---|---|---|---|---|
| Preparación | Respiración diafragmática | 1 | 2-3 min | - | Exhala del todo y cierra las costillas sin tensar el cuello. |
| Preparación | Estiramiento dorsal | 2 | 60 s | 30 s | Expande las costillas al inhalar. Sin arquear la zona lumbar. |
| Principal | Press de banca inclinado a 30º con pies arriba | 3 | 8-12 | 2-3 min | Pies elevados para no arquear la zona lumbar. |
| Principal | Remo sentado en máquina sin apoyar el pecho | 3 | 8-12 | 2-3 min | Alarga el brazo en cada repetición y no balancees el tronco. |
| Principal | Press landmine | 3 | 8-12 | 2 min | Con los pies paralelos, sin dar un paso atrás. Cierra las costillas al bajar. |
| Principal | Jalón unilateral o pulldown en máquina | 3 | 8-12 por lado | 2 min | Sentado con buen apoyo. Cierra las costillas al bajar y alarga todo lo que puedas. |
| Principal | Elevaciones laterales en polea a la altura de la rodilla | 2 | 12-15 | 1 min 30 s | Controla la bajada y no subas los hombros. |
| Principal | Bíceps Scott en banco con polea | 2 | 10-12 | 1 min 30 s | Sin arquear la zona lumbar. |
| Principal | Tríceps en polea de espaldas | 2 | 10-12 | 1 min 30 s | Con los pies paralelos o sentado, sin zancada larga. |
| Principal | Bicho muerto alterno | 2 | 10-12 por lado | 1 min | Mantén la zona lumbar contra el suelo. |
| Otra zona | Prensa de piernas | 2 | 10-12 | 2-3 min | Segundo estímulo semanal de pierna, con menos carga que el día A si lo necesitas. |

### Progresión

- **Carga inicial:** En las dos primeras semanas elige una carga que te deje unas 3 repeticiones en reserva en pierna y unas 2 en torso. Después mantén al menos 1 o 2 en reserva, sin llegar al fallo.
- **Progresión:** Cuando completes todas las series en la parte alta del rango con buena técnica y sin síntomas, sube la carga lo mínimo posible.
- **Descarga:** Cada cinco o seis semanas, o antes si notas fatiga acumulada o peor recuperación, haz una semana con la misma carga y una serie menos por ejercicio.
- **Reintroducir ejercicios:** Si llevas varias semanas sin síntomas, consulta con tu profesional antes de volver a un ejercicio de «Con cautela». Empieza con poca carga y solo uno cada vez.

### Cuándo parar

- **Parar el ejercicio:** Interrumpe si aparece dolor punzante en la nalga profunda, sensación de enganche, hormigueo, adormecimiento o dolor que baja por la pierna.
- **Revisar el plan:** Si el dolor basal empeora a las 24 horas, vuelve a la carga anterior y coméntalo con tu médico o fisioterapeuta.
- **Atención urgente:** Acude a urgencias si notas pérdida de fuerza en la pierna o el pie, adormecimiento en la zona genital o perineal, o alteraciones en el control de la orina o las heces.

### Técnica de ejecución

- **Respiración:** Coge aire antes de bajar la carga y suéltalo del todo al hacer el esfuerzo, sin bloquear la respiración.
- **Costillas y pelvis:** Mantén las costillas cerradas y la pelvis estable para no arquear la zona lumbar.
- **Ritmo:** Baja la carga en unos 2 o 3 segundos y sube de forma controlada, sin rebotes.
- **Rango de movimiento:** Usa el mayor recorrido que no moleste. Si el ejercicio reproduce los síntomas, reduce primero el recorrido y después la carga.
- **Los dos lados:** Empieza por el lado con más molestias y haz en el otro las mismas repeticiones.

#### Tracción lateral en cuadrupedia con goma

- **General:** Coloca la goma en la raíz del muslo y aléjate del anclaje hasta notar tensión constante.
- **Para tu cadera:** Debe sentirse como una apertura, sin dolor. Mantén la rodilla bajo la cadera, sin cruzar el muslo hacia dentro.

#### 90/90 con corcho

- **General:** Túmbate con caderas y rodillas a 90° y los pies en la pared. Sujeta un corcho entre las rodillas.
- **General:** Empuja con los talones sin despegar la pelvis del suelo.
- **Para tu cadera:** Sirve para preparar la cadera sin extenderla. Si notas pinzamiento, separa un poco los pies de la pared.
- **Fase 1:** Caderas y rodillas a 90°, con los pies en la pared
- **Fase 2:** Exhala, presiona el corcho y bascula la pelvis sin despegarla
- **Error, Arquear la zona lumbar:** Se pierde la basculación de la pelvis y el esfuerzo pasa a la espalda. Exhala del todo y acerca las costillas a la pelvis.
- **Rango, Flexión de cadera:** 85 a 100°

#### Prensa de piernas

- **General:** Apoya toda la espalda y la pelvis, con los pies a la anchura de los hombros y las rodillas en la línea de los pies.
- **General:** Baja despacio y empuja con todo el pie, sin bloquear las rodillas arriba.
- **Para tu cadera:** Es el sustituto de las zancadas porque no lleva la pierna atrás. Prueba alturas de pies hasta encontrar la que no moleste.
- **Para tu cadera:** Detente antes de que la pelvis se despegue del respaldo. Evita que las rodillas se junten, porque acerca la cadera a la aducción.
- **Fase 1:** Pies a la anchura de los hombros y espalda apoyada
- **Fase 2:** Baja despacio sin llegar al tope
- **Fase 3:** Empuja con todo el pie sin bloquear las rodillas
- **Error, Las rodillas se juntan:** Lleva la cadera hacia la aducción, la posición que estrecha el espacio. Reduce la carga y empuja en la línea de los pies.
- **Error, Bajar hasta el tope:** Al final del recorrido la pelvis tiende a despegarse y la zona lumbar se redondea. Detente antes.
- **Rango, Flexión de rodilla:** 20 a 90°

#### Sentadilla a cajón alto con mancuerna al pecho

- **General:** Coloca los pies a la anchura de los hombros y sujeta la mancuerna contra el pecho.
- **General:** Lleva la cadera atrás, toca el cajón sin dejarte caer y sube empujando el suelo.
- **Para tu cadera:** Elige un cajón con el que puedas bajar sin molestias, y súbelo si notas pinzamiento. Mantén las rodillas abiertas.
- **Fase 1:** De pie, con la mancuerna al pecho
- **Fase 2:** Lleva la cadera atrás hasta tocar el cajón
- **Fase 3:** Sube empujando el suelo con todo el pie
- **Error, Las rodillas caen hacia dentro:** Aumenta la aducción de cadera. Baja la carga y empuja las rodillas hacia fuera.
- **Rango, Flexión de cadera:** 0 a 95°

#### Femoral sentado

- **General:** Ajusta la máquina para alinear la rodilla con su eje y sujeta bien el muslo.
- **General:** Flexiona la rodilla sin despegar la pelvis del asiento y vuelve despacio.
- **Para tu cadera:** El isquiotibial se inserta cerca de la zona irritada. Si molesta en la tuberosidad isquiática, reduce recorrido y carga, y coméntalo con tu profesional.
- **Fase 1:** Pierna casi estirada, pelvis apoyada
- **Fase 2:** Flexiona la rodilla en unos 2 segundos
- **Fase 3:** Vuelve despacio sin perder el apoyo
- **Error, La pelvis se despega:** Traslada la tensión a la inserción de los isquiotibiales y a la zona lumbar. Baja la carga y mantén la pelvis basculada.
- **Rango, Flexión de rodilla:** 20 a 95°

#### Abductores en máquina

- **General:** Siéntate con la pelvis atrás y el tronco quieto.
- **General:** Abre las piernas sin impulso, mantén un segundo y vuelve despacio.
- **Para tu cadera:** Fortalece el glúteo medio, importante para que la pelvis no caiga al caminar. Evita abrir hasta notar molestia en la nalga profunda.
- **Fase 1:** Sentado, piernas casi juntas
- **Fase 2:** Abre sin balancear el tronco
- **Fase 3:** Vuelve despacio
- **Error, Balancear el tronco:** El impulso resta trabajo al glúteo. Reduce la carga y mantén la espalda apoyada.
- **Rango, Abducción:** 5 a 35°

#### Puente de glúteo con pies en pared

- **General:** Túmbate con los pies apoyados y empuja con todo el pie.
- **General:** Sube hasta alinear rodillas, caderas y hombros, y baja despacio. La figura lo muestra con apoyo en el suelo; en la pared el gesto es el mismo.
- **Para tu cadera:** No subas más de la línea recta: extender de más es la posición que debes evitar. Mantén las rodillas separadas.
- **Fase 1:** Tumbado, con los pies apoyados
- **Fase 2:** Sube hasta alinear rodillas, caderas y hombros
- **Fase 3:** Baja despacio sin perder la retroversión
- **Error, Subir de más:** Lleva la cadera a la extensión y arquea la zona lumbar. Detente en la línea recta.
- **Rango, Cadera (0° = en línea):** -5 a 60°

#### Extensión de rodilla en máquina

- **General:** Alinea la rodilla con el eje de la máquina y apoya toda la espalda.
- **General:** Extiende sin golpear arriba y baja despacio.
- **Para tu cadera:** La cadera no tiene que moverse, por lo que suele tolerarse bien. Si molesta la rodilla, reduce recorrido o carga.
- **Fase 1:** Rodilla flexionada, espalda apoyada
- **Fase 2:** Extiende de forma controlada
- **Fase 3:** Baja despacio
- **Error, Despegar la pelvis:** Empujar con el cuerpo resta trabajo al muslo. Baja la carga y agárrate a las asas.
- **Rango, Flexión de rodilla:** 10 a 90°

#### Pallof isométrico

- **General:** Colócate de lado a la polea, con los pies paralelos a la anchura de los hombros.
- **General:** Lleva las manos al frente, aguanta sin dejar que el tronco gire y vuelve.
- **Para tu cadera:** Los pies paralelos evitan llevar una pierna atrás. Mantén el peso repartido en las dos piernas.
- **Fase 1:** De lado a la polea, con las manos en el pecho
- **Fase 2:** Lleva las manos al frente
- **Fase 3:** Aguanta sin que el tronco gire
- **Fase 4:** Vuelve al pecho
- **Error, El tronco gira:** Se pierde el trabajo antirrotación y la pelvis tiende a moverse. Reduce la carga.
- **Rango, Giro del tronco:** -3 a 3°

#### Remo sentado en máquina sin apoyar el pecho

- **General:** Siéntate erguido, con los pies apoyados, y deja que el brazo se alargue delante.
- **General:** Tira llevando los codos atrás, sin balancear el tronco.
- **Para tu cadera:** Sentado, la cadera queda en flexión cómoda. Si te molesta el asiento, usa un cojín para descargar la tuberosidad isquiática.
- **Para tu cadera:** Abrir el pecho sin forzar ayuda a no encorvarte para compensar la molestia de cadera.
- **Fase 1:** Brazos alargados, tronco erguido
- **Fase 2:** Tira llevando los codos atrás
- **Fase 3:** Vuelve alargando el brazo
- **Error, Balancear el tronco:** Convierte el remo en un impulso de espalda y pelvis. Reduce la carga.
- **Rango, Flexión de codo:** 5 a 100°

#### Respiración diafragmática

- **General:** Túmbate con caderas y rodillas a 90° y las piernas apoyadas.
- **General:** Inhala expandiendo costillas y abdomen, y exhala del todo acercando las costillas a la pelvis.
- **Para tu cadera:** Esta posición evita la extensión de cadera. La guía la recomienda para no sobrecargar los pectorales altos y las escápulas al respirar.
- **Fase 1:** Inhala expandiendo las costillas
- **Fase 2:** Exhala del todo y cierra las costillas

#### Estiramiento dorsal

- **General:** Agárrate a un apoyo, lleva la cadera atrás y deja caer el pecho sin forzar.
- **General:** Expande las costillas al inhalar y suelta el aire despacio.
- **Para tu cadera:** Mantén las piernas con las rodillas algo flexionadas, para no estirar el isquiotibial, y los pies a la anchura de las caderas.
- **Fase 1:** Cadera atrás y brazos alargados
- **Fase 2:** Expande las costillas al inhalar
- **Fase 3:** Exhala despacio
- **Error, Estirar las piernas:** Tensa el isquiotibial y el nervio ciático, justo lo que la guía pide evitar. Mantén las rodillas flexionadas.
- **Rango, Flexión de rodilla:** 20 a 40°

#### Press de banca inclinado a 30º con pies arriba

- **General:** Apoya la espalda en el banco a 30º con los pies elevados en un apoyo.
- **General:** Baja las mancuernas con los codos abiertos unos 45° y empuja sin arquear.
- **Para tu cadera:** Los pies arriba evitan el arco lumbar y la extensión de cadera. Si la flexión molesta, baja el apoyo de los pies.
- **Fase 1:** Mancuernas arriba, espalda apoyada
- **Fase 2:** Baja controlando, con los codos a unos 45°
- **Fase 3:** Empuja mientras exhalas
- **Error, Arquear la zona lumbar:** Empuja desde la espalda y puede mover la pelvis. Reduce la carga y cierra las costillas.
- **Rango, Flexión de codo:** 5 a 100°

#### Press landmine

- **General:** Colócate frente a la barra, con los pies paralelos, y sujeta el extremo a la altura del hombro.
- **General:** Empuja hacia delante y arriba, y baja cerrando las costillas.
- **Para tu cadera:** Se hace con los pies paralelos, sin dar un paso atrás, para no extender la cadera. Mantén el peso en las dos piernas.
- **Fase 1:** Mano a la altura del hombro, pies paralelos
- **Fase 2:** Empuja hacia delante y arriba
- **Fase 3:** Baja cerrando las costillas
- **Error, Arquear la zona lumbar:** La pelvis se va hacia delante y se acerca a la extensión de cadera. Reduce la carga.
- **Rango, Flexión de codo:** 5 a 125°

#### Jalón unilateral o pulldown en máquina

- **General:** Siéntate con los muslos sujetos y alarga el brazo arriba.
- **General:** Tira llevando el codo hacia la costilla, y cierra las costillas al bajar.
- **Para tu cadera:** El asiento mantiene la cadera flexionada. Ajústalo para que los pies apoyen y la rodilla no quede por encima de la cadera.
- **Fase 1:** Brazo alargado arriba
- **Fase 2:** Lleva el codo hacia la costilla
- **Fase 3:** Sube alargando el brazo
- **Error, Inclinar el tronco atrás:** Arquea la zona lumbar y resta trabajo a la espalda. Mantén el tronco estable.
- **Rango, Flexión de hombro:** 45 a 170°

#### Elevaciones laterales en polea a la altura de la rodilla

- **General:** Coloca la polea a la altura de la rodilla, en el lado contrario al brazo que trabaja.
- **General:** Sube el brazo hasta la altura del hombro y baja despacio.
- **Para tu cadera:** Mantén los pies paralelos y sin balancear la pelvis. No te dejes caer sobre una pierna.
- **Fase 1:** Brazo abajo, pies paralelos
- **Fase 2:** Sube hasta la altura del hombro
- **Fase 3:** Baja despacio
- **Error, Inclinar el tronco:** Traslada la carga a la cadera de un lado. Reduce el peso.
- **Rango, Abducción del hombro:** 10 a 85°

#### Bíceps Scott en banco con polea

- **General:** Apoya los brazos en el banco, con el pecho estable.
- **General:** Flexiona los codos sin despegar los brazos y baja despacio.
- **Para tu cadera:** Comprueba que el asiento no quede tan bajo que las rodillas superen las caderas. Pon los pies bien apoyados.
- **Fase 1:** Brazos apoyados, codos casi estirados
- **Fase 2:** Flexiona los codos
- **Fase 3:** Baja despacio
- **Error, Arquear la espalda:** Ayuda con el cuerpo y arquea la zona lumbar. Reduce la carga.
- **Rango, Flexión de codo:** 20 a 130°

#### Tríceps en polea de espaldas

- **General:** Colócate de espaldas a la polea alta, con los pies paralelos o sentado.
- **General:** Extiende el codo sin mover el brazo y vuelve despacio.
- **Para tu cadera:** Evita la posición de zancada larga: lleva la pierna atrás y se acerca a la extensión de cadera.
- **Fase 1:** Codo flexionado, brazo quieto
- **Fase 2:** Extiende el codo
- **Fase 3:** Vuelve despacio
- **Error, Arquear la zona lumbar:** La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga.
- **Rango, Flexión de codo:** 5 a 125°

#### Bicho muerto alterno

- **General:** Túmbate con caderas y rodillas a 90° y los brazos arriba.
- **General:** Alarga una pierna y el brazo contrario sin despegar la zona lumbar, y cambia de lado.
- **Para tu cadera:** Baja la pierna solo hasta donde mantengas la zona lumbar en el suelo, sin llegar a la extensión de cadera.
- **Fase 1:** Caderas y rodillas a 90°, brazos arriba
- **Fase 2:** Alarga una pierna y el brazo contrario
- **Fase 3:** Vuelve al centro
- **Fase 4:** Cambia de lado
- **Fase 5:** Vuelve al centro
- **Error, Arquear la zona lumbar:** La pelvis bascula y la cadera se extiende de más. Alarga menos la pierna.
- **Rango, Flexión de cadera:** 25 a 90°

#### 90/90 femoral con corcho

- **General:** Túmbate con caderas y rodillas a 90° y los talones en la pared, con un corcho entre las rodillas.
- **General:** Empuja con los talones hacia abajo hasta notar la parte posterior del muslo y despega la pelvis solo un poco.
- **Para tu cadera:** Prepara la cadera sin extenderla. Si notas pinzamiento, separa un poco los pies de la pared.
- **Fase 1:** Caderas y rodillas a 90°, con los talones en la pared
- **Fase 2:** Exhala del todo y empuja con los talones hacia abajo
- **Error, Arquear la zona lumbar:** Si el esfuerzo pasa a la espalda, deja de trabajar el muslo. Acerca las costillas a la pelvis.
- **Rango, Flexión de cadera:** 85 a 100°

#### 90/90 con basculación pélvica

- **General:** Túmbate con caderas y rodillas a 90° y los pies en la pared.
- **General:** Al exhalar, bascula la pelvis y acerca la zona lumbar al suelo.
- **Para tu cadera:** Trabaja el control de la pelvis lejos de la extensión de cadera.
- **Fase 1:** Caderas y rodillas a 90°, con los pies en la pared
- **Fase 2:** Exhala y bascula la pelvis
- **Error, Arquear la zona lumbar:** Se pierde la basculación. Exhala del todo antes de repetir.
- **Rango, Flexión de cadera:** 85 a 100°

#### Hookling en step

- **General:** Túmbate con las pantorrillas apoyadas en un step, con caderas y rodillas a 90°.
- **General:** Inhala expandiendo las costillas y exhala del todo sin tensar el cuello.
- **Para tu cadera:** La posición descarga la cadera y evita la extensión.
- **Fase 1:** Inhala expandiendo las costillas
- **Fase 2:** Exhala del todo y cierra las costillas
- **Error, Arquear la zona lumbar:** La respiración sube al pecho y se pierde el apoyo lumbar. Suelta más aire.

#### Open book bilateral

- **General:** Túmbate de lado con las rodillas flexionadas y los brazos delante.
- **General:** Abre el brazo de arriba hacia atrás siguiéndolo con la mirada, y repite en el otro lado.
- **Para tu cadera:** Mantén las rodillas juntas y la pelvis apilada, para que el giro sea del tórax y no de la cadera.
- **Fase 1:** De lado, con los brazos delante
- **Fase 2:** Abre el brazo y gira el tórax mientras exhalas
- **Fase 3:** Vuelve despacio
- **Error, La pelvis se va con el giro:** El giro pasa a la zona lumbar y a la cadera. Abre menos y deja las rodillas juntas.
- **Rango, Giro del tronco:** 0 a 45°

#### Estiramiento dorsal sentado

- **General:** Siéntate y agárrate a un apoyo delante de ti, con los brazos alargados.
- **General:** Deja caer el pecho sin forzar y expande las costillas al inhalar.
- **Para tu cadera:** Sentado, la cadera queda en flexión cómoda. Si te molesta el asiento, usa un cojín para descargar la tuberosidad isquiática.
- **Fase 1:** Sentado, con los brazos alargados
- **Fase 2:** Deja caer el pecho e inhala expandiendo las costillas
- **Fase 3:** Exhala y relaja
- **Error, Arquear la zona lumbar:** El estiramiento se va a la espalda baja. Cierra las costillas.
- **Rango, Flexión de hombro:** 145 a 170°

#### Bretzel dinámico con churro

- **General:** Túmbate de lado con la pierna de arriba flexionada sobre un churro y la de abajo doblada hacia atrás.
- **General:** Gira el tórax poco a poco mientras exhalas, con la cabeza bien apoyada.
- **Para tu cadera:** Incluye rotación y la pierna de abajo va hacia atrás: no fuerces el rango y reduce si reproduce los síntomas.
- **Fase 1:** De lado, con la cabeza apoyada
- **Fase 2:** Gira el tórax mientras exhalas
- **Fase 3:** Vuelve despacio
- **Error, Forzar el giro:** La pelvis se va con el tronco y se carga la cadera. Gira solo hasta donde sea cómodo.
- **Rango, Giro del tronco:** 0 a 45°

#### Estiramiento piramidal

- **General:** Túmbate boca arriba y apoya el tobillo sobre la rodilla contraria.
- **General:** Acerca la pierna de apoyo al pecho hasta notar el estiramiento en la nalga, sin dolor.
- **Para tu cadera:** Combina flexión y rotación externa: detente si reproduce los síntomas.
- **Fase 1:** Tobillo sobre la rodilla contraria
- **Fase 2:** Acerca la pierna al pecho mientras exhalas
- **Fase 3:** Suelta despacio
- **Error, Despegar la pelvis:** Se pierde el apoyo y se fuerza la zona. Acerca menos la pierna.
- **Rango, Flexión de la pierna de apoyo:** 40 a 85°

#### Inflar globo en cuclillas contra pared

- **General:** Apoya la espalda en la pared, en cuclillas, y sujeta un globo.
- **General:** Inhala por la nariz y sopla sin ruido hasta soltar todo el aire, con el abdomen activo.
- **Para tu cadera:** Es una flexión profunda: ajusta la altura y súbete si notas pinzamiento.
- **Fase 1:** Inhala expandiendo las costillas
- **Fase 2:** Sopla hasta soltar todo el aire
- **Error, Bajar demasiado:** Lleva la cadera a una flexión profunda que puede molestar. Quédate más arriba.
- **Rango, Flexión de cadera:** 80 a 115°

#### Camello a cobra

- **General:** En cuatro apoyos, redondea la espalda de forma progresiva.
- **General:** Pasa por la posición neutra y lleva el pecho adelante, sin hundir la zona lumbar.
- **Para tu cadera:** La extensión debe repartirse por la espalda alta, sin llevarla a la zona lumbar. Mantén las rodillas bajo las caderas.
- **Fase 1:** Redondea la espalda mientras exhalas
- **Fase 2:** Vuelve a la posición neutra
- **Fase 3:** Lleva el pecho adelante mientras inhalas
- **Fase 4:** Vuelve a la posición neutra
- **Error, Hundir la zona lumbar:** Concentra la extensión abajo y mueve la pelvis. Reduce el recorrido.
- **Rango, Curva de la espalda:** -16 a 16°

#### Alargar pierna con la otra rodilla flexionada

- **General:** Túmbate boca arriba con una rodilla acercada al pecho.
- **General:** Alarga la otra pierna deslizando el talón, sin que la zona lumbar se despegue.
- **Para tu cadera:** No pierdas la retroversión: baja la pierna solo hasta donde controles la pelvis.
- **Fase 1:** Una rodilla al pecho y la otra flexionada
- **Fase 2:** Alarga la pierna deslizando el talón
- **Fase 3:** Vuelve flexionando la rodilla
- **Error, Arquear la zona lumbar:** La pelvis bascula y la cadera se extiende de más. Alarga menos.
- **Rango, Flexión de cadera:** 5 a 50°

#### Sliding de pierna

- **General:** De pie, con un pie sobre un deslizador, lleva esa pierna atrás mientras flexionas la de apoyo.
- **General:** Vuelve empujando con todo el pie de apoyo.
- **Para tu cadera:** Evita llevar la pierna a extensión con aducción: desliza poco y en línea recta.
- **Fase 1:** De pie, con los pies juntos
- **Fase 2:** Desliza la pierna atrás, un poco
- **Fase 3:** Vuelve empujando con el pie de apoyo
- **Error, Deslizar demasiado y cruzar:** Suma extensión y aducción, la combinación que estrecha el espacio. Reduce el recorrido.
- **Rango, Flexión de cadera:** 0 a 25°

#### Sliding pull back en cuadrupedia

- **General:** En cuatro apoyos, con las manos sobre deslizadores.
- **General:** Lleva la pelvis atrás sin que se mueva la espalda y vuelve a la posición inicial.
- **Para tu cadera:** Sin extender la cadera más allá de la zona cómoda. Si la flexión molesta, reduce el recorrido.
- **Fase 1:** En cuatro apoyos
- **Fase 2:** Lleva la pelvis atrás mientras exhalas
- **Fase 3:** Vuelve sin arquear
- **Error, Hundir la zona lumbar:** Se pierde el control del tronco. Cierra las costillas antes de moverte.
- **Rango, Flexión de cadera:** 80 a 110°

#### Cross connect

- **General:** Es una interpretación provisional del movimiento, pendiente de confirmar con un vídeo específico.
- **General:** Boca arriba con las piernas a 90°, acerca el codo a la rodilla contraria mientras exhalas.
- **Para tu cadera:** Se mantiene en flexión de cadera, lejos de la extensión. Reduce el recorrido si molesta.
- **Fase 1:** Piernas a 90° y manos junto a la cabeza
- **Fase 2:** Acerca el codo a la rodilla contraria
- **Fase 3:** Vuelve despacio
- **Error, Arquear la zona lumbar:** El esfuerzo sale del abdomen. Mantén la espalda baja en el suelo.
- **Rango, Flexión de cadera:** 85 a 115°

#### Delfín tocando pie alterno

- **General:** Es una interpretación provisional del movimiento, pendiente de confirmar con un vídeo específico.
- **General:** Apóyate sobre las manos o antebrazos con la pelvis alta y las rodillas algo flexionadas, y lleva una mano hacia el pie contrario.
- **Para tu cadera:** Mantén las rodillas flexionadas para no estirar el isquiotibial y el nervio ciático.
- **Fase 1:** Pelvis alta y rodillas algo flexionadas
- **Fase 2:** Lleva una mano hacia el pie contrario
- **Fase 3:** Vuelve y cambia de lado
- **Error, Estirar las piernas:** Tensa el isquiotibial y el nervio ciático. Mantén las rodillas flexionadas.
- **Rango, Flexión de rodilla:** 10 a 30°

#### Extensión de rodilla unilateral en máquina

- **General:** Alinea la rodilla con el eje de la máquina y apoya toda la espalda.
- **General:** Extiende una pierna sin golpear arriba y baja despacio.
- **Para tu cadera:** La cadera no tiene que moverse, por lo que suele tolerarse bien. Si molesta la rodilla, reduce recorrido o carga.
- **Fase 1:** Rodilla flexionada, espalda apoyada
- **Fase 2:** Extiende de forma controlada
- **Fase 3:** Baja despacio
- **Error, Despegar la pelvis:** Empujar con el cuerpo resta trabajo al muslo. Baja la carga y agárrate a las asas.
- **Rango, Flexión de rodilla:** 10 a 90°

#### Sentadilla con cuña

- **General:** Coloca los talones sobre una cuña y sujeta la mancuerna al pecho.
- **General:** Baja lo más vertical posible, aguanta unos segundos respirando y sube.
- **Para tu cadera:** Ajusta la profundidad: baja solo hasta donde no notes pinzamiento y mantén las rodillas en la línea de los pies.
- **Fase 1:** De pie, con los talones en la cuña
- **Fase 2:** Baja lo más vertical posible
- **Fase 3:** Aguanta unos segundos respirando
- **Fase 4:** Sube empujando el suelo
- **Error, Inclinar el tronco:** La carga se va a la cadera y a la espalda. Baja menos y mantente vertical.
- **Rango, Flexión de rodilla:** 0 a 115°

#### Sentadilla Zecher

- **General:** Sujeta la barra en el pliegue de los codos, pegada al cuerpo.
- **General:** Lleva la cadera atrás, baja con el pecho alto y sube empujando el suelo.
- **Para tu cadera:** Sin bajar a un rango profundo. Mantén las rodillas abiertas.
- **Fase 1:** De pie, con la barra en los codos
- **Fase 2:** Baja controlando, sin llegar al rango profundo
- **Fase 3:** Sube empujando el suelo
- **Error, Bajar demasiado:** La flexión profunda puede reproducir el pinzamiento y redondea la espalda. Detente antes.
- **Rango, Flexión de cadera:** 0 a 90°

#### Sentadilla isométrica en polea

- **General:** Colócate frente a la polea, con el agarre al pecho.
- **General:** Baja hasta una altura sin molestias y aguanta respirando, con el peso en todo el pie.
- **Para tu cadera:** Busca la altura sin molestias y mantén las rodillas abiertas.
- **Fase 1:** De pie, frente a la polea
- **Fase 2:** Baja hasta una altura cómoda
- **Fase 3:** Aguanta respirando
- **Fase 4:** Sube despacio
- **Error, Las rodillas caen hacia dentro:** Aumenta la aducción de cadera. Empuja las rodillas hacia fuera.
- **Rango, Flexión de rodilla:** 5 a 80°

#### Media sentadilla en pared con codo al frente

- **General:** Apoya la espalda en la pared, con los pies adelantados y un rodillo justo por encima de las rodillas.
- **General:** Baja a media sentadilla con los codos al frente y respira sin arquear.
- **Para tu cadera:** Es un rango corto que evita la extensión. Mantén las rodillas en la línea de los pies.
- **Fase 1:** Espalda en la pared y codos al frente
- **Fase 2:** Baja a media sentadilla
- **Fase 3:** Sube sin despegar la espalda
- **Error, Las rodillas caen hacia dentro:** Aumenta la aducción de cadera. Presiona el rodillo sin juntarlas de más.
- **Rango, Flexión de rodilla:** 20 a 80°

#### Femoral isométrico en step

- **General:** Túmbate con los talones en un step y las rodillas algo flexionadas.
- **General:** Empuja con los talones, eleva un poco la pelvis y aguanta respirando.
- **Para tu cadera:** Mantén la pelvis basculada. Si molesta en la tuberosidad isquiática, reduce la altura.
- **Fase 1:** Talones en el step y pelvis apoyada
- **Fase 2:** Empuja y eleva un poco la pelvis
- **Fase 3:** Aguanta respirando
- **Error, Arquear la zona lumbar:** El esfuerzo pasa a la espalda. Cierra las costillas y sube menos.
- **Rango, Flexión de rodilla:** 45 a 120°

#### Femoral con churro o fitball

- **General:** Túmbate con los talones sobre el churro o el fitball y eleva un poco la pelvis.
- **General:** Acerca los talones rodando sin que la espalda se arquee, y vuelve a estirar.
- **Para tu cadera:** Mantén la retroversión. Si molesta cerca de la tuberosidad isquiática, reduce el recorrido.
- **Fase 1:** Piernas alargadas sobre el apoyo
- **Fase 2:** Acerca los talones rodando
- **Fase 3:** Estira despacio
- **Error, Arquear la zona lumbar:** La pelvis pierde la retroversión. Sube menos y controla el rodaje.
- **Rango, Flexión de rodilla:** 15 a 130°

#### Puente con step y rodilla al pecho

- **General:** Túmbate con un pie en el step y la otra rodilla acercada al pecho.
- **General:** Empuja con el pie y sube sin que la pelvis caiga de un lado.
- **Para tu cadera:** Es trabajo a una pierna: vigila que la pelvis no caiga y no subas más de la línea recta.
- **Fase 1:** Un pie en el step y la otra rodilla al pecho
- **Fase 2:** Sube empujando con el pie
- **Fase 3:** Baja despacio
- **Error, La pelvis cae de un lado:** Se pierde el control del glúteo. Sube menos y mantén la pelvis horizontal.
- **Rango, Cadera (0° = en línea):** -30 a 90°

#### Puente unilateral con rodilla al pecho

- **General:** Túmbate con un pie apoyado y la otra rodilla acercada al pecho.
- **General:** Empuja con todo el pie y sube sin que la pelvis caiga.
- **Para tu cadera:** Es trabajo a una pierna: vigila que la pelvis no caiga y no subas más de la línea recta.
- **Fase 1:** Un pie apoyado y la otra rodilla al pecho
- **Fase 2:** Sube empujando con el pie
- **Fase 3:** Baja despacio
- **Error, La pelvis cae de un lado:** Se pierde el control del glúteo. Sube menos y mantén la pelvis horizontal.
- **Rango, Cadera (0° = en línea):** -30 a 90°

#### Almeja de pie en pared

- **General:** De pie junto a la pared, apoya en ella la rodilla de la pierna elevada con un corcho.
- **General:** Abre y cierra la pelvis sobre la pierna de apoyo, apretando el glúteo.
- **Para tu cadera:** Trabajo a una pierna: vigila que la pelvis no caiga y evita abrir hasta notar molestia en la nalga profunda.
- **Fase 1:** Rodilla contra la pared, peso en la otra pierna
- **Fase 2:** Abre apretando el glúteo de apoyo
- **Fase 3:** Cierra despacio
- **Error, La pelvis cae:** El glúteo medio deja de sostenerla. Reduce el recorrido.
- **Rango, Giro de la pelvis:** -18 a 2°

#### Step up con mancuernas

- **General:** Apoya todo un pie en el cajón, con una mancuerna en cada mano.
- **General:** Sube haciendo la fuerza con el pie de arriba, sin impulso del de abajo, y baja controlando.
- **Para tu cadera:** Trabajo a una pierna: vigila que la pelvis no caiga y elige una altura sin molestias.
- **Fase 1:** Un pie en el cajón
- **Fase 2:** Sube empujando con el pie de arriba
- **Fase 3:** Baja controlando con la pierna de arriba
- **Error, La rodilla cae hacia dentro:** Aumenta la aducción de cadera. Baja la carga o el cajón.
- **Rango, Flexión de rodilla:** 0 a 105°

#### Step up con mancuerna contralateral

- **General:** Apoya todo un pie en el cajón y sujeta la mancuerna en la mano contraria.
- **General:** Sube sin inclinarte hacia la mancuerna y baja controlando.
- **Para tu cadera:** La carga en un lado exige más al glúteo medio: vigila que la pelvis no caiga.
- **Fase 1:** Un pie en el cajón
- **Fase 2:** Sube empujando con el pie de arriba
- **Fase 3:** Baja controlando con la pierna de arriba
- **Error, Inclinar el tronco:** La pelvis cae y se pierde el trabajo lateral. Reduce el peso.
- **Rango, Flexión de rodilla:** 0 a 105°

#### Step down en cajón

- **General:** De pie sobre el cajón, baja la otra pierna muy despacio hasta casi tocar el suelo.
- **General:** La rodilla de apoyo no debe adelantarse más de la punta del pie: lleva la cadera atrás y vuelve a subir.
- **Para tu cadera:** Trabajo a una pierna: empieza con poca altura, baja poco y vigila que la pelvis no caiga.
- **Fase 1:** De pie sobre el cajón
- **Fase 2:** Baja muy despacio llevando la cadera atrás
- **Fase 3:** Sube empujando con todo el pie
- **Error, La rodilla se adelanta:** La carga se va a la rodilla y se pierde el control. Baja menos y lleva la cadera atrás.
- **Rango, Flexión de rodilla:** 0 a 90°

#### Sentadilla stagg con mancuerna

- **General:** Adelanta un pie y deja el otro detrás con el talón elevado, sujetando la mancuerna al pecho.
- **General:** Baja en vertical con el peso en la pierna de delante y sube.
- **Para tu cadera:** Posición escalonada: pie trasero sin extensión forzada. Reduce la separación si notas pinzamiento.
- **Fase 1:** Pies escalonados, mancuerna al pecho
- **Fase 2:** Baja en vertical
- **Fase 3:** Sube empujando con el pie de delante
- **Error, Atrasar demasiado el pie:** Lleva la cadera trasera a la extensión. Acerca el pie.
- **Rango, Flexión de rodilla:** 0 a 105°

#### Peso muerto rumano base stagg

- **General:** Retrasa un poco un pie, con el peso en la pierna de delante y las mancuernas abajo.
- **General:** Lleva la cadera atrás con la espalda neutra y sube apretando el glúteo.
- **Para tu cadera:** Bisagra con carga: la guía desaconseja el peso muerto pesado. Usa poca carga y no fuerces el estiramiento.
- **Fase 1:** Peso en el pie de delante
- **Fase 2:** Lleva la cadera atrás con la espalda neutra
- **Fase 3:** Sube apretando el glúteo
- **Error, Redondear la espalda:** Bajas doblando la columna en lugar de la cadera. Reduce el recorrido.
- **Rango, Flexión de cadera:** 0 a 100°

#### Peso muerto rumano asimétrico con manos en pelvis

- **General:** Retrasa un pelín un pie y coloca las manos en la pelvis para notar si se mueve.
- **General:** Baja llevando la cadera atrás, sin doblar mucho las rodillas, y sube.
- **Para tu cadera:** Es la versión sin carga para aprender el gesto. Mantén la pelvis horizontal y no fuerces el estiramiento.
- **Fase 1:** Manos en la pelvis, un pie retrasado
- **Fase 2:** Lleva la cadera atrás
- **Fase 3:** Sube apretando el glúteo
- **Error, Redondear la espalda:** Bajas doblando la columna en lugar de la cadera. Reduce el recorrido.
- **Rango, Flexión de cadera:** 0 a 90°

#### Peso muerto rumano asimétrico con mancuernas

- **General:** Retrasa un pelín un pie, con una mancuerna en cada mano.
- **General:** Baja llevando la cadera atrás, sin doblar mucho las rodillas, y sube.
- **Para tu cadera:** Bisagra con carga: la guía desaconseja el peso muerto pesado. Usa poca carga.
- **Fase 1:** Mancuernas abajo, un pie retrasado
- **Fase 2:** Lleva la cadera atrás
- **Fase 3:** Sube apretando el glúteo
- **Error, Redondear la espalda:** Bajas doblando la columna en lugar de la cadera. Reduce el recorrido.
- **Rango, Flexión de cadera:** 0 a 90°

#### Rack pull

- **General:** Coloca la barra en los soportes, a la altura de las rodillas.
- **General:** Sube empujando el suelo con la espalda neutra y termina erguido, sin echarte atrás.
- **Para tu cadera:** Bisagra con carga alta. La guía pide evitarlo por ahora: se muestra solo como referencia, no como propuesta.
- **Fase 1:** Barra a la altura de las rodillas
- **Fase 2:** Sube empujando el suelo
- **Fase 3:** Baja controlando
- **Error, Echarse atrás al terminar:** Lleva la cadera a la hiperextensión y arquea la zona lumbar. Termina en línea recta.
- **Rango, Flexión de cadera:** 0 a 75°

#### Bisagra de rodilla con goma

- **General:** De rodillas, con la goma sujeta al pecho y el tronco erguido.
- **General:** Lleva la cadera atrás hacia los talones y vuelve apretando el glúteo, sin carga alta.
- **Para tu cadera:** Sin carga alta. No termines echando la cadera adelante de más: detente en la línea recta.
- **Fase 1:** De rodillas, con el tronco erguido
- **Fase 2:** Lleva la cadera atrás
- **Fase 3:** Vuelve apretando el glúteo
- **Error, Redondear la espalda:** Se pierde el gesto de bisagra. Baja menos.
- **Rango, Flexión de cadera:** 0 a 65°

#### Máquina de aductores

- **General:** Siéntate con la espalda apoyada y las piernas abiertas sobre las almohadillas.
- **General:** Cierra las piernas despacio y vuelve controlando.
- **Para tu cadera:** La guía pide evitarla por completo. Se muestra solo como referencia: en el plan se sustituye por los abductores.
- **Fase 1:** Sentado, con las piernas abiertas
- **Fase 2:** Cierra las piernas despacio
- **Fase 3:** Vuelve controlando
- **Error, Balancear el tronco:** El impulso aumenta la carga en la cadera. No es un gesto que debas practicar ahora.
- **Rango, Abducción:** 2 a 35°

#### Zancada de glúteo

- **General:** Apóyate en una barra, con el tronco inclinado desde el inicio y sin terminar nunca recto.
- **General:** Baja cogiendo aire, presiona con todo el pie de delante y sube; la rodilla no se va adelante ni atrás.
- **Para tu cadera:** Lleva la pierna de atrás hacia la extensión, la posición que estrecha el espacio. La guía pide evitarlo por ahora: se muestra solo como referencia, no como propuesta.
- **Fase 1:** Tronco inclinado, pierna de delante apoyada
- **Fase 2:** Baja cogiendo aire
- **Fase 3:** Sube presionando con el pie
- **Error, Dar un paso demasiado largo:** Aumenta la extensión de la cadera trasera. Es lo que se quiere evitar.
- **Rango, Flexión de rodilla:** 20 a 100°

#### Zancada en polea con step

- **General:** Apoya el pie de delante en un step, con el agarre de la polea y el cuerpo vertical.
- **General:** Baja controlando, sin que la rodilla supere la punta del pie, y sube.
- **Para tu cadera:** Lleva la pierna de atrás hacia la extensión, la posición que estrecha el espacio. La guía pide evitarlo por ahora: se muestra solo como referencia, no como propuesta.
- **Fase 1:** Pie en el step, cuerpo vertical
- **Fase 2:** Baja controlando
- **Fase 3:** Sube llevando la rodilla un poco atrás
- **Error, La rodilla se adelanta:** La carga se va a la rodilla y se pierde el control. Baja menos.
- **Rango, Flexión de rodilla:** 20 a 125°

#### Zancada en polea con pie elevado

- **General:** Eleva el pie de atrás y sujeta la polea delante.
- **General:** Baja en vertical con el peso en la pierna de delante y sube.
- **Para tu cadera:** Lleva la pierna de atrás hacia la extensión, la posición que estrecha el espacio. La guía pide evitarlo por ahora: se muestra solo como referencia, no como propuesta.
- **Fase 1:** Pie de atrás elevado
- **Fase 2:** Baja en vertical
- **Fase 3:** Sube empujando con el pie de delante
- **Error, Arquear la zona lumbar:** La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas.
- **Rango, Flexión de rodilla:** 20 a 110°

#### Zancada Conor

- **General:** Da una zancada con una mancuerna en cada mano y baja en vertical.
- **General:** Sube empujando con el pie de delante. El movimiento exacto está pendiente de confirmar con un vídeo específico.
- **Para tu cadera:** Lleva la pierna de atrás hacia la extensión, la posición que estrecha el espacio. La guía pide evitarlo por ahora: se muestra solo como referencia, no como propuesta.
- **Fase 1:** Pies en zancada, mancuernas abajo
- **Fase 2:** Baja en vertical
- **Fase 3:** Sube empujando con el pie de delante
- **Error, La rodilla cae hacia dentro:** Aumenta la aducción de cadera, que estrecha el espacio.
- **Rango, Flexión de rodilla:** 20 a 100°

#### Zancada con alcance bajo en polea

- **General:** En zancada, inclina el tronco y alarga la mano contraria hacia una polea baja.
- **General:** Vuelve erguido empujando con el pie de delante.
- **Para tu cadera:** Lleva la pierna de atrás hacia la extensión, la posición que estrecha el espacio. La guía pide evitarlo por ahora: se muestra solo como referencia, no como propuesta.
- **Fase 1:** Zancada, tronco casi erguido
- **Fase 2:** Baja y alcanza la polea
- **Fase 3:** Vuelve empujando con el pie
- **Error, Redondear la espalda:** El alcance debe salir de la cadera, no de la columna.
- **Rango, Flexión de rodilla:** 20 a 100°

#### Zancada con taco en pared

- **General:** En zancada frente a la pared, presiona un taco con la rodilla de delante.
- **General:** Baja y sube sin perder la presión.
- **Para tu cadera:** Lleva la pierna de atrás hacia la extensión, la posición que estrecha el espacio. La guía pide evitarlo por ahora: se muestra solo como referencia, no como propuesta.
- **Fase 1:** Zancada, taco contra la pared
- **Fase 2:** Baja manteniendo la presión
- **Fase 3:** Sube despacio
- **Error, Arquear la zona lumbar:** La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas.
- **Rango, Flexión de rodilla:** 10 a 100°

#### Zancada Sissy

- **General:** En zancada, deja que la rodilla de delante avance con el talón elevado y el tronco atrás.
- **General:** Baja poco y sube controlando. El movimiento exacto está pendiente de confirmar con un vídeo específico.
- **Para tu cadera:** Lleva la pierna de atrás hacia la extensión, la posición que estrecha el espacio. La guía pide evitarlo por ahora: se muestra solo como referencia, no como propuesta.
- **Fase 1:** Zancada, talón de delante algo elevado
- **Fase 2:** Baja llevando la rodilla adelante
- **Fase 3:** Sube controlando
- **Error, Arquear la zona lumbar:** La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas.
- **Rango, Flexión de rodilla:** 20 a 110°

#### Puente de glúteo bilateral en máquina

- **General:** Apoya la espalda alta en la almohadilla y los pies en el suelo, con el rodillo sobre la pelvis.
- **General:** Sube hasta alinear rodillas, caderas y hombros, y baja despacio.
- **Para tu cadera:** Sin hiperextender al final: es la posición que debes evitar. Mantén las rodillas separadas.
- **Fase 1:** Espalda apoyada, pelvis abajo
- **Fase 2:** Sube hasta la línea recta
- **Fase 3:** Baja despacio
- **Error, Subir de más:** Lleva la cadera a la extensión y arquea la zona lumbar. Detente en la línea recta.
- **Rango, Cadera (0° = en línea):** -12 a 40°

#### Press alterno en banco inclinado

- **General:** Apoya la espalda en el banco con las mancuernas arriba.
- **General:** Baja una mientras la otra se queda arriba, con el codo a unos 45°, y cambia.
- **Para tu cadera:** Sin relación directa con la cadera. Mantén la pelvis quieta y sin arquear.
- **Fase 1:** Mancuernas arriba
- **Fase 2:** Baja una mano y sube
- **Fase 3:** Las dos arriba de nuevo
- **Fase 4:** Baja la otra mano y sube
- **Error, Arquear la zona lumbar:** La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas.
- **Rango, Flexión de codo:** 0 a 100°

#### Floor press

- **General:** Túmbate con las rodillas flexionadas y las mancuernas arriba, con los pies apoyados para quitar el hueco lumbar.
- **General:** Baja hasta tocar el suelo con los codos, con la muñeca sobre el codo, y empuja.
- **Para tu cadera:** Sin relación directa con la cadera. Mantén la zona lumbar cerca del suelo.
- **Fase 1:** Mancuernas arriba, rodillas flexionadas
- **Fase 2:** Baja hasta apoyar los codos
- **Fase 3:** Empuja mientras exhalas
- **Error, Arquear la zona lumbar:** La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas.
- **Rango, Flexión de codo:** 0 a 90°

#### Floor press unilateral

- **General:** Túmbate con las rodillas flexionadas y una mancuerna arriba, sin alternar.
- **General:** Baja hasta apoyar el codo, con la muñeca sobre él, y empuja sin girar el tronco.
- **Para tu cadera:** Sin relación directa con la cadera. No dejes que la pelvis gire con la carga.
- **Fase 1:** Mancuerna arriba, rodillas flexionadas
- **Fase 2:** Baja hasta apoyar el codo
- **Fase 3:** Empuja mientras exhalas
- **Error, El tronco gira:** Se pierde la estabilidad y la pelvis se mueve. Reduce la carga.
- **Rango, Flexión de codo:** 0 a 90°

#### Floor press alterno con pies en banco

- **General:** Túmbate con los pies en un banco, para quitar el hueco lumbar, y las mancuernas arriba.
- **General:** Baja una mientras la otra sigue arriba, sube y cambia.
- **Para tu cadera:** Con los pies en alto se evita el arco lumbar y la extensión de cadera.
- **Fase 1:** Mancuernas arriba, pies en el banco
- **Fase 2:** Baja una mano y sube
- **Fase 3:** Las dos arriba de nuevo
- **Fase 4:** Baja la otra mano y sube
- **Error, Arquear la zona lumbar:** La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas.
- **Rango, Flexión de codo:** 0 a 90°

#### Press de hombro con mancuernas en banco a 60º

- **General:** Apoya la espalda en el banco a 60º, con las mancuernas a la altura de los hombros.
- **General:** Empuja hacia arriba sin arquear y baja despacio.
- **Para tu cadera:** Sentado, la cadera queda en flexión cómoda. Si te molesta el asiento, usa un cojín para descargar la tuberosidad isquiática.
- **Fase 1:** Mancuernas a la altura de los hombros
- **Fase 2:** Empuja hacia arriba mientras exhalas
- **Fase 3:** Baja despacio
- **Error, Arquear la zona lumbar:** La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas.
- **Rango, Flexión de codo:** 0 a 125°

#### Press de hombro con mancuerna, pies en pared

- **General:** Siéntate con los pies empujando la pared y una mancuerna a la altura del hombro.
- **General:** Empuja hacia arriba manteniendo la presión de los pies, y baja despacio.
- **Para tu cadera:** Sentado, la cadera queda en flexión cómoda. Si te molesta el asiento, usa un cojín para descargar la tuberosidad isquiática.
- **Fase 1:** Pies en la pared, mancuerna al hombro
- **Fase 2:** Empuja hacia arriba
- **Fase 3:** Baja despacio
- **Error, Inclinar y arquear el tronco:** Compensa con la espalda. Reduce la carga.
- **Rango, Flexión de codo:** 0 a 125°

#### Press en polea unilateral

- **General:** De espaldas a la polea, con los pies paralelos y la mano a la altura del pecho.
- **General:** Empuja hacia delante sin girar el tronco y vuelve despacio.
- **Para tu cadera:** Mantén los pies paralelos y el peso repartido, sin dar un paso atrás ni balancear la pelvis.
- **Fase 1:** Mano a la altura del pecho
- **Fase 2:** Empuja hacia delante
- **Fase 3:** Vuelve despacio
- **Error, Arquear la zona lumbar:** La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas.
- **Rango, Flexión de codo:** 0 a 115°

#### Contractora de pecho

- **General:** Siéntate con la espalda apoyada y los brazos abiertos.
- **General:** Junta los brazos delante sin encoger los hombros y vuelve despacio.
- **Para tu cadera:** Sentado, la cadera queda en flexión cómoda. Si te molesta el asiento, usa un cojín para descargar la tuberosidad isquiática.
- **Fase 1:** Brazos abiertos
- **Fase 2:** Junta los brazos delante
- **Fase 3:** Vuelve despacio
- **Error, Arquear la zona lumbar:** La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas.
- **Rango, Abducción del hombro:** 0 a 85°

#### Flexiones con taco en la mano

- **General:** Apoya una mano sobre un taco y el cuerpo en línea.
- **General:** Baja controlando y empuja sin que la pelvis se hunda.
- **Para tu cadera:** Mantén la pelvis alineada, sin hundirla, porque acerca la cadera a la extensión.
- **Fase 1:** Brazos estirados y cuerpo en línea
- **Fase 2:** Baja controlando
- **Fase 3:** Empuja mientras exhalas
- **Error, La pelvis se hunde:** Arquea la zona lumbar y extiende la cadera. Apoya las rodillas si lo necesitas.
- **Rango, Flexión de codo:** 0 a 115°

#### Flexiones tocando la mano

- **General:** Desde la flexión, sube y toca una mano con la otra.
- **General:** Mantén la pelvis quieta mientras una mano está en el aire.
- **Para tu cadera:** Mantén la pelvis estable: si rota, reduce la exigencia apoyando las rodillas.
- **Fase 1:** Brazos estirados y cuerpo en línea
- **Fase 2:** Baja y sube
- **Fase 3:** Vuelve a la posición alta
- **Fase 4:** Toca una mano con la otra
- **Error, La pelvis rota:** Se pierde la estabilidad. Separa más los pies o apoya las rodillas.
- **Rango, Giro de la pelvis:** -7 a 3°

#### Plancha de cuatro puntos con serrato en declinado

- **General:** Apoya las manos en el suelo y los pies elevados, con el cuerpo en línea.
- **General:** Empuja el suelo separando las escápulas, sin mover los codos.
- **Para tu cadera:** Mantén la flexión de cadera cómoda y no dejes que la pelvis se hunda.
- **Fase 1:** Manos en el suelo, pies elevados
- **Fase 2:** Empuja el suelo separando las escápulas
- **Fase 3:** Vuelve despacio
- **Error, La pelvis se hunde:** Arquea la zona lumbar. Baja la altura de los pies.
- **Rango, Curva de la espalda:** -2 a 10°

#### Serrato en pared en caballero unilateral

- **General:** De rodillas sobre una pierna, frente a la pared, con la mano apoyada.
- **General:** Desliza la mano hacia arriba empujando la pared, con la escápula adelante.
- **Para tu cadera:** Sin extensión forzada de la pierna de atrás: si molesta, acorta la posición o ponte de pie.
- **Fase 1:** En caballero, con la mano en la pared
- **Fase 2:** Desliza la mano hacia arriba empujando
- **Fase 3:** Vuelve sin dejar de empujar
- **Error, Arquear la zona lumbar:** La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas.
- **Rango, Flexión de hombro:** 75 a 135°

#### Arquero en pared

- **General:** Apoya las dos manos en la pared, con el cuerpo inclinado.
- **General:** Flexiona un codo mientras el otro brazo sigue estirado, sin arquear.
- **Para tu cadera:** Sin arquear la zona lumbar. Mantén los pies a la anchura de las caderas.
- **Fase 1:** Manos en la pared, brazos estirados
- **Fase 2:** Flexiona un codo y acércate
- **Fase 3:** Vuelve empujando
- **Error, Arquear la zona lumbar:** La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas.
- **Rango, Flexión de codo:** 0 a 110°

#### Remo en máquina alterno

- **General:** Siéntate con el tronco erguido y los brazos alargados.
- **General:** Tira de un agarre y luego del otro, sin girar el tronco.
- **Para tu cadera:** Sentado, la cadera queda en flexión cómoda. Si te molesta el asiento, usa un cojín para descargar la tuberosidad isquiática.
- **Fase 1:** Brazos alargados
- **Fase 2:** Tira con un brazo
- **Fase 3:** Alarga de nuevo
- **Fase 4:** Tira con el otro brazo
- **Error, El tronco gira:** Se pierde el trabajo de espalda y se mueve la pelvis. Reduce la carga.
- **Rango, Flexión de codo:** 0 a 100°

#### Remo unilateral en polea o máquina

- **General:** Siéntate erguido y deja que el brazo se alargue delante.
- **General:** Tira llevando el codo atrás, sin girar el tronco.
- **Para tu cadera:** Sentado, la cadera queda en flexión cómoda. Si te molesta el asiento, usa un cojín para descargar la tuberosidad isquiática.
- **Fase 1:** Brazo alargado
- **Fase 2:** Tira llevando el codo atrás
- **Fase 3:** Vuelve alargando el brazo
- **Error, El tronco gira:** Se pierde el trabajo de espalda y se mueve la pelvis. Reduce la carga.
- **Rango, Flexión de codo:** 0 a 100°

#### Remo sentado en polea de lado

- **General:** Siéntate de lado a la polea, algo girado hasta estar cómodo, con la polea algo por encima del hombro.
- **General:** Deja que se estire todo el lado al alargar el brazo y tira sin inclinar el cuerpo.
- **Para tu cadera:** Sentado, la cadera queda en flexión cómoda. Si te molesta el asiento, usa un cojín para descargar la tuberosidad isquiática.
- **Fase 1:** Brazo alargado hacia la polea
- **Fase 2:** Tira sin inclinar el cuerpo
- **Fase 3:** Alarga dejando que se estire el lado
- **Error, Inclinar el cuerpo:** Comprime un lado del tronco. Reduce la carga.
- **Rango, Flexión de codo:** 0 a 110°

#### Remo lateral con empuje de mano en banco

- **General:** De lado a la polea, apoya la otra mano en el banco y empuja como si quisieras separarte de él.
- **General:** Tira con el brazo abierto, sin perder el empuje, y vuelve despacio.
- **Para tu cadera:** Mantén la pelvis estable y las rodillas algo flexionadas.
- **Fase 1:** Mano empujando el banco, brazo alargado
- **Fase 2:** Tira sin dejar de empujar
- **Fase 3:** Vuelve despacio
- **Error, El tronco gira:** Se pierde el empuje y se mueve la pelvis. Reduce la carga.
- **Rango, Flexión de codo:** 0 a 105°

#### Remo A unilateral en polea

- **General:** De pie, con las rodillas algo flexionadas y el tronco un poco inclinado.
- **General:** Tira llevando el codo atrás sin girar el tronco. El movimiento exacto está pendiente de confirmar con un vídeo específico.
- **Para tu cadera:** Mantén los pies paralelos y el peso repartido, sin dar un paso atrás ni balancear la pelvis.
- **Fase 1:** Brazo alargado
- **Fase 2:** Tira llevando el codo atrás
- **Fase 3:** Vuelve alargando
- **Error, El tronco gira:** Se pierde el trabajo de espalda y se mueve la pelvis. Reduce la carga.
- **Rango, Flexión de codo:** 0 a 105°

#### Pull remo unilateral

- **General:** Siéntate y alarga el brazo arriba y delante.
- **General:** Tira en diagonal hacia la costilla. El movimiento exacto está pendiente de confirmar con un vídeo específico.
- **Para tu cadera:** Sentado, la cadera queda en flexión cómoda. Si te molesta el asiento, usa un cojín para descargar la tuberosidad isquiática.
- **Fase 1:** Brazo alargado arriba
- **Fase 2:** Tira hacia la costilla
- **Fase 3:** Vuelve alargando
- **Error, Arquear la zona lumbar:** La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas.
- **Rango, Flexión de codo:** 0 a 115°

#### Remo alterno en prono

- **General:** Apoya el pecho en un banco inclinado, con los pies en el suelo y las mancuernas abajo.
- **General:** Tira de una y luego de la otra, sin despegar el pecho.
- **Para tu cadera:** En prono, sin extender la cadera. La inclinación del banco la mantiene flexionada.
- **Fase 1:** Pecho apoyado, mancuernas abajo
- **Fase 2:** Tira con un brazo
- **Fase 3:** Baja
- **Fase 4:** Tira con el otro brazo
- **Error, Levantar el pecho:** Arquea la espalda. Reduce la carga.
- **Rango, Flexión de codo:** 0 a 100°

#### Monkey row alterno

- **General:** Con los pies separados, lleva la cadera atrás y sujeta las mancuernas a la altura de las rodillas.
- **General:** Cuando una sube, la otra baja, sin girar el tronco.
- **Para tu cadera:** No pierdas la alineación lumbar. Mantén las rodillas abiertas y no bajes más de lo que controles.
- **Fase 1:** Cadera atrás, mancuernas abajo
- **Fase 2:** Sube una mancuerna
- **Fase 3:** Las dos abajo
- **Fase 4:** Sube la otra mancuerna
- **Error, Redondear y girar el tronco:** Se pierde la alineación lumbar. Reduce la carga.
- **Rango, Flexión de codo:** 0 a 100°

#### Pull down en caballero unilateral

- **General:** De rodillas sobre una pierna, alarga el brazo hacia la polea alta.
- **General:** Tira llevando el codo hacia la costilla, sin arquear.
- **Para tu cadera:** Sin extensión forzada de la pierna de atrás: si molesta, hazlo sentado.
- **Fase 1:** En caballero, brazo alargado
- **Fase 2:** Tira con el codo a la costilla
- **Fase 3:** Sube alargando
- **Error, Arquear la zona lumbar:** La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas.
- **Rango, Flexión de hombro:** 40 a 155°

#### Jalón para bíceps

- **General:** Siéntate con los muslos sujetos y agarra la barra con las palmas hacia ti.
- **General:** Tira flexionando bien los codos, sin echarte atrás, y sube despacio.
- **Para tu cadera:** Sin arquear la zona lumbar. Ajusta el asiento para que los pies apoyen.
- **Fase 1:** Brazos arriba
- **Fase 2:** Tira flexionando los codos
- **Fase 3:** Sube despacio
- **Error, Inclinar el tronco atrás:** Arquea la zona lumbar. Reduce la carga.
- **Rango, Flexión de codo:** 0 a 130°

#### Pull over

- **General:** Túmbate en el banco con la mancuerna sobre el pecho y los codos algo flexionados.
- **General:** Llévala hacia atrás sin perder las costillas cerradas y vuelve.
- **Para tu cadera:** Cierra las costillas: si se abren, arquea la zona lumbar y la pelvis se mueve.
- **Fase 1:** Mancuerna sobre el pecho
- **Fase 2:** Llévala atrás cerrando las costillas
- **Fase 3:** Vuelve mientras exhalas
- **Error, Arquear la zona lumbar:** El recorrido sale de la espalda. Baja menos los brazos.
- **Rango, Flexión de hombro:** 85 a 170°

#### Pull efer

- **General:** Es una interpretación provisional del movimiento, pendiente de confirmar con un vídeo específico.
- **General:** De pie frente a una polea, tira hacia la cara abriendo los codos, sin arquear.
- **Para tu cadera:** Mantén los pies paralelos y el peso repartido, sin dar un paso atrás ni balancear la pelvis.
- **Fase 1:** Brazos alargados
- **Fase 2:** Tira hacia la cara abriendo los codos
- **Fase 3:** Vuelve despacio
- **Error, Arquear la zona lumbar:** La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas.
- **Rango, Flexión de codo:** 0 a 115°

#### Elevaciones laterales unilaterales

- **General:** De pie, con una mancuerna y los pies paralelos.
- **General:** Sube el brazo hasta la altura del hombro y baja despacio, sin subir el hombro.
- **Para tu cadera:** Mantén los pies paralelos y el peso repartido, sin dar un paso atrás ni balancear la pelvis.
- **Fase 1:** Brazo abajo
- **Fase 2:** Sube hasta la altura del hombro
- **Fase 3:** Baja despacio
- **Error, Inclinar el tronco:** Traslada la carga a la cadera de un lado. Reduce el peso.
- **Rango, Abducción del hombro:** 5 a 85°

#### Elevaciones en polea por detrás

- **General:** Coloca la polea baja detrás del cuerpo, con los pies paralelos.
- **General:** Sube el brazo hasta la altura del hombro y baja despacio.
- **Para tu cadera:** Mantén los pies paralelos y el peso repartido, sin dar un paso atrás ni balancear la pelvis.
- **Fase 1:** Brazo abajo, cable por detrás
- **Fase 2:** Sube hasta la altura del hombro
- **Fase 3:** Baja despacio
- **Error, Inclinar el tronco:** Traslada la carga a la cadera de un lado. Reduce el peso.
- **Rango, Abducción del hombro:** 5 a 85°

#### Bíceps bayesian

- **General:** De espaldas a la polea baja, con los pies paralelos y el brazo algo por detrás del cuerpo.
- **General:** Flexiona el codo sin adelantar el brazo y baja despacio.
- **Para tu cadera:** Mantén los pies paralelos y el peso repartido, sin dar un paso atrás ni balancear la pelvis.
- **Fase 1:** Brazo atrás, codo estirado
- **Fase 2:** Flexiona el codo
- **Fase 3:** Baja despacio
- **Error, Adelantar el brazo:** Se pierde el estiramiento y se ayuda con el tronco. Reduce la carga.
- **Rango, Flexión de codo:** 0 a 125°

#### Bíceps a 90º en banco

- **General:** Siéntate con el brazo a 90° delante y el cable al frente.
- **General:** Flexiona el codo sin bajar el brazo y estira despacio.
- **Para tu cadera:** Sentado, la cadera queda en flexión cómoda. Si te molesta el asiento, usa un cojín para descargar la tuberosidad isquiática.
- **Fase 1:** Brazo a 90°, codo estirado
- **Fase 2:** Flexiona el codo
- **Fase 3:** Estira despacio
- **Error, Bajar el brazo:** Se pierde la posición y se ayuda con el cuerpo. Reduce la carga.
- **Rango, Flexión de codo:** 0 a 125°

#### Bíceps concentrado en banco

- **General:** Siéntate con el tronco algo inclinado y el codo cerca del muslo.
- **General:** Flexiona el codo sin moverlo y baja despacio.
- **Para tu cadera:** Sentado, la cadera queda en flexión cómoda. Si te molesta el asiento, usa un cojín para descargar la tuberosidad isquiática. Sin abrir de más las piernas.
- **Fase 1:** Codo cerca del muslo
- **Fase 2:** Flexiona el codo
- **Fase 3:** Baja despacio
- **Error, Levantar el tronco:** Ayudas con la espalda. Reduce la carga.
- **Rango, Flexión de codo:** 0 a 130°

#### Bíceps en anteversión

- **General:** De pie, con el brazo algo adelantado y los pies paralelos.
- **General:** Flexiona el codo sin mover el brazo y baja despacio.
- **Para tu cadera:** Mantén los pies paralelos y el peso repartido, sin dar un paso atrás ni balancear la pelvis.
- **Fase 1:** Brazo adelantado, codo estirado
- **Fase 2:** Flexiona el codo
- **Fase 3:** Baja despacio
- **Error, Arquear la zona lumbar:** La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas.
- **Rango, Flexión de codo:** 0 a 130°

#### Bíceps squat

- **General:** Baja a una sentadilla cómoda y aguanta.
- **General:** Flexiona los codos sin cambiar la altura de la cadera y baja despacio.
- **Para tu cadera:** Combina sentadilla: ajusta la profundidad y mantén las rodillas abiertas.
- **Fase 1:** En sentadilla, brazos estirados
- **Fase 2:** Flexiona los codos
- **Fase 3:** Baja despacio
- **Error, Bajar demasiado:** La flexión profunda puede reproducir el pinzamiento. Súbete.
- **Rango, Flexión de codo:** 0 a 130°

#### Curl de bíceps sentado con respiración abajo

- **General:** Siéntate con la espalda apoyada y las mancuernas abajo.
- **General:** Haz el curl sin mover los codos y, abajo, respira soltando todo el aire antes de la siguiente.
- **Para tu cadera:** Sentado, la cadera queda en flexión cómoda. Si te molesta el asiento, usa un cojín para descargar la tuberosidad isquiática.
- **Fase 1:** Brazos abajo, respira
- **Fase 2:** Flexiona los codos
- **Fase 3:** Baja despacio
- **Error, Arquear la zona lumbar:** La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas.
- **Rango, Flexión de codo:** 0 a 125°

#### Tríceps en polea alta desde detrás

- **General:** De espaldas a la polea alta, con el brazo arriba y el tronco algo inclinado.
- **General:** Extiende el codo sin moverlo y vuelve despacio.
- **Para tu cadera:** Mantén los pies paralelos y el peso repartido, sin dar un paso atrás ni balancear la pelvis.
- **Fase 1:** Brazo arriba, codo flexionado
- **Fase 2:** Extiende el codo
- **Fase 3:** Vuelve despacio
- **Error, Arquear la zona lumbar:** La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas.
- **Rango, Flexión de codo:** 0 a 120°

#### Tríceps de lado

- **General:** De lado a la polea alta, con los pies paralelos.
- **General:** Extiende el codo sin separar el brazo del cuerpo y vuelve despacio.
- **Para tu cadera:** Mantén los pies paralelos y el peso repartido, sin dar un paso atrás ni balancear la pelvis.
- **Fase 1:** Codo flexionado
- **Fase 2:** Extiende el codo
- **Fase 3:** Vuelve despacio
- **Error, Inclinar el tronco:** Traslada la carga a la cadera de un lado. Reduce el peso.
- **Rango, Flexión de codo:** 0 a 120°

#### Tríceps plano en cuatro puntos unilateral

- **General:** En cuatro apoyos, con un brazo fuera del suelo y el codo fijo.
- **General:** Extiende el codo sin que se mueva el hombro, con la espalda algo redondeada.
- **Para tu cadera:** La posición mantiene la cadera flexionada. Mantén las rodillas bajo las caderas.
- **Fase 1:** En cuatro apoyos, codo flexionado
- **Fase 2:** Extiende el codo
- **Fase 3:** Vuelve despacio
- **Error, Mover el codo:** El hombro hace el trabajo. Mantén el codo fijo.
- **Rango, Flexión de codo:** 0 a 115°

#### Pata de tríceps en polea

- **General:** Inclina el tronco apoyando una mano en el banco, con el brazo pegado al cuerpo.
- **General:** Extiende el codo hacia atrás sin mover el brazo y vuelve despacio.
- **Para tu cadera:** Mantén los pies paralelos y las rodillas algo flexionadas. Sin dar un paso atrás.
- **Fase 1:** Brazo pegado, codo flexionado
- **Fase 2:** Extiende el codo hacia atrás
- **Fase 3:** Vuelve despacio
- **Error, Mover el brazo:** Se pierde el trabajo del tríceps. Reduce la carga.
- **Rango, Flexión de codo:** 0 a 105°

#### Francés en cuatro puntos con polea

- **General:** En cuatro apoyos, con la espalda algo redondeada y el codo fijo cerca de la oreja.
- **General:** Extiende el codo sin moverlo y exhala al terminar.
- **Para tu cadera:** La posición mantiene la cadera flexionada. La rodilla apoyada debe quedar cómoda: usa una almohadilla si lo necesitas.
- **Fase 1:** Codo cerca de la oreja, flexionado
- **Fase 2:** Extiende el codo
- **Fase 3:** Vuelve despacio
- **Error, Bajar el codo:** Se pierde la posición y se arquea la espalda. Reduce la carga.
- **Rango, Flexión de codo:** 0 a 115°

#### Pallof de pie

- **General:** De lado a la polea, con los pies paralelos y las manos en el pecho.
- **General:** Lleva las manos al frente sin dejar que el tronco gire y vuelve.
- **Para tu cadera:** Mantén los pies paralelos y el peso repartido, sin dar un paso atrás ni balancear la pelvis.
- **Fase 1:** Manos en el pecho
- **Fase 2:** Lleva las manos al frente
- **Fase 3:** Vuelve al pecho
- **Error, El tronco gira:** Se pierde el trabajo antirrotación. Reduce la carga.
- **Rango, Giro del tronco:** -3 a 3°

#### Bicho muerto rana con fitball

- **General:** Túmbate con los pies juntos y las rodillas abiertas, y las manos contra un fitball.
- **General:** Alarga las piernas sin que la zona lumbar se despegue y vuelve.
- **Para tu cadera:** La rotación externa en rana puede molestar: abre menos o cambia al bicho muerto alterno.
- **Fase 1:** Pies juntos, rodillas abiertas
- **Fase 2:** Alarga las piernas
- **Fase 3:** Vuelve despacio
- **Error, Arquear la zona lumbar:** La pelvis bascula y la cadera se extiende de más. Alarga menos.
- **Rango, Flexión de cadera:** 38 a 85°

#### Crunch 90/90 rodando churro

- **General:** Túmbate con las piernas a 90° y las manos sobre un churro apoyado en los muslos.
- **General:** Exhala y sube poco, rodando el churro, cerrando las costillas.
- **Para tu cadera:** Se mantiene en flexión de cadera. Lo importante es cerrar las costillas, no subir mucho.
- **Fase 1:** Piernas a 90°, manos en el churro
- **Fase 2:** Sube poco mientras exhalas
- **Fase 3:** Baja despacio
- **Error, Tirar del cuello:** El esfuerzo se va al cuello. Sube menos y cierra las costillas.
- **Rango, Flexión del tronco:** 0 a 24°

#### Crunch con goma y piernas estiradas

- **General:** Túmbate con las piernas estiradas y la goma en las manos, anclada por detrás.
- **General:** Exhala y sube poco manteniendo la zona lumbar en el suelo.
- **Para tu cadera:** Mantén la retroversión: con las piernas estiradas la zona lumbar tiende a arquearse. Flexiona las rodillas si ocurre.
- **Fase 1:** Piernas estiradas, goma en las manos
- **Fase 2:** Sube poco mientras exhalas
- **Fase 3:** Baja despacio
- **Error, Arquear la zona lumbar:** Se pierde la retroversión. Flexiona un poco las rodillas.
- **Rango, Flexión del tronco:** 0 a 24°

#### Plancha lateral con arco lumbar

- **General:** Apoya el antebrazo bajo el hombro y los pies, y eleva la pelvis.
- **General:** Arriba, respira y da intensidad con la exhalación, sin hundirte.
- **Para tu cadera:** Carga en el lado de apoyo: vigila la molestia. Si aparece, flexiona las rodillas.
- **Fase 1:** Antebrazo bajo el hombro
- **Fase 2:** Eleva la pelvis
- **Fase 3:** Aguanta respirando
- **Fase 4:** Baja con control
- **Error, La pelvis se hunde:** El tronco deja de sostenerse. Empuja el suelo y sube.
- **Rango, Caída de la cadera:** -8 a 2°

#### Plancha de cuatro puntos tocando hombro

- **General:** En cuatro apoyos, despega las rodillas unos centímetros.
- **General:** Toca un hombro con la mano contraria sin que la pelvis se mueva, y cambia.
- **Para tu cadera:** Las rodillas bajo las caderas mantienen la flexión. Vuelve a apoyarlas si la pelvis rota.
- **Fase 1:** Rodillas despegadas
- **Fase 2:** Toca un hombro
- **Fase 3:** Vuelve a apoyar
- **Fase 4:** Toca el otro hombro
- **Error, La pelvis rota:** Se pierde la estabilidad. Apoya las rodillas o ve más lento.
- **Rango, Giro de la pelvis:** -3 a 3°

#### Plancha de cuatro puntos con estiramiento de isquios

- **General:** Desde cuatro apoyos con las rodillas despegadas, sube la pelvis y estira las piernas.
- **General:** Vuelve a la posición inicial controlando.
- **Para tu cadera:** La guía desaconseja estirar los isquiotibiales de forma agresiva. La guía pide evitarlo por ahora: se muestra solo como referencia, no como propuesta.
- **Fase 1:** Rodillas despegadas
- **Fase 2:** Sube la pelvis estirando las piernas
- **Fase 3:** Vuelve controlando
- **Error, Bloquear las rodillas:** Tensa el isquiotibial y el nervio ciático, justo lo que la guía pide evitar.
- **Rango, Flexión de rodilla:** 5 a 115°

#### Chop hacia abajo

- **General:** De lado a la polea alta, con los pies paralelos.
- **General:** Baja los brazos en diagonal, con el giro en el tórax y la pelvis quieta.
- **Para tu cadera:** Sin girar la pelvis: la rotación de cadera puede reproducir las molestias.
- **Fase 1:** Brazos arriba, hacia la polea
- **Fase 2:** Baja en diagonal
- **Fase 3:** Vuelve despacio
- **Error, La pelvis gira:** La rotación pasa a la cadera. Reduce la carga y el recorrido.
- **Rango, Giro de la pelvis:** -3 a 3°

#### Lift bombero

- **General:** Es una interpretación provisional del movimiento, pendiente de confirmar con un vídeo específico.
- **General:** De rodillas sobre una pierna, de lado a una polea baja, sube los brazos en diagonal sin girar la pelvis.
- **Para tu cadera:** Sin extensión forzada de la pierna de atrás: si molesta, hazlo de pie con los pies paralelos.
- **Fase 1:** Brazos abajo, hacia la polea
- **Fase 2:** Sube en diagonal
- **Fase 3:** Vuelve despacio
- **Error, Arquear la zona lumbar:** La pelvis se adelanta y la cadera se acerca a la extensión. Reduce la carga y cierra las costillas.
- **Rango, Giro del tronco:** -12 a 12°

#### Rotación inversa con fitball y mancuerna

- **General:** Túmbate con las piernas a 90° sobre un fitball y una mancuerna arriba.
- **General:** Lleva las piernas a un lado y al otro, sin despegar la espalda alta.
- **Para tu cadera:** Controla la rotación de cadera: mueve poco y evita el lado que reproduzca los síntomas.
- **Fase 1:** Piernas al centro
- **Fase 2:** Lleva las piernas a un lado
- **Fase 3:** Vuelve al centro
- **Fase 4:** Lleva las piernas al otro lado
- **Error, Forzar la rotación:** La pelvis se levanta y se carga la cadera. Reduce el recorrido.
- **Rango, Giro de las piernas:** -20 a 20°

### Catálogo de ejercicios

El estado resume cómo encaja cada ejercicio con la guía de esta aplicación. Es un criterio orientativo que debe revisar un profesional. Pulsa un ejercicio para ver su animación y sus consejos: son una aproximación, y los marcados como «Evitar por ahora» se muestran solo como referencia.

| Ejercicio | Grupo | Estado | Origen | Nota |
|---|---|---|---|---|
| 90/90 con corcho | Preparación y movilidad | Recomendado | Ya realizado | - |
| 90/90 femoral con corcho | Preparación y movilidad | Recomendado | Ya realizado | - |
| 90/90 con basculación pélvica | Preparación y movilidad | Recomendado | Ya realizado | - |
| Hookling en step | Preparación y movilidad | Recomendado | Ya realizado | - |
| Respiración diafragmática | Preparación y movilidad | Recomendado | Ya realizado | - |
| Open book bilateral | Preparación y movilidad | Recomendado | Ya realizado | - |
| Estiramiento dorsal | Preparación y movilidad | Recomendado | Ya realizado | - |
| Estiramiento dorsal sentado | Preparación y movilidad | Recomendado | Ya realizado | - |
| Bretzel dinámico con churro | Preparación y movilidad | Con cautela | Ya realizado | Incluye rotación: sin forzar el rango. |
| Estiramiento piramidal | Preparación y movilidad | Con cautela | Ya realizado | Combina flexión y rotación externa: detente si reproduce los síntomas. |
| Inflar globo en cuclillas contra pared | Preparación y movilidad | Con cautela | Ya realizado | Flexión profunda: ajusta la altura. |
| Camello a cobra | Preparación y movilidad | Con cautela | Ya realizado | Sin llevar la extensión a la zona lumbar. |
| Alargar pierna con la otra rodilla flexionada | Preparación y movilidad | Con cautela | Ya realizado | No pierdas la retroversión. |
| Sliding de pierna | Preparación y movilidad | Con cautela | Ya realizado | Evita llevar la pierna a extensión con aducción. |
| Sliding pull back en cuadrupedia | Preparación y movilidad | Con cautela | Ya realizado | Sin extender la cadera más allá de la zona cómoda. |
| Cross connect | Preparación y movilidad | Por revisar | Ya realizado | Falta definir el movimiento exacto. |
| Delfín tocando pie alterno | Preparación y movilidad | Por revisar | Ya realizado | Falta definir el movimiento exacto. |
| Femoral sentado | Pierna y cadera | Recomendado | Ya realizado | Reduce recorrido si molesta en la tuberosidad isquiática. |
| Extensión de rodilla en máquina | Pierna y cadera | Recomendado | Ya realizado | - |
| Extensión de rodilla unilateral en máquina | Pierna y cadera | Recomendado | Ya realizado | - |
| Puente de glúteo con pies en pared | Pierna y cadera | Recomendado | Ya realizado | Sin hiperextender. |
| Sentadilla con cuña | Pierna y cadera | Con cautela | Ya realizado | Ajusta la profundidad. |
| Sentadilla Zecher | Pierna y cadera | Con cautela | Ya realizado | Sin bajar a un rango profundo. |
| Sentadilla isométrica en polea | Pierna y cadera | Con cautela | Ya realizado | Busca la altura sin molestias. |
| Media sentadilla en pared con codo al frente | Pierna y cadera | Recomendado | Ya realizado | - |
| Femoral isométrico en step | Pierna y cadera | Con cautela | Ya realizado | Pelvis basculada. |
| Femoral con churro o fitball | Pierna y cadera | Con cautela | Ya realizado | Mantén la retroversión. |
| Puente con step y rodilla al pecho | Pierna y cadera | Con cautela | Ya realizado | Trabajo a una pierna: vigila que la pelvis no caiga. |
| Puente unilateral con rodilla al pecho | Pierna y cadera | Con cautela | Ya realizado | Trabajo a una pierna: vigila que la pelvis no caiga. |
| Almeja de pie en pared | Pierna y cadera | Con cautela | Ya realizado | Trabajo a una pierna: vigila que la pelvis no caiga. |
| Step up con mancuernas | Pierna y cadera | Con cautela | Ya realizado | Trabajo a una pierna: vigila que la pelvis no caiga. |
| Step up con mancuerna contralateral | Pierna y cadera | Con cautela | Ya realizado | Trabajo a una pierna: vigila que la pelvis no caiga. |
| Step down en cajón | Pierna y cadera | Con cautela | Ya realizado | Trabajo a una pierna: vigila que la pelvis no caiga. |
| Sentadilla stagg con mancuerna | Pierna y cadera | Con cautela | Ya realizado | Posición escalonada: pie trasero sin extensión forzada. |
| Peso muerto rumano base stagg | Pierna y cadera | Con cautela | Ya realizado | Bisagra o carga alta: la guía desaconseja el peso muerto pesado. |
| Peso muerto rumano asimétrico con manos en pelvis | Pierna y cadera | Con cautela | Ya realizado | Bisagra o carga alta: la guía desaconseja el peso muerto pesado. |
| Peso muerto rumano asimétrico con mancuernas | Pierna y cadera | Con cautela | Ya realizado | Bisagra o carga alta: la guía desaconseja el peso muerto pesado. |
| Rack pull | Pierna y cadera | Evitar por ahora | Ya realizado | Bisagra o carga alta: la guía desaconseja el peso muerto pesado. |
| Bisagra de rodilla con goma | Pierna y cadera | Con cautela | Ya realizado | Sin carga alta. |
| Máquina de aductores | Pierna y cadera | Evitar por ahora | Ya realizado | La guía pide evitarla por completo. |
| Zancada de glúteo | Pierna y cadera | Evitar por ahora | Ya realizado | Zancada: la guía pide evitarla mientras haya síntomas. |
| Zancada en polea con step | Pierna y cadera | Evitar por ahora | Ya realizado | Zancada: la guía pide evitarla mientras haya síntomas. |
| Zancada en polea con pie elevado | Pierna y cadera | Evitar por ahora | Ya realizado | Zancada: la guía pide evitarla mientras haya síntomas. |
| Zancada Conor | Pierna y cadera | Evitar por ahora | Ya realizado | Zancada: la guía pide evitarla mientras haya síntomas. |
| Zancada con alcance bajo en polea | Pierna y cadera | Evitar por ahora | Ya realizado | Zancada: la guía pide evitarla mientras haya síntomas. |
| Zancada con taco en pared | Pierna y cadera | Evitar por ahora | Ya realizado | Zancada: la guía pide evitarla mientras haya síntomas. |
| Zancada Sissy | Pierna y cadera | Evitar por ahora | Ya realizado | Zancada: la guía pide evitarla mientras haya síntomas. |
| Prensa de piernas | Pierna y cadera | Recomendado | Nuevo | Permite fijar la posición de los pies y limitar el recorrido. |
| Sentadilla a cajón alto con mancuerna al pecho | Pierna y cadera | Recomendado | Nuevo | Permite limitar la profundidad. |
| Abductores en máquina | Pierna y cadera | Recomendado | Nuevo | Sustituye a la máquina de aductores. |
| Puente de glúteo bilateral en máquina | Pierna y cadera | Con cautela | Nuevo | Sin hiperextender al final. |
| Press de banca inclinado a 30º con pies arriba | Torso: empuje | Recomendado | Ya realizado | Sin relación directa con la cadera, con apoyo estable. |
| Press alterno en banco inclinado | Torso: empuje | Recomendado | Ya realizado | Sin relación directa con la cadera, con apoyo estable. |
| Floor press | Torso: empuje | Recomendado | Ya realizado | Sin relación directa con la cadera, con apoyo estable. |
| Floor press unilateral | Torso: empuje | Recomendado | Ya realizado | Sin relación directa con la cadera, con apoyo estable. |
| Floor press alterno con pies en banco | Torso: empuje | Recomendado | Ya realizado | Sin relación directa con la cadera, con apoyo estable. |
| Press de hombro con mancuernas en banco a 60º | Torso: empuje | Recomendado | Ya realizado | Sin relación directa con la cadera, con apoyo estable. |
| Press de hombro con mancuerna, pies en pared | Torso: empuje | Recomendado | Ya realizado | Sin relación directa con la cadera, con apoyo estable. |
| Press en polea unilateral | Torso: empuje | Recomendado | Ya realizado | Con pies paralelos. |
| Press landmine | Torso: empuje | Recomendado | Ya realizado | Con pies paralelos. |
| Contractora de pecho | Torso: empuje | Recomendado | Ya realizado | Sin relación directa con la cadera, con apoyo estable. |
| Flexiones con taco en la mano | Torso: empuje | Recomendado | Ya realizado | - |
| Flexiones tocando la mano | Torso: empuje | Con cautela | Ya realizado | Mantén la pelvis estable. |
| Plancha de cuatro puntos con serrato en declinado | Torso: empuje | Con cautela | Ya realizado | Mantén la flexión de cadera cómoda. |
| Serrato en pared en caballero unilateral | Torso: empuje | Con cautela | Ya realizado | Sin extensión forzada de la pierna de atrás. |
| Arquero en pared | Torso: empuje | Recomendado | Ya realizado | Sin arquear la zona lumbar. |
| Remo sentado en máquina sin apoyar el pecho | Torso: tirón | Recomendado | Ya realizado | Sin relación directa con la cadera, con apoyo estable. |
| Remo en máquina alterno | Torso: tirón | Recomendado | Ya realizado | Sin relación directa con la cadera, con apoyo estable. |
| Remo unilateral en polea o máquina | Torso: tirón | Recomendado | Ya realizado | Sin relación directa con la cadera, con apoyo estable. |
| Remo sentado en polea de lado | Torso: tirón | Recomendado | Ya realizado | Sin relación directa con la cadera, con apoyo estable. |
| Remo lateral con empuje de mano en banco | Torso: tirón | Con cautela | Ya realizado | Mantén la pelvis estable. |
| Remo A unilateral en polea | Torso: tirón | Recomendado | Ya realizado | - |
| Pull remo unilateral | Torso: tirón | Recomendado | Ya realizado | - |
| Remo alterno en prono | Torso: tirón | Con cautela | Ya realizado | En prono, sin extender la cadera. |
| Monkey row alterno | Torso: tirón | Con cautela | Ya realizado | No pierdas la alineación lumbar. |
| Jalón unilateral o pulldown en máquina | Torso: tirón | Recomendado | Ya realizado | Sin relación directa con la cadera, con apoyo estable. |
| Pull down en caballero unilateral | Torso: tirón | Con cautela | Ya realizado | Sin extensión forzada de la pierna de atrás. |
| Jalón para bíceps | Torso: tirón | Recomendado | Ya realizado | Sin arquear la zona lumbar. |
| Pull over | Torso: tirón | Recomendado | Ya realizado | Cierra las costillas. |
| Pull efer | Torso: tirón | Por revisar | Ya realizado | Falta definir el movimiento exacto. |
| Elevaciones laterales en polea a la altura de la rodilla | Hombro y brazos | Recomendado | Ya realizado | Sin relación directa con la cadera, con apoyo estable. |
| Elevaciones laterales unilaterales | Hombro y brazos | Recomendado | Ya realizado | - |
| Elevaciones en polea por detrás | Hombro y brazos | Recomendado | Ya realizado | - |
| Bíceps Scott en banco con polea | Hombro y brazos | Recomendado | Ya realizado | Sin relación directa con la cadera, con apoyo estable. |
| Bíceps bayesian | Hombro y brazos | Recomendado | Ya realizado | Con pies paralelos. |
| Bíceps a 90º en banco | Hombro y brazos | Recomendado | Ya realizado | Sin relación directa con la cadera, con apoyo estable. |
| Bíceps concentrado en banco | Hombro y brazos | Recomendado | Ya realizado | Sin relación directa con la cadera, con apoyo estable. |
| Bíceps en anteversión | Hombro y brazos | Recomendado | Ya realizado | - |
| Bíceps squat | Hombro y brazos | Con cautela | Ya realizado | Combina sentadilla: ajusta la profundidad. |
| Curl de bíceps sentado con respiración abajo | Hombro y brazos | Recomendado | Ya realizado | Sin relación directa con la cadera, con apoyo estable. |
| Tríceps en polea de espaldas | Hombro y brazos | Recomendado | Ya realizado | - |
| Tríceps en polea alta desde detrás | Hombro y brazos | Recomendado | Ya realizado | - |
| Tríceps de lado | Hombro y brazos | Recomendado | Ya realizado | - |
| Tríceps plano en cuatro puntos unilateral | Hombro y brazos | Recomendado | Ya realizado | - |
| Pata de tríceps en polea | Hombro y brazos | Recomendado | Ya realizado | - |
| Francés en cuatro puntos con polea | Hombro y brazos | Recomendado | Ya realizado | - |
| Pallof isométrico | Core | Recomendado | Ya realizado | - |
| Pallof de pie | Core | Recomendado | Ya realizado | - |
| Bicho muerto alterno | Core | Recomendado | Ya realizado | - |
| Bicho muerto rana con fitball | Core | Con cautela | Ya realizado | La rotación externa en rana puede molestar. |
| Crunch 90/90 rodando churro | Core | Recomendado | Ya realizado | - |
| Crunch con goma y piernas estiradas | Core | Con cautela | Ya realizado | Mantén la retroversión. |
| Plancha lateral con arco lumbar | Core | Con cautela | Ya realizado | Carga en el lado de apoyo: vigila la molestia. |
| Plancha de cuatro puntos tocando hombro | Core | Recomendado | Ya realizado | - |
| Plancha de cuatro puntos con estiramiento de isquios | Core | Evitar por ahora | Ya realizado | La guía desaconseja estirar los isquiotibiales de forma agresiva. |
| Chop hacia abajo | Core | Recomendado | Ya realizado | Sin girar la pelvis. |
| Lift bombero | Core | Por revisar | Ya realizado | Falta definir el movimiento exacto. |
| Rotación inversa con fitball y mancuerna | Core | Con cautela | Ya realizado | Controla la rotación de cadera. |

## Consultor IA

### Instrucciones del modelo

```text
Eres un especialista clínico y fisioterapeuta experto en biomecánica de cadera y Pinzamiento Isquiofemoral (Ischiofemoral Impingement - IFI).
Esta aplicación es de uso personal de una sola persona. A continuación de estas instrucciones recibes la documentación de la aplicación y, si lo ha aportado, su contexto personal.

Cómo responder:
- Responde solo a lo que se pregunta, con una extensión proporcionada a la pregunta. Respeta el formato y la longitud que te pidan.
- Ten en cuenta la conversación anterior para interpretar cada mensaje y no repitas explicaciones ya dadas.
- Usa la documentación de la aplicación como referencia principal y mantén sus dosis, series y criterios sin cambiarlos.
- Respeta el estado de cada ejercicio del catálogo de gimnasio. No propongas los marcados como «Evitar por ahora» y, si preguntan por ellos, explica por qué se evitan. Con los de «Con cautela», recuerda su precaución. Los de «Por revisar» y las técnicas marcadas como provisionales no están confirmados: dilo en lugar de darlos por seguros.
- Si la documentación no cubre algo, dilo y distingue con claridad lo que es conocimiento general. No inventes cifras, estudios ni fuentes.
- Presenta el alivio con la tracción como compatible con el diagnóstico, nunca como confirmación ni como prueba. La confirmación requiere valoración médica presencial y resonancia magnética (medición del espacio isquiofemoral < 15mm y edema en el cuadrado femoral).
- Si el contexto personal y la guía se contradicen, señala expresamente el conflicto, sin decidir por tu cuenta cuál prevalece, y recomienda acordarlo con el profesional que lleve el caso.
- Si la consulta describe una señal de alarma, avísalo primero, usando los criterios de la documentación.
- Mantén un tono riguroso, empático y profesional.

Conocimiento que debes aplicar solo cuando venga al caso:
- La tracción (decoaptación de la cabeza femoral y separación lateral del trocánter menor respecto al isquion) busca aliviar el atrapamiento del músculo cuadrado femoral y el nervio ciático adyacente.
- La técnica, la dosificación de gomas y las sensaciones normales frente a las señales de alarma (dolor punzante, adormecimiento progresivo).
- La activación del glúteo medio/menor evita la aducción relativa de cadera en la marcha.
- La tracción y la neurodinámica se dirigen a la pierna afectada, mientras que el fortalecimiento y la estabilidad pélvica se trabajan en ambas piernas para equilibrar la marcha y evitar compensaciones.
- Las cadenas miofasciales cruzadas ascendentes: asimetrías o defensas pélvicas pueden generar compensaciones dolorosas en la cintura escapular y pectorales altos (fascia toracolumbar, protracción escapular y respiración apical).
- Los estiramientos agresivos de isquiotibiales se desaconsejan porque pueden comprimir el espacio.

Responde de forma clara y directa en español, usando Markdown solo cuando ayude.
```

### Contexto personal

Los datos personales no se guardan en este documento ni en el código, porque el repositorio y la web son públicos. El usuario los escribe en el campo «Mi contexto» del consultor, se guardan solo en su navegador y se añaden a las instrucciones del modelo en cada consulta.

### Respuesta sin clave en el servidor

```text
Nota: La clave GEMINI_API_KEY no está configurada en las variables de entorno. Sin embargo, basándonos en la evidencia de fisioterapia y biomecánica sobre el Pinzamiento Isquiofemoral:
1. La tracción con goma elástica descomprime el espacio entre el trocánter menor y el isquion, aliviando la compresión sobre el músculo cuadrado femoral y el nervio ciático.
2. Evita la hiperextensión de cadera combinada con aducción y rotación externa.
3. Prioriza el fortalecimiento del glúteo medio para evitar la caída de la pelvis (signo de Trendelenburg) durante la marcha.
```

### Mensaje inicial

```text
Hola. Soy tu consultor biomecánico especializado en Pinzamiento Isquiofemoral (IFI).
Que los ejercicios de tracción con goma elástica te alivien es un dato útil: es compatible con que la decoaptación lateral del fémur descomprima el túnel entre el trocánter menor y el isquion, aunque no confirma el diagnóstico, que requiere valoración médica y resonancia magnética.

¿Tienes dudas sobre cómo ajustar la goma, qué ejercicios realizar según tus sensaciones o cómo modificar tu marcha?
```

### Preguntas sugeridas

- ¿A qué altura exacta debe anclarse la goma elástica?
- ¿Por qué me baja un calambre por la parte posterior del muslo al caminar?
- ¿Puedo hacer sentadillas o estirar los isquiotibiales?
- ¿Cómo ajusto la tracción si siento molestia en la ingle anterior?
- ¿Por qué me duele la escápula o el pecho alto si la molestia empezó en la cadera?

## Avisos de responsabilidad

- **Origen del protocolo:** Desarrollado según criterios de biomecánica ortopédica para el conflicto del espacio isquiofemoral y del cuadrado femoral.
- **Pie de página:** Nota de responsabilidad: Esta aplicación no sustituye una consulta médica individualizada. El diagnóstico definitivo de pinzamiento isquiofemoral requiere confirmación por Resonancia Magnética (RMN).
- **Consultor IA:** Orientación educativa basada en biomecánica. Consulta siempre con tu médico o fisioterapeuta para confirmación diagnóstica con RMN.
- **Modelo 3D:** Arrastra sobre la figura para girarla. Es un modelo de referencia: los ángulos son orientativos y no analizan tu movimiento.

## Puntos para la revisión clínica

Incoherencias detectadas durante la extracción inicial del contenido. La revisión de la guía con `spec_update.md` no resolvió estos puntos: **siguen pendientes**.

### Datos que se contradicen

1. **Desplazamiento con la goma:** la guía dice «3-6 mm», pero el simulador suma hasta 8,5 mm. Falta una fuente para cualquiera de las dos cifras. La postura «Tracción con Goma (Alivio)» llega a 40,7 mm estimados, muy por encima del rango normal de 18 - 25 mm.
2. **IFS normal:** la guía dice «~23 mm» y el simulador «18 - 25 mm», con un valor base de 21 mm.
3. **Umbral patológico:** se indica < 15 mm, pero el estado «En Riesgo» empieza en < 16 mm y su texto cita < 15 mm. El estado «Fisiológico Libre» empieza en 16 mm, por debajo de los 18 mm de «normal» y del objetivo terapéutico.
4. **Pierna hacia atrás:** la guía pide evitar la extensión de cadera, pero el peso muerto unipodal indica «Lleva la pierna libre recta hacia atrás» y la guía desaconseja doblar el tronco. Falta aclarar por qué este ejercicio es seguro y cuándo introducirlo.
5. **Repeticiones del Monster Walk:** el ejercicio indica «10 - 12 pasos por dirección», pero sus instrucciones dicen «10 pasos».
6. **Material de la abducción lateral:** figura la miniband, pero las instrucciones no la usan.

### Afirmaciones más rotundas que la evidencia localizada

7. «Alivio instantáneo», «alivio inmediato extraordinario» y «para que el beneficio sea permanente». La portada también dice «estás experimentando el efecto directo» de la decoaptación, lo que contradice que el alivio no confirma el diagnóstico.
8. «Enfocado 100%» e «Ideal para crisis de dolor».
9. La FAQ dice que la RMN «confirma» el diagnóstico con esos umbrales. Conviene revisar si basta con la imagen sin correlación clínica.
10. «Uno de los errores más frecuentes que cronifican el pinzamiento», sobre los estiramientos.
11. El texto de «Pinzamiento Severo» afirma como hecho una colisión y una isquemia, pero procede de un modelo ilustrativo.

### Decisiones pendientes

12. **Consejo médico en el consultor:** las condiciones de Gemini prohíben usar la API para dar consejo médico, y las instrucciones del modelo piden orientar sobre síntomas y dosis.
13. **Señales de alarma:** varias entradas de «Señales de alarma» son correcciones de técnica, no motivos para parar. Conviene decidir si se separan.
14. **Rangos de las animaciones:** los «Rangos correctos» se ajustaron para el modelo 3D y no proceden necesariamente de una fuente clínica.
15. **Plan de gimnasio:** la selección de ejercicios, las dosis y los estados del catálogo son criterio propio derivado de la guía, sin una fuente específica para esta patología. Conviene que los revise un profesional.