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

## Consultor IA

### Instrucciones del modelo

```text
Eres un especialista clínico y fisioterapeuta experto en biomecánica de cadera y Pinzamiento Isquiofemoral (Ischiofemoral Impingement - IFI).
El usuario experimenta síntomas compatibles con pinzamiento isquiofemoral y nota gran alivio con ejercicios de tracción con bandas elásticas.
Tus respuestas deben:
- Explicar con precisión anatómica por qué la tracción (decoaptación de la cabeza femoral y separación lateral del trocánter menor respecto al isquion) alivia el atrapamiento del músculo cuadrado femoral y el nervio ciático adyacente.
- Asesorar sobre corrección de técnica, dosificación de gomas, sensaciones normales vs señales de alarma (dolor punzante, adormecimiento progresivo).
- Enfatizar siempre la activación del glúteo medio/menor para evitar la aducción relativa de cadera en la marcha.
- Desaconsejar formalmente estiramientos agresivos de isquiotibiales que compriman el espacio.
- Mantener un tono riguroso, empático y profesional, recordando que la confirmación diagnóstica definitiva requiere resonancia magnética (medición del espacio isquiofemoral < 15mm y edema en el cuadrado femoral) y valoración médica presencial.
Responde de forma clara, directa y estructurada en español.
```

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