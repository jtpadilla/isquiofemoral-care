import React, { Suspense, lazy, useState } from 'react';
import { BiomechanicsState } from '../types';
import { Activity, ShieldCheck, AlertTriangle, ArrowRight, Sparkles, RefreshCw, Layers } from 'lucide-react';
import { supportsWebGL, ViewerBoundary } from './ExerciseVisual';

// three.js solo se descarga si el navegador puede mostrar la escena 3D
const Hip3DViewer = lazy(() => import('./Hip3DViewer'));

interface Props {
  onSelectPhase?: (phase: string) => void;
}

export const BiomechanicalSimulator: React.FC<Props> = ({ onSelectPhase }) => {
  const [canRender3D] = useState(supportsWebGL);
  const [state, setState] = useState<BiomechanicsState>({
    hipAngle: 15, // Ligera flexión por defecto
    frontalAngle: 5, // Ligera abducción
    rotationAngle: 0,
    bandTractionIntensity: 80,
    bandTractionActive: true,
  });

  // Illustrative estimate of the ischiofemoral space (IFS) in mm.
  // The direction of each effect follows the literature; the coefficients are NOT measured values.
  // Normal baseline IFS: ~21.0 mm (standard range 18 - 25 mm)
  // Extension narrows: -0.35 mm per degree of extension (<0)
  // Flexion opens: +0.08 mm per degree of flexion (>0)
  // Adduction narrows severely: -0.45 mm per degree of adduction (<0)
  // Abduction opens: +0.28 mm per degree of abduction (>0)
  // External rotation narrows: -0.32 mm per degree (<0)
  // Internal rotation opens: +0.18 mm per degree (>0)
  // Rubber band lateral traction creates decoaptation: + (intensity * 0.08) mm (up to +8.0 mm)
  const calculateIFS = (s: BiomechanicsState) => {
    let base = 21.0;

    if (s.hipAngle < 0) {
      base += s.hipAngle * 0.35; // Extensión estrecha
    } else {
      base += Math.min(s.hipAngle * 0.08, 6.0); // Flexión abre hasta un límite
    }

    if (s.frontalAngle < 0) {
      base += s.frontalAngle * 0.45; // Aducción estrecha severamente
    } else {
      base += Math.min(s.frontalAngle * 0.28, 8.0); // Abducción abre
    }

    if (s.rotationAngle < 0) {
      base += s.rotationAngle * 0.32; // Rotación externa aproxima trocánter menor a isquion
    } else {
      base += Math.min(s.rotationAngle * 0.18, 5.0); // Rotación interna aleja trocánter menor
    }

    if (s.bandTractionActive) {
      base += (s.bandTractionIntensity / 100) * 8.5; // Decoaptación lateral con goma
    }

    return Math.max(4.0, Math.round(base * 10) / 10);
  };

  const ifs = calculateIFS(state);

  // Status determination
  let statusText = '';
  let statusColor = '';
  let statusBg = '';
  let statusDesc = '';

  if (ifs < 12) {
    statusText = 'Pinzamiento Severo (Conflicto Activo)';
    statusColor = 'text-rose-600';
    statusBg = 'bg-rose-50 border-rose-200';
    statusDesc = 'El trocánter menor colisiona directamente con el isquion. El músculo cuadrado femoral está atrapado y el nervio ciático sufre compresión e isquemia.';
  } else if (ifs < 16) {
    statusText = 'Espacio Crítico / En Riesgo';
    statusColor = 'text-amber-600';
    statusBg = 'bg-amber-50 border-amber-200';
    statusDesc = 'Espacio inferior al umbral normal de resonancia (< 15 mm). Hay fricción miofascial repetitiva al caminar o sentarse.';
  } else if (ifs < 24) {
    statusText = 'Espacio Fisiológico Libre';
    statusColor = 'text-slate-800';
    statusBg = 'bg-slate-100 border-slate-200';
    statusDesc = 'Rango anatómico estándar. El cuadrado femoral dispone de espacio de deslizamiento sin compresión ósea.';
  } else {
    statusText = 'Descompresión Terapéutica Máxima';
    statusColor = 'text-cyan-700';
    statusBg = 'bg-cyan-50 border-cyan-200';
    statusDesc = 'En este modelo, la tracción lateral con goma elástica amplía el túnel isquiofemoral, lo que explicaría el alivio que puedes notar.';
  }

  // Presets
  const applyPreset = (preset: 'traction' | 'walk_impingement' | 'crossed_legs' | 'neutral') => {
    switch (preset) {
      case 'traction':
        setState({
          hipAngle: 75,
          frontalAngle: 15,
          rotationAngle: 10,
          bandTractionIntensity: 90,
          bandTractionActive: true,
        });
        break;
      case 'walk_impingement':
        setState({
          hipAngle: -12, // Extensión al terminar paso
          frontalAngle: -8, // Aducción relativa por debilidad de glúteo medio
          rotationAngle: -15, // Rotación externa al despegar
          bandTractionIntensity: 0,
          bandTractionActive: false,
        });
        break;
      case 'crossed_legs':
        setState({
          hipAngle: 70,
          frontalAngle: -15, // Cruce de piernas
          rotationAngle: -20,
          bandTractionIntensity: 0,
          bandTractionActive: false,
        });
        break;
      case 'neutral':
        setState({
          hipAngle: 0,
          frontalAngle: 0,
          rotationAngle: 0,
          bandTractionIntensity: 50,
          bandTractionActive: false,
        });
        break;
    }
  };

  // Graphical coordinates for the SVG diagram
  // Base positions
  const ischiumX = 140;
  const ischiumY = 170;

  // Femur base center
  // Dynamic offset based on state
  const lateralTractionOffset = state.bandTractionActive ? (state.bandTractionIntensity / 100) * 36 : 0;
  const abductionOffset = (state.frontalAngle / 30) * 28;
  const flexionOffset = (state.hipAngle / 90) * 16;
  const rotationOffset = (state.rotationAngle / 30) * 14;

  const femurX = 280 + lateralTractionOffset + abductionOffset - flexionOffset * 0.4;
  const femurY = 175 - flexionOffset * 0.8;

  // Lesser trochanter position on the femur
  const lesserTrochanterX = femurX - 48 - rotationOffset;
  const lesserTrochanterY = femurY + 18;

  // Distance between ischium and lesser trochanter on SVG
  const visualGap = Math.max(16, lesserTrochanterX - ischiumX);

  const diagram2D = (
            <svg viewBox="0 0 520 280" className="w-full h-auto max-h-[300px]">
              <defs>
                {/* Gradient for muscle */}
                <linearGradient id="muscleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#e11d48" stopOpacity="0.95" />
                </linearGradient>
                {/* Pattern for bone */}
                <linearGradient id="boneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e2e8f0" />
                  <stop offset="100%" stopColor="#94a3b8" />
                </linearGradient>
                <linearGradient id="ischiumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#06b6d4" />
                </marker>
              </defs>

              {/* Grid backdrop */}
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Pelvis / Ischial Tuberosity (Left Anchor) */}
              <g id="pelvis-ischium">
                <path
                  d={`M ${ischiumX - 45} 80 C ${ischiumX - 25} 120, ${ischiumX - 10} 150, ${ischiumX} ${ischiumY} C ${ischiumX + 5} 190, ${ischiumX - 20} 220, ${ischiumX - 50} 240 L ${ischiumX - 60} 100 Z`}
                  fill="url(#ischiumGrad)"
                  stroke="#b45309"
                  strokeWidth="2"
                />
                <circle cx={ischiumX} cy={ischiumY} r="6" fill="#78350f" />
                <text x={ischiumX - 10} y={ischiumY + 25} fill="#fde68a" fontSize="10" textAnchor="end" fontFamily="monospace">
                  Tuberosidad Isquiática
                </text>
              </g>

              {/* Quadratus Femoris Muscle (bridges between Ischium and Lesser Trochanter) */}
              <g id="quadratus-femoris">
                <path
                  d={`M ${ischiumX} ${ischiumY - 14} Q ${(ischiumX + lesserTrochanterX) / 2} ${ischiumY - 5}, ${lesserTrochanterX} ${lesserTrochanterY - 12} L ${lesserTrochanterX} ${lesserTrochanterY + 12} Q ${(ischiumX + lesserTrochanterX) / 2} ${ischiumY + 20}, ${ischiumX} ${ischiumY + 14} Z`}
                  fill="url(#muscleGrad)"
                  stroke="#9f1239"
                  strokeWidth="1.5"
                  opacity={ifs < 12 ? '0.95' : '0.75'}
                />
                {/* Muscle fibers */}
                <line
                  x1={ischiumX + 4}
                  y1={ischiumY}
                  x2={lesserTrochanterX - 4}
                  y2={lesserTrochanterY}
                  stroke="#fda4af"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
                <text
                  x={(ischiumX + lesserTrochanterX) / 2}
                  y={(ischiumY + lesserTrochanterY) / 2 - 18}
                  fill="#fecdd3"
                  fontSize="10"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  M. Cuadrado Femoral {ifs < 12 ? '⚠️ COMPRIMIDO' : ''}
                </text>
              </g>

              {/* Sciatic Nerve (runs vertically behind the quadratus femoris) */}
              <g id="sciatic-nerve">
                <path
                  d={`M ${(ischiumX + lesserTrochanterX) / 2 - 2} 40 Q ${(ischiumX + lesserTrochanterX) / 2 + (ifs < 12 ? 8 : 0)} 150, ${(ischiumX + lesserTrochanterX) / 2 - 4} 260`}
                  fill="none"
                  stroke="#facc15"
                  strokeWidth={ifs < 12 ? '4' : '3.5'}
                  strokeDasharray="6 3"
                  opacity="0.9"
                />
                <circle cx={(ischiumX + lesserTrochanterX) / 2} cy={ischiumY + 4} r="3" fill="#ca8a04" />
                <text
                  x={(ischiumX + lesserTrochanterX) / 2 + 10}
                  y="250"
                  fill="#fef08a"
                  fontSize="9.5"
                  fontFamily="monospace"
                >
                  Nervio Ciático
                </text>
              </g>

              {/* Femur Bone (Proximal Femur, Femoral Head, Lesser Trochanter, Shaft) */}
              <g id="femur-bone" className="transition-transform duration-300">
                {/* Femoral Head and Neck */}
                <ellipse cx={femurX + 30} cy={femurY - 45} rx="26" ry="24" fill="url(#boneGrad)" stroke="#64748b" strokeWidth="2" />
                {/* Neck to Greater Trochanter */}
                <path
                  d={`M ${femurX + 15} ${femurY - 30} L ${femurX + 55} ${femurY - 10} L ${femurX + 45} ${femurY + 100} L ${femurX - 15} ${femurY + 100} L ${femurX - 25} ${femurY + 35} L ${lesserTrochanterX} ${lesserTrochanterY} L ${femurX - 20} ${femurY - 15} Z`}
                  fill="url(#boneGrad)"
                  stroke="#475569"
                  strokeWidth="2"
                />
                {/* Lesser Trochanter Marker */}
                <circle cx={lesserTrochanterX} cy={lesserTrochanterY} r="7" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
                <text x={femurX + 15} y={lesserTrochanterY + 4} fill="#f1f5f9" fontSize="10" textAnchor="start">
                  Trocánter Menor
                </text>
                <text x={femurX + 30} y={femurY + 80} fill="#94a3b8" fontSize="10" textAnchor="start" fontFamily="monospace">
                  Fémur
                </text>
              </g>

              {/* Traction Band Vector (if active) */}
              {state.bandTractionActive && (
                <g id="traction-arrow" className="animate-pulse">
                  {/* Anchor icon/point on right */}
                  <rect x="490" y={femurY - 15} width="16" height="30" fill="#0891b2" rx="3" />
                  {/* Elastic Band */}
                  <path
                    d={`M ${femurX + 20} ${femurY} Q 400 ${femurY - 10}, 490 ${femurY}`}
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="4.5"
                    strokeDasharray="8 4"
                  />
                  {/* Force vector arrow pulling laterally */}
                  <line
                    x1={femurX + 35}
                    y1={femurY}
                    x2={femurX + 90}
                    y2={femurY}
                    stroke="#06b6d4"
                    strokeWidth="3.5"
                    markerEnd="url(#arrow)"
                  />
                  <text x={femurX + 50} y={femurY - 12} fill="#67e8f9" fontSize="10.5" fontWeight="bold">
                    Tracción Lateral (+{((state.bandTractionIntensity / 100) * 8.5).toFixed(1)} mm)
                  </text>
                </g>
              )}

              {/* Dynamic Measurement Arrow between Ischium & Lesser Trochanter */}
              <g id="ifs-measurement">
                <line
                  x1={ischiumX}
                  y1={ischiumY + 45}
                  x2={lesserTrochanterX}
                  y2={ischiumY + 45}
                  stroke={ifs < 15 ? '#f43f5e' : '#38bdf8'}
                  strokeWidth="2.5"
                />
                {/* Ticks on ends */}
                <line x1={ischiumX} y1={ischiumY + 38} x2={ischiumX} y2={ischiumY + 52} stroke="#f43f5e" strokeWidth="2" />
                <line x1={lesserTrochanterX} y1={ischiumY + 38} x2={lesserTrochanterX} y2={ischiumY + 52} stroke="#38bdf8" strokeWidth="2" />
                {/* Gap distance label */}
                <rect
                  x={(ischiumX + lesserTrochanterX) / 2 - 32}
                  y={ischiumY + 32}
                  width="64"
                  height="22"
                  rx="4"
                  fill="#0f172a"
                  stroke={ifs < 15 ? '#e11d48' : '#0284c7'}
                  strokeWidth="1.5"
                />
                <text
                  x={(ischiumX + lesserTrochanterX) / 2}
                  y={ischiumY + 47}
                  fill="#ffffff"
                  fontSize="11"
                  fontFamily="monospace"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  {ifs.toFixed(1)} mm
                </text>
              </g>
            </svg>
  );

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
      {/* Header section */}
      <div className="p-6 md:p-8 border-b border-slate-100 bg-gradient-to-b from-slate-50/60 to-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-1.5">
              <span>Simulador Biomecánico Interactivo</span>
              <span aria-hidden="true">·</span>
              <span>Anatomía 3D Dinámica</span>
              <span aria-hidden="true">·</span>
              <span>Modelo Ilustrativo</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
              ¿Por qué te alivia la tracción con gomas?
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Explora cómo la orientación de la cadera y la fuerza lateral de la goma elástica modifican el 
              <span className="font-semibold text-slate-800"> Espacio Isquiofemoral (IFS)</span> y liberan el músculo cuadrado femoral y el nervio ciático.
            </p>
          </div>

          {/* Quick preset selector buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl shrink-0">
            <button
              onClick={() => applyPreset('traction')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                state.bandTractionActive && state.hipAngle > 40
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tracción con Goma (Alivio)</span>
            </button>
            <button
              onClick={() => applyPreset('walk_impingement')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                !state.bandTractionActive && state.hipAngle < 0
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <span>Marcha / Zancada Larga (Pinzamiento)</span>
            </button>
            <button
              onClick={() => applyPreset('crossed_legs')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                state.frontalAngle < -10
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <span>Piernas Cruzadas</span>
            </button>
            <button
              onClick={() => applyPreset('neutral')}
              className="px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-200/60 transition-all"
              title="Restablecer posición neutra"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        {/* Left: Controls & Sliders */}
        <div className="lg:col-span-5 p-6 md:p-8 space-y-6 bg-slate-50/40">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600 mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-slate-500" />
              <span>Parámetros Articulares en Tiempo Real</span>
            </h3>

            {/* Slider 1: Hip Angle (Flexion vs Extension) */}
            <div className="space-y-2 mb-5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-medium text-slate-700">Ángulo Sagital (Flexión / Extensión)</span>
                <span className="font-mono tabular-nums text-slate-900 font-semibold bg-white px-2 py-0.5 rounded border border-slate-200">
                  {state.hipAngle > 0 ? `+${state.hipAngle}° (Flexión)` : state.hipAngle < 0 ? `${state.hipAngle}° (Extensión)` : '0° Neutro'}
                </span>
              </div>
              <input
                type="range"
                min="-15"
                max="90"
                step="5"
                value={state.hipAngle}
                onChange={(e) => setState({ ...state, hipAngle: Number(e.target.value) })}
                className="w-full accent-cyan-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-600">
                <span className="text-rose-700">-15° Extensión (Riesgo)</span>
                <span>0° Neutro</span>
                <span className="text-cyan-700">+90° Flexión (Seguro)</span>
              </div>
            </div>

            {/* Slider 2: Frontal Plane (Adduction vs Abduction) */}
            <div className="space-y-2 mb-5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-medium text-slate-700">Plano Frontal (Aducción / Abducción)</span>
                <span className="font-mono tabular-nums text-slate-900 font-semibold bg-white px-2 py-0.5 rounded border border-slate-200">
                  {state.frontalAngle > 0 ? `+${state.frontalAngle}° (Abducción)` : state.frontalAngle < 0 ? `${state.frontalAngle}° (Aducción)` : '0° Neutro'}
                </span>
              </div>
              <input
                type="range"
                min="-15"
                max="30"
                step="5"
                value={state.frontalAngle}
                onChange={(e) => setState({ ...state, frontalAngle: Number(e.target.value) })}
                className="w-full accent-cyan-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-600">
                <span className="text-rose-700">-15° Aducción (Cierra túnel)</span>
                <span>0° Neutro</span>
                <span className="text-emerald-700">+30° Abducción (Glúteo Medio)</span>
              </div>
            </div>

            {/* Slider 3: Transverse (Rotation) */}
            <div className="space-y-2 mb-5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-medium text-slate-700">Rotación Axial (Externa / Interna)</span>
                <span className="font-mono tabular-nums text-slate-900 font-semibold bg-white px-2 py-0.5 rounded border border-slate-200">
                  {state.rotationAngle > 0 ? `+${state.rotationAngle}° (Interna)` : state.rotationAngle < 0 ? `${state.rotationAngle}° (Externa)` : '0° Neutro'}
                </span>
              </div>
              <input
                type="range"
                min="-30"
                max="30"
                step="5"
                value={state.rotationAngle}
                onChange={(e) => setState({ ...state, rotationAngle: Number(e.target.value) })}
                className="w-full accent-cyan-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-600">
                <span className="text-rose-700">-30° Ext (Choque de trocánter)</span>
                <span>0° Neutro</span>
                <span className="text-cyan-700">+30° Int (Abre espacio)</span>
              </div>
            </div>

            {/* Traction Rubber Band Control */}
            <div className="p-4 rounded-xl border border-cyan-200/80 bg-cyan-50/50 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-cyan-950 flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={state.bandTractionActive}
                    onChange={(e) => setState({ ...state, bandTractionActive: e.target.checked })}
                    className="w-4 h-4 text-cyan-600 rounded border-slate-300 focus:ring-cyan-500 cursor-pointer"
                  />
                  <span>Tracción con Goma Elástica Activa</span>
                </label>
                <span className="text-[11px] font-mono text-cyan-700 font-medium bg-cyan-100 px-2 py-0.5 rounded">
                  {state.bandTractionActive ? 'Decoaptación ON' : 'OFF'}
                </span>
              </div>

              {state.bandTractionActive && (
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-[11px] text-cyan-900 font-medium">
                    <span>Fuerza de Tracción Lateral:</span>
                    <span className="font-mono font-bold">{state.bandTractionIntensity}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={state.bandTractionIntensity}
                    onChange={(e) => setState({ ...state, bandTractionIntensity: Number(e.target.value) })}
                    className="w-full accent-cyan-600 h-2 bg-cyan-200 rounded-lg cursor-pointer"
                  />
                  <p className="text-[11px] text-cyan-800 leading-relaxed">
                    Ejerce un vector perpendicular que tracciona lateralmente la cabeza del fémur, separándola mecánicamente del isquion.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Biomechanical Insight Callout */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-2">
            <span className="font-semibold text-slate-900 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Qué muestra este modelo
            </span>
            <p className="leading-relaxed">
              En el pinzamiento isquiofemoral, el trocánter menor puede chocar con la tuberosidad isquiática al caminar (cuando la pierna va hacia atrás en extensión y aducción).
              La goma busca generar una <strong>fuerza de tracción decoaptante</strong> que amplíe ese canal, lo que explicaría el alivio.
            </p>
            <p className="leading-relaxed">
              Las cifras son una estimación ilustrativa, no una medición de tu cadera, y sentir alivio no confirma el diagnóstico: el espacio real solo se mide con una resonancia magnética.
            </p>
          </div>
        </div>

        {/* Right: Graphic Canvas & Telemetry Display */}
        <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-6">
          {/* Telemetry Metric Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-600 block mb-1">
                Espacio Isquiofemoral Estimado (IFS)
              </span>
              <div className="flex items-baseline gap-2">
                <span className={`text-3xl md:text-4xl font-mono font-bold tabular-nums ${statusColor}`}>
                  {ifs.toFixed(1)}
                </span>
                <span className="text-xs uppercase font-mono text-slate-600 font-medium">mm</span>
              </div>
              <div className="mt-2 text-xs text-slate-600 flex items-center justify-between">
                <span>Normal: 18 - 25 mm</span>
                <span>Patológico: &lt; 15 mm</span>
              </div>
            </div>

            <div className={`p-4 rounded-xl border ${statusBg} flex flex-col justify-between`}>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-600 block mb-1">
                  Interpretación del Modelo (no es un diagnóstico)
                </span>
                <span className={`text-base font-bold ${statusColor} block`}>
                  {statusText}
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {statusDesc}
              </p>
            </div>
          </div>

          {/* Interactive Anatomical SVG Diagram */}
          <div className="relative border border-slate-200 rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 p-4 text-white overflow-hidden min-h-[300px]">
            {/* Legend / Overlay */}
            <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-2 text-[11px]">
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-2 py-0.5 rounded text-slate-200 border border-slate-700">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
                Isquion (Pelvis)
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-2 py-0.5 rounded text-slate-200 border border-slate-700">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block"></span>
                Fémur y Trocánter Menor
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-2 py-0.5 rounded text-slate-200 border border-slate-700">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                M. Cuadrado Femoral
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-2 py-0.5 rounded text-slate-200 border border-slate-700">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block"></span>
                Nervio Ciático
              </span>
              {state.bandTractionActive && (
                <span className="flex items-center gap-1.5 bg-cyan-950/80 px-2 py-0.5 rounded text-cyan-300 border border-cyan-800 animate-pulse">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block"></span>
                  Goma de Tracción
                </span>
              )}
            </div>

            {canRender3D ? (
              <ViewerBoundary fallback={diagram2D}>
                <Suspense fallback={diagram2D}>
                  <Hip3DViewer state={state} ifs={ifs} />
                </Suspense>
              </ViewerBoundary>
            ) : (
              diagram2D
            )}
          </div>

          {/* Action to proceed to routine */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <span className="text-xs text-slate-500">
              Objetivo terapéutico: <strong>Mantener el espacio &gt; 18 mm</strong> mediante tracción y fuerza abductora.
            </span>
            {onSelectPhase && (
              <button
                onClick={() => onSelectPhase('rutina')}
                className="w-full sm:w-auto px-5 py-2.5 bg-cyan-700 hover:bg-cyan-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
              >
                <span>Ver Ejercicios de Descompresión</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
