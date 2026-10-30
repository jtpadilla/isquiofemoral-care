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
    { title: 'Estiramientos clásicos de isquiotibiales hacia adelante', text: 'Inclinarse hacia los dedos de los pies aplasta el vientre del cuadrado femoral y tensa el nervio ciático irritado. Sustitúyelo siempre por deslizamientos neurodinámicos sin tensión (sliders).' },
    { title: 'Sentarse con las piernas cruzadas', text: 'Cruzar las piernas coloca la cadera en aducción profunda y rotación extrema, cerrando al mínimo el espacio isquiofemoral. Mantén siempre las rodillas separadas y apoyadas en superficies con soporte.' },
    { title: 'Zancadas largas hacia atrás o hiperextensión', text: 'En cada zancada larga de marcha o carrera, la pierna retrasada entra en hiperextensión + aducción, produciendo un impacto repetitivo del trocánter menor contra el isquion.' },
    { title: 'Asientos duros sin almohadilla isquiática', text: 'El apoyo directo sobre superficies rígidas comprime el túnel isquiofemoral inferior. Utiliza un cojín o toalla doblada bajo los muslos para descargar la tuberosidad isquiática.' },
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
    { title: 'Al dormir de lado', text: 'Coloca un cojín o almohada gruesa entre tus rodillas. Esto mantiene la pierna de arriba en posición neutra/abducción y previene que caiga en aducción forzada durante las 8 horas de sueño.' },
    { title: 'Al conducir o trabajar sentado', text: 'Evita que las rodillas queden más altas que las caderas (asientos deportivos hundidos). Utiliza un cojín en forma de cuña que eleve ligeramente la pelvis y mantenga los pies bien apoyados en el suelo.' },
    { title: 'Al caminar o pasear', text: 'Camina como si pisaras sobre dos raíles paralelos de tren, no sobre una sola línea de cuerda floja. Acorta ligeramente el paso y evita arrastrar la pierna hacia atrás.' },
  ],
  activityIntro: '**Es una orientación general, no una lista validada:** no hay estudios que clasifiquen cada deporte para esta patología. Se basa en evitar la posición que suele provocar los síntomas: extensión de cadera con aducción y rotación externa. La tolerancia varía de una persona a otra, así que acuerda tu caso con tu médico o fisioterapeuta.',
  activityGroups: [
    {
      title: 'Suelen tolerarse mejor',
      tone: 'good',
      activities: [
        { title: 'Bicicleta estática o de paseo', text: 'La cadera trabaja en flexión y no llega a la extensión. Si el sillín presiona la zona dolorosa, ajústalo o acorta las sesiones. Mantén las rodillas alineadas, sin cerrarlas.' },
        { title: 'Caminar en el agua y ejercicios acuáticos suaves', text: 'El agua reduce la carga. Mantén el paso corto y sin cruzar las piernas.' },
        { title: 'Ejercicios de esta guía', text: 'Trabajan el glúteo medio sin llevar la cadera a la extensión forzada. Sigue la progresión por fases.' },
      ],
    },
    {
      title: 'Posibles con adaptaciones',
      tone: 'caution',
      activities: [
        { title: 'Caminar', text: 'Paso corto, pies sobre dos raíles paralelos y sin arrastrar la pierna hacia atrás. Aumenta la distancia de forma gradual.' },
        { title: 'Elíptica', text: 'La zancada la marca la máquina y puede llevar la pierna demasiado atrás. Elige la zancada más corta, poca resistencia y sesiones breves al principio. Déjala si reproduce el dolor.' },
        { title: 'Musculación', text: 'Prioriza máquinas y rangos controlados: abductores, prensa y sentadilla sin que las rodillas se cierren. Evita la máquina de aductores. En el hip thrust y el puente, no pases de la línea del cuerpo.' },
        { title: 'Natación', text: 'Empieza con crol o espalda suaves y patada corta. Evita la braza mientras sea dolorosa, porque su patada combina aducción y rotación.' },
        { title: 'Yoga y pilates', text: 'Avisa a tu instructor y omite la postura de la paloma, las flexiones hacia delante con piernas estiradas, las posturas de zancada amplia y las extensiones de cadera forzadas.' },
      ],
    },
    {
      title: 'Mejor evitar mientras haya síntomas',
      tone: 'avoid',
      activities: [
        { title: 'Correr, sobre todo a ritmo rápido', text: 'La zancada larga repite la extensión de cadera en cada paso. Retómalo de forma progresiva, con pasos cortos y con supervisión profesional.' },
        { title: 'Zancadas y sentadilla búlgara', text: 'Colocan la pierna retrasada justo en la posición que cierra el espacio.' },
        { title: 'Peso muerto pesado', text: 'Pospón la carga elevada. El peso muerto a una pierna de la fase 3 se reserva para cuando las fases anteriores ya no den síntomas.' },
        { title: 'Fútbol, artes marciales y deportes de patada', text: 'Combinan extensión rápida de cadera, cambios de dirección y cruces de pierna.' },
        { title: 'Pádel, tenis y baloncesto', text: 'Incluyen zancadas amplias, frenadas y giros difíciles de controlar.' },
      ],
    },
  ] as { title: string; tone: 'good' | 'caution' | 'avoid'; activities: { title: string; text: string }[] }[],
  activityWarnings: [
    '**Cuándo parar:** interrumpe la actividad si aparece dolor punzante, hormigueo, adormecimiento o dolor que baja por la pierna, o si los síntomas empeoran al día siguiente. Coméntalo con tu médico o fisioterapeuta antes de retomarla.',
    '**Busca atención urgente** si notas pérdida de fuerza en la pierna, adormecimiento en la zona genital o pérdida de control de la orina o las heces.',
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
