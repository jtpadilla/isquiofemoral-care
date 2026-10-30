import { Exercise, ExerciseAnimation, Pose } from '../types';

// Cada ejercicio se define solo con ángulos articulares, para que coincidan con las instrucciones.
// La pierna de trabajo es siempre la izquierda; el visor refleja la escena para la derecha.
// La altura de la raíz (rootY) se calcula al cargar para que el cuerpo apoye en el suelo.

// Cabeza hacia -X; la pierna izquierda queda en -Z
const SUPINE: Partial<Pose> = { rootRotX: -90, rootRotZ: 90 };
// Sobre el lado derecho, cabeza hacia -X; la pierna izquierda queda arriba
const SIDE_LYING: Partial<Pose> = {
  rootRotZ: 90,
  neckSideBend: 12,
  shoulderRFlexion: 150,
  elbowRFlexion: 20,
  shoulderLFlexion: 35,
  elbowLFlexion: 25,
};
const SIDE_LYING_VIEWS: ExerciseAnimation['scene']['views'] = [
  { label: '3/4', position: [0.85, 0.95, 2.05] },
  { label: 'Frente', position: [-0.15, 0.3, 2.7] },
  { label: 'Desde los pies', position: [2.2, 0.35, 0.15] },
  { label: 'Arriba', position: [-0.15, 2.7, 0.05] },
];
const SUPINE_VIEWS: ExerciseAnimation['scene']['views'] = [
  { label: '3/4', position: [1.05, 1.1, -2.1] },
  { label: 'Lateral', position: [0, 0.45, -2.8] },
  { label: 'Desde los pies', position: [2.6, 0.7, 0] },
  { label: 'Arriba', position: [0, 2.8, -0.05] },
];
const SIDE_LYING_MAT = { center: [-0.2, 0.1] as [number, number], size: [1.9, 0.75] as [number, number] };
const SUPINE_MAT = { center: [-0.1, 0] as [number, number], size: [2, 0.75] as [number, number] };

export const EXERCISE_ANIMATIONS: Partial<Record<Exercise['diagramType'], ExerciseAnimation>> = {
  lateral_traction: {
    muscleLabel: 'Zona de descompresión',
    muscleZones: ['hipJointL'],
    scene: {
      target: [0.2, 0.3, 0.1],
      views: [
        { label: '3/4', position: [-0.9, 1.25, -2.1] },
        { label: 'Desde atrás', position: [0.2, 0.55, -2.9] },
        { label: 'Lateral', position: [-2.7, 0.5, 0.1] },
        { label: 'Arriba', position: [0.2, 3, 0.05] },
      ],
      mat: { center: [0, 0.1], size: [0.8, 1.5] },
    },
    bands: [{ kind: 'anchor', anchor: [1.25, 0.45, -0.03], attach: 'groinL', restLength: 0.7 }],
    basePose: {
      // Cuatro apoyos con la cabeza hacia +Z y el anclaje al lado de la pierna izquierda (+X)
      rootRotX: 80,
      spineFlexion: -5,
      neckFlexion: -10,
      hipLFlexion: 85,
      hipRFlexion: 85,
      kneeLFlexion: 95,
      kneeRFlexion: 95,
      ankleLDorsiflexion: -80,
      ankleRDorsiflexion: -80,
      shoulderLFlexion: 75,
      shoulderRFlexion: 75,
      elbowLFlexion: 3,
      elbowRFlexion: 3,
      wristLExtension: 75,
      wristRExtension: 75,
    },
    phases: [
      {
        stepIndex: 3,
        label: 'La goma, en la raíz del muslo, tira de la cadera hacia el anclaje',
        duration: 1,
        pose: {},
        activation: 0.7,
        peak: true,
      },
      {
        stepIndex: 4,
        label: 'Oscila despacio llevando la pelvis un poco hacia atrás (80-90° de cadera)',
        duration: 2,
        pose: { rootZ: -0.038, hipLFlexion: 90, hipRFlexion: 90, kneeLFlexion: 100, kneeRFlexion: 100, shoulderLFlexion: 79, shoulderRFlexion: 79 },
        activation: 1,
        peak: true,
      },
      {
        stepIndex: 5,
        label: 'Vuelve sin perder tensión y respira de forma pausada',
        duration: 2,
        pose: {},
        activation: 0.7,
        peak: true,
      },
    ],
    errors: [
      {
        id: 'band-low',
        label: 'Goma en mitad del muslo',
        why: 'La goma debe ir en la raíz del muslo. Colocada más abajo tira del fémur como una palanca en lugar de separar la articulación.',
        bands: [{ kind: 'anchor', anchor: [1.25, 0.45, -0.03], attach: 'midThighL', restLength: 0.7 }],
      },
      {
        id: 'leg-crossed',
        label: 'La pierna se cruza hacia dentro',
        why: 'Llevar el muslo hacia la línea media (aducción) cierra el espacio que la tracción intenta abrir. Mantén la rodilla bajo la cadera.',
        peakPose: { hipLAbduction: -14 },
      },
    ],
    readouts: [
      { label: 'Flexión de cadera', source: 'hipLFlexion', unit: '°', min: 80, max: 90 },
      { label: 'Aducción del muslo', source: 'hipLAbduction', unit: '°', min: -2, max: 5 },
    ],
  },

  axial_distraction: {
    muscleLabel: 'Zona de descompresión',
    muscleZones: ['hipJointL'],
    scene: {
      target: [0.35, 0.35, -0.05],
      views: [
        { label: '3/4', position: [1.3, 1.35, -2.75] },
        { label: 'Lateral', position: [0.35, 0.5, -3.4] },
        { label: 'Desde los pies', position: [3.2, 0.8, -0.05] },
        { label: 'Arriba', position: [0.35, 3.4, -0.1] },
      ],
      mat: SUPINE_MAT,
    },
    bands: [{ kind: 'anchor', anchor: [1.4, 0.05, -0.09], attach: 'ankleL', restLength: 0.6 }],
    basePose: {
      ...SUPINE,
      shoulderLAbduction: 15,
      shoulderRAbduction: 15,
      ankleLDorsiflexion: -20,
      ankleRDorsiflexion: -25,
    },
    phases: [
      { stepIndex: 1, label: 'Goma en el tobillo y pelvis apoyada', duration: 0.8, pose: {}, activation: 0 },
      {
        stepIndex: 2,
        label: 'Eleva la pierna hasta 70-80° de cadera con la rodilla relajada',
        duration: 2,
        pose: { hipLFlexion: 75, kneeLFlexion: 25 },
        activation: 0.6,
        peak: true,
      },
      {
        stepIndex: 3,
        label: 'Deja la pierna en reposo: la goma la estira suavemente hacia el anclaje',
        duration: 2.5,
        pose: { hipLFlexion: 73, kneeLFlexion: 18 },
        activation: 1,
        peak: true,
      },
      {
        stepIndex: 4,
        label: 'Mantén la pelvis bien apoyada en la esterilla',
        duration: 1.5,
        pose: { hipLFlexion: 73, kneeLFlexion: 18 },
        activation: 1,
        peak: true,
      },
      { stepIndex: 2, label: 'Baja la pierna con suavidad', duration: 2, pose: {}, activation: 0 },
    ],
    errors: [
      {
        id: 'pelvis-lift',
        label: 'La pelvis se despega',
        why: 'Si el lado afectado se levanta, la tracción deja de actuar sobre la cadera. Mantén las dos caderas apoyadas en la esterilla.',
        peakPose: { rootRotX: -78 },
      },
      {
        id: 'knee-locked',
        label: 'Rodilla totalmente extendida',
        why: 'Extender la rodilla del todo pone en tensión los isquiotibiales. Déjala semi-relajada.',
        peakPose: { kneeLFlexion: 0, hipLFlexion: 78 },
      },
    ],
    readouts: [
      { label: 'Flexión de cadera', source: 'hipLFlexion', unit: '°', min: 70, max: 80, peakOnly: true },
      { label: 'Flexión de rodilla', source: 'kneeLFlexion', unit: '°', min: 10, max: 30, peakOnly: true },
      { label: 'Giro de la pelvis', source: 'rootRotX', unit: '°', min: -3, max: 3, offset: 90 },
    ],
  },

  sciatic_slider: {
    muscleLabel: 'Nervio ciático (trayecto)',
    muscleZones: [],
    showNerve: true,
    scene: { target: [0.05, 0.35, 0], views: SUPINE_VIEWS, mat: SUPINE_MAT },
    basePose: {
      ...SUPINE,
      hipLFlexion: 90,
      ankleLDorsiflexion: -15,
      ankleRDorsiflexion: -25,
      // Las dos manos sujetan el muslo por detrás
      shoulderLFlexion: 7,
      shoulderLAbduction: -4,
      shoulderLRotation: -5,
      elbowLFlexion: 39,
      shoulderRFlexion: 16,
      shoulderRAbduction: -27,
      shoulderRRotation: -34,
      elbowRFlexion: 20,
    },
    // Ciclo de 3 s: unos 13 deslizamientos caben en los 40 s de la serie
    phases: [
      {
        stepIndex: 1,
        label: 'Extiende la rodilla mientras la cabeza se relaja hacia atrás',
        duration: 1.4,
        pose: { kneeLFlexion: 30, neckFlexion: 0 },
        activation: 1,
        peak: true,
      },
      {
        stepIndex: 2,
        label: 'Flexiona la rodilla mientras la barbilla se acerca al pecho',
        duration: 1.6,
        pose: { kneeLFlexion: 90, neckFlexion: 35 },
        activation: 0,
      },
    ],
    errors: [
      {
        id: 'both-tension',
        label: 'Rodilla estirada + barbilla al pecho',
        why: 'Así tensas los dos extremos del nervio a la vez: pasa de deslizar a estirar. Cuando la rodilla se extiende, la cabeza va hacia atrás.',
        peakPose: { neckFlexion: 35 },
      },
      {
        id: 'too-far',
        label: 'Forzar la extensión de rodilla',
        why: 'La intensidad debe ser 0 sobre 10 de dolor o tirón. Reduce la amplitud antes de notar tensión o calambre detrás de la rodilla.',
        peakPose: { kneeLFlexion: 3 },
      },
    ],
    readouts: [
      { label: 'Flexión de rodilla', source: 'kneeLFlexion', unit: '°', min: 25, max: 90 },
      { label: 'Flexión de cuello', source: 'neckFlexion', unit: '°', min: 0, max: 35 },
    ],
  },

  band_bridge: {
    muscleLabel: 'Glúteo mayor',
    muscleZones: ['gluteMaxL', 'gluteMaxR'],
    bilateral: true,
    scene: { target: [0, 0.25, 0], views: SUPINE_VIEWS, mat: SUPINE_MAT },
    bands: [{ kind: 'loop', left: 'aboveKneeL', right: 'aboveKneeR' }],
    basePose: {
      ...SUPINE,
      shoulderLAbduction: 15,
      shoulderRAbduction: 15,
      hipLFlexion: 58,
      hipRFlexion: 58,
      hipLAbduction: 8,
      hipRAbduction: 8,
      kneeLFlexion: 133,
      kneeRFlexion: 133,
      ankleLDorsiflexion: -15,
      ankleRDorsiflexion: -15,
    },
    // Ciclo de 6 s: 12 repeticiones ocupan los 72 s de la serie
    phases: [
      { stepIndex: 2, label: 'Separa las rodillas contra la goma', duration: 0.5, pose: {}, activation: 0.2 },
      {
        stepIndex: 3,
        label: 'Empuja con los talones hasta alinear rodillas, caderas y hombros',
        duration: 1,
        pose: { rootX: -0.0375, rootRotY: -25, neckFlexion: 25, shoulderLFlexion: -25, shoulderRFlexion: -25, hipLFlexion: 0, hipRFlexion: 0, kneeLFlexion: 115, kneeRFlexion: 115, ankleLDorsiflexion: 0, ankleRDorsiflexion: 0 },
        activation: 1,
        peak: true,
      },
      {
        stepIndex: 4,
        label: 'Aprieta los glúteos 3 segundos sin dejar de empujar la goma',
        duration: 3,
        pose: { rootX: -0.0375, rootRotY: -25, neckFlexion: 25, shoulderLFlexion: -25, shoulderRFlexion: -25, hipLFlexion: 0, hipRFlexion: 0, kneeLFlexion: 115, kneeRFlexion: 115, ankleLDorsiflexion: 0, ankleRDorsiflexion: 0 },
        activation: 1,
        peak: true,
      },
      { stepIndex: 5, label: 'Baja despacio sin que las rodillas se junten', duration: 1.5, pose: {}, activation: 0.2 },
    ],
    errors: [
      {
        id: 'knees-collapse',
        label: 'Las rodillas se juntan',
        why: 'Se pierde la tensión de la goma y el fémur se acerca a la aducción, justo lo que estrecha el espacio. Empuja hacia fuera en todo el recorrido.',
        peakPose: { hipLAbduction: -2, hipRAbduction: -2 },
      },
      {
        id: 'back-arch',
        label: 'Subir demasiado arqueando la espalda',
        why: 'La fuerza pasa a la zona lumbar en lugar de a los glúteos. Detente cuando rodillas, caderas y hombros formen una línea.',
        peakPose: { rootX: -0.02, rootRotY: -15, neckFlexion: 40, spineFlexion: -25, shoulderLFlexion: -40, shoulderRFlexion: -40, hipLFlexion: 5, hipRFlexion: 5 },
      },
    ],
    readouts: [
      { label: 'Separación de rodillas', source: 'kneeGapCm', unit: ' cm', min: 10, max: 30, peakOnly: true },
      { label: 'Cadera (0° = en línea)', source: 'hipLFlexion', unit: '°', min: -4, max: 4, peakOnly: true },
      { label: 'Arqueo lumbar', source: 'spineFlexion', unit: '°', min: -3, max: 3 },
    ],
  },

  side_abduction: {
    muscleLabel: 'Glúteo medio',
    muscleZones: ['gluteMedL'],
    scene: { target: [-0.1, 0.3, 0.15], views: SIDE_LYING_VIEWS, mat: SIDE_LYING_MAT },
    basePose: {
      ...SIDE_LYING,
      hipRFlexion: 45,
      hipRAbduction: -5,
      kneeRFlexion: 90,
      ankleRDorsiflexion: -10,
      hipLFlexion: 30,
      hipLAbduction: -5,
      hipLInternalRotation: 8,
      kneeLFlexion: 3,
      ankleLDorsiflexion: -5,
    },
    // Ciclo de 4 s: 15 repeticiones ocupan los 60 s de la serie
    phases: [
      { stepIndex: 3, label: 'Pierna 30° adelantada, con la punta del pie un poco hacia el suelo', duration: 0.5, pose: {}, activation: 0.1 },
      {
        stepIndex: 4,
        label: 'Eleva la pierna 25-30 cm sin mover la pelvis',
        duration: 1,
        pose: { hipLAbduction: 18 },
        activation: 1,
        peak: true,
      },
      {
        stepIndex: 5,
        label: 'Pausa de 1 segundo arriba',
        duration: 1,
        pose: { hipLAbduction: 18 },
        activation: 1,
        peak: true,
      },
      { stepIndex: 5, label: 'Baja de manera suave', duration: 1.5, pose: {}, activation: 0.1 },
    ],
    errors: [
      {
        id: 'leg-back',
        label: 'La pierna se va hacia atrás',
        why: 'Al perder los 30° de flexión, la cadera se acerca a la extensión que provoca el choque. Mantén la pierna adelantada durante toda la elevación.',
        peakPose: { hipLFlexion: -5 },
      },
      {
        id: 'toes-up',
        label: 'El pie gira hacia el techo',
        why: 'La rotación externa desplaza el trabajo y acerca el trocánter menor al isquion. Mantén la punta del pie un poco hacia el suelo.',
        peakPose: { hipLInternalRotation: -25 },
      },
    ],
    readouts: [
      { label: 'Flexión de cadera', source: 'hipLFlexion', unit: '°', min: 25, max: 45 },
      { label: 'Rotación (+ interna)', source: 'hipLInternalRotation', unit: '°', min: 0, max: 15 },
      { label: 'Abducción', source: 'hipLAbduction', unit: '°', min: -5, max: 20 },
    ],
  },

  monster_walk: {
    muscleLabel: 'Glúteo medio',
    muscleZones: ['gluteMedL', 'gluteMedR'],
    bilateral: true,
    scene: {
      target: [-0.1, 0.72, 0.05],
      views: [
        { label: 'Frente', position: [-0.1, 1.05, 3.6] },
        { label: '3/4', position: [1.5, 1.4, 3.1] },
        { label: 'Lateral', position: [3.6, 0.9, 0.05] },
        { label: 'Arriba', position: [-0.1, 3.8, 0.1] },
      ],
    },
    bands: [{ kind: 'loop', left: 'aboveKneeL', right: 'aboveKneeR' }],
    basePose: {
      spineFlexion: 20,
      neckFlexion: -15,
      hipLFlexion: 35,
      hipRFlexion: 35,
      kneeLFlexion: 50,
      kneeRFlexion: 50,
      ankleLDorsiflexion: 15,
      ankleRDorsiflexion: 15,
      shoulderLFlexion: 35,
      shoulderRFlexion: 35,
      elbowLFlexion: 80,
      elbowRFlexion: 80,
    },
    // Cada apoyo se calcula para que el pie que no se mueve siga en el mismo punto del suelo
    phases: [
      {
        stepIndex: 3,
        label: 'Paso lateral con la pierna derecha, sin que la rodilla caiga hacia dentro',
        duration: 0.5,
        pose: { rootX: -0.05, hipLAbduction: 9, hipRAbduction: 9, hipRFlexion: 42, kneeRFlexion: 65 },
        activation: 0.8,
      },
      {
        stepIndex: 3,
        label: 'Apoya el pie derecho con tensión en la goma',
        duration: 0.5,
        pose: { rootX: -0.1, hipLAbduction: 12.8, hipRAbduction: 12.8 },
        activation: 1,
        peak: true,
      },
      {
        stepIndex: 4,
        label: 'Acerca la pierna izquierda con control',
        duration: 0.5,
        pose: { rootX: -0.15, hipLAbduction: 9, hipRAbduction: 9, hipLFlexion: 42, kneeLFlexion: 65 },
        activation: 0.8,
      },
      {
        stepIndex: 4,
        label: 'Los pies quedan a la anchura de las caderas o algo más',
        duration: 0.5,
        pose: { rootX: -0.2, hipLAbduction: 5.2, hipRAbduction: 5.2 },
        activation: 0.7,
      },
      {
        stepIndex: 5,
        label: 'Regresa en dirección contraria: paso con la pierna izquierda',
        duration: 0.5,
        pose: { rootX: -0.15, hipLAbduction: 9, hipRAbduction: 9, hipLFlexion: 42, kneeLFlexion: 65 },
        activation: 0.8,
      },
      {
        stepIndex: 5,
        label: 'Apoya el pie izquierdo con tensión en la goma',
        duration: 0.5,
        pose: { rootX: -0.1, hipLAbduction: 12.8, hipRAbduction: 12.8 },
        activation: 1,
        peak: true,
      },
      {
        stepIndex: 5,
        label: 'Acerca la pierna derecha con control',
        duration: 0.5,
        pose: { rootX: -0.05, hipLAbduction: 9, hipRAbduction: 9, hipRFlexion: 42, kneeRFlexion: 65 },
        activation: 0.8,
      },
      {
        stepIndex: 5,
        label: 'Mantén la semi-sentadilla y la pelvis a la misma altura',
        duration: 0.5,
        pose: { rootX: 0, hipLAbduction: 5.2, hipRAbduction: 5.2 },
        activation: 0.7,
      },
    ],
    errors: [
      {
        id: 'knee-valgus',
        label: 'Las rodillas caen hacia dentro',
        why: 'La goma gana y el fémur se va a la aducción y rotación que cierran el espacio. Mantén las rodillas alineadas con el segundo dedo del pie.',
        peakPose: { hipLInternalRotation: 16, hipRInternalRotation: 16 },
      },
      {
        id: 'pelvis-bob',
        label: 'La pelvis sube y baja',
        why: 'Al estirar las piernas en cada paso pierdes el ángulo protector de la cadera. Mantén la misma altura, sin moverte como un barco.',
        peakPose: { hipLFlexion: 20, hipRFlexion: 20, kneeLFlexion: 25, kneeRFlexion: 25, ankleLDorsiflexion: 5, ankleRDorsiflexion: 5, spineFlexion: 8 },
      },
    ],
    readouts: [
      { label: 'Flexión de cadera', source: 'hipLFlexion', unit: '°', min: 30, max: 45 },
      { label: 'Separación de rodillas', source: 'kneeGapCm', unit: ' cm', min: 20, max: 40, peakOnly: true },
    ],
  },

  reverse_clamshell: {
    muscleLabel: 'Cadera lateral/anterior',
    muscleZones: ['hipLateralL'],
    scene: { target: [-0.15, 0.25, 0.1], views: SIDE_LYING_VIEWS, mat: SIDE_LYING_MAT },
    basePose: {
      ...SIDE_LYING,
      hipLFlexion: 45,
      hipRFlexion: 45,
      hipLAbduction: -5,
      hipRAbduction: -5,
      kneeLFlexion: 90,
      kneeRFlexion: 90,
      ankleLDorsiflexion: -10,
      ankleRDorsiflexion: -10,
    },
    // Ciclo de 5 s: 12 repeticiones ocupan los 60 s de la serie
    phases: [
      {
        stepIndex: 1,
        label: 'Rodillas juntas y tobillos en contacto',
        duration: 0.4,
        pose: {},
        activation: 0.1,
      },
      {
        stepIndex: 2,
        label: 'Sube el tobillo hacia el techo; la rodilla no se mueve',
        duration: 1.2,
        pose: { hipLInternalRotation: 30 },
        activation: 1,
        peak: true,
      },
      {
        stepIndex: 3,
        label: 'Mantén arriba 1-2 segundos',
        duration: 1.5,
        pose: { hipLInternalRotation: 30 },
        activation: 1,
        peak: true,
      },
      {
        stepIndex: 4,
        label: 'Baja despacio hasta tocar el otro tobillo',
        duration: 1.9,
        pose: {},
        activation: 0.1,
      },
    ],
    errors: [
      {
        id: 'pelvis-roll',
        label: 'La pelvis gira hacia delante',
        why: 'El pie sube, pero gracias al giro del tronco y no a la rotación de la cadera. Mantén la pelvis apilada: una cadera justo encima de la otra.',
        peakPose: { rootRotX: 22, hipLInternalRotation: 10 },
      },
      {
        id: 'knees-apart',
        label: 'Las rodillas se separan',
        why: 'La rodilla deja de ser el pivote y el movimiento se convierte en una apertura de la pierna. Mantén las rodillas pegadas durante todo el recorrido.',
        peakPose: { hipLAbduction: 18, hipLInternalRotation: 22 },
      },
    ],
    readouts: [
      { label: 'Rotación interna', source: 'hipLInternalRotation', unit: '°', min: 0, max: 30 },
      { label: 'Giro de la pelvis', source: 'rootRotX', unit: '°', min: -3, max: 3 },
      { label: 'Separación de rodillas', source: 'kneeGapCm', unit: ' cm', min: 0, max: 2 },
    ],
  },

  single_leg_rdl: {
    muscleLabel: 'Glúteo de apoyo',
    muscleZones: ['gluteMedL', 'gluteMaxL'],
    scene: {
      target: [-0.15, 0.72, 0.1],
      views: [
        { label: 'Lateral', position: [2.9, 1, 0.9] },
        { label: '3/4', position: [1.7, 1.45, -2.6] },
        { label: 'Desde atrás', position: [-0.15, 1.3, -3.4] },
        { label: 'Frente', position: [-0.15, 1.1, 3.6] },
      ],
      wall: { center: [-0.74, 1.05, 0.2], size: [0.06, 2.1, 1.6] },
    },
    basePose: {
      // Apoyo en la pierna izquierda; la mano derecha toca la pared
      hipLFlexion: 5,
      kneeLFlexion: 10,
      ankleLDorsiflexion: 5,
      kneeRFlexion: 5,
      shoulderRAbduction: 70,
      elbowRFlexion: 30,
    },
    // Ciclo de 5 s: 9 repeticiones ocupan los 45 s de la serie
    phases: [
      { stepIndex: 1, label: 'De pie sobre la pierna de trabajo, rodilla sin bloquear y mano en la pared', duration: 0.5, pose: {}, activation: 0.3 },
      {
        stepIndex: 2,
        label: 'Lleva la pierna libre recta hacia atrás mientras el tronco bascula desde la cadera',
        duration: 2,
        pose: { rootRotX: 70, rootZ: 0.038, hipLFlexion: 75, neckFlexion: -25, ankleRDorsiflexion: -20 },
        activation: 0.8,
        peak: true,
      },
      {
        stepIndex: 3,
        label: 'Pelvis totalmente horizontal: ni cae ni rota',
        duration: 0.5,
        pose: { rootRotX: 70, rootZ: 0.038, hipLFlexion: 75, neckFlexion: -25, ankleRDorsiflexion: -20 },
        activation: 1,
        peak: true,
      },
      { stepIndex: 4, label: 'Regresa apretando el glúteo de la pierna de apoyo', duration: 2, pose: {}, activation: 0.9 },
    ],
    errors: [
      {
        id: 'pelvis-open',
        label: 'La cadera libre se abre',
        why: 'Al rotar la pelvis, el glúteo medio deja de sostenerla: es la basculación que ocurre también al caminar. Imagina un nivel de burbuja sobre el sacro.',
        peakPose: { rootRotY: -22, hipLAbduction: 20 },
      },
      {
        id: 'round-back',
        label: 'La espalda se redondea',
        why: 'Bajas doblando la columna en lugar de la cadera. Mantén la espalda neutra y baja solo hasta donde controles la pelvis.',
        peakPose: { spineFlexion: 32, neckFlexion: 5, rootRotX: 52, hipLFlexion: 57 },
      },
    ],
    readouts: [
      { label: 'Giro de la pelvis', source: 'rootRotY', unit: '°', min: -3, max: 3 },
      { label: 'Curva de la espalda', source: 'spineFlexion', unit: '°', min: -3, max: 3 },
      { label: 'Rodilla de apoyo', source: 'kneeLFlexion', unit: '°', min: 5, max: 20 },
    ],
  },

  side_plank: {
    muscleLabel: 'Cadena lateral de apoyo',
    muscleZones: ['lateralTrunkL', 'hipLateralL'],
    scene: {
      target: [0, 0.3, 0],
      views: [
        { label: '3/4', position: [-0.85, 1, 2.2] },
        { label: 'Frente', position: [0, 0.4, 2.8] },
        { label: 'Desde arriba', position: [0, 2.8, 0.05] },
        { label: 'Desde la cabeza', position: [2.7, 0.6, 0.1] },
      ],
      mat: { center: [0.05, 0.05], size: [1.9, 0.9] },
    },
    basePose: {
      // Sobre el lado izquierdo con la cabeza hacia +X; rodillas a 90°
      rootRotZ: -85,
      spineSideBend: 54,
      shoulderLAbduction: 31, // Húmero vertical bajo el hombro
      elbowLFlexion: 90,
      shoulderRFlexion: 15,
      shoulderRAbduction: 25,
      elbowRFlexion: 100,
      kneeLFlexion: 90,
      kneeRFlexion: 90,
      ankleLDorsiflexion: -70,
      ankleRDorsiflexion: -70,
    },
    phases: [
      { stepIndex: 1, label: 'Antebrazo bajo el hombro y rodillas a 90°', duration: 0.8, pose: {}, activation: 0.1 },
      {
        stepIndex: 2,
        label: 'Eleva la pelvis hasta alinear rodillas, cadera y cabeza',
        duration: 1.5,
        pose: { rootRotZ: -66, rootX: -0.073, spineSideBend: 0, shoulderLAbduction: 66 },
        activation: 1,
        peak: true,
      },
      {
        stepIndex: 3,
        label: 'Mantén el abdomen activo y respira sin aguantar el aire',
        duration: 3,
        pose: { rootRotZ: -66, rootX: -0.073, spineSideBend: 0, shoulderLAbduction: 66 },
        activation: 1,
        peak: true,
      },
      { stepIndex: 1, label: 'Baja con control', duration: 1.5, pose: {}, activation: 0.1 },
    ],
    errors: [
      {
        id: 'hip-sag',
        label: 'La pelvis se hunde',
        why: 'Al caer la cadera, el tronco deja de sostenerse con su cadena lateral. Empuja el suelo con la rodilla y el antebrazo hasta recuperar la línea.',
        peakPose: { rootRotZ: -76, rootX: -0.03, spineSideBend: 20, shoulderLAbduction: 34 },
      },
      {
        id: 'pelvis-rotates',
        label: 'La pelvis rota hacia el suelo',
        why: 'El tronco se abre o se cierra y el esfuerzo se reparte mal. Mantén hombro, cadera y rodilla en el mismo plano.',
        peakPose: { rootRotX: 14 },
      },
    ],
    readouts: [
      { label: 'Caída de la cadera', source: 'spineSideBend', unit: '°', min: 0, max: 5, peakOnly: true },
      { label: 'Rotación de la pelvis', source: 'rootRotX', unit: '°', min: -3, max: 3 },
    ],
  },

  gait_hygiene: {
    muscleLabel: 'Glúteo medio',
    muscleZones: ['gluteMedL', 'gluteMedR'],
    bilateral: true,
    scene: {
      target: [0, 0.82, 0],
      views: [
        { label: 'Lateral', position: [3.7, 1.05, 0] },
        { label: '3/4', position: [2.5, 1.5, 2.7] },
        { label: 'Frente', position: [0, 1.05, 3.7] },
        { label: 'Arriba', position: [0, 4, 0.05] },
      ],
      rails: true,
    },
    basePose: { hipLAbduction: 2, hipRAbduction: 2, elbowLFlexion: 20, elbowRFlexion: 20 },
    // Marcha sobre el sitio, a velocidad reducida para poder observarla
    phases: [
      {
        stepIndex: 0,
        label: 'Zancada corta: la pierna de atrás no se queda muy estirada',
        duration: 0.5,
        pose: {
          hipLFlexion: 15, kneeLFlexion: 5, ankleLDorsiflexion: 0,
          hipRFlexion: -5, kneeRFlexion: 15, ankleRDorsiflexion: -8,
          shoulderLFlexion: -12, shoulderRFlexion: 12,
        },
        activation: 0.7,
        peak: true,
      },
      {
        stepIndex: 1,
        label: 'Base ancha: cada pie sobre su propio raíl, sin cruzar la línea media',
        duration: 0.5,
        pose: {
          hipLFlexion: 3, kneeLFlexion: 10, ankleLDorsiflexion: 3,
          hipRFlexion: 22, kneeRFlexion: 55, ankleRDorsiflexion: 5,
        },
        activation: 1,
        peak: true,
      },
      {
        stepIndex: 0,
        label: 'Zancada corta también con la otra pierna',
        duration: 0.5,
        pose: {
          hipRFlexion: 15, kneeRFlexion: 5, ankleRDorsiflexion: 0,
          hipLFlexion: -5, kneeLFlexion: 15, ankleLDorsiflexion: -8,
          shoulderRFlexion: -12, shoulderLFlexion: 12,
        },
        activation: 0.7,
        peak: true,
      },
      {
        stepIndex: 2,
        label: 'Pasos ligeros y algo más rápidos, en lugar de zancadas largas',
        duration: 0.5,
        pose: {
          hipRFlexion: 3, kneeRFlexion: 10, ankleRDorsiflexion: 3,
          hipLFlexion: 22, kneeLFlexion: 55, ankleLDorsiflexion: 5,
        },
        activation: 1,
        peak: true,
      },
    ],
    errors: [
      {
        id: 'long-stride',
        label: 'Zancada larga',
        why: 'La pierna de atrás llega a mucha extensión de cadera, la posición en la que se estrecha el espacio isquiofemoral. Acorta el paso.',
        phasePoses: {
          0: { hipLFlexion: 28, kneeLFlexion: 3, hipRFlexion: -20, kneeRFlexion: 10, ankleRDorsiflexion: -15 },
          2: { hipRFlexion: 28, kneeRFlexion: 3, hipLFlexion: -20, kneeLFlexion: 10, ankleLDorsiflexion: -15 },
        },
      },
      {
        id: 'crossed-feet',
        label: 'Pies que cruzan la línea media',
        why: 'Caminar como sobre una cuerda floja mantiene la cadera en aducción. Deja que cada pie pise su propio raíl.',
        peakPose: { hipLAbduction: -8, hipRAbduction: -8 },
      },
    ],
    readouts: [
      { label: 'Cadera izq. (− extensión)', source: 'hipLFlexion', unit: '°', min: -8, max: 25 },
      { label: 'Separación de pies', source: 'footWidthCm', unit: ' cm', min: 15, max: 35 },
    ],
  },
};
