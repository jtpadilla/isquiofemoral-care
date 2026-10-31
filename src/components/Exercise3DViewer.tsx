import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { AlertTriangle, CheckCircle, Pause, Play } from 'lucide-react';
import { AnimationReadout, ExerciseAnimation, Pose } from '../types';
import { AFFECTED_SIDE } from '../data/exerciseAnimations';
import { DISCLAIMERS } from '../data/clinicalContent';
import { createExerciseProps } from '../utils/exerciseProps';
import { createMannequin, Mannequin } from '../utils/mannequin';
import { getCycleDuration, getPhases, groundPhases, sampleTimeline } from '../utils/poseTimeline';

interface Props {
  animation: ExerciseAnimation;
  side?: 'left' | 'right'; // Si se indica, el lado lo controla el componente padre
  playing?: boolean; // Si cambia, arranca o detiene la animación (temporizador de la rutina)
}

const MIN_FULL_BODY_ASPECT = 1.6; // Por debajo, la cámara se aleja para que quepa el cuerpo entero

const readValue = (readout: AnimationReadout, mannequin: Mannequin, pose: Pose) => {
  if (readout.source === 'kneeGapCm') return mannequin.kneeGapCm();
  if (readout.source === 'footWidthCm') return mannequin.footWidthCm();
  return pose[readout.source] + (readout.offset ?? 0);
};

const Scene: React.FC<{
  animation: ExerciseAnimation;
  errorId: string | null;
  mirrored: boolean;
  view: number;
  timeRef: React.RefObject<number>;
  playingRef: React.RefObject<boolean>;
  speedRef: React.RefObject<number>;
  sliderRef: React.RefObject<HTMLInputElement | null>;
  readoutRefs: React.RefObject<(HTMLSpanElement | null)[]>;
  onPhaseChange: (index: number) => void;
}> = ({ animation, errorId, mirrored, view, timeRef, playingRef, speedRef, sliderRef, readoutRefs, onPhaseChange }) => {
  const mannequin = useMemo(
    () => createMannequin({ bothLegsWork: animation.bilateral && !animation.workArms && !animation.workLabel, muscleZones: animation.muscleZones, workArms: animation.workArms }),
    [animation]
  );
  const ghost = useMemo(() => createMannequin({ ghost: true }), []);
  const controls = useRef<any>(null);
  const aspect = useThree((state) => state.size.width / state.size.height);
  const lastPhase = useRef(-1);
  const lowestPointOf = (pose: Pose) => {
    ghost.setPose(pose);
    return ghost.lowestPoint();
  };
  const correctPhases = useMemo(
    () => animation.scene.poseRoot ? animation.phases : groundPhases(animation.basePose, animation.phases, lowestPointOf, animation.scene.rootHeight),
    [animation, ghost]
  );
  const phases = useMemo(
    () => animation.scene.poseRoot ? getPhases(animation, errorId) : groundPhases(animation.basePose, getPhases(animation, errorId), lowestPointOf, animation.scene.rootHeight),
    [animation, errorId, ghost]
  );
  const cycle = getCycleDuration(phases);
  const bands = animation.errors.find((e) => e.id === errorId)?.bands ?? animation.bands ?? [];
  const props = useMemo(
    () => createExerciseProps(animation.scene, bands, !!animation.showNerve),
    [animation, bands]
  );

  useEffect(
    () => () => {
      mannequin.dispose();
      ghost.dispose();
    },
    [mannequin, ghost]
  );
  useEffect(() => () => props.dispose(), [props]);

  useEffect(() => {
    const orbit = controls.current;
    if (!orbit) return;
    const [targetX, targetY, targetZ] = animation.scene.target;
    const [x, y, z] = animation.scene.views[view].position;
    const flip = mirrored ? -1 : 1;
    const distance = Math.max(1, MIN_FULL_BODY_ASPECT / aspect);
    orbit.target.set(targetX * flip, targetY, targetZ);
    orbit.object.position.set(
      (targetX + (x - targetX) * distance) * flip,
      targetY + (y - targetY) * distance,
      targetZ + (z - targetZ) * distance
    );
    orbit.update();
  }, [animation, view, mirrored, aspect]);

  useFrame((_, delta) => {
    if (playingRef.current) {
      timeRef.current = (timeRef.current + Math.min(delta, 0.1) * speedRef.current) % cycle;
    }
    const sample = sampleTimeline(animation.basePose, phases, timeRef.current);
    mannequin.setPose(sample.pose);
    mannequin.setActivation(sample.activation);

    if (errorId) {
      ghost.setPose(sampleTimeline(animation.basePose, correctPhases, timeRef.current).pose);
    }
    props.update(mannequin, sample.activation);

    if (sample.phaseIndex !== lastPhase.current) {
      lastPhase.current = sample.phaseIndex;
      onPhaseChange(sample.phaseIndex);
    }

    if (sliderRef.current) sliderRef.current.value = String(timeRef.current / cycle);

    // Se actualiza directamente en el DOM para no renderizar React en cada fotograma
    animation.readouts.forEach((readout, index) => {
      const element = readoutRefs.current[index];
      if (!element) return;
      const value = readValue(readout, mannequin, sample.pose);
      const display = Math.round(value) || 0;
      element.textContent = `${display}${readout.unit}`;
      const evaluated = !readout.peakOnly || phases[sample.phaseIndex].peak;
      const isOk = value >= readout.min - 0.5 && value <= readout.max + 0.5;
      const color = !evaluated ? 'text-slate-200' : isOk ? 'text-emerald-300' : 'text-rose-400';
      element.className = `font-mono font-bold tabular-nums ${color}`;
    });
  });

  return (
    <>
      <color attach="background" args={['#0f172a']} />
      <hemisphereLight args={['#f8fafc', '#334155', 1.5]} />
      <directionalLight
        position={[1.5, 4, 2.5]}
        intensity={2}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-2}
        shadow-camera-right={2}
        shadow-camera-top={2}
        shadow-camera-bottom={-2}
      />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.002, 0]} receiveShadow>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
      <group scale={[mirrored ? -1 : 1, 1, 1]}>
        <primitive object={mannequin.root} />
        <primitive object={ghost.root} visible={!!errorId} />
        <primitive object={props.group} />
      </group>

      <OrbitControls ref={controls} makeDefault enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2 - 0.02} />
    </>
  );
};

const Exercise3DViewer: React.FC<Props> = ({ animation, side, playing }) => {
  const [isPlaying, setIsPlaying] = useState(
    () => playing ?? !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [speed, setSpeed] = useState(1);
  const [errorId, setErrorId] = useState<string | null>(null);
  const [view, setView] = useState(0);
  const [ownSide, setOwnSide] = useState<'left' | 'right'>(AFFECTED_SIDE);
  const [phaseIndex, setPhaseIndex] = useState(0);

  const timeRef = useRef(0);
  const playingRef = useRef(isPlaying);
  const speedRef = useRef(speed);
  const sliderRef = useRef<HTMLInputElement>(null);
  const readoutRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const activeSide = animation.bilateral ? 'left' : side ?? ownSide;
  const phases = getPhases(animation, errorId);
  const phase = phases[phaseIndex] ?? phases[0];
  const activeError = animation.errors.find((e) => e.id === errorId);

  playingRef.current = isPlaying;
  speedRef.current = speed;

  useEffect(() => {
    if (playing !== undefined) setIsPlaying(playing);
  }, [playing]);

  const buttonClass = (active: boolean) =>
    `px-2.5 py-1 text-[11px] font-medium rounded-md transition-all ${
      active ? 'bg-cyan-600 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-700'
    }`;

  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden text-slate-200">
      {/* Variante: técnica correcta o error frecuente */}
      <div className="flex flex-wrap gap-1.5 p-3 border-b border-slate-800">
        <button
          onClick={() => setErrorId(null)}
          aria-pressed={!errorId}
          className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all ${
            !errorId ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <CheckCircle className="w-3.5 h-3.5" />
          Correcto
        </button>
        {animation.errors.map((error) => (
          <button
            key={error.id}
            onClick={() => setErrorId(error.id)}
            aria-pressed={errorId === error.id}
            className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all ${
              errorId === error.id ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            {error.label}
          </button>
        ))}
      </div>

      <div className="relative h-72 sm:h-80">
        <Canvas
          shadows
          camera={{ position: [...animation.scene.views[0].position], fov: 32 }}
          aria-label="Figura 3D que muestra la ejecución del ejercicio. Arrastra para girarla."
        >
          <Scene
            animation={animation}
            errorId={errorId}
            mirrored={activeSide === 'right'}
            view={view}
            timeRef={timeRef}
            playingRef={playingRef}
            speedRef={speedRef}
            sliderRef={sliderRef}
            readoutRefs={readoutRefs}
            onPhaseChange={setPhaseIndex}
          />
        </Canvas>

        {/* Ángulos en directo */}
        <div className="absolute top-2 left-2 space-y-1 text-[11px] pointer-events-none">
          {animation.readouts.map((readout, index) => (
            <div key={readout.label} className="flex items-center gap-2 bg-slate-950/75 px-2 py-0.5 rounded">
              <span className="text-slate-300">{readout.label}</span>
              <span ref={(element) => { readoutRefs.current[index] = element; }} className="font-mono font-bold" />
            </div>
          ))}
        </div>

        <div className="absolute top-2 right-2 text-[11px] space-y-1 text-right pointer-events-none">
          <div className="bg-slate-950/75 px-2 py-0.5 rounded">
            {animation.workArms !== 'none' && <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 mr-1.5" />}
            {animation.workLabel ?? (animation.bilateral ? 'Ambas piernas' : `${animation.workArms ? 'Brazo' : 'Pierna'} ${activeSide === 'right' ? 'derecho' : 'izquierdo'}`.replace('Pierna derecho', 'Pierna derecha').replace('Pierna izquierdo', 'Pierna izquierda'))}
          </div>
          <div className="bg-slate-950/75 px-2 py-0.5 rounded">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mr-1.5" />
            {animation.muscleLabel}
          </div>
          {errorId && (
            <div className="bg-slate-950/75 px-2 py-0.5 rounded text-emerald-300">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-1.5" />
              Silueta: posición correcta
            </div>
          )}
        </div>
      </div>

      {/* Paso actual */}
      <div className="px-3 pt-3 text-xs min-h-[6rem]">
        <span className="font-mono text-cyan-400 mr-2">Paso {phase.stepIndex + 1}</span>
        <span className="font-medium text-white">{phase.label}</span>
        {activeError && <p className="text-rose-300 mt-1 leading-relaxed">{activeError.why}</p>}
      </div>

      {/* Controles */}
      <div className="p-3 space-y-2.5">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white shrink-0"
            aria-label={isPlaying ? 'Pausar animación' : 'Reproducir animación'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <input
            ref={sliderRef}
            type="range"
            min="0"
            max="0.999"
            step="0.001"
            defaultValue="0"
            aria-label="Posición dentro de la repetición"
            onChange={(e) => {
              timeRef.current = Number(e.target.value) * getCycleDuration(phases);
              setIsPlaying(false);
            }}
            className="w-full accent-cyan-500 h-2 cursor-pointer"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-0.5 p-0.5 bg-slate-800 rounded-lg" role="group" aria-label="Vista">
            {animation.scene.views.map(({ label }, index) => (
              <button key={label} onClick={() => setView(index)} aria-pressed={view === index} className={buttonClass(view === index)}>
                {label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {!side && !animation.bilateral && (
              <div className="flex items-center gap-0.5 p-0.5 bg-slate-800 rounded-lg" role="group" aria-label="Lado de trabajo">
                <button onClick={() => setOwnSide('left')} aria-pressed={activeSide === 'left'} className={buttonClass(activeSide === 'left')}>Izq.</button>
                <button onClick={() => setOwnSide('right')} aria-pressed={activeSide === 'right'} className={buttonClass(activeSide === 'right')}>Der.</button>
              </div>
            )}
            <div className="flex items-center gap-0.5 p-0.5 bg-slate-800 rounded-lg" role="group" aria-label="Velocidad">
              {[0.5, 1].map((value) => (
                <button key={value} onClick={() => setSpeed(value)} aria-pressed={speed === value} className={buttonClass(speed === value)}>
                  {value}x
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="text-[11px] text-slate-400">
          {DISCLAIMERS.model3D}
        </p>
      </div>
    </div>
  );
};

export default Exercise3DViewer;
