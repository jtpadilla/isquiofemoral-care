import React from 'react';
import { Exercise } from '../types';
import { ExerciseVisual } from './ExerciseVisual';
import { X, Check, AlertOctagon, Sparkles, Layers, ShieldAlert, Play } from 'lucide-react';

interface Props {
  exercise: Exercise | null;
  onClose: () => void;
  onStartSingle?: (exercise: Exercise) => void;
}

export const ExerciseDetailModal: React.FC<Props> = ({ exercise, onClose, onStartSingle }) => {
  if (!exercise) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-xl overflow-hidden my-8">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 mb-1">
              <span>Fase {exercise.phaseNumber}</span>
              <span aria-hidden="true">·</span>
              <span>{exercise.sets} series × {exercise.repsOrTime}</span>
              <span aria-hidden="true">·</span>
              <span>Dificultad: {exercise.difficulty}</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">{exercise.name}</h2>
            <p className="text-xs text-slate-500 mt-0.5">{exercise.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-all"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Visual Diagram */}
          <ExerciseVisual type={exercise.diagramType} />

          {/* Biomechanical Opening Effect */}
          <div className="p-4 rounded-xl bg-cyan-50/70 border border-cyan-200/80 text-xs space-y-1.5">
            <span className="font-semibold text-cyan-950 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-700" />
              Razón Biomecánica: ¿Por qué te alivia?
            </span>
            <p className="text-cyan-900 leading-relaxed">
              {exercise.whyItRelieves}
            </p>
          </div>

          {/* Objectives & Target muscles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <span className="font-semibold text-slate-700 block">Estructuras Dianas:</span>
              <p className="text-slate-600 leading-relaxed">
                {exercise.targetMuscles.join(', ')}
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <span className="font-semibold text-slate-700 block">Material Recomendado:</span>
              <p className="text-slate-600 capitalize">
                {exercise.equipment.map((e) => e.replace(/_/g, ' ')).join(', ')}
              </p>
            </div>
          </div>

          {/* Step-by-step Execution */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-600">
              Paso a Paso
            </h3>
            <ol className="space-y-2 text-xs text-slate-700">
              {exercise.instructions.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-mono text-[11px] font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Technique Cues */}
          <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-200/60 text-xs">
            <span className="font-semibold text-slate-800 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              Detalles Críticos de Técnica:
            </span>
            <ul className="space-y-1 text-slate-600">
              {exercise.techniqueCues.map((cue, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span>{cue}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Red flags */}
          <div className="space-y-2 p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs">
            <span className="font-semibold text-rose-900 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              Precauciones y Señales de Suspensión:
            </span>
            <ul className="space-y-1 text-rose-800">
              {exercise.alarmFlags.map((flag, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-rose-400">•</span>
                  <span>{flag}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Cerrar
          </button>
          {onStartSingle && (
            <button
              onClick={() => {
                onClose();
                onStartSingle(exercise);
              }}
              className="px-5 py-2.5 bg-cyan-700 hover:bg-cyan-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-all flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Practicar este ejercicio con temporizador</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
