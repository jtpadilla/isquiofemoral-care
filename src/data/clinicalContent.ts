import { BiomechanicsState } from '../types';

// Contenido clínico derivado de spec.md: cámbialo allí primero. `npm run check:spec` comprueba que coinciden.
// El texto admite **negrita**, que muestra el componente RichText.

export const HOME = {
  intro: 'Si los ejercicios de tracción con gomas elásticas te producen alivio inmediato, estás experimentando el efecto directo de la **decoaptación lateral del fémur**: abrir milímetros críticos entre el trocánter menor y el isquion para liberar el músculo cuadrado femoral y el nervio ciático.',
  pillars: [
    {
      title: 'Descompresión Inmediata',
      description: 'Tracción lateral y longitudinal con banda elástica en decúbito y cuadrupedia. Abre el espacio y permite la revascularización del cuadrado femoral.',
      outcome: 'Alivio sintomático y decoaptación',
    },
    {
      title: 'Estabilización del Glúteo Medio',
      description: 'Fortalecimiento de abductores en rangos que evitan la extensión. Impide la caída contralateral de la pelvis (signo de Trendelenburg).',
      outcome: 'Mantiene el espacio abierto de forma activa',
    },
    {
      title: 'Integración y Reeducación',
      description: 'Modificación del patrón de zancada (acortar paso, evitar cruce de pies) y ejercicios monopodales con pelvis estrictamente nivelada.',
      outcome: 'Prevención de recidivas en la vida diaria',
    },
  ],
};

export const QUICK_START_ROUTINE = {
  duration: '15 min',
  exerciseIds: [
    'traccion-lateral-cuadrupedia',
    'descompresion-axial-supino',
    'puente-gluteo-abduccion-banda',
    'abduccion-decubito-lateral-30flex',
    'monster-walk-semisentadilla',
  ],
};

export const ROUTINE_PRESETS = [
  {
    title: 'Alivio Inmediato Express',
    duration: '~8 min',
    description: 'Enfocado 100% en decoaptación con bandas y deslizamiento neural. Ideal para crisis de dolor o tras estar mucho tiempo sentado.',
    exerciseIds: [
      'traccion-lateral-cuadrupedia',
      'descompresion-axial-supino',
      'neurodinamica-ciatico-slider',
    ],
  },
  {
    title: 'Descompresión + Glúteo Medio',
    duration: '~18 min',
    description: 'Tracción con gomas seguida de activación abductora sin colapso pélvico. Protocolo recomendado de mantenimiento.',
    exerciseIds: [
      'traccion-lateral-cuadrupedia',
      'descompresion-axial-supino',
      'puente-gluteo-abduccion-banda',
      'abduccion-decubito-lateral-30flex',
      'monster-walk-semisentadilla',
      'reverse-clamshell-rotacion-interna',
    ],
  },
  {
    title: 'Activación Pre-Caminata',
    duration: '~12 min',
    description: 'Prepara el espacio isquiofemoral y despierta el glúteo para evitar el pinzamiento por zancada larga al salir a caminar.',
    exerciseIds: [
      'traccion-lateral-cuadrupedia',
      'puente-gluteo-abduccion-banda',
      'monster-walk-semisentadilla',
      'reeducacion-marcha-higiene',
    ],
  },
];

export const POST_SESSION_TIP = 'Al terminar la tracción, camina 1-2 minutos con zancada corta y base ligeramente ancha para que el sistema nervioso integre la nueva amplitud sin comprimir el canal isquiofemoral.';

export const GUIDE = {
  intro: 'El pinzamiento isquiofemoral es una causa extraarticular frecuentemente subdiagnosticada de dolor en la nalga y cadera posterior. Ocurre por un estrechamiento mecánico del espacio comprendido entre la **tuberosidad isquiática** (el hueso sobre el que nos sentamos) y el **trocánter menor del fémur**, atrapando al músculo **cuadrado femoral** y comprimiendo el **nervio ciático**.',
  avoid: [
    { title: 'Estiramientos clásicos de isquiotibiales hacia adelante', text: 'Inclinarse hacia los dedos de los pies con las piernas rectas aplasta el vientre del cuadrado femoral contra el fémur y somete al nervio ciático irritado a una tensión excesiva. Sustitúyelo siempre por deslizamientos neurodinámicos sin tensión (sliders).' },
    { title: 'Sentarse con las piernas cruzadas o en rotación forzada', text: 'Cruzar una pierna sobre otra o sentarse sobre un pie coloca la cadera en aducción profunda y rotación extrema, reduciendo al mínimo el espacio isquiofemoral. Mantén siempre las rodillas separadas a la anchura de las caderas.' },
    { title: 'Zancadas largas hacia atrás o hiperextensión', text: 'En cada zancada amplia de marcha o carrera, la pierna retrasada entra en hiperextensión combinada con aducción, produciendo un impacto repetitivo del trocánter menor contra el isquion.' },
    { title: 'Asientos duros o muy bajos sin descarga isquiática', text: 'El apoyo directo sobre superficies rígidas o asientos hundidos (donde las rodillas quedan más altas que las caderas) comprime el túnel subglúteo inferior. Utiliza un cojín firme o toalla doblada bajo los muslos para liberar la tuberosidad isquiática.' },
    { title: 'Apoyo monopodal asimétrico al estar de pie', text: 'Descansar todo el peso del cuerpo sobre una sola pierna dejando caer la pelvis contraria reproduce el signo de Trendelenburg y cierra mecánicamente el canal isquiofemoral del lado de apoyo. Reparte el peso en ambas piernas por igual.' },
  ],
  tractionIntro: 'Cuando una articulación presenta un conflicto de choque óseo, la respuesta fisiológica automática es la contractura refleja de los rotadores profundos para "bloquear" la articulación. Esto crea un **círculo vicioso patomecánico**:',
  tractionSteps: [
    { title: 'Estrechamiento inicial', text: 'Choque del trocánter menor con el isquion' },
    { title: 'Inflamación y edema', text: 'El cuadrado femoral aumenta de volumen, ocupando aún más espacio' },
    { title: 'Tracción con banda', text: 'Ejerce fuerza decoaptante perpendicular que desplaza el fémur 3-6 mm lateralmente' },
    { title: 'Alivio instantáneo', text: 'Cesa la compresión, se restaura la microcirculación y se alivia el ciático' },
  ],
  tractionLongTerm: '**La clave a largo plazo:** La goma da un alivio inmediato extraordinario, pero para que el beneficio sea permanente necesitamos que el **glúteo medio y los estabilizadores pélvicos** tomen el relevo de mantener abierto el espacio durante la marcha normal.',
  posture: [
    { title: 'Al dormir de lado', text: 'Coloca un cojín o almohada gruesa entre las rodillas y tobillos. Esto mantiene la pierna superior en posición neutra o ligera abducción y previene que caiga cruzada por delante durante la noche.' },
    { title: 'Al dormir boca arriba', text: 'Pon un cojín pequeño debajo de las rodillas para mantener una ligera flexión de cadera y evitar que las piernas roten excesivamente hacia afuera durante el sueño.' },
    { title: 'Al conducir o trabajar sentado', text: 'Evita asientos bajos o hundidos donde las rodillas superen la altura de las caderas. Utiliza una cuña pélvica que eleve ligeramente el sacro, mantén los pies bien apoyados en el suelo y realiza pausas activas poniéndote de pie cada 30-45 minutos.' },
    { title: 'Al caminar o pasear', text: 'Camina como si pisaras sobre dos raíles paralelos de tren, nunca sobre una sola línea. Acorta ligeramente la zancada, aumenta un poco la cadencia y evita arrastrar o hiperextender la pierna que queda atrás.' },
    { title: 'Al subir escaleras o pendientes', text: 'Inclina levemente el tronco hacia adelante desde las caderas, apoya todo el pie en el escalón e impúlsate activando el glúteo sin dejar que la rodilla se hunda hacia adentro (evita el valgo dinámico).' },
  ],
  activityIntro: '**Es una orientación general, no una lista validada:** no hay estudios que clasifiquen cada deporte para esta patología. Se basa en evitar la posición que suele provocar los síntomas: extensión de cadera con aducción y rotación externa. La tolerancia varía de una persona a otra, así que acuerda tu caso con tu médico o fisioterapeuta.',
  activityGroups: [
    {
      title: 'Suelen tolerarse mejor',
      tone: 'good',
      activities: [
        { title: 'Bicicleta estática o de paseo', text: 'La cadera trabaja en flexión constante, lo que evita la extensión y mantiene el espacio isquiofemoral abierto. Ajusta el sillín a una altura intermedia para no estirar la pierna en exceso al bajar el pedal, usa un sillín ancho o acolchado si hay molestia por presión y mantén las rodillas alineadas en paralelo sin que se cierren hacia el cuadro.' },
        { title: 'Caminar en el agua y ejercicios acuáticos suaves', text: 'La flotabilidad reduce drásticamente la carga axial y permite activar los estabilizadores sin compresión articular. Camina con pasos cortos, evita cruzar las piernas al girar y mantén el abdomen activo.' },
        { title: 'Ejercicios de esta guía y Pilates clínico adaptado', text: 'Fortalecen el glúteo medio y el core lumbo-pélvico en ángulos protectores. Sigue la progresión por fases y omite cualquier ejercicio de pilates que implique extensión de cadera boca abajo (decúbito prono) o rotaciones externas forzadas en posición de rana.' },
      ],
    },
    {
      title: 'Posibles con adaptaciones',
      tone: 'caution',
      activities: [
        { title: 'Caminar al aire libre y senderismo suave', text: 'Aplica el protocolo de zancada corta, pies sobre dos raíles paralelos y ritmo ligero. Evita pendientes pronunciadas de bajada (que fuerzan la extensión de la pierna retrasada y el frenado excéntrico) y aumenta la distancia de forma gradual en terreno llano.' },
        { title: 'Elíptica con configuración conservadora', text: 'Al no tener impacto contra el suelo ofrece buen trabajo cardiovascular, pero el recorrido fijo del pedal puede llevar la pierna demasiado atrás. Elige máquinas de zancada corta, usa poca resistencia, no apures la extensión trasera y detén el ejercicio si reproduce el dolor glúteo.' },
        { title: 'Musculación y entrenamiento de fuerza', text: 'Prioriza ejercicios bilaterales y máquinas guiadas en rangos seguros: prensa de piernas (pies separados a la anchura de los hombros y sin bajar hasta el tope), sentadilla a cajón alto (box squat), abductores y puente de glúteo sin hiperextender el tronco. Evita por completo la máquina de aductores (cerrar piernas).' },
        { title: 'Natación (estilo crol o espalda)', text: 'Empieza con sesiones suaves usando patada corta desde la cadera sin hiperextender la columna lumbar, o utiliza un pull-buoy alto entre los muslos (sin apretarlo con fuerza para no activar los aductores). Evita el estilo braza porque su patada circular combina aducción brusca y rotación externa.' },
        { title: 'Yoga restaurativo o Hatha suave', text: 'Avisa a tu instructor y omite las posturas que cierran el canal posterior o tensan el nervio ciático: evita la postura de la paloma, las flexiones profundas hacia delante con piernas estiradas, las torsiones sentadas cruzando la pierna (Gomukhasana) y los guerreros con zancada muy amplia.' },
      ],
    },
    {
      title: 'Mejor evitar mientras haya síntomas',
      tone: 'avoid',
      activities: [
        { title: 'Correr y trotar (especialmente a ritmo rápido o en asfalto)', text: 'El ciclo de carrera exige extensión máxima de cadera en el despegue combinada con impacto repetitivo y estrechamiento de la base de paso. Su retorno debe ser progresivo, iniciando con intervalos de marcha-trote de alta cadencia y paso corto bajo supervisión profesional.' },
        { title: 'Zancadas (lunges), desplantes y sentadilla búlgara', text: 'Anclan la pierna retrasada exactamente en extensión de cadera con tendencia a la aducción pélvica, la combinación biomecánica directa que atrapa al músculo cuadrado femoral.' },
        { title: 'Peso muerto pesado y sentadilla profunda libre', text: 'Someten la cadera a grandes cargas axiales en rangos extremos donde, si el glúteo medio se fatiga, los rotadores profundos se espasman por compensación. El peso muerto unipodal asistido de la fase 3 se introduce sin carga externa cuando las fases previas no dan síntomas.' },
        { title: 'Fútbol, artes marciales y deportes de patada', text: 'Combinan sprints, cambios bruscos de dirección, patadas cruzadas y gestos explosivos en rotación que provocan cizallamiento en el espacio subglúteo.' },
        { title: 'Deportes de raqueta y cancha (pádel, tenis, baloncesto)', text: 'Implican frenadas en seco, desplazamientos laterales con zancada baja forzada y giros de pivote difíciles de controlar en fase inflamatoria.' },
      ],
    },
  ] as { title: string; tone: 'good' | 'caution' | 'avoid'; activities: { title: string; text: string }[] }[],
  activityWarnings: [
    '**Cuándo parar:** Interrumpe la actividad de inmediato si aparece dolor punzante en la nalga profunda, sensación de enganche articular, hormigueo, adormecimiento, dolor o calambre que baja por la pierna, o si el dolor basal empeora a las 24 horas de haber entrenado. Coméntalo con tu médico o fisioterapeuta antes de retomar ese deporte.',
    '**Busca atención urgente:** Acude a urgencias si notas pérdida de fuerza en la pierna o el pie, adormecimiento en la zona genital o perineal (en silla de montar) o alteraciones en el control de la orina o las heces.',
  ],
  faqs: [
    {
      q: '¿Por qué la resonancia magnética es la prueba definitiva?',
      a: 'La RMN pélvica permite medir con precisión milimétrica el Espacio Isquiofemoral (IFS) y el Espacio del Cuadrado Femoral (QFS). Un IFS menor a 15 mm (normal ~23 mm) y un QFS menor a 10 mm en presencia de edema de señal alta (T2/STIR) en el vientre muscular del cuadrado femoral confirman el diagnóstico.',
    },
    {
      q: '¿Por qué siento dolor tipo "ciática" o calambre si el problema es en la cadera?',
      a: 'El nervio ciático desciende inmediatamente posterior al músculo cuadrado femoral dentro del estrecho túnel isquiofemoral. Cuando el espacio se reduce o el músculo se inflama (edema), el nervio sufre compresión mecánica e isquemia local, generando pseudociática o dolor irradiado por la cara posterior del muslo.',
    },
    {
      q: '¿Por qué los estiramientos tradicionales de isquiotibiales empeoran mi dolor?',
      a: 'Al doblar el tronco hacia adelante con piernas estiradas, la tuberosidad isquiática bascula hacia atrás y arriba, comprimiendo con fuerza brutal los tejidos profundos contra el fémur. Estirar los isquiotibiales de forma pasiva es uno de los errores más frecuentes que cronifican el pinzamiento isquiofemoral.',
    },
    {
      q: '¿Cuánto tiempo al día debo aplicar los ejercicios de tracción con goma?',
      a: 'Se recomiendan de 2 a 3 series de 45-60 segundos por sesión, 1 o 2 veces al día (por ejemplo por la mañana y al terminar el día). La tracción no debe forzarse con dolor, sino experimentarse como una suave apertura y alivio descompresivo.',
    },
  ],
};

export type SimulatorPreset = 'traction' | 'walk_impingement' | 'crossed_legs';

export const SIMULATOR = {
  baselineMm: 21,
  minimumMm: 4,
  // Efecto en mm por grado y, si lo hay, límite del efecto
  effects: {
    extension: { perDegree: 0.35 },
    flexion: { perDegree: 0.08, limit: 6 },
    adduction: { perDegree: 0.45 },
    abduction: { perDegree: 0.28, limit: 8 },
    externalRotation: { perDegree: 0.32 },
    internalRotation: { perDegree: 0.18, limit: 5 },
  },
  maxTractionMm: 8.5,
  // Cada estado se aplica por debajo de `below`, en orden
  statuses: [
    { below: 12, tone: 'severe', name: 'Pinzamiento Severo (Conflicto Activo)', description: 'El trocánter menor colisiona directamente con el isquion. El músculo cuadrado femoral está atrapado y el nervio ciático sufre compresión e isquemia.' },
    { below: 16, tone: 'risk', name: 'Espacio Crítico / En Riesgo', description: 'Espacio inferior al umbral normal de resonancia (< 15 mm). Hay fricción miofascial repetitiva al caminar o sentarse.' },
    { below: 24, tone: 'normal', name: 'Espacio Fisiológico Libre', description: 'Rango anatómico estándar. El cuadrado femoral dispone de espacio de deslizamiento sin compresión ósea.' },
    { below: Infinity, tone: 'decompressed', name: 'Descompresión Terapéutica Máxima', description: 'En este modelo, la tracción lateral con goma elástica amplía el túnel isquiofemoral, lo que explicaría el alivio que puedes notar.' },
  ] as { below: number; tone: 'severe' | 'risk' | 'normal' | 'decompressed'; name: string; description: string }[],
  normalRange: '18 - 25 mm',
  pathologicalBelowMm: 15,
  therapeuticGoal: '**Mantener el espacio > 18 mm** mediante tracción y fuerza abductora.',
  presets: {
    traction: { label: 'Tracción con Goma (Alivio)', state: { hipAngle: 75, frontalAngle: 15, rotationAngle: 10, bandTractionIntensity: 90, bandTractionActive: true } },
    walk_impingement: { label: 'Marcha / Zancada Larga (Pinzamiento)', state: { hipAngle: -12, frontalAngle: -8, rotationAngle: -15, bandTractionIntensity: 0, bandTractionActive: false } },
    crossed_legs: { label: 'Piernas Cruzadas', state: { hipAngle: 70, frontalAngle: -15, rotationAngle: -20, bandTractionIntensity: 0, bandTractionActive: false } },
  } as Record<SimulatorPreset, { label: string; state: BiomechanicsState }>,
  modelExplanation: 'En el pinzamiento isquiofemoral, el trocánter menor puede chocar con la tuberosidad isquiática al caminar (cuando la pierna va hacia atrás en extensión y aducción). La goma busca generar una **fuerza de tracción decoaptante** que amplíe ese canal, lo que explicaría el alivio.',
  modelLimits: 'Las cifras son una estimación ilustrativa, no una medición de tu cadera, y sentir alivio no confirma el diagnóstico: el espacio real solo se mide con una resonancia magnética.',
  tractionExplanation: 'Ejerce un vector perpendicular que tracciona lateralmente la cabeza del fémur, separándola mecánicamente del isquion.',
};

export const DISCLAIMERS = {
  footerOrigin: 'Desarrollado según criterios de biomecánica ortopédica para el conflicto del espacio isquiofemoral y del cuadrado femoral.',
  footer: 'Nota de responsabilidad: Esta aplicación no sustituye una consulta médica individualizada. El diagnóstico definitivo de pinzamiento isquiofemoral requiere confirmación por Resonancia Magnética (RMN).',
  advisor: 'Orientación educativa basada en biomecánica. Consulta siempre con tu médico o fisioterapeuta para confirmación diagnóstica con RMN.',
  model3D: 'Arrastra sobre la figura para girarla. Es un modelo de referencia: los ángulos son orientativos y no analizan tu movimiento.',
};
