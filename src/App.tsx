import React, { useState } from 'react';
import { Exercise } from './types';
import { EXERCISES_DATABASE } from './data/exercisesData';
import { TopNav, NavTab } from './components/TopNav';
import { BiomechanicalSimulator } from './components/BiomechanicalSimulator';
import { ExerciseCatalog } from './components/ExerciseCatalog';
import { ExerciseDetailModal } from './components/ExerciseDetailModal';
import { RoutinePlayer } from './components/RoutinePlayer';
import { RoutineCustomizer } from './components/RoutineCustomizer';
import { ClinicalGuide } from './components/ClinicalGuide';
import { SymptomTracker } from './components/SymptomTracker';
import { ClinicalAdvisorChat } from './components/ClinicalAdvisorChat';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  HelpCircle,
  Play,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('simulador');
  const [activeExerciseModal, setActiveExerciseModal] = useState<Exercise | null>(null);
  const [activeWorkoutList, setActiveWorkoutList] = useState<Exercise[] | null>(null);

  // Quick launch default recommended decompression & stabilization routine
  const startDefaultRoutine = () => {
    const routine = EXERCISES_DATABASE.filter((ex) =>
      [
        'traccion-lateral-cuadrupedia',
        'descompresion-axial-supino',
        'puente-gluteo-abduccion-banda',
        'abduccion-decubito-lateral-30flex',
        'monster-walk-semisentadilla',
      ].includes(ex.id)
    );
    setActiveWorkoutList(routine);
  };

  const startSingleExercise = (exercise: Exercise) => {
    setActiveWorkoutList([exercise]);
  };

  const handleFinishWorkout = (summary: { completedCount: number; minutes: number }) => {
    setActiveWorkoutList(null);
    setActiveTab('diario');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top Bar adhering to Constitution */}
      <TopNav
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveWorkoutList(null);
          setActiveTab(tab);
        }}
        onStartRoutine={startDefaultRoutine}
      />

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 md:py-8">
        {/* Workout Runner Mode Overlay if active */}
        {activeWorkoutList ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Sesión de Entrenamiento Activa
              </span>
              <button
                onClick={() => setActiveWorkoutList(null)}
                className="text-xs font-medium text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg bg-slate-200/70 hover:bg-slate-200 transition-colors"
              >
                Salir de la Rutina
              </button>
            </div>
            <RoutinePlayer
              exercises={activeWorkoutList}
              onFinishWorkout={handleFinishWorkout}
              onExit={() => setActiveWorkoutList(null)}
            />
          </div>
        ) : (
          <>
            {/* View: Simulator (Home) */}
            {activeTab === 'simulador' && (
              <div className="space-y-8">
                {/* Hero Introduction */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950 text-white p-8 md:p-12 shadow-md">
                  <div className="max-w-3xl space-y-4 relative z-10">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-400">
                      <span>BIOMECÁNICA CLÍNICA DE LA CADERA</span>
                      <span aria-hidden="true">·</span>
                      <span>PINZAMIENTO ISQUIOFEMORAL</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                      Descompresión articular y estabilidad para el espacio isquiofemoral.
                    </h1>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                      Si los ejercicios de tracción con gomas elásticas te producen alivio inmediato, estás experimentando el efecto directo de la 
                      <strong> decoaptación lateral del fémur</strong>: abrir milímetros críticos entre el trocánter menor y el isquion para liberar el músculo cuadrado femoral y el nervio ciático.
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-4">
                      <button
                        onClick={startDefaultRoutine}
                        className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
                      >
                        <Play className="w-4 h-4 fill-current" />
                        <span>Comenzar Rutina de Descompresión (15 min)</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('guia')}
                        className="px-5 py-3 bg-white/10 hover:bg-white/15 text-white font-medium text-xs rounded-xl transition-all border border-white/10"
                      >
                        Leer Manual Clínico y Criterios RMN
                      </button>
                    </div>
                  </div>

                  {/* Subtle graphical background pattern */}
                  <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12">
                    <svg width="400" height="400" viewBox="0 0 200 200">
                      <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="2" fill="none" />
                      <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                      <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="1.5" fill="none" />
                    </svg>
                  </div>
                </div>

                {/* Interactive Simulator Section */}
                <BiomechanicalSimulator onSelectPhase={() => setActiveTab('ejercicios')} />

                {/* 3 Pillars Summary Cards */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900">
                      El Protocolo Terapéutico en 3 Fases
                    </h3>
                    <button
                      onClick={() => setActiveTab('ejercicios')}
                      className="text-xs font-semibold text-cyan-700 hover:text-cyan-800 flex items-center gap-1"
                    >
                      <span>Ver los {EXERCISES_DATABASE.length} ejercicios</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-all space-y-3">
                      <div className="w-8 h-8 rounded-xl bg-cyan-100 text-cyan-800 font-mono font-bold text-xs flex items-center justify-center">
                        01
                      </div>
                      <h4 className="text-base font-bold text-slate-900">
                        Descompresión Inmediata
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Tracción lateral y longitudinal con banda elástica en decúbito y cuadrupedia. Abre el espacio y permite la revascularización del cuadrado femoral.
                      </p>
                      <span className="text-[11px] font-semibold text-cyan-700 block">
                        Alivio sintomático y decoaptación
                      </span>
                    </div>

                    <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-all space-y-3">
                      <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 font-mono font-bold text-xs flex items-center justify-center">
                        02
                      </div>
                      <h4 className="text-base font-bold text-slate-900">
                        Estabilización del Glúteo Medio
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Fortalecimiento de abductores en rangos que evitan la extensión. Impide la caída contralateral de la pelvis (signo de Trendelenburg).
                      </p>
                      <span className="text-[11px] font-semibold text-emerald-700 block">
                        Mantiene el espacio abierto de forma activa
                      </span>
                    </div>

                    <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-all space-y-3">
                      <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-800 font-mono font-bold text-xs flex items-center justify-center">
                        03
                      </div>
                      <h4 className="text-base font-bold text-slate-900">
                        Integración y Reeducación
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Modificación del patrón de zancada (acortar paso, evitar cruce de pies) y ejercicios monopodales con pelvis estrictamente nivelada.
                      </p>
                      <span className="text-[11px] font-semibold text-indigo-700 block">
                        Prevención de recidivas en la vida diaria
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* View: Exercise Catalog */}
            {activeTab === 'ejercicios' && (
              <ExerciseCatalog
                onSelectExercise={(exercise) => setActiveExerciseModal(exercise)}
                onStartFullRoutine={(exercises) => setActiveWorkoutList(exercises)}
              />
            )}

            {/* View: Routine Customizer & Presets */}
            {activeTab === 'rutinas' && (
              <RoutineCustomizer
                onStartRoutine={(exercises) => setActiveWorkoutList(exercises)}
              />
            )}

            {/* View: Clinical Guide */}
            {activeTab === 'guia' && <ClinicalGuide />}

            {/* View: Symptom Tracker */}
            {activeTab === 'diario' && <SymptomTracker />}

            {/* View: AI Clinical Advisor */}
            {activeTab === 'chat' && <ClinicalAdvisorChat />}
          </>
        )}
      </main>

      {/* Exercise Detail Modal */}
      <ExerciseDetailModal
        exercise={activeExerciseModal}
        onClose={() => setActiveExerciseModal(null)}
        onStartSingle={(ex) => startSingleExercise(ex)}
      />

      {/* Subtle Clinical Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-6 px-4 sm:px-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <p className="font-semibold text-slate-700">
              IsquioFemoral Care · Protocolo Fisioterapéutico de Descompresión Articular
            </p>
            <p className="text-[11px] text-slate-600">
              Desarrollado según criterios de biomecánica ortopédica para el conflicto del espacio isquiofemoral y del cuadrado femoral.
            </p>
          </div>

          <div className="text-[11px] text-slate-600 max-w-md">
            Nota de responsabilidad: Esta aplicación no sustituye una consulta médica individualizada. El diagnóstico definitivo de pinzamiento isquiofemoral requiere confirmación por Resonancia Magnética (RMN).
          </div>
        </div>
      </footer>
    </div>
  );
}
