import { Exercise } from '../types';

export const EXERCISES_DATABASE: Exercise[] = [
  // ==========================================
  // FASE 1: DESCOMPRESIÓN ARTICULAR Y TRACCIÓN
  // ==========================================
  {
    id: 'traccion-lateral-cuadrupedia',
    name: 'Tracción Lateral de Cadera con Banda Elástica',
    subtitle: 'Decoaptación de la articulación coxofemoral y apertura directa del espacio isquiofemoral',
    phase: 'fase1_descompresion',
    phaseNumber: 1,
    targetMuscles: ['Cuadrado femoral (descompresión)', 'Cápsula coxofemoral', 'Nervio ciático (alivio de presión)'],
    biomechanicalObjective: 'Aplica una fuerza de tracción perpendicular al fémur que desplaza el trocánter menor lateralmente, alejándolo de la tuberosidad isquiática y descomprimiendo el músculo cuadrado femoral.',
    whyItRelieves: 'El pinzamiento ocurre por choque entre el trocánter menor y el isquion. La goma elástica tracciona el fémur hacia afuera, abriendo milímetros críticos que liberan de inmediato el atrapamiento muscular y el roce neural.',
    equipment: ['banda_traccion_larga', 'esterilla'],
    sets: 3,
    repsOrTime: '45 - 60 seg por pierna',
    durationSeconds: 45,
    holdSeconds: 45,
    instructions: [
      'Ancla una banda elástica de tracción fuerte a un punto fijo bajo a la altura de tu cadera.',
      'Colócate en posición de cuadrupedia (a 4 apoyos) de costado respecto al anclaje.',
      'Pasa la banda por el pliegue inguinal de la pierna más cercana al anclaje, lo más alto posible en el muslo (en la raíz articular).',
      'Aléjate del anclaje hasta sentir una tracción lateral firme y constante que "tira" de tu fémur hacia afuera.',
      'Mantén la cadera en 80-90° de flexión. Realiza micromovimientos suaves hacia atrás (oscilaciones lentas) dejando que la goma separe la articulación.',
      'Respira de forma pausada y diafragmática durante los 45-60 segundos.'
    ],
    techniqueCues: [
      'La banda debe quedar en la raíz del muslo, nunca en la mitad del fémur.',
      'No dejes que el tronco se incline perdiendo tensión.',
      'No cruces la pierna hacia adentro (evita la aducción).'
    ],
    alarmFlags: [
      'Si notas dolor agudo en la ingle anterior, reduce la flexión a 70°.',
      'Si notas tirón ciático, disminuye ligeramente la tensión de la goma.'
    ],
    diagramType: 'lateral_traction',
    difficulty: 'Fácil'
  },
  {
    id: 'descompresion-axial-supino',
    name: 'Tracción Axial Longitudinal en Supino a 80°',
    subtitle: 'Descompresión caudal de la cabeza femoral en rango seguro de flexión',
    phase: 'fase1_descompresion',
    phaseNumber: 1,
    targetMuscles: ['Espacio isquiofemoral', 'Rotadores externos profundos', 'Cápsula articular posterior'],
    biomechanicalObjective: 'La flexión de cadera a 80° orienta el trocánter menor en una posición anteroinferior alejada del isquion. La tracción axial alarga el espacio posterior sin comprimir el nervio ciático.',
    whyItRelieves: 'Permite descansar los tejidos inflamados sin carga de peso ni compresión de superficies óseas, restaurando el flujo microvascular del cuadrado femoral.',
    equipment: ['banda_traccion_larga', 'esterilla'],
    sets: 3,
    repsOrTime: '60 seg por pierna',
    durationSeconds: 60,
    holdSeconds: 60,
    instructions: [
      'Túmbate boca arriba con una banda larga anclada en un punto firme delante de ti a nivel del suelo.',
      'Engancha la banda en el empeine/tobillo o en el pliegue inguinal de la pierna afectada.',
      'Eleva la cadera en una flexión suave de 70° a 80° con la rodilla semi-relajada.',
      'Permite que la tracción de la banda estire suavemente la pierna hacia el punto de anclaje de forma distal.',
      'Mantén la pelvis bien apoyada en el suelo, sin dejar que el lado afecto se despegue de la esterilla.'
    ],
    techniqueCues: [
      'Mantén los músculos de la pierna en reposo absoluto; la goma hace todo el trabajo mecánico.',
      'Coloca una pequeña toalla enrollada bajo el sacro si necesitas mayor comodidad.'
    ],
    alarmFlags: [
      'No extiendas la rodilla por completo si tienes tensión en los isquiotibiales.'
    ],
    diagramType: 'axial_distraction',
    difficulty: 'Fácil'
  },
  {
    id: 'neurodinamica-ciatico-slider',
    name: 'Deslizamiento Neurodinámico del Ciático (Slider)',
    subtitle: 'Movilización longitudinal sin tensión de tracción neural a través del canal isquiofemoral',
    phase: 'fase1_descompresion',
    phaseNumber: 1,
    targetMuscles: ['Nervio ciático', 'Túnel subglúteo'],
    biomechanicalObjective: 'Mueve el nervio ciático hacia craneal y caudal a través del canal isquiofemoral estrechado para evitar adherencias y reoxigenar la vaina nerviosa, sin someterlo a tracción elongatoria perjudicial.',
    whyItRelieves: 'El nervio ciático pasa rozando el músculo cuadrado femoral edematoso. Un estiramiento tradicional empeora la clínica, pero un deslizamiento rítmico (slider) reduce la hipersensibilidad mecánica.',
    equipment: ['esterilla'],
    sets: 2,
    repsOrTime: '12 - 15 deslizamientos rítmicos',
    durationSeconds: 40,
    instructions: [
      'Túmbate boca arriba con las manos detrás del muslo de la pierna afectada (cadera a 90°).',
      'Paso 1: Al extender suavemente la rodilla hacia arriba, apunta el pie hacia abajo (flexión plantar/punta de bailarina) y flexiona el cuello acercando la barbilla al pecho.',
      'Paso 2: Al flexionar la rodilla hacia abajo, flexiona el tobillo (dorsiflexión) y relaja la cabeza hacia atrás sobre la esterilla.',
      'El movimiento debe ser continuo, fluido y rítmico como una polea de dos extremos.'
    ],
    techniqueCues: [
      'Nunca mantengas la posición final estática: es un deslizamiento dinámico continuo.',
      'La intensidad debe ser 0 sobre 10 de dolor o tirón.'
    ],
    alarmFlags: [
      'Si notas calambre o sensación eléctrica por detrás de la rodilla, reduce la amplitud del movimiento de rodilla a la mitad.'
    ],
    diagramType: 'sciatic_slider',
    difficulty: 'Fácil'
  },

  // ==========================================
  // FASE 2: FORTALECIMIENTO DE ESTABILIZADORES PÉLVICOS
  // ==========================================
  {
    id: 'puente-gluteo-abduccion-banda',
    name: 'Puente de Glúteo con Abducción Isométrica con Miniband',
    subtitle: 'Activación del glúteo mayor y glúteo medio manteniendo el espacio articular abierto',
    phase: 'fase2_estabilizacion',
    phaseNumber: 2,
    targetMuscles: ['Glúteo mayor', 'Glúteo medio', 'Rotadores externos estabilizadores'],
    biomechanicalObjective: 'La resistencia de la miniband obliga a empujar las rodillas en abducción continua. Esta abducción mantiene el trocánter menor alejado del isquion mientras se extiende la cadera en un rango controlado.',
    whyItRelieves: 'Evita que el glúteo mayor trabaje con fémur aducido. Fortalece el sostén posterior de la pelvis sin comprimir el espacio isquiofemoral.',
    equipment: ['miniband_circular', 'esterilla'],
    sets: 3,
    repsOrTime: '10 - 12 repeticiones (3s isométrica arriba)',
    durationSeconds: 45,
    holdSeconds: 3,
    instructions: [
      'Coloca una miniband de resistencia media 3-5 cm por encima de las rodillas.',
      'Túmbate boca arriba con las rodillas flexionadas a 90° y pies separados a la anchura de las caderas.',
      'Separa activamente las rodillas empujando contra la goma para crear tensión.',
      'Presiona con los talones y eleva la pelvis en línea recta entre rodillas, caderas y hombros.',
      'Aprieta con fuerza ambos glúteos arriba manteniendo la tensión lateral de la goma durante 3 segundos.',
      'Desciende de forma lenta y controlada sin permitir que las rodillas se junten.'
    ],
    techniqueCues: [
      'La fuerza de empuje debe provenir de los talones y glúteos, no de los lumbares.',
      'Mantén la tensión en la goma durante TODO el recorrido de subida y bajada.'
    ],
    alarmFlags: [
      'Si sientes compresión lumbar, no subas la pelvis tan alto (mantén un puente medio).'
    ],
    diagramType: 'band_bridge',
    difficulty: 'Moderado'
  },
  {
    id: 'abduccion-decubito-lateral-30flex',
    name: 'Abducción en Decúbito Lateral a 30° de Flexión',
    subtitle: 'Aislamiento selectivo del glúteo medio anterior sin riesgo de pinzamiento posterior',
    phase: 'fase2_estabilizacion',
    phaseNumber: 2,
    targetMuscles: ['Glúteo medio (fibras anteriores)', 'Glúteo menor', 'Tensor de la fascia lata (estabilizador)'],
    biomechanicalObjective: 'Realizar la abducción con 30° de flexión de cadera y leve rotación interna neutraliza la extensión y rotación externa que desencadenan el choque isquiofemoral.',
    whyItRelieves: 'El glúteo medio es el principal músculo que impide la caída contralateral de la pelvis (signo de Trendelenburg). Al fortalecerlo, evitamos que la cadera caiga en aducción durante la marcha.',
    equipment: ['esterilla', 'miniband_circular'],
    sets: 3,
    repsOrTime: '12 - 15 repeticiones por lado',
    durationSeconds: 40,
    instructions: [
      'Túmbate de costado sobre el lado no afecto, con el cuerpo alineado y la cabeza descansando sobre el brazo.',
      'La pierna de apoyo (inferior) permanece flexionada a 90° para dar máxima estabilidad pélvica.',
      'Lleva la pierna superior 30° hacia adelante (en ligera flexión).',
      'Orienta la punta del pie ligeramente hacia el suelo (ligera rotación interna del fémur).',
      'Eleva la pierna de forma controlada unos 25-30 cm sin mover la pelvis ni rotar el pie hacia arriba.',
      'Pausa 1 segundo arriba y baja de manera suave.'
    ],
    techniqueCues: [
      'No dejes que la pierna se desplace hacia atrás (extensión de cadera).',
      'Siente la activación en la parte alta y lateral de la nalga, nunca en la zona del isquion.'
    ],
    alarmFlags: [
      'Si sientes molestia en el isquion, adelanta la pierna un poco más (a 40° de flexión).'
    ],
    diagramType: 'side_abduction',
    difficulty: 'Moderado'
  },
  {
    id: 'monster-walk-semisentadilla',
    name: 'Monster Walk / Pasos Laterales con Miniband en Semi-Sentadilla',
    subtitle: 'Co-contracción funcional de abductores en bipedestación con cadera en ángulo protector',
    phase: 'fase2_estabilizacion',
    phaseNumber: 2,
    targetMuscles: ['Glúteo medio', 'Glúteo mayor (fibras superiores)', 'Core lumbo-pélvico'],
    biomechanicalObjective: 'La posición de semi-sentadilla (flexión de cadera de ~30-45°) ensancha naturalmente el espacio isquiofemoral, mientras que el paso lateral entrena el control frontal de la pelvis.',
    whyItRelieves: 'Entrena a tu musculatura para mantener la pelvis horizontal y con base ancha al caminar, eliminando el hábito de cruzar los pies por la línea media.',
    equipment: ['miniband_circular'],
    sets: 3,
    repsOrTime: '10 - 12 pasos por dirección',
    durationSeconds: 45,
    instructions: [
      'Coloca una miniband circular sobre las rodillas (o en los tobillos para mayor dificultad).',
      'Adopta una postura atlética: flexiona caderas y rodillas en semi-sentadilla con el pecho erguido.',
      'Separa los pies a la anchura de hombros (tensión inicial en la goma).',
      'Da un paso lateral firme con la pierna derecha sin que la rodilla se colapse hacia adentro.',
      'Controla el paso de la pierna izquierda, dejando siempre una separación mínima de anchura de caderas.',
      'Realiza 10 pasos hacia un lado y luego 10 pasos en dirección contraria.'
    ],
    techniqueCues: [
      'Mantén la pelvis a la misma altura horizontal: no subas ni bajes como si fueras un barco.',
      'Pies apuntando al frente o ligeramente hacia afuera, rodillas alineadas con el 2º dedo del pie.'
    ],
    alarmFlags: [
      'Si se te cansan los cuádriceps rápidamente, empuja el peso un poco más hacia los talones.'
    ],
    diagramType: 'monster_walk',
    difficulty: 'Moderado'
  },
  {
    id: 'reverse-clamshell-rotacion-interna',
    name: 'Clamshell Invertido (Rotación Interna de Cadera)',
    subtitle: 'Control excéntrico de los rotadores profundos y apertura del canal posterior',
    phase: 'fase2_estabilizacion',
    phaseNumber: 2,
    targetMuscles: ['Tensor de la fascia lata', 'Glúteo menor', 'Control excéntrico del Cuadrado Femoral'],
    biomechanicalObjective: 'En el pinzamiento isquiofemoral, la rotación externa excesiva lleva el trocánter menor hacia atrás contra el isquion. El clamshell invertido entrena la rotación interna, orientando el trocánter menor hacia adelante y descomprimiendo el receso posterior.',
    whyItRelieves: 'Reequilibra el tono entre rotadores externos (a menudo espasmados y acortados) y rotadores internos, aliviando la compresión directa sobre el nervio ciático.',
    equipment: ['esterilla'],
    sets: 3,
    repsOrTime: '12 repeticiones lentas por lado',
    durationSeconds: 35,
    instructions: [
      'Túmbate de costado con rodillas flexionadas a 90° y caderas a 45°.',
      'Mantén las rodillas pegadas una con otra en todo momento (la rodilla actúa de bisagra o pivote).',
      'Eleva el tobillo y pie superior hacia el techo, rotando internamente el muslo de forma controlada.',
      'Mantén la posición alta durante 1-2 segundos sintiendo el trabajo en la cadera lateral/anterior.',
      'Baja el pie despacio hasta contactar nuevamente con el tobillo inferior.'
    ],
    techniqueCues: [
      'No gires la pelvis hacia adelante para compensar; el movimiento debe ser 100% de la cadera.',
      'El movimiento es suave y sin rebotes.'
    ],
    alarmFlags: [
      'Si sientes molestia en la cara anterior de la cadera (choque anterior), disminuye el ángulo de elevación del pie.'
    ],
    diagramType: 'reverse_clamshell',
    difficulty: 'Fácil'
  },

  // ==========================================
  // FASE 3: INTEGRACIÓN FUNCIONAL Y REEDUCACIÓN DE MARCHA
  // ==========================================
  {
    id: 'rdl-unipodal-asistido',
    name: 'Peso Muerto Rumano Unipodal Asistido (Single-Leg RDL)',
    subtitle: 'Estabilización de cadera en cadena cinética cerrada con control pélvico estricto',
    phase: 'fase3_funcional',
    phaseNumber: 3,
    targetMuscles: ['Glúteo medio en apoyo', 'Glúteo mayor', 'Isquiotibiales (trabajo excéntrico seguro)', 'Multífidos'],
    biomechanicalObjective: 'Entrena al glúteo medio para sostener la pelvis nivelada contra la fuerza de la gravedad en apoyo monopodal, imitando la fase de apoyo de la marcha.',
    whyItRelieves: 'Evita la basculación pélvica durante la marcha cotidiana, que es el momento biomecánico exacto donde el trocánter menor colisiona con el isquion.',
    equipment: ['ninguno'],
    sets: 3,
    repsOrTime: '8 - 10 repeticiones por pierna',
    durationSeconds: 45,
    instructions: [
      'De pie, apóyate sobre la pierna afectada con una ligera micro-flexión de rodilla (nunca bloqueada).',
      'Coloca una mano apoyada ligeramente en una pared o respaldo de silla para eliminar el factor de equilibrio inestable.',
      'Lleva la pierna libre recta hacia atrás mientras flexionas el tronco desde las caderas (bisagra de cadera).',
      'Punto crucial: Mantén la pelvis totalmente horizontal al suelo. No dejes que la cadera que vuela se caiga hacia el suelo ni se rote hacia arriba.',
      'Regresa apretando el glúteo de la pierna de apoyo hasta volver a la bipedestación.'
    ],
    techniqueCues: [
      'La espalda debe permanecer recta y neutra.',
      'Imagina que tienes un nivel de burbuja sobre el sacro y no se puede mover hacia ningún lado.'
    ],
    alarmFlags: [
      'No busques bajar mucho el tronco si no puedes controlar la horizontalidad de la pelvis.'
    ],
    diagramType: 'single_leg_rdl',
    difficulty: 'Avanzado'
  },
  {
    id: 'plancha-lateral-rodillas',
    name: 'Plancha Lateral con Rodillas Flexionadas',
    subtitle: 'Fortalecimiento de la cadena lateral lumbo-pélvica y cuadrado lumbar',
    phase: 'fase3_funcional',
    phaseNumber: 3,
    targetMuscles: ['Cuadrado lumbar', 'Oblicuos abdominales', 'Glúteo medio', 'Transverso del abdomen'],
    biomechanicalObjective: 'Crea un corsé lateral fuerte que previene la inclinación lateral del tronco al caminar (marcha de Duchenne), que suele sobrecargar la cadera.',
    whyItRelieves: 'Al estabilizar el tronco y la pelvis de forma sinérgica, descarga la musculatura rotadora profunda de la cadera de tener que actuar como estabilizador compensatorio.',
    equipment: ['esterilla'],
    sets: 3,
    repsOrTime: '20 - 30 seg por lado',
    durationSeconds: 30,
    holdSeconds: 30,
    instructions: [
      'Túmbate de lado apoyando el antebrazo bajo el hombro.',
      'Flexiona las rodillas a 90° de modo que los pies queden alineados con la pelvis y hombros.',
      'Eleva la pelvis del suelo empujando con la rodilla y el antebrazo hasta alinear rodillas, cadera y cabeza.',
      'Mantén el abdomen activado y la respiración fluida sin aguantar el aire durante 20-30 segundos.'
    ],
    techniqueCues: [
      'El codo debe quedar justo debajo de la articulación del hombro para protegerlo.',
      'La pelvis no debe hundirse hacia abajo ni rotar hacia el suelo.'
    ],
    alarmFlags: [
      'Si notas tensión en el cuello, mira hacia el frente y desciende los hombros lejos de las orejas.'
    ],
    diagramType: 'side_plank',
    difficulty: 'Moderado'
  },
  {
    id: 'reeducacion-marcha-higiene',
    name: 'Protocolo de Zancada Segura y Reeducación de la Marcha',
    subtitle: 'Ajustes biomecánicos para eliminar el pinzamiento dinámico al caminar',
    phase: 'fase3_funcional',
    phaseNumber: 3,
    targetMuscles: ['Patrón locomotor', 'Glúteo medio', 'Psoas en rango seguro'],
    biomechanicalObjective: 'Elimina la combinación patomecánica de hiperextensión + aducción en la pierna de despegue y corrige la base de sustentación estrecha.',
    whyItRelieves: 'El 80% de los pinzamientos isquiofemorales se agravan por caminar con pasos largos y cruzar los pies. Estos 3 ajustes inmediatos quitan el 70% del estrés compresivo al desplazarse.',
    equipment: ['ninguno'],
    sets: 2,
    repsOrTime: 'Práctica de 3 a 5 minutos',
    durationSeconds: 180,
    instructions: [
      'Paso 1 - Acorta la zancada: Reduce un 10% la longitud del paso. No dejes que la pierna trasera se quede muy estirada hacia atrás en hiperextensión.',
      'Paso 2 - Ensancha la base de apoyo: Camina con los pies separados unos centímetros más (evita la marcha "en cuerda floja" o con cruce de pies).',
      'Paso 3 - Aumenta la cadencia: Da pasos un poco más rápidos y ligeros (en torno a 165-170 pasos/minuto) en lugar de zancadas pesadas y largas.',
      'Paso 4 - Postura al sentarse: Siéntate apoyado sobre los muslos posteriores con caderas ligeramente abiertas, nunca con las piernas cruzadas o con la cadera colapsada hacia adentro.'
    ],
    techniqueCues: [
      'Siente que tus pies caminan sobre dos raíles de tren paralelos, no sobre una sola línea.',
      'Empuja el suelo con suavidad; la marcha debe ser silenciosa y ligera.'
    ],
    alarmFlags: [
      'Si debes caminar distancias largas, haz pequeñas pausas de descompresión cada 15-20 minutos.'
    ],
    diagramType: 'gait_hygiene',
    difficulty: 'Fácil'
  }
];

export const PHASE_CONFIG = {
  fase1_descompresion: {
    title: 'Fase 1: Descompresión Articular y Alivio Inmediato',
    shortTitle: 'Fase 1: Descompresión',
    description: 'Tracción pasiva y activa con bandas elásticas para decoaptar la cadera y abrir el estrechamiento entre el trocánter menor y el isquion.',
    badge: 'Alivio y Liberación',
    color: 'cyan',
    phaseNum: 1
  },
  fase2_estabilizacion: {
    title: 'Fase 2: Fortalecimiento de la Musculatura Estabilizadora',
    shortTitle: 'Fase 2: Estabilización',
    description: 'Activación del glúteo medio, glúteo menor y rotadores seguros para evitar la aducción relativa y la caída de la pelvis.',
    badge: 'Estabilidad y Sostén',
    color: 'emerald',
    phaseNum: 2
  },
  fase3_funcional: {
    title: 'Fase 3: Control Motor Funcional y Reeducación de Marcha',
    shortTitle: 'Fase 3: Readaptación',
    description: 'Integración en apoyo monopodal, cadena lateral y ajuste de la zancada para prevenir recidivas al caminar.',
    badge: 'Integración Funcional',
    color: 'indigo',
    phaseNum: 3
  }
};
