import React, { useState } from 'react';
import { Exercise, PhaseType, EquipmentType } from '../types';
import { EXERCISES_DATABASE, PHASE_CONFIG } from '../data/exercisesData';
import { Play, Sparkles, Eye, Filter, ArrowRight } from 'lucide-react';

interface Props {
  onSelectExercise: (exercise: Exercise) => void;
  onStartFullRoutine: (exercises: Exercise[]) => void;
}

export const ExerciseCatalog: React.FC<Props> = ({ onSelectExercise, onStartFullRoutine }) => {
  const [selectedPhase, setSelectedPhase] = useState<'all' | PhaseType>('all');
  const [selectedEquipment, setSelectedEquipment] = useState<'all' | 'con_goma' | 'sin_material'>('all');

  const filteredExercises = EXERCISES_DATABASE.filter((ex) => {
    if (selectedPhase !== 'all' && ex.phase !== selectedPhase) return false;
    if (selectedEquipment === 'con_goma' && !ex.equipment.some((eq) => eq.includes('banda') || eq.includes('miniband'))) return false;
    if (selectedEquipment === 'sin_material' && !ex.equipment.includes('ninguno') && !ex.equipment.includes('esterilla')) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Controls & Filter Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 md:p-6 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              Protocolo de Ejercicios por Fases
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-0.5">
              Desde la descompresión pasiva con bandas hasta la estabilización activa del glúteo medio.
            </p>
          </div>

          <button
            onClick={() => onStartFullRoutine(filteredExercises)}
            className="px-5 py-2.5 bg-cyan-700 hover:bg-cyan-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 self-start md:self-auto shrink-0"
          >
            <Play className="w-3.5 h-3.5" />
            <span>Iniciar Rutina Guiada ({filteredExercises.length} ejercicios)</span>
          </button>
        </div>

        {/* Phase Filter Tabs (Segmented control) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
          <button
            onClick={() => setSelectedPhase('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              selectedPhase === 'all'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Todos ({EXERCISES_DATABASE.length})
          </button>
          <button
            onClick={() => setSelectedPhase('fase1_descompresion')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              selectedPhase === 'fase1_descompresion'
                ? 'bg-cyan-600 text-white shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Fase 1: Descompresión y Tracción
          </button>
          <button
            onClick={() => setSelectedPhase('fase2_estabilizacion')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              selectedPhase === 'fase2_estabilizacion'
                ? 'bg-emerald-600 text-white shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Fase 2: Estabilización Glútea
          </button>
          <button
            onClick={() => setSelectedPhase('fase3_funcional')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              selectedPhase === 'fase3_funcional'
                ? 'bg-indigo-600 text-white shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Fase 3: Integración y Marcha
          </button>
        </div>

        {/* Equipment Filter Chips */}
        <div className="flex items-center gap-3 pt-1 text-xs text-slate-500">
          <span className="flex items-center gap-1 text-slate-600">
            <Filter className="w-3.5 h-3.5" />
            Filtrar material:
          </span>
          <button
            onClick={() => setSelectedEquipment('all')}
            className={`hover:text-slate-900 transition-colors ${selectedEquipment === 'all' ? 'text-slate-900 font-semibold underline' : ''}`}
          >
            Cualquiera
          </button>
          <span aria-hidden="true">·</span>
          <button
            onClick={() => setSelectedEquipment('con_goma')}
            className={`hover:text-slate-900 transition-colors ${selectedEquipment === 'con_goma' ? 'text-cyan-700 font-semibold underline' : ''}`}
          >
            Con Goma / Banda
          </button>
          <span aria-hidden="true">·</span>
          <button
            onClick={() => setSelectedEquipment('sin_material')}
            className={`hover:text-slate-900 transition-colors ${selectedEquipment === 'sin_material' ? 'text-slate-900 font-semibold underline' : ''}`}
          >
            Sin Material / Corporal
          </button>
        </div>
      </div>

      {/* Grid of Exercises */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredExercises.map((exercise) => {
          const phaseMeta = PHASE_CONFIG[exercise.phase];
          const hasBand = exercise.equipment.some((eq) => eq.includes('banda') || eq.includes('miniband'));

          return (
            <div
              key={exercise.id}
              className="bg-white rounded-2xl border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-5 space-y-3">
                {/* Clean unboxed metadata with dot separators */}
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-slate-700">Fase {exercise.phaseNumber}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exercise.sets} series</span>
                    <span aria-hidden="true">·</span>
                    <span>{exercise.repsOrTime}</span>
                  </div>
                  {hasBand && (
                    <span className="text-cyan-700 font-medium">Requiere Goma</span>
                  )}
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-cyan-700 transition-colors leading-snug">
                    {exercise.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {exercise.subtitle}
                  </p>
                </div>

                {/* Biomechanical Opening snippet */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 space-y-1">
                  <span className="text-[11px] font-semibold text-cyan-800 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-cyan-600" />
                    Efecto mecánico:
                  </span>
                  <p className="line-clamp-2 text-slate-600 text-[11px] leading-relaxed">
                    {exercise.whyItRelieves}
                  </p>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-4 bg-slate-50/60 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectExercise(exercise)}
                  className="px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 transition-colors flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-slate-400" />
                  <span>Ver Técnica y Guía</span>
                </button>

                <button
                  onClick={() => onSelectExercise(exercise)}
                  className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-2xs transition-all flex items-center gap-1"
                >
                  <span>Practicar</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
