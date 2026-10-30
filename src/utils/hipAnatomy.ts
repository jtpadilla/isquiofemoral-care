import * as THREE from 'three';
import { capsule, meshSdf, plate, Sdf, smoothMin, smoothSubtract, sphere } from './sdfMesher';

// Cadera derecha en centímetros, con origen en el centro de la cabeza femoral.
// +X lateral, +Y craneal, +Z posterior. Forma simplificada: no es un modelo anatómico exacto.

const unionOf = (parts: Sdf[], k: number): Sdf => (x, y, z) => {
  let distance = parts[0](x, y, z);
  for (let index = 1; index < parts.length; index += 1) distance = smoothMin(distance, parts[index](x, y, z), k);
  return distance;
};

export const LESSER_TROCHANTER_TIP = new THREE.Vector3(1.9, -7, 1.3);
export const ISCHIUM_LATERAL_X = 0.05;
export const ISCHIUM_POINT = new THREE.Vector3(ISCHIUM_LATERAL_X, -7, 1.9);

const femurSdf = unionOf(
  [
    sphere([0, 0, 0], 2.4),
    capsule([0, 0, 0], [4.5, -2.6, 0], 1.5, 1.75),
    capsule([5.8, -1, -0.2], [6.4, -5, 0.2], 1.6, 1.9),
    capsule([6, -2, 1.2], [3.8, -7, 1.2], 0.75, 0.75),
    capsule([5.2, -5, 0], [3.6, -29, 0], 2.15, 1.45),
    capsule([4.4, -6.2, 0.8], [2.6, -7, 1.3], 1.05, 0.7),
  ],
  0.9
);

const pelvisBody = unionOf(
  [
    // Ilion
    plate([-3.2, 11.3, -1.2], 7.4, 8, 0.35, 0.4, -0.33),
    capsule([3.4, 13, -2.8], [1.2, 16.5, -2], 0.95, 0.95),
    capsule([1.2, 16.5, -2], [-2.5, 19, -1], 0.95, 0.95),
    capsule([-2.5, 19, -1], [-6.5, 17.5, 0.4], 0.95, 0.95),
    capsule([-6.5, 17.5, 0.4], [-10.5, 13.5, 1.8], 0.95, 1.1),
    capsule([-1.5, 2, 0], [-2.5, 8, -1], 3, 1.8),
    capsule([-8.5, 3, 1.5], [-9.5, 13, 1.5], 1.6, 1.6),
    capsule([-3, 3, 0.5], [-8.5, 5, 1.5], 2, 1.6),
    // Cotilo
    sphere([-1.4, 0.3, 0], 4.5),
    // Isquion y tuberosidad
    capsule([-1.4, -2.5, 1], [-2.5, -7, 1.9], 2.1, 2.55),
    capsule([-3, -3, 2.6], [-5.4, -3.6, 3.3], 1, 0.45),
    // Ramas y pubis
    capsule([-2.8, -8.8, 1.2], [-8.2, -9.2, -3.2], 1.3, 0.95),
    capsule([-1.4, -1.5, -3], [-8.2, -5.6, -5], 1.65, 1.15),
    capsule([-8.2, -5.6, -5], [-8.2, -9.2, -3.2], 1.25, 1.15),
  ],
  0.9
);
const socket = sphere([0, 0, 0], 2.95);
const pelvisSdf: Sdf = (x, y, z) => smoothSubtract(pelvisBody(x, y, z), socket(x, y, z), 1.4);

const IVORY = new THREE.Color('#ead9bb');
const SHADOW = new THREE.Color('#6d5540');
const ISCHIUM_TINT = new THREE.Color('#e9a73c');
const TROCHANTER_TINT = new THREE.Color('#e5484d');
const color = new THREE.Color();

const mottle = (x: number, y: number, z: number) =>
  0.035 * (Math.sin(x * 2.1 + y * 1.3) + Math.sin(y * 2.7 - z * 1.9) + Math.sin(z * 3.1 + x * 1.7));

const shade = (occlusion: number, x: number, y: number, z: number) =>
  color.copy(SHADOW).lerp(IVORY, Math.min(1, 0.32 + occlusion * 0.68 + mottle(x, y, z)));

export const buildFemurGeometry = () =>
  meshSdf(femurSdf, [-3.2, -30.5, -3.4], [9, 3.2, 3.6], 0.22, (x, y, z, occlusion) => {
    shade(occlusion, x, y, z);
    const distance = Math.hypot(x - 2.7, y + 7, z - 1.2);
    return color.lerp(TROCHANTER_TINT, Math.max(0, Math.min(1, (1.9 - distance) / 0.7)));
  });

export const buildPelvisGeometry = () =>
  meshSdf(pelvisSdf, [-12.5, -11.5, -7.5], [6, 21.5, 5.5], 0.22, (x, y, z, occlusion) => {
    shade(occlusion, x, y, z);
    const distance = Math.hypot(x + 2.5, y + 7, z - 1.9);
    return color.lerp(ISCHIUM_TINT, Math.max(0, Math.min(0.6, (3.4 - distance) / 1.6)));
  });

// Rotación del fémur alrededor de la cabeza a partir de los ángulos del simulador
export const femurRotation = (flexion: number, abduction: number, internalRotation: number, target: THREE.Euler) =>
  target.set(
    THREE.MathUtils.degToRad(flexion),
    THREE.MathUtils.degToRad(internalRotation),
    THREE.MathUtils.degToRad(abduction),
    'XZY'
  );

const tip = new THREE.Vector3();
const MIN_GAP_CM = 0.15;

// Desplazamiento lateral del fémur para que el hueco dibujado se aproxime al valor del modelo,
// sin que la cabeza salga de forma exagerada del cotilo ni los huesos se atraviesen
export const femurLateralOffset = (rotation: THREE.Euler, ifsMm: number, tractionCm: number) => {
  tip.copy(LESSER_TROCHANTER_TIP).applyEuler(rotation);
  const wanted = ISCHIUM_LATERAL_X + ifsMm / 10 - tip.x;
  const offset = Math.min(0.5 + tractionCm, Math.max(-0.3, wanted));
  return Math.max(offset, ISCHIUM_LATERAL_X + MIN_GAP_CM - tip.x);
};

export interface SerializedGeometry {
  position: Float32Array;
  normal: Float32Array;
  color: Float32Array;
  index: Uint32Array;
}

export const serializeGeometry = (geometry: THREE.BufferGeometry): SerializedGeometry => ({
  position: geometry.getAttribute('position').array as Float32Array,
  normal: geometry.getAttribute('normal').array as Float32Array,
  color: geometry.getAttribute('color').array as Float32Array,
  index: Uint32Array.from(geometry.getIndex()!.array),
});

const deserializeGeometry = ({ position, normal, color, index }: SerializedGeometry) => {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(position, 3));
  geometry.setAttribute('normal', new THREE.BufferAttribute(normal, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(color, 3));
  geometry.setIndex(new THREE.BufferAttribute(index, 1));
  return geometry;
};

export interface HipGeometry {
  femur: THREE.BufferGeometry;
  pelvis: THREE.BufferGeometry;
}

let hipGeometry: Promise<HipGeometry> | null = null;

// Se genera una sola vez por sesión; si el Worker falla, se calcula en el hilo principal
export const loadHipGeometry = () => {
  hipGeometry ??= new Promise<HipGeometry>((resolve) => {
    const buildHere = () => resolve({ femur: buildFemurGeometry(), pelvis: buildPelvisGeometry() });
    try {
      const worker = new Worker(new URL('./hipGeometry.worker.ts', import.meta.url), { type: 'module' });
      worker.onmessage = ({ data }: MessageEvent<{ femur: SerializedGeometry; pelvis: SerializedGeometry }>) => {
        resolve({ femur: deserializeGeometry(data.femur), pelvis: deserializeGeometry(data.pelvis) });
        worker.terminate();
      };
      worker.onerror = () => {
        worker.terminate();
        buildHere();
      };
    } catch {
      buildHere();
    }
  });
  return hipGeometry;
};
