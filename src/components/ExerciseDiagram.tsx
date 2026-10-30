import React from 'react';
import { Exercise } from '../types';

interface Props {
  type: Exercise['diagramType'];
  className?: string;
}

export const ExerciseDiagram: React.FC<Props> = ({ type, className = '' }) => {
  return (
    <div className={`relative bg-slate-900 rounded-xl p-4 overflow-hidden text-slate-200 ${className}`}>
      {/* Schematic diagram renderer */}
      <svg viewBox="0 0 400 240" className="w-full h-auto max-h-[220px]">
        <defs>
          <marker id="bandArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#06b6d4" />
          </marker>
          <marker id="redArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#f43f5e" />
          </marker>
          <marker id="greenArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
          </marker>
        </defs>

        {/* 1. Tracción lateral en cuadrupedia */}
        {type === 'lateral_traction' && (
          <g>
            {/* Floor line */}
            <line x1="40" y1="200" x2="360" y2="200" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
            
            {/* Person in quadruped position (side/oblique view) */}
            {/* Torso */}
            <path d="M 140 130 Q 180 120, 240 135" fill="none" stroke="#e2e8f0" strokeWidth="12" strokeLinecap="round" />
            {/* Head */}
            <circle cx="120" cy="130" r="14" fill="#cbd5e1" />
            {/* Arms down */}
            <line x1="140" y1="130" x2="140" y2="200" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />
            {/* Far knee support */}
            <path d="M 230 135 L 230 170 L 260 200" fill="none" stroke="#64748b" strokeWidth="7" strokeLinecap="round" />
            {/* Near Hip & Thigh with Band */}
            <path d="M 240 135 L 250 170 L 290 200" fill="none" stroke="#38bdf8" strokeWidth="9" strokeLinecap="round" />
            
            {/* Lateral Anchor Point on left */}
            <rect x="360" y="110" width="12" height="50" fill="#0284c7" rx="3" />
            <text x="365" y="100" fill="#38bdf8" fontSize="10" textAnchor="middle" fontFamily="monospace">Anclaje</text>
            
            {/* Band pulling laterally from hip */}
            <path d="M 245 145 Q 300 130, 360 135" fill="none" stroke="#06b6d4" strokeWidth="4.5" strokeDasharray="6 3" />
            <line x1="260" y1="140" x2="330" y2="135" stroke="#06b6d4" strokeWidth="3" markerEnd="url(#bandArrow)" />
            
            {/* Label */}
            <rect x="50" y="25" width="220" height="26" rx="6" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1" />
            <text x="60" y="42" fill="#38bdf8" fontSize="11" fontWeight="bold">Tracción Lateral en Raíz del Muslo</text>
            <text x="245" y="175" fill="#fde047" fontSize="10" fontWeight="bold">80-90° flexión cadera</text>
          </g>
        )}

        {/* 2. Tracción axial supino */}
        {type === 'axial_distraction' && (
          <g>
            <line x1="30" y1="190" x2="370" y2="190" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
            {/* Body lying on back */}
            <line x1="80" y1="182" x2="190" y2="182" stroke="#e2e8f0" strokeWidth="12" strokeLinecap="round" />
            <circle cx="65" cy="180" r="14" fill="#cbd5e1" />
            {/* Other leg flat */}
            <line x1="190" y1="182" x2="310" y2="182" stroke="#64748b" strokeWidth="7" strokeLinecap="round" />
            {/* Active leg elevated to 80° */}
            <path d="M 190 182 L 210 110 L 260 90" fill="none" stroke="#38bdf8" strokeWidth="8" strokeLinecap="round" />
            
            {/* Floor anchor in front */}
            <rect x="360" y="160" width="12" height="30" fill="#0284c7" rx="2" />
            <text x="366" y="150" fill="#38bdf8" fontSize="9" textAnchor="middle" fontFamily="monospace">Anclaje</text>

            {/* Traction band from anchor to groin/ankle */}
            <line x1="200" y1="140" x2="360" y2="175" stroke="#06b6d4" strokeWidth="4" strokeDasharray="6 3" />
            <line x1="220" y1="145" x2="320" y2="167" stroke="#06b6d4" strokeWidth="2.5" markerEnd="url(#bandArrow)" />

            <rect x="40" y="25" width="220" height="26" rx="6" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1" />
            <text x="50" y="42" fill="#38bdf8" fontSize="11" fontWeight="bold">Descompresión Caudal a 80°</text>
          </g>
        )}

        {/* 3. Deslizamiento neurodinámico del ciático */}
        {type === 'sciatic_slider' && (
          <g>
            <line x1="30" y1="200" x2="370" y2="200" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
            {/* Supine body */}
            <line x1="80" y1="190" x2="180" y2="190" stroke="#cbd5e1" strokeWidth="10" strokeLinecap="round" />
            {/* Head tilting up */}
            <circle cx="65" cy="180" r="14" fill="#e2e8f0" />
            <text x="30" y="145" fill="#fde047" fontSize="10">Cabeza atrás</text>

            {/* Leg at 90° flexion with hand holding thigh */}
            <path d="M 180 190 L 195 120 L 260 80" fill="none" stroke="#38bdf8" strokeWidth="7" strokeLinecap="round" />
            <text x="225" y="60" fill="#7dd3fc" fontSize="10">Rodilla se extiende</text>

            {/* Sciatic nerve thread visualization */}
            <path d="M 65 180 Q 150 160, 180 190 Q 200 120, 260 80" fill="none" stroke="#facc15" strokeWidth="2.5" strokeDasharray="4 2" />
            <rect x="40" y="20" width="240" height="26" rx="6" fill="#0f172a" stroke="#ca8a04" strokeWidth="1" />
            <text x="50" y="37" fill="#facc15" fontSize="11" fontWeight="bold">Efecto Polea: Deslizar sin Tensión</text>
          </g>
        )}

        {/* 4. Puente de glúteo con abducción */}
        {type === 'band_bridge' && (
          <g>
            <line x1="30" y1="200" x2="370" y2="200" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
            {/* Upper back on ground */}
            <line x1="60" y1="195" x2="110" y2="195" stroke="#94a3b8" strokeWidth="10" strokeLinecap="round" />
            <circle cx="50" cy="190" r="13" fill="#cbd5e1" />
            {/* Elevated pelvis and thighs */}
            <path d="M 110 195 L 180 130 L 260 130 L 280 200" fill="none" stroke="#38bdf8" strokeWidth="9" strokeLinecap="round" />
            {/* Active glute indicator */}
            <circle cx="180" cy="130" r="16" fill="#10b981" opacity="0.3" />
            <text x="180" y="110" fill="#34d399" fontSize="10" textAnchor="middle" fontWeight="bold">Glúteo Mayor Activo</text>

            {/* Miniband around knees with outward arrows */}
            <ellipse cx="250" cy="130" rx="14" ry="22" fill="none" stroke="#f59e0b" strokeWidth="4" />
            <line x1="250" y1="100" x2="250" y2="85" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#greenArrow)" />
            <line x1="250" y1="160" x2="250" y2="175" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#greenArrow)" />
            <text x="275" y="95" fill="#fbbf24" fontSize="10">Empujar hacia afuera</text>

            <rect x="40" y="20" width="250" height="26" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
            <text x="50" y="37" fill="#34d399" fontSize="11" fontWeight="bold">Abducción Continua = Espacio Abierto</text>
          </g>
        )}

        {/* 5. Abducción en decúbito lateral a 30° flexión */}
        {type === 'side_abduction' && (
          <g>
            <line x1="30" y1="200" x2="370" y2="200" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
            {/* Body on side */}
            <line x1="80" y1="190" x2="180" y2="190" stroke="#94a3b8" strokeWidth="10" strokeLinecap="round" />
            <circle cx="65" cy="188" r="13" fill="#cbd5e1" />
            {/* Bottom leg bent for stability */}
            <path d="M 180 190 L 220 185 L 210 200" fill="none" stroke="#64748b" strokeWidth="7" strokeLinecap="round" />
            {/* Top leg elevated at 30° forward flexion */}
            <path d="M 180 190 L 250 140 L 320 120" fill="none" stroke="#38bdf8" strokeWidth="8" strokeLinecap="round" />
            
            {/* Target Gluteus Medius indicator */}
            <circle cx="180" cy="175" r="12" fill="#38bdf8" opacity="0.4" />
            <text x="180" y="155" fill="#7dd3fc" fontSize="9.5" textAnchor="middle" fontWeight="bold">Glúteo Medio</text>

            {/* Elevation arrow */}
            <path d="M 280 160 Q 285 140, 280 125" fill="none" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#bandArrow)" />
            <text x="295" y="145" fill="#38bdf8" fontSize="10">25-30 cm</text>

            <rect x="40" y="20" width="270" height="26" rx="6" fill="#0f172a" stroke="#0284c7" strokeWidth="1" />
            <text x="50" y="37" fill="#38bdf8" fontSize="11" fontWeight="bold">Pierna 30° adelantada + Punta hacia abajo</text>
          </g>
        )}

        {/* 6. Monster walk */}
        {type === 'monster_walk' && (
          <g>
            <line x1="30" y1="210" x2="370" y2="210" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
            {/* Half-squat figure front view */}
            {/* Head & Torso */}
            <circle cx="190" cy="65" r="13" fill="#cbd5e1" />
            <line x1="190" y1="80" x2="190" y2="125" stroke="#e2e8f0" strokeWidth="9" strokeLinecap="round" />
            {/* Left Leg bent */}
            <path d="M 190 125 L 150 160 L 140 210" fill="none" stroke="#38bdf8" strokeWidth="8" strokeLinecap="round" />
            {/* Right Leg stepping wide */}
            <path d="M 190 125 L 240 160 L 260 210" fill="none" stroke="#38bdf8" strokeWidth="8" strokeLinecap="round" />

            {/* Miniband between knees */}
            <ellipse cx="195" cy="160" rx="46" ry="10" fill="none" stroke="#f59e0b" strokeWidth="4" />
            {/* Step direction arrow */}
            <line x1="260" y1="180" x2="310" y2="180" stroke="#10b981" strokeWidth="3" markerEnd="url(#greenArrow)" />
            <text x="315" y="185" fill="#34d399" fontSize="10" fontWeight="bold">Paso lateral</text>

            <rect x="40" y="20" width="250" height="26" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
            <text x="50" y="37" fill="#fbbf24" fontSize="11" fontWeight="bold">Semi-sentadilla atlética: Tensión constante</text>
          </g>
        )}

        {/* 7. Clamshell invertido */}
        {type === 'reverse_clamshell' && (
          <g>
            <line x1="30" y1="200" x2="370" y2="200" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
            {/* Side lying */}
            <line x1="70" y1="190" x2="160" y2="190" stroke="#94a3b8" strokeWidth="9" strokeLinecap="round" />
            <circle cx="55" cy="188" r="13" fill="#cbd5e1" />
            {/* Thighs bent 45° */}
            <line x1="160" y1="190" x2="230" y2="175" stroke="#38bdf8" strokeWidth="8" strokeLinecap="round" />
            {/* Knees GLUED together circle */}
            <circle cx="230" cy="175" r="9" fill="#10b981" stroke="#047857" strokeWidth="2" />
            <text x="230" y="155" fill="#34d399" fontSize="9" textAnchor="middle" fontWeight="bold">Rodillas Juntas</text>
            {/* Top foot elevated upwards (Internal Rotation) */}
            <path d="M 230 175 L 290 120" stroke="#38bdf8" strokeWidth="7" strokeLinecap="round" />
            {/* Rotation arrow */}
            <path d="M 270 160 Q 285 145, 290 125" fill="none" stroke="#fde047" strokeWidth="2.5" markerEnd="url(#bandArrow)" />
            <text x="295" y="115" fill="#fde047" fontSize="10" fontWeight="bold">Tobillo al techo</text>

            <rect x="40" y="20" width="270" height="26" rx="6" fill="#0f172a" stroke="#0284c7" strokeWidth="1" />
            <text x="50" y="37" fill="#38bdf8" fontSize="11" fontWeight="bold">Rotación Interna = Descomprime Isquion</text>
          </g>
        )}

        {/* 8. Single-leg RDL */}
        {type === 'single_leg_rdl' && (
          <g>
            <line x1="30" y1="210" x2="370" y2="210" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
            {/* Wall support on left */}
            <line x1="60" y1="50" x2="60" y2="210" stroke="#475569" strokeWidth="4" />
            <text x="65" y="70" fill="#94a3b8" fontSize="9" fontFamily="monospace">Pared / Apoyo</text>

            {/* Stance leg microbent */}
            <path d="M 180 130 L 180 170 L 175 210" fill="none" stroke="#38bdf8" strokeWidth="8" strokeLinecap="round" />
            {/* Torso hinging forward */}
            <line x1="180" y1="130" x2="110" y2="125" stroke="#e2e8f0" strokeWidth="8" strokeLinecap="round" />
            <circle cx="95" cy="120" r="12" fill="#cbd5e1" />
            {/* Hand touching wall */}
            <line x1="120" y1="128" x2="65" y2="125" stroke="#94a3b8" strokeWidth="4" />
            {/* Back leg straight back */}
            <line x1="180" y1="130" x2="270" y2="125" stroke="#38bdf8" strokeWidth="7" strokeLinecap="round" />

            {/* Bubble level indicator over pelvis */}
            <rect x="150" y="95" width="60" height="16" rx="4" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
            <circle cx="180" cy="103" r="4" fill="#34d399" />
            <text x="180" y="85" fill="#34d399" fontSize="9" textAnchor="middle" fontWeight="bold">Pelvis 100% Horizontal</text>

            <rect x="40" y="20" width="260" height="26" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
            <text x="50" y="37" fill="#34d399" fontSize="11" fontWeight="bold">Evitar caída contralateral (Trendelenburg)</text>
          </g>
        )}

        {/* 9. Side plank */}
        {type === 'side_plank' && (
          <g>
            <line x1="30" y1="200" x2="370" y2="200" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
            {/* Forearm support */}
            <line x1="110" y1="160" x2="110" y2="195" stroke="#94a3b8" strokeWidth="7" strokeLinecap="round" />
            {/* Elevated body bridge */}
            <path d="M 110 160 L 190 145 L 260 175 L 270 195" fill="none" stroke="#38bdf8" strokeWidth="8" strokeLinecap="round" />
            <circle cx="95" cy="155" r="12" fill="#cbd5e1" />
            {/* Pelvis elevated arrow */}
            <line x1="190" y1="170" x2="190" y2="148" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#greenArrow)" />
            <text x="190" y="130" fill="#34d399" fontSize="10" textAnchor="middle" fontWeight="bold">Pelvis Elevada</text>

            <rect x="40" y="20" width="250" height="26" rx="6" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1" />
            <text x="50" y="37" fill="#38bdf8" fontSize="11" fontWeight="bold">Cadena Lateral y Cuadrado Lumbar</text>
          </g>
        )}

        {/* 10. Reeducación de la marcha */}
        {type === 'gait_hygiene' && (
          <g>
            {/* Compare Long stride (danger) vs Short safe stride */}
            {/* Floor lines */}
            <line x1="30" y1="120" x2="180" y2="120" stroke="#475569" strokeWidth="1.5" />
            <line x1="220" y1="120" x2="370" y2="120" stroke="#475569" strokeWidth="1.5" />

            {/* Left: Wrong (Overstride with hyperextension) */}
            <circle cx="70" cy="50" r="9" fill="#cbd5e1" />
            <path d="M 70 60 L 70 85 L 110 118" stroke="#f43f5e" strokeWidth="5" strokeLinecap="round" />
            {/* Back leg trailing far in hyperextension */}
            <path d="M 70 85 L 30 118" stroke="#f43f5e" strokeWidth="5" strokeLinecap="round" />
            <text x="70" y="140" fill="#f43f5e" fontSize="9.5" textAnchor="middle" fontWeight="bold">❌ Zancada Larga</text>
            <text x="70" y="155" fill="#f87171" fontSize="8.5" textAnchor="middle">Hiperextensión + Choque</text>

            {/* Right: Correct (Shorter safe stride) */}
            <circle cx="280" cy="50" r="9" fill="#cbd5e1" />
            <path d="M 280 60 L 280 85 L 305 118" stroke="#10b981" strokeWidth="5" strokeLinecap="round" />
            <path d="M 280 85 L 260 118" stroke="#10b981" strokeWidth="5" strokeLinecap="round" />
            <text x="280" y="140" fill="#34d399" fontSize="9.5" textAnchor="middle" fontWeight="bold">✓ Zancada Corta</text>
            <text x="280" y="155" fill="#a7f3d0" fontSize="8.5" textAnchor="middle">Espacio Protegido</text>

            {/* Base width reminder */}
            <rect x="40" y="180" width="320" height="28" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
            <text x="200" y="198" fill="#7dd3fc" fontSize="10.5" textAnchor="middle">
              Caminar con base separada (como sobre 2 vías de tren paralelas)
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
