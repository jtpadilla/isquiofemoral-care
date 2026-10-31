import React, { useState } from 'react';
import { Send, Sparkles, User, Bot, AlertCircle, RefreshCw, KeyRound } from 'lucide-react';
import { ADVISOR_GREETING, ADVISOR_SAMPLE_QUESTIONS, GEMINI_MODELS } from '../data/clinicalAdvisor';
import { DISCLAIMERS } from '../data/clinicalContent';
import { askGemini, clearApiKey, loadApiKey, loadModel, saveApiKey, saveModel } from '../utils/browserGemini';

const IS_STATIC_SITE = !!import.meta.env.VITE_STATIC_SITE;

interface Message {
  sender: 'user' | 'assistant';
  text: string;
}

export const ClinicalAdvisorChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'assistant',
      text: ADVISOR_GREETING
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState(loadApiKey);
  const [keyInput, setKeyInput] = useState('');
  const [rememberKey, setRememberKey] = useState(false);
  const [model, setModel] = useState(loadModel);
  const needsKey = IS_STATIC_SITE && !apiKey;

  const handleSelectModel = (selected: string) => {
    setModel(selected);
    saveModel(selected);
  };

  const handleSaveKey = () => {
    const key = keyInput.trim();
    if (!key) return;
    saveApiKey(key, rememberKey);
    setApiKey(key);
    setKeyInput('');
  };

  const handleClearKey = () => {
    clearApiKey();
    setApiKey(null);
    setRememberKey(false);
  };

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = { sender: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setLoading(true);

    const context = {
      suspectedCondition: 'Pinzamiento Isquiofemoral (Ischiofemoral Impingement)',
      reliefWithTractionBands: true,
      therapeuticGoals: ['Liberar espacio articular', 'Fortalecer musculatura estabilizadora pélvica']
    };

    // La versión estática (GitHub Pages) no tiene servidor: llama a Gemini con la clave del usuario
    if (IS_STATIC_SITE) {
      const reply = await askGemini(apiKey!, model, textToSend, context);
      setMessages((prev) => [...prev, { sender: 'assistant', text: reply }]);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: textToSend, context, model })
      });

      const data = await response.json();
      const botReply = data.reply || data.error || 'No se pudo obtener respuesta del consultor.';
      setMessages((prev) => [...prev, { sender: 'assistant', text: botReply }]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'assistant',
          text: 'Error de conexión con el servicio de consulta. Recuerda los principios clave: tracción lateral suave, evitar estiramientos bruscos de isquiotibiales y fortalecer glúteo medio en abducción sin extensión.'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col max-w-4xl mx-auto h-[700px]">
      {/* Header */}
      <div className="p-5 border-b border-slate-100 bg-slate-50/70 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-cyan-700 text-white flex items-center justify-center shadow-2xs">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-bold text-slate-900">Consultor Biomecánico Inteligente</h3>
              <select
                value={model}
                onChange={(e) => handleSelectModel(e.target.value)}
                disabled={loading}
                aria-label="Modelo de Gemini"
                className="text-[10px] font-mono font-medium text-cyan-800 bg-cyan-100/80 px-2 py-0.5 rounded cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
              >
                {GEMINI_MODELS.map(({ id, label }) => (
                  <option key={id} value={id}>{label}</option>
                ))}
              </select>
            </div>
            <p className="text-[11px] text-slate-500">
              Especializado en pinzamiento isquiofemoral, vectores de tracción y progresión funcional.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          {IS_STATIC_SITE && apiKey && (
            <button
              onClick={handleClearKey}
              className="px-2.5 py-1.5 text-[11px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 rounded-lg transition-all flex items-center gap-1.5"
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>Borrar clave</span>
            </button>
          )}
          <button
            onClick={() => {
              setMessages([
                {
                  sender: 'assistant',
                  text: 'Conversación reiniciada. ¿En qué duda biomecánica o técnica puedo ayudarte hoy?'
                }
              ]);
            }}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 rounded-lg transition-all"
            title="Reiniciar chat"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 p-5 overflow-y-auto space-y-4">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-3 ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-semibold ${
                m.sender === 'user'
                  ? 'bg-slate-900 text-white'
                  : 'bg-cyan-100 text-cyan-800'
              }`}
            >
              {m.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>
            <div
              className={`max-w-[80%] rounded-2xl p-4 text-xs leading-relaxed whitespace-pre-wrap ${
                m.sender === 'user'
                  ? 'bg-slate-900 text-white rounded-tr-none'
                  : 'bg-slate-50 border border-slate-200/80 text-slate-800 rounded-tl-none'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-2 text-xs text-slate-500 pl-10">
            <span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse"></span>
            <span>Analizando mecánica articular y preparando respuesta clínica...</span>
          </div>
        )}
      </div>

      {needsKey ? (
        /* API key form */
        <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
            <KeyRound className="w-4 h-4 text-cyan-700" />
            <span>Usa tu propia clave de la API de Gemini</span>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveKey();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="password"
              value={keyInput}
              onChange={(e) => setKeyInput(e.target.value)}
              placeholder="Pega aquí tu clave"
              aria-label="Clave de la API de Gemini"
              autoComplete="off"
              spellCheck={false}
              className="flex-1 min-w-0 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-cyan-500 transition-all"
            />
            <button
              type="submit"
              disabled={!keyInput.trim()}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                keyInput.trim()
                  ? 'bg-cyan-700 hover:bg-cyan-800 text-white'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              Usar clave
            </button>
          </form>
          <label className="flex items-start gap-2 text-[11px] text-slate-700">
            <input
              type="checkbox"
              checked={rememberKey}
              onChange={(e) => setRememberKey(e.target.checked)}
              className="mt-0.5"
            />
            <span>Recordar en este navegador. No lo actives en un equipo compartido: la clave se guarda sin cifrar.</span>
          </label>
          <div className="flex items-start gap-2 text-[11px] text-slate-600 leading-relaxed">
            <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600" />
            <p>
              Tu clave y tus preguntas se envían directamente a Google, no a esta aplicación, y se rigen por las condiciones de tu cuenta. En el plan gratuito, Google puede usar lo que escribas para mejorar sus productos y puede revisarlo personal humano, así que no incluyas datos personales ni de salud identificables. Si tu clave tiene la facturación activada, las consultas se cobran a tu cuenta.{' '}
              <a
                href="https://aistudio.google.com/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cyan-700 hover:text-cyan-800 underline"
              >
                Conseguir una clave en Google AI Studio
              </a>
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* Suggested chips */}
          <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center gap-2 overflow-x-auto text-[11px]">
            <span className="text-slate-400 whitespace-nowrap">Sugerencias:</span>
            {ADVISOR_SAMPLE_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg whitespace-nowrap shrink-0 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input bar */}
          <div className="p-4 border-t border-slate-100 bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pregunta sobre sensaciones, altura de la goma o ejercicios..."
                className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-cyan-500 transition-all"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className={`p-2.5 rounded-xl transition-all ${
                  input.trim() && !loading
                    ? 'bg-cyan-700 hover:bg-cyan-800 text-white'
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <span className="text-[10px] text-slate-400 mt-2 block text-center">
              {DISCLAIMERS.advisor}
            </span>
          </div>
        </>
      )}
    </div>
  );
};
