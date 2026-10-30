import * as THREE from 'three';
import { Landmark, MuscleZone, Pose } from '../types';

const THIGH = 0.44;
const SHIN = 0.42;
const UPPER_ARM = 0.29;
const FOREARM = 0.27;
const HIP_OFFSET = 0.09;
const SHOULDER_OFFSET = 0.19;
const CHEST_HEIGHT = 0.14;
const SHOULDER_HEIGHT = 0.33;

const rad = THREE.MathUtils.degToRad;

// Zonas orientativas sobre la pelvis: no son una representación anatómica exacta
const MUSCLE_ZONES: Record<MuscleZone, { position: [number, number, number]; scale: [number, number, number] }> = {
  hipLateralL: { position: [0.15, 0.01, 0.045], scale: [0.05, 0.1, 0.075] },
  hipJointL: { position: [0.11, -0.05, 0.07], scale: [0.075, 0.075, 0.075] },
  gluteMedL: { position: [0.14, 0.06, -0.03], scale: [0.05, 0.09, 0.075] },
  gluteMedR: { position: [-0.14, 0.06, -0.03], scale: [0.05, 0.09, 0.075] },
  gluteMaxL: { position: [0.08, -0.03, -0.085], scale: [0.08, 0.09, 0.05] },
  gluteMaxR: { position: [-0.08, -0.03, -0.085], scale: [0.08, 0.09, 0.05] },
  lateralTrunkL: { position: [0.13, 0.2, 0], scale: [0.045, 0.14, 0.075] },
};

export interface Mannequin {
  root: THREE.Group;
  setPose: (pose: Pose) => void;
  setActivation: (activation: number) => void;
  getPoint: (landmark: Landmark, target: THREE.Vector3) => THREE.Vector3;
  kneeGapCm: () => number;
  footWidthCm: () => number;
  lowestPoint: () => number;
  dispose: () => void;
}

interface Options {
  ghost?: boolean;
  bothLegsWork?: boolean;
  muscleZones?: MuscleZone[];
}

export const createMannequin = ({ ghost = false, bothLegsWork = false, muscleZones = [] }: Options = {}): Mannequin => {
  const makeMaterial = (color: string) =>
    ghost
      ? new THREE.MeshStandardMaterial({ color: '#34d399', transparent: true, opacity: 0.22, depthWrite: false })
      : new THREE.MeshStandardMaterial({ color, roughness: 0.65 });

  const bodyMat = makeMaterial('#cbd5e1');
  const workLegMat = makeMaterial('#22b8d6');
  const restLegMat = bothLegsWork ? workLegMat : makeMaterial('#94a3b8');
  const markerMat = makeMaterial('#f8fafc');
  const muscleMat = new THREE.MeshStandardMaterial({
    color: '#f59e0b',
    emissive: '#f97316',
    transparent: true,
    opacity: 0,
    depthWrite: false,
  });

  const addMesh = (parent: THREE.Object3D, geometry: THREE.BufferGeometry, material: THREE.Material) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = !ghost;
    parent.add(mesh);
    return mesh;
  };

  const joint = (parent: THREE.Object3D, x: number, y: number, z = 0) => {
    const group = new THREE.Group();
    group.position.set(x, y, z);
    group.rotation.order = 'XZY'; // Gira sobre el eje largo, luego abduce y por último flexiona
    parent.add(group);
    return group;
  };

  const marker = (parent: THREE.Object3D, x: number, y: number, z: number) => {
    const point = new THREE.Object3D();
    point.position.set(x, y, z);
    parent.add(point);
    return point;
  };

  // Segmento que cuelga del origen de su articulación hacia -Y
  const segment = (parent: THREE.Object3D, length: number, top: number, bottom: number, material: THREE.Material) => {
    const shaft = addMesh(parent, new THREE.CylinderGeometry(top, bottom, length, 16), material);
    shaft.position.y = -length / 2;
    addMesh(parent, new THREE.SphereGeometry(top, 16, 12), material);
    const end = addMesh(parent, new THREE.SphereGeometry(bottom, 16, 12), material);
    end.position.y = -length;
  };

  const ellipsoid = (parent: THREE.Object3D, rx: number, ry: number, rz: number, material: THREE.Material) => {
    const mesh = addMesh(parent, new THREE.SphereGeometry(1, 24, 16), material);
    mesh.scale.set(rx, ry, rz);
    return mesh;
  };

  const root = new THREE.Group();
  root.rotation.order = 'XYZ';

  // Pelvis (origen en el centro de las caderas) y tronco
  ellipsoid(root, 0.165, 0.11, 0.115, bodyMat).position.y = 0.03;
  const spine = joint(root, 0, 0.1);
  spine.rotation.order = 'XYZ';
  ellipsoid(spine, 0.135, 0.15, 0.1, bodyMat).position.y = 0.06;
  ellipsoid(spine, 0.175, 0.17, 0.115, bodyMat).position.y = CHEST_HEIGHT + 0.09;

  const neck = joint(spine, 0, SHOULDER_HEIGHT + 0.04);
  neck.rotation.order = 'XYZ';
  const neckShaft = addMesh(neck, new THREE.CylinderGeometry(0.048, 0.055, 0.1, 12), bodyMat);
  neckShaft.position.y = 0.04;
  ellipsoid(neck, 0.092, 0.115, 0.105, bodyMat).position.y = 0.17;
  // Nariz: indica hacia dónde mira la figura
  ellipsoid(neck, 0.018, 0.026, 0.025, bodyMat).position.set(0, 0.165, 0.105);

  const buildLeg = (sign: 1 | -1, material: THREE.Material) => {
    const hip = joint(root, sign * HIP_OFFSET, -0.04);
    segment(hip, THIGH, 0.078, 0.052, material);
    const knee = joint(hip, 0, -THIGH);
    segment(knee, SHIN, 0.05, 0.034, material);
    // Rótula: hace visible la rotación del muslo
    ellipsoid(hip, 0.024, 0.03, 0.012, markerMat).position.set(0, -THIGH, 0.05);
    const ankle = joint(knee, 0, -SHIN);
    const foot = ellipsoid(ankle, 0.042, 0.032, 0.115, material);
    foot.position.set(0, -0.045, 0.06);
    return { hip, knee, ankle };
  };

  const buildArm = (sign: 1 | -1) => {
    const shoulder = joint(spine, sign * SHOULDER_OFFSET, SHOULDER_HEIGHT - 0.03);
    segment(shoulder, UPPER_ARM, 0.046, 0.036, bodyMat);
    const elbow = joint(shoulder, 0, -UPPER_ARM);
    segment(elbow, FOREARM, 0.034, 0.026, bodyMat);
    const wrist = joint(elbow, 0, -FOREARM);
    ellipsoid(wrist, 0.036, 0.05, 0.022, bodyMat).position.y = -0.045;
    return { shoulder, elbow, wrist };
  };

  const legL = buildLeg(1, workLegMat);
  const legR = buildLeg(-1, restLegMat);
  const armL = buildArm(1);
  const armR = buildArm(-1);

  const landmarks: Record<Landmark, THREE.Object3D> = {
    groinL: marker(legL.hip, 0, -0.07, 0),
    midThighL: marker(legL.hip, 0, -THIGH * 0.55, 0),
    hipL: legL.hip,
    hipR: legR.hip,
    kneeL: legL.knee,
    kneeR: legR.knee,
    ankleL: legL.ankle,
    ankleR: legR.ankle,
    aboveKneeL: marker(legL.hip, 0, -THIGH * 0.85, 0),
    aboveKneeR: marker(legR.hip, 0, -THIGH * 0.85, 0),
    wristL: armL.wrist,
    wristR: armR.wrist,
    sacrum: marker(root, 0, 0.04, -0.11),
    hipBackL: marker(root, HIP_OFFSET, -0.06, -0.11),
    thighBackL: marker(legL.hip, 0, -THIGH * 0.5, -0.07),
    kneeBackL: marker(legL.hip, 0, -THIGH, -0.055),
    calfBackL: marker(legL.knee, 0, -SHIN * 0.5, -0.05),
    ankleBackL: marker(legL.knee, 0, -SHIN, -0.04),
  };

  if (!ghost) {
    for (const zone of muscleZones) {
      const { position, scale } = MUSCLE_ZONES[zone];
      const muscle = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 14), muscleMat);
      muscle.position.set(...position);
      muscle.scale.set(...scale);
      root.add(muscle);
    }
  }

  const setPose = (p: Pose) => {
    root.position.set(p.rootX, p.rootY, p.rootZ);
    root.rotation.set(rad(p.rootRotX), rad(p.rootRotY), rad(p.rootRotZ));
    spine.rotation.set(rad(p.spineFlexion), rad(p.spineRotation), rad(p.spineSideBend));
    neck.rotation.set(rad(p.neckFlexion), rad(p.neckRotation), rad(p.neckSideBend));

    legL.hip.rotation.set(rad(-p.hipLFlexion), rad(-p.hipLInternalRotation), rad(p.hipLAbduction));
    legR.hip.rotation.set(rad(-p.hipRFlexion), rad(p.hipRInternalRotation), rad(-p.hipRAbduction));
    legL.knee.rotation.x = rad(p.kneeLFlexion);
    legR.knee.rotation.x = rad(p.kneeRFlexion);
    legL.ankle.rotation.x = rad(-p.ankleLDorsiflexion);
    legR.ankle.rotation.x = rad(-p.ankleRDorsiflexion);

    armL.shoulder.rotation.set(rad(-p.shoulderLFlexion), rad(-p.shoulderLRotation), rad(p.shoulderLAbduction));
    armR.shoulder.rotation.set(rad(-p.shoulderRFlexion), rad(p.shoulderRRotation), rad(-p.shoulderRAbduction));
    armL.elbow.rotation.x = rad(-p.elbowLFlexion);
    armR.elbow.rotation.x = rad(-p.elbowRFlexion);
    armL.wrist.rotation.x = rad(-p.wristLExtension);
    armR.wrist.rotation.x = rad(-p.wristRExtension);
  };

  const getPoint = (landmark: Landmark, target: THREE.Vector3) => {
    root.updateWorldMatrix(true, true);
    return landmarks[landmark].getWorldPosition(target);
  };

  const a = new THREE.Vector3();
  const b = new THREE.Vector3();

  return {
    root,
    setPose,
    setActivation: (activation) => {
      muscleMat.opacity = activation * 0.75;
      muscleMat.emissiveIntensity = activation * 0.9;
    },
    getPoint,
    // Distancia entre superficies, no entre centros de articulación
    kneeGapCm: () => Math.max(0, (getPoint('kneeL', a).distanceTo(getPoint('kneeR', b)) - 0.052 * 2) * 100),
    footWidthCm: () => Math.abs(getPoint('ankleL', a).x - getPoint('ankleR', b).x) * 100,
    lowestPoint: () => {
      root.updateWorldMatrix(true, true);
      return new THREE.Box3().setFromObject(root, true).min.y;
    },
    dispose: () => {
      root.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          (object.material as THREE.Material).dispose();
        }
      });
    },
  };
};
