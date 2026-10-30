import React, { useState, useEffect } from 'react';
import { SymptomEntry } from '../types';
import { Plus, Trash2, TrendingDown, Check, Activity, Calendar, Sparkles, Info } from 'lucide-react';

const STORAGE_KEY = 'isquiofemoral_symptom_logs';

// Registros de ejemplo que versiones anteriores dejaron guardados en el navegador
const REMOVED_SAMPLE_IDS = ['sample-1', 'sample-2'];

// El valor más frecuente; en caso de empate, el más reciente (los registros van de nuevo a antiguo)
const mostFrequentRelief = (logs: SymptomEntry[]) => {
  const counts = new Map<SymptomEntry['tractionReliefEffect'], number>();
  logs.forEach((log) => counts.set(log.tractionReliefEffect, (counts.get(log.tractionReliefEffect) ?? 0) + 1));
  return [...counts.entries()].reduce<[SymptomEntry['tractionReliefEffect'], number] | null>(
    (best, entry) => (!best || entry[1] > best[1] ? entry : best),
    null
  );
};

export const SymptomTracker: React.FC = () => {
  const [logs, setLogs] = useState<SymptomEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return (JSON.parse(saved) as SymptomEntry[]).filter((log) => !REMOVED_SAMPLE_IDS.includes(log.id));
    } catch {}
    return [];
  });

  const [showAddForm, setShowAddForm] = useState(false);
  const [painBefore, setPainBefore] = useState(6);
  const [painAfter, setPainAfter] = useState(2);
  const [reliefEffect, setReliefEffect] = useState<'Alto' | 'Moderado' | 'Leve' | 'Sin cambios'>('Alto');
  const [sittingMinutes, setSittingMinutes] = useState(45);
  const [walkingStiffness, setWalkingStiffness] = useState<'Ninguna' | 'Leve' | 'Moderada' | 'Severa'>('Leve');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
    } catch {}
  }, [logs]);

  const handleAddEntry = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: SymptomEntry = {
      id: `log-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      painLevelBefore: painBefore,
      painLevelAfter: painAfter,
      tractionReliefEffect: reliefEffect,
      sittingToleranceMinutes: sittingMinutes,
      walkingStiffness,
      notes: notes.trim() || 'Sesión de tracción y estabilización realizada.',
    };

    setLogs([newEntry, ...logs]);
    setShowAddForm(false);
    setNotes('');
  };

  const handleDeleteEntry = (id: string) => {
    setLogs(logs.filter((item) => item.id !== id));
  };

  // Average pain reduction calculation
  const totalReduction = logs.reduce((acc, l) => acc + Math.max(0, l.painLevelBefore - l.painLevelAfter), 0);
  const avgReduction = logs.length > 0 ? (totalReduction / logs.length).toFixed(1) : '0';
  const commonRelief = mostFrequentRelief(logs);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Overview Metric Banner */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 mb-1">
              <Activity className="w-4 h-4" />
              <span>Diario Clínico de Síntomas</span>
              <span aria-hidden="true">·</span>
              <span>Escala EVA (0 - 10)</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
              Registro de Alivio y Evolución
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              Comprueba el impacto real de los ejercicios de tracción y estabilización en tu dolor diario.
            </p>
          </div>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-4 py-2.5 bg-cyan-700 hover:bg-cyan-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 self-start sm:self-auto shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>{showAddForm ? 'Cancelar' : 'Registrar Sesión'}</span>
          </button>
        </div>

        {/* Storage notice */}
        <div className="flex items-start gap-2 mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 leading-relaxed">
          <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
          <p>
            Tus registros se guardan solo en este navegador y no se envían a ningún servidor. No podrás verlos desde otro dispositivo u otro navegador, y se perderán si borras los datos de navegación.
          </p>
        </div>

        {/* Quick summary strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-600 block">
              Reducción Media de Dolor (EVA)
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold font-mono text-emerald-600 tabular-nums">
                {Number(avgReduction) > 0 ? `-${avgReduction}` : '0'} pts
              </span>
              <span className="text-xs text-slate-600">por sesión de tracción</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-600 block">
              Efecto de Alivio de la Goma
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold font-mono text-cyan-700">
                {commonRelief ? commonRelief[0] : 'Sin datos'}
              </span>
            </div>
            <span className="text-[11px] text-slate-600 mt-0.5 block">
              {commonRelief
                ? `Lo más frecuente: ${commonRelief[1]} de ${logs.length} ${logs.length === 1 ? 'sesión' : 'sesiones'}`
                : 'Registra una sesión para verlo aquí'}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-600 block">
              Sesiones Registradas
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold font-mono text-slate-900 tabular-nums">
                {logs.length}
              </span>
              <span className="text-xs text-slate-600">entradas guardadas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add New Entry Form */}
      {showAddForm && (
        <form
          onSubmit={handleAddEntry}
          className="bg-white rounded-2xl border border-cyan-200 p-6 md:p-8 shadow-sm space-y-6"
        >
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-800">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span>NUEVO REGISTRO DE SESIÓN DE DESCOMPRESIÓN</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pain Before Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-700">Dolor ANTES del ejercicio (EVA 0-10):</span>
                <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                  {painBefore} / 10
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                value={painBefore}
                onChange={(e) => setPainBefore(Number(e.target.value))}
                className="w-full accent-rose-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-600">
                <span>0 Sin dolor</span>
                <span>5 Molestia moderada</span>
                <span>10 Invalorable</span>
              </div>
            </div>

            {/* Pain After Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-700">Dolor TRAS la tracción / rutina (EVA 0-10):</span>
                <span className="font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  {painAfter} / 10
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                value={painAfter}
                onChange={(e) => setPainAfter(Number(e.target.value))}
                className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-600">
                <span className="text-emerald-700 font-semibold">0 Alivio total</span>
                <span>Diferencia: {painBefore - painAfter > 0 ? `-${painBefore - painAfter} pts` : 'Sin cambio'}</span>
                <span>10 Sin efecto</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Traction Relief Rating */}
            <div className="space-y-1.5 text-xs">
              <label className="font-semibold text-slate-700 block">Sensación de alivio de la goma:</label>
              <select
                value={reliefEffect}
                onChange={(e: any) => setReliefEffect(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-xs focus:ring-2 focus:ring-cyan-500"
              >
                <option value="Alto">Alto (Apertura y descanso evidente)</option>
                <option value="Moderado">Moderado (Disminuye la tensión)</option>
                <option value="Leve">Leve (Poco cambio)</option>
                <option value="Sin cambios">Sin cambios</option>
              </select>
            </div>

            {/* Sitting tolerance */}
            <div className="space-y-1.5 text-xs">
              <label className="font-semibold text-slate-700 block">Tolerancia sentado (minutos):</label>
              <input
                type="number"
                min="5"
                max="480"
                step="15"
                value={sittingMinutes}
                onChange={(e) => setSittingMinutes(Number(e.target.value))}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-xs focus:ring-2 focus:ring-cyan-500 font-mono"
              />
            </div>

            {/* Walking stiffness */}
            <div className="space-y-1.5 text-xs">
              <label className="font-semibold text-slate-700 block">Rigidez al dar zancadas:</label>
              <select
                value={walkingStiffness}
                onChange={(e: any) => setWalkingStiffness(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-xs focus:ring-2 focus:ring-cyan-500"
              >
                <option value="Ninguna">Ninguna (Marcha fluida)</option>
                <option value="Leve">Leve (Sensación de tirantez)</option>
                <option value="Moderada">Moderada (Pinzamiento al atrasar pierna)</option>
                <option value="Severa">Severa (Dolor agudo)</option>
              </select>
            </div>
          </div>

          {/* Notes textarea */}
          <div className="space-y-1.5 text-xs">
            <label className="font-semibold text-slate-700 block">Notas de la sesión / Observaciones:</label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ej: La tracción lateral durante 60 segundos quitó el pellizco al sentarme después."
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-xs focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-cyan-700 hover:bg-cyan-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-all"
            >
              Guardar en el Historial
            </button>
          </div>
        </form>
      )}

      {/* History Log Entries */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-600 px-1">
          Historial de Sesiones Registradas
        </h3>

        {logs.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-xs text-slate-600">
            No tienes registros todavía. Completa una sesión o pulsa "Registrar Sesión".
          </div>
        ) : (
          <div className="space-y-3">
            {logs.map((log) => {
              const diff = log.painLevelBefore - log.painLevelAfter;
              return (
                <div
                  key={log.id}
                  className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-2xs hover:border-slate-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-mono text-slate-700 font-semibold">{log.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>Alivio goma: <strong className="text-cyan-700">{log.tractionReliefEffect}</strong></span>
                      <span aria-hidden="true">·</span>
                      <span>Sentado: {log.sittingToleranceMinutes} min</span>
                      <span aria-hidden="true">·</span>
                      <span>Rigidez marcha: {log.walkingStiffness}</span>
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed">
                      {log.notes}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 self-end md:self-auto">
                    {/* Visual Comparison pill */}
                    <div className="flex items-center gap-2 text-xs bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                      <div className="text-center">
                        <span className="text-[10px] text-slate-600 block">Antes</span>
                        <span className="font-mono font-bold text-slate-800">{log.painLevelBefore}/10</span>
                      </div>
                      <span className="text-slate-400">→</span>
                      <div className="text-center">
                        <span className="text-[10px] text-emerald-700 block">Después</span>
                        <span className="font-mono font-bold text-emerald-700">{log.painLevelAfter}/10</span>
                      </div>
                      {diff > 0 && (
                        <span className="ml-1 text-emerald-700 font-mono font-semibold text-[11px]">
                          (-{diff})
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => handleDeleteEntry(log.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                      title="Eliminar registro"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
