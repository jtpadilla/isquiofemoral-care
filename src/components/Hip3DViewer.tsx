import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { BiomechanicsState } from '../types';
import {
  femurLateralOffset,
  femurRotation,
  ISCHIUM_LATERAL_X,
  ISCHIUM_POINT,
  HipGeometry,
  loadHipGeometry,
  LESSER_TROCHANTER_TIP,
} from '../utils/hipAnatomy';

interface Props {
  state: BiomechanicsState;
  ifs: number;
}

const VIEWS = {
  posterior: { label: 'Posterior', position: [3, 6, 72] },
  oblicua: { label: '3/4', position: [32, 12, 56] },
  inferior: { label: 'Desde abajo', position: [1.5, -52, 16] },
  detalle: { label: 'Detalle del túnel', position: [-2, -30, -32] },
} as const;

type View = keyof typeof VIEWS;

const TARGET = new THREE.Vector3(1.5, 3.5, 0);
const DETAIL_TARGET = new THREE.Vector3(1.5, -6.5, 1);
const FIBER_COUNT = 34;
const FIBER_SEGMENTS = 10;
const ANCHOR_X = 15.5;
const BAND_ATTACH = new THREE.Vector3(6.3, -3.6, 0);

const lerpPoint = (a: THREE.Vector3, b: THREE.Vector3, t: number, target: THREE.Vector3) => target.lerpVectors(a, b, t);

// Origen en el isquion e inserción en la cresta intertrocantérea
const ORIGIN_TOP = new THREE.Vector3(-0.1, -5, 3.1);
const ORIGIN_BOTTOM = new THREE.Vector3(-0.3, -8.6, 3.5);
const INSERT_TOP = new THREE.Vector3(5.2, -3.8, 2.1);
const INSERT_BOTTOM = new THREE.Vector3(3.9, -7.6, 2.05);

// Las etiquetas son HTML superpuesto: se recolocan en cada fotograma proyectando su punto 3D
const LABELS = [
  { text: 'Nervio ciático', color: '#fde68a', position: new THREE.Vector3(-4.6, 6.4, 5.4), layer: 'soft' },
  { text: 'M. cuadrado femoral', color: '#fecdd3', position: new THREE.Vector3(2.6, -1.8, 6), layer: 'soft' },
  { text: 'Tracción de la goma', color: '#67e8f9', position: new THREE.Vector3(11.5, -7, 1), layer: 'band' },
  { text: 'Isquion', color: '#fde68a', position: new THREE.Vector3(-6.6, -8.2, 4), layer: 'bone' },
  { text: 'Fémur', color: '#e2e8f0', position: new THREE.Vector3(9.2, 1.2, 1), layer: 'bone' },
] as const;

interface SceneProps extends Props {
  view: View;
  showSoftTissue: boolean;
  geometry: HipGeometry;
  labelRefs: React.RefObject<(HTMLSpanElement | null)[]>;
  gapText: React.RefObject<HTMLSpanElement | null>;
}

const Scene: React.FC<SceneProps> = ({ state, ifs, view, showSoftTissue, geometry, labelRefs, gapText }) => {
  const { scene, gl, invalidate, camera, size } = useThree();
  const controls = useRef<any>(null);
  const femur = useRef<THREE.Group>(null);
  const nerve = useRef<THREE.Group>(null);
  const band = useRef<THREE.Group>(null);
  const bandStrip = useRef<THREE.Mesh>(null);
  const arrow = useRef<THREE.Mesh>(null);
  const fibers = useRef<THREE.InstancedMesh>(null);
  const gapLine = useRef<THREE.Mesh>(null);

  const nerveGeometry = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-6.5, 9, 3.2),
      new THREE.Vector3(-3.2, 2.5, 5),
      new THREE.Vector3(0.9, -4, 5.2),
      new THREE.Vector3(1.4, -10, 4.8),
      new THREE.Vector3(1.8, -22, 3.4),
    ]);
    return new THREE.TubeGeometry(curve, 120, 0.62, 16, false);
  }, []);

  const current = useRef({ ...state, ifs, traction: 0 });
  const euler = useMemo(() => new THREE.Euler(), []);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const muscleColor = useMemo(() => new THREE.Color(), []);

  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = environment;
    scene.environmentIntensity = 0.55;
    invalidate();
    return () => {
      scene.environment = null;
      environment.dispose();
      pmrem.dispose();
      nerveGeometry.dispose();
    };
  }, [gl, scene, invalidate, nerveGeometry]);

  useEffect(() => {
    const orbit = controls.current;
    if (!orbit) return;
    const target = view === 'detalle' ? DETAIL_TARGET : TARGET;
    // En pantallas estrechas la cámara se aleja para que quepa también la goma
    const distance = Math.max(1, 1.3 / (size.width / size.height));
    orbit.target.copy(target);
    orbit.object.position.set(...VIEWS[view].position).sub(target).multiplyScalar(distance).add(target);
    orbit.update();
    invalidate();
  }, [view, size, invalidate]);

  useEffect(() => invalidate(), [state, ifs, showSoftTissue, invalidate]);

  const a = useMemo(() => new THREE.Vector3(), []);
  const b = useMemo(() => new THREE.Vector3(), []);
  const c = useMemo(() => new THREE.Vector3(), []);
  const d = useMemo(() => new THREE.Vector3(), []);
  const up = useMemo(() => new THREE.Vector3(0, 1, 0), []);
  const projected = useMemo(() => new THREE.Vector3(), []);

  const stretch = (mesh: THREE.Object3D, from: THREE.Vector3, to: THREE.Vector3, radius: number) => {
    d.subVectors(to, from);
    const length = d.length();
    mesh.position.copy(from).addScaledVector(d, 0.5);
    mesh.quaternion.setFromUnitVectors(up, d.normalize());
    mesh.scale.set(radius, length, radius);
  };

  useFrame((_, delta) => {
    const now = current.current;
    const blend = 1 - Math.exp(-Math.min(delta, 0.05) * 7);
    const targetTraction = state.bandTractionActive ? (state.bandTractionIntensity / 100) * 0.85 : 0;
    const targets = {
      hipAngle: state.hipAngle,
      frontalAngle: state.frontalAngle,
      rotationAngle: state.rotationAngle,
      ifs,
      traction: targetTraction,
    };
    let moving = false;
    for (const key of Object.keys(targets) as (keyof typeof targets)[]) {
      const difference = targets[key] - now[key];
      if (Math.abs(difference) > 0.01) moving = true;
      now[key] += difference * blend;
    }

    femurRotation(now.hipAngle, now.frontalAngle, now.rotationAngle, euler);
    const offset = femurLateralOffset(euler, now.ifs, now.traction);
    femur.current?.rotation.copy(euler);
    femur.current?.position.set(offset, 0, 0);

    const toWorld = (point: THREE.Vector3, target: THREE.Vector3) =>
      target.copy(point).applyEuler(euler).setX(target.x + offset);
    toWorld(LESSER_TROCHANTER_TIP, a);
    const gap = Math.max(0, a.x - ISCHIUM_LATERAL_X);

    // Las fibras del cuadrado femoral se acortan y engrosan cuando el espacio se cierra
    if (fibers.current) {
      const squeeze = THREE.MathUtils.clamp((16 - now.ifs) / 10, 0, 1);
      muscleColor.set('#c9414a').lerp(new THREE.Color('#ff2d2d'), squeeze);
      (fibers.current.material as THREE.MeshPhysicalMaterial).color.copy(muscleColor);
      (fibers.current.material as THREE.MeshPhysicalMaterial).emissiveIntensity = 0.05 + squeeze * 0.5;
      const radius = 0.34 + squeeze * 0.16;
      const insertTop = toWorld(INSERT_TOP, new THREE.Vector3());
      const insertBottom = toWorld(INSERT_BOTTOM, new THREE.Vector3());
      const span = insertTop.distanceTo(ORIGIN_TOP);
      const bulge = THREE.MathUtils.clamp(1.25 - span / 6, 0, 1) * 1.2;
      let instance = 0;
      for (let fiber = 0; fiber < FIBER_COUNT; fiber += 1) {
        const across = fiber / (FIBER_COUNT - 1);
        const layer = fiber % 2 ? 0.28 : -0.05;
        lerpPoint(ORIGIN_TOP, ORIGIN_BOTTOM, across, b);
        lerpPoint(insertTop, insertBottom, across, c);
        let previous = new THREE.Vector3().copy(b);
        for (let segment = 1; segment <= FIBER_SEGMENTS; segment += 1) {
          const t = segment / FIBER_SEGMENTS;
          const point = new THREE.Vector3().lerpVectors(b, c, t);
          const belly = Math.sin(t * Math.PI);
          point.z += (0.55 + bulge + layer) * belly;
          point.y += (across - 0.5) * -0.5 * belly;
          stretch(dummy, previous, point, radius);
          dummy.scale.y *= 1.12;
          dummy.updateMatrix();
          fibers.current.setMatrixAt(instance, dummy.matrix);
          instance += 1;
          previous = point;
        }
      }
      fibers.current.instanceMatrix.needsUpdate = true;
      fibers.current.computeBoundingSphere();
    }

    nerve.current?.position.setX((gap - 2.1) / 2);

    if (band.current) {
      band.current.visible = now.traction > 0.02;
      toWorld(BAND_ATTACH, a);
      b.set(ANCHOR_X, a.y, a.z);
      if (bandStrip.current) stretch(bandStrip.current, a, b, 0.22 + now.traction * 0.22);
      if (arrow.current) {
        arrow.current.position.set(a.x + 4.2, a.y + 1.9, a.z);
        arrow.current.rotation.set(0, 0, -Math.PI / 2);
        arrow.current.scale.setScalar(0.6 + now.traction);
      }
    }

    toWorld(LESSER_TROCHANTER_TIP, a);
    b.set(ISCHIUM_LATERAL_X, ISCHIUM_POINT.y, a.z + 0.2);
    a.z += 0.2;
    if (gapLine.current) {
      stretch(gapLine.current, b, a, 0.09);
      (gapLine.current.material as THREE.MeshBasicMaterial).color.set(now.ifs < 15 ? '#f43f5e' : '#38bdf8');
    }
    const place = (element: HTMLElement, point: THREE.Vector3) => {
      projected.copy(point).project(camera);
      const x = ((projected.x + 1) / 2) * size.width;
      const y = ((1 - projected.y) / 2) * size.height;
      element.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    };
    if (gapText.current) {
      gapText.current.textContent = `${now.ifs.toFixed(1)} mm`;
      gapText.current.style.borderColor = now.ifs < 15 ? '#e11d48' : '#0284c7';
      c.set((a.x + b.x) / 2, a.y - 1.5, a.z + 1);
      place(gapText.current, c);
    }
    LABELS.forEach((label, index) => {
      const element = labelRefs.current[index];
      if (!element) return;
      const shown =
        view !== 'detalle' &&
        (label.layer === 'bone' || (label.layer === 'soft' ? showSoftTissue : now.traction > 0.02));
      element.style.display = shown ? '' : 'none';
      if (shown) place(element, label.position);
    });

    if (moving) invalidate();
  });

  return (
    <>
      <directionalLight
        position={[12, 24, 34]}
        intensity={1.9}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0004}
        shadow-normalBias={0.05}
        shadow-camera-left={-24}
        shadow-camera-right={24}
        shadow-camera-top={26}
        shadow-camera-bottom={-34}
        shadow-camera-far={90}
      />
      <directionalLight position={[-22, -6, 18]} intensity={0.45} color="#9cc9ff" />

      <mesh geometry={geometry.pelvis} castShadow receiveShadow>
        <meshPhysicalMaterial vertexColors roughness={0.58} clearcoat={0.25} clearcoatRoughness={0.6} side={THREE.DoubleSide} />
      </mesh>
      <group ref={femur}>
        <mesh geometry={geometry.femur} castShadow receiveShadow>
          <meshPhysicalMaterial vertexColors roughness={0.5} clearcoat={0.3} clearcoatRoughness={0.55} side={THREE.DoubleSide} />
        </mesh>
      </group>

      <group visible={showSoftTissue}>
        <instancedMesh ref={fibers} args={[undefined, undefined, FIBER_COUNT * FIBER_SEGMENTS]} castShadow frustumCulled={false}>
          <cylinderGeometry args={[1, 1, 1, 10]} />
          <meshPhysicalMaterial color="#c9414a" emissive="#ff1f1f" roughness={0.42} clearcoat={0.5} clearcoatRoughness={0.4} />
        </instancedMesh>
        <group ref={nerve}>
          <mesh geometry={nerveGeometry} castShadow>
            <meshPhysicalMaterial color="#f5c542" emissive="#a36a00" emissiveIntensity={0.25} roughness={0.38} clearcoat={0.6} />
          </mesh>
        </group>
      </group>

      <group ref={band} visible={false}>
        <mesh ref={bandStrip} castShadow>
          <cylinderGeometry args={[1, 1, 1, 16]} />
          <meshPhysicalMaterial color="#22d3ee" emissive="#0e7490" emissiveIntensity={0.35} roughness={0.32} clearcoat={0.6} />
        </mesh>
        <mesh ref={arrow}>
          <coneGeometry args={[0.7, 1.8, 24]} />
          <meshStandardMaterial color="#67e8f9" emissive="#0891b2" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[ANCHOR_X + 0.5, -3.6, 0]} castShadow>
          <boxGeometry args={[1, 6, 3]} />
          <meshStandardMaterial color="#0e7490" roughness={0.6} />
        </mesh>
      </group>

      {/* Medida del espacio isquiofemoral */}
      <mesh ref={gapLine}>
        <cylinderGeometry args={[1, 1, 1, 10]} />
        <meshBasicMaterial color="#38bdf8" depthTest={false} transparent />
      </mesh>
      <OrbitControls ref={controls} makeDefault enablePan={false} minDistance={14} maxDistance={90} enableDamping={false} />
    </>
  );
};

const Hip3DViewer: React.FC<Props> = ({ state, ifs }) => {
  const [view, setView] = useState<View>('posterior');
  const [showSoftTissue, setShowSoftTissue] = useState(true);
  const [geometry, setGeometry] = useState<HipGeometry | null>(null);
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const gapText = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let active = true;
    loadHipGeometry().then((loaded) => {
      if (active) setGeometry(loaded);
    });
    return () => {
      active = false;
    };
  }, []);

  const buttonClass = (active: boolean) =>
    `px-2.5 py-1 text-[11px] font-medium rounded-md transition-all ${
      active ? 'bg-cyan-600 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-700'
    }`;

  return (
    <div>
      <div className="relative h-[380px] sm:h-[480px] overflow-hidden">
        {geometry ? (
          <>
            <div
              className="h-full"
              style={{ maskImage: 'linear-gradient(to bottom, black 88%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, black 88%, transparent)' }}
            >
              <Canvas
                shadows
                frameloop="demand"
                dpr={[1, 2.5]}
                gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.05 }}
                camera={{ position: [...VIEWS.posterior.position], fov: 30, near: 1, far: 200 }}
                aria-label="Modelo 3D de la cadera derecha. Arrastra para girarlo y usa la rueda para acercarlo."
              >
                <Scene
                  state={state}
                  ifs={ifs}
                  view={view}
                  showSoftTissue={showSoftTissue}
                  geometry={geometry}
                  labelRefs={labelRefs}
                  gapText={gapText}
                />
              </Canvas>
            </div>
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              {LABELS.map((label, index) => (
                <span
                  key={label.text}
                  ref={(element) => { labelRefs.current[index] = element; }}
                  className="absolute left-0 top-0 whitespace-nowrap rounded bg-slate-950/80 px-1.5 py-0.5 text-[10px] font-medium"
                  style={{ color: label.color, display: 'none' }}
                >
                  {label.text}
                </span>
              ))}
              <span
                ref={gapText}
                className="absolute left-0 top-0 whitespace-nowrap rounded border bg-slate-950/90 px-1.5 py-0.5 font-mono text-[11px] font-bold text-white"
              />
            </div>
          </>
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-slate-400">Generando el modelo 3D…</div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 pt-3">
        <div className="flex flex-wrap items-center gap-0.5 p-0.5 bg-slate-800 rounded-lg" role="group" aria-label="Vista">
          {(Object.keys(VIEWS) as View[]).map((key) => (
            <button key={key} onClick={() => setView(key)} aria-pressed={view === key} className={buttonClass(view === key)}>
              {VIEWS[key].label}
            </button>
          ))}
        </div>
        <button
          onClick={() => setShowSoftTissue(!showSoftTissue)}
          aria-pressed={!showSoftTissue}
          className={`${buttonClass(!showSoftTissue)} bg-slate-800`}
        >
          {showSoftTissue ? 'Ver solo hueso' : 'Mostrar músculo y nervio'}
        </button>
      </div>
      <p className="pt-2 text-[11px] text-slate-400">
        Cadera derecha, modelo simplificado. Arrastra para girar y usa la rueda para acercar. La separación es orientativa y no está medida en tu cuerpo.
      </p>
    </div>
  );
};

export default Hip3DViewer;
