import * as THREE from 'three';

export type Sdf = (x: number, y: number, z: number) => number;
type Vec3 = [number, number, number];

export const smoothMin = (a: number, b: number, k: number) => {
  const h = Math.max(k - Math.abs(a - b), 0) / k;
  return Math.min(a, b) - (h * h * k) / 4;
};

export const smoothSubtract = (a: number, cut: number, k: number) => -smoothMin(-a, cut, k);

export const sphere = (c: Vec3, r: number): Sdf => (x, y, z) => Math.hypot(x - c[0], y - c[1], z - c[2]) - r;

// Cápsula de radio variable
export const capsule = (a: Vec3, b: Vec3, ra: number, rb: number): Sdf => {
  const [dx, dy, dz] = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
  const lengthSq = dx * dx + dy * dy + dz * dz;
  return (x, y, z) => {
    const [px, py, pz] = [x - a[0], y - a[1], z - a[2]];
    const t = Math.min(1, Math.max(0, (px * dx + py * dy + pz * dz) / lengthSq));
    return Math.hypot(px - dx * t, py - dy * t, pz - dz * t) - (ra + (rb - ra) * t);
  };
};

// Lámina elíptica de bordes redondeados, inclinada en Z según X
export const plate = (c: Vec3, rx: number, ry: number, thickness: number, round: number, slope: number): Sdf => (x, y, z) => {
  const [px, py] = [x - c[0], y - c[1]];
  const planar = (Math.hypot(px / rx, py / ry) - 1) * Math.min(rx, ry);
  const depth = Math.abs(z - c[2] - slope * px) - thickness;
  return Math.hypot(Math.max(planar, 0), Math.max(depth, 0)) + Math.min(Math.max(planar, depth), 0) - round;
};

// Convierte un campo de distancias en una malla suave (surface nets)
export const meshSdf = (
  sdf: Sdf,
  min: Vec3,
  max: Vec3,
  cell: number,
  colorAt: (x: number, y: number, z: number, occlusion: number) => THREE.Color
): THREE.BufferGeometry => {
  const nx = Math.ceil((max[0] - min[0]) / cell) + 1;
  const ny = Math.ceil((max[1] - min[1]) / cell) + 1;
  const nz = Math.ceil((max[2] - min[2]) / cell) + 1;
  const at = (i: number, j: number, k: number) => i + nx * (j + ny * k);

  const field = new Float32Array(nx * ny * nz);
  for (let k = 0; k < nz; k += 1) {
    for (let j = 0; j < ny; j += 1) {
      for (let i = 0; i < nx; i += 1) {
        field[at(i, j, k)] = sdf(min[0] + i * cell, min[1] + j * cell, min[2] + k * cell);
      }
    }
  }

  const positions: number[] = [];
  const cellVertex = new Int32Array(nx * ny * nz).fill(-1);
  const corners: Vec3[] = [[0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 0], [0, 0, 1], [1, 0, 1], [0, 1, 1], [1, 1, 1]];
  const edges = [[0, 1], [2, 3], [4, 5], [6, 7], [0, 2], [1, 3], [4, 6], [5, 7], [0, 4], [1, 5], [2, 6], [3, 7]];

  for (let k = 0; k < nz - 1; k += 1) {
    for (let j = 0; j < ny - 1; j += 1) {
      for (let i = 0; i < nx - 1; i += 1) {
        const values = corners.map(([a, b, c]) => field[at(i + a, j + b, k + c)]);
        let [sx, sy, sz, crossings] = [0, 0, 0, 0];
        for (const [p, q] of edges) {
          if (values[p] < 0 === values[q] < 0) continue;
          const t = values[p] / (values[p] - values[q]);
          sx += corners[p][0] + (corners[q][0] - corners[p][0]) * t;
          sy += corners[p][1] + (corners[q][1] - corners[p][1]) * t;
          sz += corners[p][2] + (corners[q][2] - corners[p][2]) * t;
          crossings += 1;
        }
        if (!crossings) continue;
        cellVertex[at(i, j, k)] = positions.length / 3;
        positions.push(
          min[0] + (i + sx / crossings) * cell,
          min[1] + (j + sy / crossings) * cell,
          min[2] + (k + sz / crossings) * cell
        );
      }
    }
  }

  const indices: number[] = [];
  const addQuad = (a: number, b: number, c: number, d: number, flip: boolean) => {
    if (a < 0 || b < 0 || c < 0 || d < 0) return;
    if (flip) indices.push(a, c, b, a, d, c);
    else indices.push(a, b, c, a, c, d);
  };
  for (let k = 1; k < nz - 1; k += 1) {
    for (let j = 1; j < ny - 1; j += 1) {
      for (let i = 1; i < nx - 1; i += 1) {
        const inside = field[at(i, j, k)] < 0;
        if (inside !== field[at(i + 1, j, k)] < 0) {
          addQuad(cellVertex[at(i, j - 1, k - 1)], cellVertex[at(i, j, k - 1)], cellVertex[at(i, j, k)], cellVertex[at(i, j - 1, k)], !inside);
        }
        if (inside !== field[at(i, j + 1, k)] < 0) {
          addQuad(cellVertex[at(i - 1, j, k - 1)], cellVertex[at(i - 1, j, k)], cellVertex[at(i, j, k)], cellVertex[at(i, j, k - 1)], !inside);
        }
        if (inside !== field[at(i, j, k + 1)] < 0) {
          addQuad(cellVertex[at(i - 1, j - 1, k)], cellVertex[at(i, j - 1, k)], cellVertex[at(i, j, k)], cellVertex[at(i - 1, j, k)], !inside);
        }
      }
    }
  }

  // Las normales salen del gradiente del campo, y la oclusión de cuánto se aleja de la superficie
  const normals = new Float32Array(positions.length);
  const colors = new Float32Array(positions.length);
  const e = cell * 0.5;
  for (let v = 0; v < positions.length; v += 3) {
    const [x, y, z] = [positions[v], positions[v + 1], positions[v + 2]];
    const gx = sdf(x + e, y, z) - sdf(x - e, y, z);
    const gy = sdf(x, y + e, z) - sdf(x, y - e, z);
    const gz = sdf(x, y, z + e) - sdf(x, y, z - e);
    const length = Math.hypot(gx, gy, gz) || 1;
    normals[v] = gx / length;
    normals[v + 1] = gy / length;
    normals[v + 2] = gz / length;
    const reach = 1.1;
    const occlusion = Math.min(1, Math.max(0, sdf(x + normals[v] * reach, y + normals[v + 1] * reach, z + normals[v + 2] * reach) / reach));
    const color = colorAt(x, y, z, occlusion);
    colors[v] = color.r;
    colors[v + 1] = color.g;
    colors[v + 2] = color.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setIndex(indices);
  return geometry;
};
