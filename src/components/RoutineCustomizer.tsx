import React, { useState } from 'react';
import { Exercise } from '../types';
import { EXERCISES_DATABASE } from '../data/exercisesData';
import { Play, Sparkles, CheckSquare, Square, Printer, Clock, Layers } from 'lucide-react';

interface Props {
  onStartRoutine: (exercises: Exercise[]) => void;
}

export const RoutineCustomizer: React.FC<Props> = ({ onStartRoutine }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    'traccion-lateral-cuadrupedia',
    'descompresion-axial-supino',
    'neurodinamica-ciatico-slider',
    'puente-gluteo-abduccion-banda',
    'abduccion-decubito-lateral-30flex',
  ]);

  // Presets definition
  const applyPreset = (presetName: 'alivio_rapido' | 'completo' | 'pre_marcha') => {
    switch (presetName) {
      case 'alivio_rapido':
        setSelectedIds([
          'traccion-lateral-cuadrupedia',
          'descompresion-axial-supino',
          'neurodinamica-ciatico-slider',
        ]);
        break;
      case 'completo':
        setSelectedIds([
          'traccion-lateral-cuadrupedia',
          'descompresion-axial-supino',
          'puente-gluteo-abduccion-banda',
          'abduccion-decubito-lateral-30flex',
          'monster-walk-semisentadilla',
          'reverse-clamshell-rotacion-interna',
        ]);
        break;
      case 'pre_marcha':
        setSelectedIds([
          'traccion-lateral-cuadrupedia',
          'puente-gluteo-abduccion-banda',
          'monster-walk-semisentadilla',
          'reeducacion-marcha-higiene',
        ]);
        break;
    }
  };

  const toggleExercise = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length === 1) return; // keep at least 1
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectedExercises = EXERCISES_DATABASE.filter((ex) => selectedIds.includes(ex.id));

  // Calculate estimated duration
  const estimatedMinutes = Math.round(
    selectedExercises.reduce((acc, ex) => acc + (ex.sets * (ex.durationSeconds || 45) + (ex.sets - 1) * 20), 0) / 60
  );

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Configuration Header Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 mb-1">
              <Clock className="w-4 h-4" />
              <span>Configurador de Rutina a Medida</span>
              <span aria-hidden="true">·</span>
              <span>~{estimatedMinutes} minutos estimados</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
              Personaliza tu Sesión de Ejercicios
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              Elige un protocolo prediseñado según tu tiempo o selecciona ejercicios específicos de decoaptación y fuerza.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2.5 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
              title="Imprimir o guardar protocolo en PDF"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={() => onStartRoutine(selectedExercises)}
              className="px-5 py-2.5 bg-cyan-700 hover:bg-cyan-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-all flex items-center gap-2 shrink-0"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Comenzar ({selectedExercises.length} ejer.)</span>
            </button>
          </div>
        </div>

        {/* Preset Cards Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3">
          <button
            onClick={() => applyPreset('alivio_rapido')}
            className="p-4 rounded-xl border border-cyan-200 bg-cyan-50/50 hover:bg-cyan-50 transition-all text-left space-y-1 group"
          >
            <span className="text-xs font-bold text-cyan-900 flex items-center justify-between">
              <span>Alivio Inmediato Express</span>
              <span className="text-[11px] font-mono text-cyan-700 font-normal">~8 min</span>
            </span>
            <p className="text-[11px] text-cyan-800 leading-relaxed">
              Enfocado 100% en decoaptación con bandas y deslizamiento neural. Ideal para crisis de dolor o tras estar mucho tiempo sentado.
            </p>
          </button>

          <button
            onClick={() => applyPreset('completo')}
            className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50 transition-all text-left space-y-1 group"
          >
            <span className="text-xs font-bold text-emerald-900 flex items-center justify-between">
              <span>Descompresión + Glúteo Medio</span>
              <span className="text-[11px] font-mono text-emerald-700 font-normal">~18 min</span>
            </span>
            <p className="text-[11px] text-emerald-800 leading-relaxed">
              Tracción con gomas seguida de activación abductora sin colapso pélvico. Protocolo recomendado de mantenimiento.
            </p>
          </button>

          <button
            onClick={() => applyPreset('pre_marcha')}
            className="p-4 rounded-xl border border-indigo-200 bg-indigo-50/50 hover:bg-indigo-50 transition-all text-left space-y-1 group"
          >
            <span className="text-xs font-bold text-indigo-900 flex items-center justify-between">
              <span>Activación Pre-Caminata</span>
              <span className="text-[11px] font-mono text-indigo-700 font-normal">~12 min</span>
            </span>
            <p className="text-[11px] text-indigo-800 leading-relaxed">
              Prepara el espacio isquiofemoral y despierta el glúteo para evitar el pinzamiento por zancada larga al salir a caminar.
            </p>
          </button>
        </div>
      </div>

      {/* Selectable Exercise Checklist */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-sm space-y-4">
        <div className="flex items-center justify-between text-xs">
          <h3 className="font-semibold uppercase tracking-wider text-slate-700">
            Lista de Ejercicios Disponibles
          </h3>
          <span className="text-slate-500 font-mono">
            {selectedExercises.length} de {EXERCISES_DATABASE.length} seleccionados
          </span>
        </div>

        <div className="divide-y divide-slate-100">
          {EXERCISES_DATABASE.map((ex) => {
            const isSelected = selectedIds.includes(ex.id);
            return (
              <div
                key={ex.id}
                onClick={() => toggleExercise(ex.id)}
                className={`py-3.5 px-3 rounded-xl flex items-center justify-between gap-4 cursor-pointer transition-colors ${
                  isSelected ? 'bg-cyan-50/40' : 'hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <button
                    type="button"
                    className="mt-0.5 text-cyan-700"
                    aria-label={isSelected ? 'Deseleccionar' : 'Seleccionar'}
                  >
                    {isSelected ? (
                      <CheckSquare className="w-4 h-4 text-cyan-700" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-300" />
                    )}
                  </button>
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-600 mb-0.5">
                      <span className="font-semibold text-slate-800">Fase {ex.phaseNumber}</span>
                      <span aria-hidden="true">·</span>
                      <span>{ex.sets} series × {ex.repsOrTime}</span>
                    </div>
                    <h4 className="text-xs md:text-sm font-bold text-slate-900 leading-snug">
                      {ex.name}
                    </h4>
                    <p className="text-[11px] text-slate-600 mt-0.5 line-clamp-1">
                      {ex.whyItRelieves}
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-slate-600 whitespace-nowrap shrink-0">
                  ~{Math.round((ex.sets * (ex.durationSeconds || 45)) / 60)} min
                </span>
              </div>
            );
          })}
        </div>

        <div className="pt-4 flex items-center justify-end">
          <button
            onClick={() => onStartRoutine(selectedExercises)}
            className="w-full sm:w-auto px-6 py-3 bg-cyan-700 hover:bg-cyan-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4" />
            <span>Iniciar Rutina Personalizada Ahora</span>
          </button>
        </div>
      </div>
    </div>
  );
};
