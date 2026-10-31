export type PhaseType = 'fase1_descompresion' | 'fase2_estabilizacion' | 'fase3_funcional';

export type EquipmentType = 
  | 'banda_traccion_larga' 
  | 'miniband_circular' 
  | 'esterilla' 
  | 'cojin_o_bloque' 
  | 'ninguno';

export interface Exercise {
  id: string;
  name: string;
  subtitle: string;
  phase: PhaseType;
  phaseNumber: 1 | 2 | 3;
  targetMuscles: string[];
  biomechanicalObjective: string; // Explicación biomecánica de apertura o estabilización
  whyItRelieves: string; // Por qué alivia el pinzamiento isquiofemoral
  equipment: EquipmentType[];
  durationSeconds?: number;
  sets: number;
  repsOrTime: string;
  holdSeconds?: number;
  instructions: string[];
  techniqueCues: string[];
  alarmFlags: string[]; // Señales de aviso para suspender o corregir
  diagramType: 'lateral_traction' | 'axial_distraction' | 'sciatic_slider' | 'band_bridge' | 'side_abduction' | 'monster_walk' | 'reverse_clamshell' | 'single_leg_rdl' | 'side_plank' | 'gait_hygiene';
  difficulty: 'Fácil' | 'Moderado' | 'Avanzado';
}

// Ángulos articulares en grados (posición raíz en metros). Con cuerpo en pie mirando a +Z y Y hacia arriba.
export type PoseKey =
  | 'rootX' | 'rootY' | 'rootZ'
  | 'rootRotX' | 'rootRotY' | 'rootRotZ'
  | 'spineFlexion' | 'spineSideBend' | 'spineRotation' // sideBend positivo: hacia la derecha
  | 'neckFlexion' | 'neckSideBend' | 'neckRotation'
  | 'hipLFlexion' | 'hipLAbduction' | 'hipLInternalRotation'
  | 'hipRFlexion' | 'hipRAbduction' | 'hipRInternalRotation'
  | 'kneeLFlexion' | 'kneeRFlexion'
  | 'ankleLDorsiflexion' | 'ankleRDorsiflexion'
  | 'shoulderLFlexion' | 'shoulderLAbduction' | 'shoulderLRotation'
  | 'shoulderRFlexion' | 'shoulderRAbduction' | 'shoulderRRotation'
  | 'elbowLFlexion' | 'elbowRFlexion'
  | 'wristLExtension' | 'wristRExtension';

export type Pose = Record<PoseKey, number>;

export interface AnimationPhase {
  stepIndex: number; // Índice en Exercise.instructions que se está ejecutando
  label: string;
  duration: number; // Segundos para llegar a esta pose desde la anterior (misma pose = retención)
  pose: Partial<Pose>;
  activation: number; // 0-1, intensidad del resaltado muscular (o posición del nervio)
  peak?: boolean; // Las variantes de error modifican estas fases
}

export type Landmark =
  | 'groinL' | 'midThighL'
  | 'hipL' | 'hipR' | 'kneeL' | 'kneeR' | 'ankleL' | 'ankleR'
  | 'aboveKneeL' | 'aboveKneeR' | 'wristL' | 'wristR'
  | 'sacrum' | 'hipBackL' | 'thighBackL' | 'kneeBackL' | 'calfBackL' | 'ankleBackL';

export type BandSpec =
  | { kind: 'anchor'; anchor: [number, number, number]; attach: Landmark; restLength: number }
  | { kind: 'loop'; left: Landmark; right: Landmark };

export type MuscleZone =
  | 'hipLateralL' | 'hipJointL' | 'gluteMedL' | 'gluteMedR'
  | 'gluteMaxL' | 'gluteMaxR' | 'lateralTrunkL';

export interface AnimationError {
  id: string;
  label: string;
  why: string;
  peakPose?: Partial<Pose>;
  phasePoses?: Record<number, Partial<Pose>>; // Ajustes propios de una fase concreta
  bands?: BandSpec[]; // Colocación incorrecta de la goma
}

export interface AnimationReadout {
  label: string;
  source: PoseKey | 'kneeGapCm' | 'footWidthCm';
  unit: string;
  min: number;
  max: number;
  offset?: number; // Se suma a la pose para mostrar el ángulo respecto a la postura de referencia
  peakOnly?: boolean; // El rango solo se evalúa en las fases de trabajo
}

export interface ExerciseScene {
  target: [number, number, number];
  views: { label: string; position: [number, number, number] }[]; // La primera es la vista inicial
  mat?: { center: [number, number]; size: [number, number] };
  wall?: { center: [number, number, number]; size: [number, number, number] };
  rails?: boolean;
}

export interface ExerciseAnimation {
  basePose: Partial<Pose>;
  phases: AnimationPhase[]; // La pose de la última fase enlaza con la de la primera
  errors: AnimationError[];
  readouts: AnimationReadout[];
  scene: ExerciseScene;
  muscleLabel: string;
  muscleZones: MuscleZone[];
  bands?: BandSpec[];
  showNerve?: boolean;
  bilateral?: boolean; // Trabajan las dos piernas: sin selector de lado
}

export interface WorkoutSessionItem {
  exerciseId: string;
  completedSets: number;
  totalSets: number;
  durationSeconds?: number;
  side?: 'left' | 'right' | 'both';
}

export interface BiomechanicsState {
  hipAngle: number; // -15 (extensión) a 90 (flexión)
  frontalAngle: number; // -15 (aducción) a 30 (abducción)
  rotationAngle: number; // -30 (rotación externa) a 30 (rotación interna)
  bandTractionIntensity: number; // 0% a 100% de fuerza de descompresión
  bandTractionActive: boolean;
}

export interface AdvisorMessage {
  role: 'user' | 'model';
  text: string;
}
