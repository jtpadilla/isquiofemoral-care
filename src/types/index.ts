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

export interface WorkoutSessionItem {
  exerciseId: string;
  completedSets: number;
  totalSets: number;
  durationSeconds?: number;
  side?: 'left' | 'right' | 'both';
}

export interface SymptomEntry {
  id: string;
  date: string;
  painLevelBefore: number; // 0-10 EVA
  painLevelAfter: number; // 0-10 EVA
  tractionReliefEffect: 'Alto' | 'Moderado' | 'Leve' | 'Sin cambios';
  sittingToleranceMinutes: number;
  walkingStiffness: 'Leve' | 'Moderada' | 'Severa' | 'Ninguna';
  notes: string;
}

export interface BiomechanicsState {
  hipAngle: number; // -15 (extensión) a 90 (flexión)
  frontalAngle: number; // -15 (aducción) a 30 (abducción)
  rotationAngle: number; // -30 (rotación externa) a 30 (rotación interna)
  bandTractionIntensity: number; // 0% a 100% de fuerza de descompresión
  bandTractionActive: boolean;
}
