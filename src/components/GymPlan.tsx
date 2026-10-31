import React, { useState } from 'react';
import { AlertTriangle, Dumbbell, Search, ShieldAlert, TrendingUp } from 'lucide-react';
import { GYM_PLAN } from '../data/gymPlan';
import { RichText } from './RichText';

const STATUS_STYLES: Record<string, string> = {
  Recomendado: 'bg-emerald-100 text-emerald-800',
  'Con cautela': 'bg-amber-100 text-amber-800',
  'Evitar por ahora': 'bg-rose-100 text-rose-800',
  'Por revisar': 'bg-slate-200 text-slate-700',
};

const FILTERS = ['Todos', 'Recomendado', 'Con cautela', 'Evitar por ahora', 'Por revisar', 'Nuevo'];

const normalize = (text: string) => text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

const LabelledList: React.FC<{ items: { title: string; text: string }[] }> = ({ items }) => (
  <ul className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
    {items.map((item) => (
      <li key={item.title}>
        <span className="font-semibold text-slate-900">{item.title}:</span> {item.text}
      </li>
    ))}
  </ul>
);

export const GymPlan: React.FC = () => {
  const [dayIndex, setDayIndex] = useState(0);
  const [filter, setFilter] = useState('Todos');
  const [query, setQuery] = useState('');
  const day = GYM_PLAN.days[dayIndex];

  const catalog = GYM_PLAN.catalog.filter(
    (exercise) =>
      (filter === 'Todos' || exercise.status === filter || exercise.origin === filter) &&
      normalize(exercise.name).includes(normalize(query))
  );
  const groups = [...new Set(catalog.map((exercise) => exercise.group))];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-cyan-700 text-white flex items-center justify-center shrink-0">
            <Dumbbell className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Plan de gimnasio: dos días por semana</h2>
        </div>
        <p className="text-xs text-slate-700 leading-relaxed">
          <RichText text={GYM_PLAN.intro} strongClassName="font-semibold text-slate-900" />
        </p>
        <LabelledList items={GYM_PLAN.criteria} />
        <div className="p-3.5 rounded-xl bg-cyan-50 border border-cyan-200/70 text-xs text-cyan-950 leading-relaxed">
          <span className="font-semibold">Agradecimientos:</span> {GYM_PLAN.credits}{' '}
          <a
            href={GYM_PLAN.creditsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan-800 hover:text-cyan-900 underline"
          >
            Ver su página
          </a>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 space-y-4">
        <div className="flex gap-2" role="tablist" aria-label="Día de entrenamiento">
          {GYM_PLAN.days.map((option, index) => (
            <button
              key={option.title}
              role="tab"
              aria-selected={index === dayIndex}
              onClick={() => setDayIndex(index)}
              className={`flex-1 px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                index === dayIndex ? 'bg-cyan-700 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {option.title}
            </button>
          ))}
        </div>

        <ol className="space-y-2.5">
          {day.exercises.map((exercise) => (
            <li key={exercise.name} className="p-3.5 rounded-xl border border-slate-200/70 bg-slate-50/60 space-y-1.5">
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                <span className="text-xs font-bold text-slate-900">{exercise.name}</span>
                <span className="text-[11px] font-mono text-cyan-800">
                  {exercise.sets} × {exercise.reps}
                  {exercise.rest !== '-' && ` · ${exercise.rest}`}
                </span>
              </div>
              {exercise.block !== 'Principal' && (
                <span className="inline-block text-[10px] font-semibold text-slate-600 bg-slate-200/70 rounded px-1.5 py-0.5">{exercise.block}</span>
              )}
              <p className="text-[11px] text-slate-600 leading-relaxed">{exercise.cue}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 space-y-3">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-cyan-700" />
            Progresión
          </h3>
          <LabelledList items={GYM_PLAN.progression} />
        </div>
        <div className="bg-rose-50/60 rounded-2xl border border-rose-200/70 p-6 space-y-3">
          <h3 className="text-sm font-bold text-rose-900 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4" />
            Cuándo parar
          </h3>
          <LabelledList items={GYM_PLAN.stop} />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 space-y-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">Catálogo de ejercicios</h3>
          <p className="text-[11px] text-slate-600 mt-1 flex items-start gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-amber-600" />
            {GYM_PLAN.catalogIntro}
          </p>
        </div>
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar ejercicio..."
            aria-label="Buscar ejercicio"
            className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {FILTERS.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              aria-pressed={filter === option}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors ${
                filter === option ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {groups.length === 0 && <p className="text-xs text-slate-500">No hay ejercicios que coincidan.</p>}
        {groups.map((group) => (
          <div key={group} className="space-y-1.5">
            <h4 className="text-xs font-bold text-slate-900 pt-1">{group}</h4>
            <ul className="divide-y divide-slate-100">
              {catalog.filter((exercise) => exercise.group === group).map((exercise) => (
                <li key={exercise.name} className="py-2 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                    <span className="text-xs text-slate-800 font-medium">
                      {exercise.name}
                      {exercise.origin === 'Nuevo' && <span className="ml-1.5 text-[10px] font-semibold text-cyan-700">Nuevo</span>}
                    </span>
                    <span className={`text-[10px] font-semibold rounded px-1.5 py-0.5 ${STATUS_STYLES[exercise.status]}`}>{exercise.status}</span>
                  </div>
                  {exercise.note && <p className="text-[11px] text-slate-500 leading-relaxed">{exercise.note}</p>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
