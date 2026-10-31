import * as THREE from 'three';
import { BandSpec, ExerciseScene, Landmark } from '../types';
import { Mannequin } from './mannequin';

const NERVE_PATH: Landmark[] = ['sacrum', 'hipBackL', 'thighBackL', 'kneeBackL', 'calfBackL', 'ankleBackL'];
const UP = new THREE.Vector3(0, 1, 0);
const LOOP_HALF_DEPTH = 0.06;
const BAND_RADIUS = 0.014;

export interface ExerciseProps {
  group: THREE.Group;
  update: (mannequin: Mannequin, activation: number) => void;
  dispose: () => void;
}

// Colchoneta, pared, raíles, gomas y nervio: todo lo que acompaña a la figura en la escena
export const createExerciseProps = (scene: ExerciseScene, bands: BandSpec[], showNerve: boolean): ExerciseProps => {
  const group = new THREE.Group();
  const unitCylinder = new THREE.CylinderGeometry(1, 1, 1, 10);

  const addBox = (center: [number, number, number], size: [number, number, number], color: string) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), new THREE.MeshStandardMaterial({ color, roughness: 0.9 }));
    mesh.position.set(...center);
    mesh.receiveShadow = true;
    group.add(mesh);
    return mesh;
  };

  if (scene.mat) {
    const { center, size } = scene.mat;
    addBox([center[0], 0.002, center[1]], [size[0], 0.004, size[1]], '#155e75');
  }
  if (scene.wall) addBox(scene.wall.center, scene.wall.size, '#475569');
  if (scene.rails) {
    addBox([0.13, 0.002, 0], [0.03, 0.004, 3], '#38bdf8');
    addBox([-0.13, 0.002, 0], [0.03, 0.004, 3], '#38bdf8');
  }

  const rad = THREE.MathUtils.degToRad;
  (scene.equipment ?? []).forEach(({ center, size, rotationX, color }) => {
    const piece = addBox(center, size, color ?? '#64748b');
    piece.castShadow = true;
    if (rotationX) piece.rotation.x = rad(rotationX);
  });
  const followers = (scene.followers ?? []).map(({ attach, offset, size, rotationX, color }) => {
    const piece = addBox([0, 0, 0], size, color ?? '#334155');
    piece.castShadow = true;
    if (rotationX) piece.rotation.x = rad(rotationX);
    return { piece, attach, offset: new THREE.Vector3(...(offset ?? [0, 0, 0])) };
  });

  const bandMat = new THREE.MeshStandardMaterial({ color: '#f59e0b', roughness: 0.5 });
  const nerveMat = new THREE.MeshBasicMaterial({ color: '#facc15', depthTest: false, transparent: true });

  const addSegment = (material: THREE.Material) => {
    const mesh = new THREE.Mesh(unitCylinder, material);
    mesh.castShadow = material === bandMat;
    group.add(mesh);
    return mesh;
  };

  const dir = new THREE.Vector3();
  const stretch = (mesh: THREE.Mesh, a: THREE.Vector3, b: THREE.Vector3, radius: number) => {
    dir.subVectors(b, a);
    const length = dir.length();
    mesh.position.copy(a).addScaledVector(dir, 0.5);
    mesh.quaternion.setFromUnitVectors(UP, dir.normalize());
    mesh.scale.set(radius, length, radius);
    return length;
  };

  const bandMeshes = bands.map((band) => {
    if (band.kind === 'anchor') {
      const [x, y, z] = band.anchor;
      addBox([x, (y + 0.1) / 2, z], [0.07, y + 0.1, 0.07], '#0284c7');
    }
    return Array.from({ length: band.kind === 'loop' ? 4 : 1 }, () => addSegment(bandMat));
  });

  const links = (scene.links ?? []).map((link) => ({
    ...link,
    mesh: (() => {
      const material = new THREE.MeshStandardMaterial({ color: link.color ?? '#e2e8f0', roughness: 0.4 });
      const mesh = new THREE.Mesh(unitCylinder, material);
      mesh.castShadow = true;
      group.add(mesh);
      return mesh;
    })(),
  }));

  const nerveMeshes = showNerve ? NERVE_PATH.slice(1).map(() => addSegment(nerveMat)) : [];
  const bead = showNerve ? new THREE.Mesh(new THREE.SphereGeometry(0.024, 12, 10), nerveMat) : null;
  if (bead) {
    bead.renderOrder = 2;
    group.add(bead);
  }
  nerveMeshes.forEach((mesh) => { mesh.renderOrder = 1; });

  const toLocal = (mannequin: Mannequin, landmark: Landmark, target: THREE.Vector3) =>
    group.worldToLocal(mannequin.getPoint(landmark, target));

  const v1 = new THREE.Vector3();
  const v2 = new THREE.Vector3();
  const v3 = new THREE.Vector3();
  const v4 = new THREE.Vector3();
  const across = new THREE.Vector3();
  const normal = new THREE.Vector3();
  const corners = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];

  const update = (mannequin: Mannequin, activation: number) => {
    group.updateWorldMatrix(true, false);

    followers.forEach(({ piece, attach, offset }) => {
      toLocal(mannequin, attach, piece.position).add(offset);
    });
    links.forEach(({ from, to, radius, mesh }) => {
      v1.set(...from);
      toLocal(mannequin, to, v2);
      stretch(mesh, v1, v2, radius ?? 0.007);
    });

    bands.forEach((band, index) => {
      const meshes = bandMeshes[index];
      if (band.kind === 'anchor') {
        v1.set(...band.anchor);
        toLocal(mannequin, band.attach, v2);
        // La goma adelgaza al estirarse
        const length = v1.distanceTo(v2);
        stretch(meshes[0], v1, v2, BAND_RADIUS * Math.min(1.2, Math.sqrt(band.restLength / length)));
        return;
      }
      // Lazo rectangular que rodea los dos muslos, perpendicular a ellos
      toLocal(mannequin, band.left, v1);
      toLocal(mannequin, band.right, v2);
      toLocal(mannequin, 'hipL', v3);
      toLocal(mannequin, 'kneeL', v4);
      across.subVectors(v2, v1).normalize();
      normal.subVectors(v4, v3).cross(across).normalize().multiplyScalar(LOOP_HALF_DEPTH);
      v1.addScaledVector(across, -LOOP_HALF_DEPTH);
      v2.addScaledVector(across, LOOP_HALF_DEPTH);
      corners[0].copy(v1).add(normal);
      corners[1].copy(v2).add(normal);
      corners[2].copy(v2).sub(normal);
      corners[3].copy(v1).sub(normal);
      meshes.forEach((mesh, side) => stretch(mesh, corners[side], corners[(side + 1) % 4], BAND_RADIUS * 0.8));
    });

    if (bead) {
      // La cuenta se desplaza por el trayecto del nervio para mostrar el deslizamiento
      let travel = 0;
      const lengths = nerveMeshes.map((mesh, index) => {
        toLocal(mannequin, NERVE_PATH[index], v1);
        toLocal(mannequin, NERVE_PATH[index + 1], v2);
        const length = stretch(mesh, v1, v2, 0.007);
        travel += length;
        return length;
      });
      let remaining = travel * (0.42 + 0.2 * activation);
      for (let index = 0; index < lengths.length; index += 1) {
        if (remaining <= lengths[index] || index === lengths.length - 1) {
          toLocal(mannequin, NERVE_PATH[index], v1);
          toLocal(mannequin, NERVE_PATH[index + 1], v2);
          bead.position.lerpVectors(v1, v2, Math.min(1, remaining / lengths[index]));
          break;
        }
        remaining -= lengths[index];
      }
    }
  };

  return {
    group,
    update,
    dispose: () => {
      group.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          (object.material as THREE.Material).dispose();
        }
      });
    },
  };
};
