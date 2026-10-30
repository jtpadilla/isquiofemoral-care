import React, { useState, useEffect, useRef } from 'react';
import { Exercise } from '../types';
import { ExerciseVisual } from './ExerciseVisual';
import { AFFECTED_SIDE } from '../data/exerciseAnimations';
import { sounds } from '../utils/soundEffects';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle, 
  ChevronRight, 
  ChevronLeft, 
  Volume2, 
  VolumeX, 
  AlertOctagon, 
  Sparkles, 
  Check, 
  Info,
  Clock
} from 'lucide-react';

interface Props {
  exercises: Exercise[];
  onFinishWorkout?: (summary: { completedCount: number; minutes: number }) => void;
  onExit?: () => void;
}

export const RoutinePlayer: React.FC<Props> = ({ exercises, onFinishWorkout, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);
  const [selectedSide, setSelectedSide] = useState<'Afectada' | 'Izquierda' | 'Derecha'>('Afectada');
  const [secondsRemaining, setSecondsRemaining] = useState(exercises[0]?.durationSeconds || 45);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isResting, setIsResting] = useState(false);
  const [restRemaining, setRestRemaining] = useState(25);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [completedSetsMap, setCompletedSetsMap] = useState<Record<string, number>>({});
  const [isWorkoutCompleted, setIsWorkoutCompleted] = useState(false);
  const startTimeRef = useRef<number>(Date.now());

  const currentExercise = exercises[currentIndex];
  const targetSeconds = currentExercise?.durationSeconds || 45;

  // Handle timer countdown
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        if (isResting) {
          setRestRemaining((prev) => {
            if (prev <= 1) {
              if (soundEnabled) sounds.playReady();
              if (voiceEnabled) sounds.speak(`Siguiente serie: ${currentExercise.name}`);
              setIsResting(false);
              setSecondsRemaining(targetSeconds);
              return 25;
            }
            if (prev <= 4 && soundEnabled) sounds.playTick();
            return prev - 1;
          });
        } else {
          setSecondsRemaining((prev) => {
            if (prev <= 1) {
              if (soundEnabled) sounds.playComplete();
              // Finish current set
              handleSetCompleted();
              return 0;
            }
            if (prev <= 4 && soundEnabled) sounds.playTick();
            return prev - 1;
          });
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, isResting, soundEnabled, voiceEnabled, currentExercise, targetSeconds]);

  // When changing exercise
  useEffect(() => {
    if (currentExercise) {
      setSecondsRemaining(currentExercise.durationSeconds || 45);
      setCurrentSet(1);
      setIsTimerRunning(false);
      setIsResting(false);
      if (voiceEnabled) {
        sounds.speak(`Ejercicio: ${currentExercise.name}`);
      }
    }
  }, [currentIndex]);

  const handleSetCompleted = () => {
    const updatedSets = (completedSetsMap[currentExercise.id] || 0) + 1;
    setCompletedSetsMap({
      ...completedSetsMap,
      [currentExercise.id]: updatedSets,
    });

    if (currentSet < currentExercise.sets) {
      // Transition to rest
      setIsResting(true);
      setRestRemaining(25);
      setCurrentSet((prev) => prev + 1);
    } else {
      // Exercise finished!
      if (currentIndex < exercises.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        // Complete workout!
        setIsTimerRunning(false);
        setIsWorkoutCompleted(true);
        if (soundEnabled) sounds.playComplete();
        if (voiceEnabled) sounds.speak('¡Excelente! Has completado tu rutina de descompresión.');
      }
    }
  };

  const handleSkipRest = () => {
    setIsResting(false);
    setSecondsRemaining(targetSeconds);
    setIsTimerRunning(true);
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setIsResting(false);
    setSecondsRemaining(targetSeconds);
  };

  const progressPercentage = Math.round(
    ((currentIndex + (currentSet - 1) / (currentExercise?.sets || 1)) / exercises.length) * 100
  );

  if (isWorkoutCompleted) {
    const totalMinutes = Math.max(1, Math.round((Date.now() - startTimeRef.current) / 60000));
    return (
      <div className="bg-white rounded-2xl border border-slate-200/80 p-8 text-center max-w-2xl mx-auto shadow-sm space-y-6">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50/50">
          <CheckCircle className="w-8 h-8" />
        </div>
        <div>
          <span className="text-xs uppercase tracking-wider font-semibold text-emerald-600">
            Sesión Biomecánica Finalizada
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            ¡Rutina de Descompresión Completada con Éxito!
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Has completado {exercises.length} ejercicios enfocados en decoaptación y estabilidad de la articulación isquiofemoral.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 text-left border border-slate-200/60">
          <div>
            <span className="text-xs text-slate-600">Tiempo total:</span>
            <p className="text-lg font-bold font-mono text-slate-900">{totalMinutes} minutos</p>
          </div>
          <div>
            <span className="text-xs text-slate-600">Ejercicios realizados:</span>
            <p className="text-lg font-bold font-mono text-slate-900">{exercises.length} ejercicios</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-200 text-xs text-cyan-900 text-left space-y-1.5">
          <span className="font-semibold flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            Recomendación posterior:
          </span>
          <p>
            Al terminar la tracción, camina 1-2 minutos con zancada corta y base ligeramente ancha para que el sistema nervioso integre la nueva amplitud sin comprimir el canal isquiofemoral.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          {onFinishWorkout && (
            <button
              onClick={() => onFinishWorkout({ completedCount: exercises.length, minutes: totalMinutes })}
              className="w-full sm:w-auto px-6 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-all"
            >
              Registrar Sensaciones en el Diario de Síntomas
            </button>
          )}
          {onExit && (
            <button
              onClick={onExit}
              className="w-full sm:w-auto px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-all"
            >
              Volver al Menú Principal
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
      {/* Top Progress bar */}
      <div className="w-full bg-slate-100 h-1.5">
        <div
          className="bg-cyan-600 h-1.5 transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Header ribbon */}
      <div className="p-4 md:px-6 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-mono text-slate-500">
            Ejercicio {currentIndex + 1} de {exercises.length}
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span className="font-medium text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
            Fase {currentExercise.phaseNumber}: {currentExercise.phase === 'fase1_descompresion' ? 'Descompresión' : currentExercise.phase === 'fase2_estabilizacion' ? 'Estabilización' : 'Funcional'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Side selector */}
          <div className="flex items-center gap-1 p-0.5 bg-slate-100 rounded-lg">
            {(['Afectada', 'Izquierda', 'Derecha'] as const).map((side) => (
              <button
                key={side}
                onClick={() => setSelectedSide(side)}
                className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-all ${
                  selectedSide === side
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Pierna {side}
              </button>
            ))}
          </div>

          {/* Sound & Voice toggles */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-1.5 rounded-lg border transition-all ${
              soundEnabled
                ? 'bg-slate-100 text-slate-800 border-slate-200'
                : 'bg-white text-slate-400 border-slate-200'
            }`}
            title={soundEnabled ? 'Sonido activado' : 'Silenciar'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        {/* Left Column: Visual Diagram & Technique Guidance */}
        <div className="lg:col-span-7 p-6 md:p-8 space-y-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
              {currentExercise.name}
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              {currentExercise.subtitle}
            </p>
          </div>

          {/* Graphical Diagram Component */}
          <ExerciseVisual
            key={currentExercise.id}
            type={currentExercise.diagramType}
            side={selectedSide === 'Afectada' ? AFFECTED_SIDE : selectedSide === 'Derecha' ? 'right' : 'left'}
            playing={isTimerRunning && !isResting}
          />

          {/* Biomechanical Why It Relieves Callout */}
          <div className="p-4 rounded-xl bg-cyan-50/60 border border-cyan-200/70 text-xs text-cyan-950 space-y-1.5">
            <span className="font-semibold flex items-center gap-1.5 text-cyan-900">
              <Sparkles className="w-4 h-4 text-cyan-700" />
              Efecto Biomecánico de Apertura:
            </span>
            <p className="leading-relaxed text-cyan-900/90">
              {currentExercise.whyItRelieves}
            </p>
          </div>

          {/* Step-by-Step Technique Instructions */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Instrucciones de Ejecución
            </h3>
            <ol className="space-y-2 text-xs text-slate-700">
              {currentExercise.instructions.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-mono text-[11px] font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Alarm flags / Red flags to suspend */}
          <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-200/60 text-xs space-y-1.5">
            <span className="font-semibold text-rose-900 flex items-center gap-1.5">
              <AlertOctagon className="w-4 h-4 text-rose-600" />
              Señales de advertencia (suspender si ocurre):
            </span>
            <ul className="space-y-1 text-rose-800">
              {currentExercise.alarmFlags.map((flag, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>{flag}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Timer, Reps Counter, and Set Controls */}
        <div className="lg:col-span-5 p-6 md:p-8 bg-slate-50/50 flex flex-col justify-between space-y-6">
          {/* Work / Rest State Card */}
          <div className="text-center space-y-4">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-medium font-mono border bg-white border-slate-200 text-slate-700 shadow-2xs">
              {isResting ? 'Descanso entre Series' : `Serie ${currentSet} de ${currentExercise.sets}`}
            </div>

            {/* Huge Timer Clock */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-1">
                {isResting ? 'Tiempo de descanso restante' : 'Tiempo de tracción / trabajo'}
              </span>
              <div className="text-5xl md:text-6xl font-mono font-bold text-slate-900 tabular-nums">
                {isResting
                  ? `${restRemaining}s`
                  : `${Math.floor(secondsRemaining / 60)}:${(secondsRemaining % 60).toString().padStart(2, '0')}`}
              </div>
              <span className="text-xs text-slate-500 mt-2 block font-medium">
                {isResting ? 'Prepárate para la siguiente serie' : currentExercise.repsOrTime}
              </span>
            </div>

            {/* Play/Pause & Reset Controls */}
            <div className="flex items-center justify-center gap-3">
              {isResting ? (
                <button
                  onClick={handleSkipRest}
                  className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-all flex items-center gap-1.5"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>Saltar descanso y comenzar</span>
                </button>
              ) : (
                <>
                  <button
                    onClick={() => setIsTimerRunning(!isTimerRunning)}
                    className={`px-6 py-3 text-xs font-semibold rounded-xl shadow-xs transition-all flex items-center gap-2 ${
                      isTimerRunning
                        ? 'bg-amber-600 hover:bg-amber-700 text-white'
                        : 'bg-cyan-600 hover:bg-cyan-700 text-white'
                    }`}
                  >
                    {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{isTimerRunning ? 'Pausar Temporizador' : 'Iniciar Temporizador'}</span>
                  </button>

                  <button
                    onClick={resetTimer}
                    className="p-3 bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 rounded-xl transition-all"
                    title="Reiniciar tiempo"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Quick Checklist / Technique Cues */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-2">
            <span className="font-semibold text-slate-800 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-cyan-600" />
              Claves para asegurar la descompresión:
            </span>
            <ul className="space-y-1.5 text-slate-600">
              {currentExercise.techniqueCues.map((cue, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{cue}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation between exercises */}
          <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3">
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className={`px-3.5 py-2 text-xs font-medium rounded-xl border flex items-center gap-1 transition-all ${
                currentIndex === 0
                  ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <button
              onClick={handleSetCompleted}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-2xs transition-all flex items-center gap-1.5"
            >
              <span>{currentSet < currentExercise.sets ? 'Completar Serie' : 'Siguiente Ejercicio'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
