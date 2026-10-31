import { AnimationError, AnimationPhase, AnimationReadout, ExerciseAnimation, Landmark, Pose, PoseKey } from '../types';
import { GYM_TECHNIQUE } from './gymTechnique';

// Piezas comunes de las animaciones de gimnasio. Los textos y rangos proceden de spec.md, a través de gymTechnique.ts.
// El lado de trabajo es siempre el izquierdo; el visor refleja la escena para el derecho.

export const SEAT_HEIGHT = 0.55; // Pelvis sobre un asiento de unos 47 cm, con los pies en el suelo
export const SUPINE: Partial<Pose> = { rootRotX: -90, rootRotZ: 90 };

export const rad = (deg: number) => (deg * Math.PI) / 180;

// Calcula la raíz y el tobillo para que los pies sigan fijos y planos en el suelo
export const planted = (rootRotX: number, hip: number, knee: number): Partial<Pose> => {
  const thigh = hip - rootRotX;
  const shin = thigh - knee;
  return {
    rootRotX,
    rootZ: 0.04 * Math.sin(rad(rootRotX)) - 0.44 * Math.sin(rad(thigh)) - 0.42 * Math.sin(rad(shin)),
    hipLFlexion: hip,
    hipRFlexion: hip,
    kneeLFlexion: knee,
    kneeRFlexion: knee,
    ankleLDorsiflexion: -shin,
    ankleRDorsiflexion: -shin,
  };
};

export const SEATED: Partial<Pose> = { hipLFlexion: 90, hipRFlexion: 90, kneeLFlexion: 90, kneeRFlexion: 90 };

export const SIDE_VIEWS = (y = 0.8): ExerciseAnimation['scene']['views'] => [
  { label: '3/4', position: [2.4, y + 0.6, 2.4] },
  { label: 'Lateral', position: [3.4, y, 0] },
  { label: 'Frente', position: [0, y + 0.2, 3.5] },
  { label: 'Arriba', position: [0, 3.8, 0.1] },
];
export const SUPINE_VIEWS: ExerciseAnimation['scene']['views'] = [
  { label: '3/4', position: [1.05, 1.1, -2.1] },
  { label: 'Lateral', position: [0, 0.45, -2.8] },
  { label: 'Desde los pies', position: [2.6, 0.7, 0] },
  { label: 'Arriba', position: [0, 2.8, -0.05] },
];

export const CABLE: Pick<import('../types').EquipmentLink, 'radius' | 'color'> = { radius: 0.006, color: '#e2e8f0' };
export const DUMBBELL = (attach: Landmark) => ({ attach, size: [0.26, 0.09, 0.09] as [number, number, number], color: '#0f172a' });
export const SEAT = (z = 0) => ({ center: [0, 0.235, z] as [number, number, number], size: [0.42, 0.47, 0.42] as [number, number, number] });
export const BACKREST = (z = -0.2, tilt = -5) => ({ center: [0, 0.85, z] as [number, number, number], size: [0.42, 0.75, 0.08] as [number, number, number], rotationX: tilt, color: '#475569' });
export const TOWER = (x: number, z: number) => ({ center: [x, 1.05, z] as [number, number, number], size: [0.12, 2.1, 0.12] as [number, number, number], color: '#334155' });

export interface Spec extends Omit<ExerciseAnimation, 'phases' | 'errors' | 'readouts' | 'muscleLabel'> {
  muscleLabel: string;
  durations: number[];
  poses: Partial<Pose>[];
  activations: number[];
  peaks: number[]; // Fases de trabajo
  errors?: (Partial<Pose>)[]; // En el orden de los errores de spec.md
  sources?: { source: PoseKey; offset?: number; peakOnly?: boolean }[]; // En el orden de los rangos
}

export const build = (name: string, { durations, poses, activations, peaks, errors = [], sources = [], ...rest }: Spec): ExerciseAnimation => {
  const text = GYM_TECHNIQUE[name];
  const phases: AnimationPhase[] = text.phases.map((label, index) => ({
    stepIndex: index,
    label,
    duration: durations[index],
    pose: poses[index],
    activation: activations[index],
    peak: peaks.includes(index),
  }));
  const animationErrors: AnimationError[] = text.errors.map(({ title, text: why }, index) => ({
    id: `error-${index}`,
    label: title,
    why,
    peakPose: errors[index],
  }));
  const readouts: AnimationReadout[] = text.ranges.map(({ title, min, max, unit }, index) => ({
    label: title,
    unit,
    min,
    max,
    ...sources[index],
    source: sources[index].source,
  }));
  return { ...rest, phases, errors: animationErrors, readouts };
};

const both = (prefix: string, suffix: string, value: number) =>
  ({ [`${prefix}L${suffix}`]: value, [`${prefix}R${suffix}`]: value }) as Partial<Pose>;
export const hipF = (value: number) => both('hip', 'Flexion', value);
export const hipA = (value: number) => both('hip', 'Abduction', value);
export const hipI = (value: number) => both('hip', 'InternalRotation', value);
export const knee = (value: number) => both('knee', 'Flexion', value);
export const ankle = (value: number) => both('ankle', 'Dorsiflexion', value);
export const armF = (value: number) => both('shoulder', 'Flexion', value);
export const armA = (value: number) => both('shoulder', 'Abduction', value);
export const elbow = (value: number) => both('elbow', 'Flexion', value);

// Ritmos habituales: repetición de tres fases, respiración de dos y alterna de cuatro
export const rep = (start: Partial<Pose>, work: Partial<Pose>) => ({
  durations: [1, 2, 2.5], poses: [start, work, start], activations: [0.3, 1, 0.5], peaks: [1],
});
export const breath = (start: Partial<Pose>, work: Partial<Pose>) => ({
  durations: [2.5, 3.5], poses: [start, work], activations: [0.3, 1], peaks: [1],
});
export const alternate = (top: Partial<Pose>, left: Partial<Pose>, right: Partial<Pose>) => ({
  durations: [1, 2, 1, 2], poses: [top, left, top, right], activations: [0.3, 1, 0.3, 1], peaks: [1, 3],
});

const THIGH = 0.44;
const SHIN = 0.42;
const FOOT_Y = 0.077;
const deg = (radians: number) => (radians * 180) / Math.PI;

// Resuelve una extremidad de dos segmentos: ángulo del primero y flexión de la articulación media
const twoBone = (upper: number, lower: number, distance: number) => {
  const reach = Math.min(distance, (upper + lower) * 0.998);
  const atUpper = Math.acos((upper * upper + reach * reach - lower * lower) / (2 * upper * reach));
  const atMiddle = Math.acos((upper * upper + lower * lower - reach * reach) / (2 * upper * lower));
  return { atUpper, bend: Math.PI - atMiddle };
};

type FootTarget = [number, number, number?]; // Altura del tobillo, posición en Z y elevación del talón

// Postura de pie con cada pie en un punto fijo, también sobre un cajón o con las piernas escalonadas
export const stance = ({ hipY, hipZ = 0, rr = 0, left, right }: { hipY: number; hipZ?: number; rr?: number; left: FootTarget; right: FootTarget }): Partial<Pose> => {
  const leg = (suffix: 'L' | 'R', [footY, footZ, lift = 0]: FootTarget) => {
    const dy = hipY - footY;
    const dz = footZ - hipZ;
    const { atUpper, bend } = twoBone(THIGH, SHIN, Math.hypot(dy, dz));
    const thigh = deg(Math.atan2(dz, dy) + atUpper);
    const flexion = deg(bend);
    return {
      [`hip${suffix}Flexion`]: thigh + rr,
      [`knee${suffix}Flexion`]: flexion,
      [`ankle${suffix}Dorsiflexion`]: flexion - thigh - lift,
    };
  };
  return {
    rootRotX: rr,
    rootY: hipY + 0.04 * Math.cos(rad(rr)),
    rootZ: hipZ + 0.04 * Math.sin(rad(rr)),
    ...leg('L', left),
    ...leg('R', right),
  } as Partial<Pose>;
};

export const flat = (z: number, height = 0): FootTarget => [FOOT_Y + height, z];

// Puente tumbado: fija el pie o los pies y calcula pelvis y piernas según la inclinación del tronco
export const bridge = ({ tilt, left, right, back = 0.13, hipX = 0 }: { tilt: number; left: [number, number]; right?: [number, number]; back?: number; hipX?: number }): Partial<Pose> => {
  const hipY = back + 0.38 * Math.sin(rad(tilt));
  const leg = (suffix: 'L' | 'R', [footX, footY]: [number, number]) => {
    const dx = footX - hipX;
    const dy = footY - hipY;
    const { atUpper, bend } = twoBone(THIGH, SHIN, Math.hypot(dx, dy));
    const thigh = deg(Math.atan2(dy, dx) + atUpper);
    const flexion = deg(bend);
    return {
      [`hip${suffix}Flexion`]: thigh - tilt,
      [`knee${suffix}Flexion`]: flexion,
      [`ankle${suffix}Dorsiflexion`]: -(thigh - flexion + 90),
    };
  };
  return {
    rootX: hipX - 0.04 * Math.cos(rad(tilt)),
    rootY: hipY - 0.04 * Math.sin(rad(tilt)),
    rootRotY: -tilt,
    neckFlexion: tilt,
    shoulderLFlexion: -tilt,
    shoulderRFlexion: -tilt,
    ...leg('L', left),
    ...(right ? leg('R', right) : {}),
  } as Partial<Pose>;
};
