import { AnimationPhase, ExerciseAnimation, Pose, PoseKey } from '../types';

const POSE_KEYS: PoseKey[] = [
  'rootX', 'rootY', 'rootZ', 'rootRotX', 'rootRotY', 'rootRotZ',
  'spineFlexion', 'spineSideBend', 'spineRotation',
  'neckFlexion', 'neckSideBend', 'neckRotation',
  'hipLFlexion', 'hipLAbduction', 'hipLInternalRotation',
  'hipRFlexion', 'hipRAbduction', 'hipRInternalRotation',
  'kneeLFlexion', 'kneeRFlexion',
  'ankleLDorsiflexion', 'ankleRDorsiflexion',
  'shoulderLFlexion', 'shoulderLAbduction', 'shoulderLRotation',
  'shoulderRFlexion', 'shoulderRAbduction', 'shoulderRRotation',
  'elbowLFlexion', 'elbowRFlexion',
  'wristLExtension', 'wristRExtension',
];

export const NEUTRAL_POSE = Object.fromEntries(POSE_KEYS.map((key) => [key, 0])) as Pose;

export interface TimelineSample {
  pose: Pose;
  activation: number;
  phaseIndex: number;
}

export const getPhases = (animation: ExerciseAnimation, errorId: string | null): AnimationPhase[] => {
  const error = animation.errors.find((e) => e.id === errorId);
  if (!error) return animation.phases;
  return animation.phases.map((phase, index) => ({
    ...phase,
    pose: {
      ...phase.pose,
      ...(phase.peak ? error.peakPose : undefined),
      ...error.phasePoses?.[index],
    },
  }));
};

// Ajusta la altura de cada fase para que el punto más bajo del cuerpo toque el suelo
export const groundPhases = (
  basePose: Partial<Pose>,
  phases: AnimationPhase[],
  lowestPointOf: (pose: Pose) => number,
  rootHeight?: number
): AnimationPhase[] =>
  phases.map((phase) => {
    if (rootHeight !== undefined) return { ...phase, pose: { ...phase.pose, rootY: rootHeight } };
    const pose = { ...NEUTRAL_POSE, ...basePose, ...phase.pose };
    return { ...phase, pose: { ...phase.pose, rootY: pose.rootY - lowestPointOf(pose) } };
  });

export const getCycleDuration = (phases: AnimationPhase[]) =>
  phases.reduce((total, phase) => total + phase.duration, 0);

export const sampleTimeline = (
  basePose: Partial<Pose>,
  phases: AnimationPhase[],
  time: number
): TimelineSample => {
  const cycle = getCycleDuration(phases);
  let remaining = ((time % cycle) + cycle) % cycle;

  let index = 0;
  while (index < phases.length - 1 && remaining >= phases[index].duration) {
    remaining -= phases[index].duration;
    index += 1;
  }

  const current = phases[index];
  const previous = phases[(index - 1 + phases.length) % phases.length];
  const t = Math.min(remaining / current.duration, 1);
  const eased = t * t * (3 - 2 * t);

  const from = { ...NEUTRAL_POSE, ...basePose, ...previous.pose };
  const to = { ...NEUTRAL_POSE, ...basePose, ...current.pose };
  const pose = { ...NEUTRAL_POSE };
  for (const key of POSE_KEYS) {
    pose[key] = from[key] + (to[key] - from[key]) * eased;
  }

  return {
    pose,
    activation: previous.activation + (current.activation - previous.activation) * eased,
    phaseIndex: index,
  };
};
