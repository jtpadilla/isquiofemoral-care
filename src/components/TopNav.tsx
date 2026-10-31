import React from 'react';

export type NavTab = 'simulador' | 'ejercicios' | 'rutinas' | 'gimnasio' | 'guia' | 'chat';

interface Props {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onStartRoutine: () => void;
}

export const TopNav: React.FC<Props> = ({ activeTab, onSelectTab, onStartRoutine }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Brand title, one line */}
        <button
          onClick={() => onSelectTab('simulador')}
          className="text-lg font-bold tracking-tight text-slate-900 hover:text-cyan-800 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-600"></span>
          <span>IsquioFemoral Care</span>
        </button>

        {/* Zone 2: 4–5 nav links, 1–2 word labels, single-line */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600">
          <button
            onClick={() => onSelectTab('simulador')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              activeTab === 'simulador'
                ? 'text-cyan-700 border-cyan-600'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Simulador IFS
          </button>
          <button
            onClick={() => onSelectTab('ejercicios')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              activeTab === 'ejercicios'
                ? 'text-cyan-700 border-cyan-600'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Ejercicios
          </button>
          <button
            onClick={() => onSelectTab('rutinas')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              activeTab === 'rutinas'
                ? 'text-cyan-700 border-cyan-600'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Rutinas
          </button>
          <button
            onClick={() => onSelectTab('gimnasio')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              activeTab === 'gimnasio'
                ? 'text-cyan-700 border-cyan-600'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Gimnasio
          </button>
          <button
            onClick={() => onSelectTab('guia')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              activeTab === 'guia'
                ? 'text-cyan-700 border-cyan-600'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Guía Clínica
          </button>
          <button
            onClick={() => onSelectTab('chat')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              activeTab === 'chat'
                ? 'text-cyan-700 border-cyan-600'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Consultor IA
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onStartRoutine}
            className="px-4 py-2 text-xs font-semibold text-white bg-cyan-700 rounded-xl hover:bg-cyan-800 transition-colors shadow-2xs whitespace-nowrap shrink-0"
          >
            Iniciar Rutina
          </button>
        </div>
      </div>

      {/* Mobile nav scrollbar */}
      <div className="md:hidden flex items-center gap-4 px-4 py-2 overflow-x-auto border-t border-slate-100 text-xs font-medium text-slate-600">
        <button
          onClick={() => onSelectTab('simulador')}
          className={`whitespace-nowrap shrink-0 ${activeTab === 'simulador' ? 'text-cyan-700 font-bold' : ''}`}
        >
          Simulador
        </button>
        <button
          onClick={() => onSelectTab('ejercicios')}
          className={`whitespace-nowrap shrink-0 ${activeTab === 'ejercicios' ? 'text-cyan-700 font-bold' : ''}`}
        >
          Ejercicios
        </button>
        <button
          onClick={() => onSelectTab('rutinas')}
          className={`whitespace-nowrap shrink-0 ${activeTab === 'rutinas' ? 'text-cyan-700 font-bold' : ''}`}
        >
          Rutinas
        </button>
        <button
          onClick={() => onSelectTab('gimnasio')}
          className={`whitespace-nowrap shrink-0 ${activeTab === 'gimnasio' ? 'text-cyan-700 font-bold' : ''}`}
        >
          Gimnasio
        </button>
        <button
          onClick={() => onSelectTab('guia')}
          className={`whitespace-nowrap shrink-0 ${activeTab === 'guia' ? 'text-cyan-700 font-bold' : ''}`}
        >
          Guía Clínica
        </button>
        <button
          onClick={() => onSelectTab('chat')}
          className={`whitespace-nowrap shrink-0 ${activeTab === 'chat' ? 'text-cyan-700 font-bold' : ''}`}
        >
          Consultor IA
        </button>
      </div>
    </header>
  );
};
