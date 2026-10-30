import React, { useState } from 'react';
import {
  BookOpen,
  ShieldAlert,
  CheckCircle,
  AlertTriangle,
  FileText,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Sparkles
} from 'lucide-react';
import { GUIDE } from '../data/clinicalContent';
import { RichText } from './RichText';

const ACTIVITY_TONES = {
  good: { Icon: CheckCircle, cardClass: 'bg-emerald-50/70 border-emerald-200/60', titleClass: 'text-emerald-900', textClass: 'text-emerald-800' },
  caution: { Icon: AlertTriangle, cardClass: 'bg-amber-50/70 border-amber-200/60', titleClass: 'text-amber-900', textClass: 'text-amber-800' },
  avoid: { Icon: ShieldAlert, cardClass: 'bg-rose-50/70 border-rose-200/60', titleClass: 'text-rose-900', textClass: 'text-rose-800' },
};

const TRACTION_STEP_COLORS = ['text-rose-600', 'text-amber-600', 'text-cyan-700', 'text-emerald-600'];

export const ClinicalGuide: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Hero Guide Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-700">
          <BookOpen className="w-4 h-4" />
          <span>Manual Clínico y Fisioterapéutico</span>
          <span aria-hidden="true">·</span>
          <span>Actualizado 2026</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Entendiendo el Pinzamiento Isquiofemoral (IFI)
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          <RichText text={GUIDE.intro} />
        </p>
      </div>

      {/* Red Line Rules (What NEVER to do) */}
      <div className="bg-white rounded-2xl border border-rose-200/90 p-6 md:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-700">
          <ShieldAlert className="w-4 h-4" />
          <span>ERRORES FRECUENTES QUE AGRAVAN EL PINZAMIENTO</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900">
          Qué debes EVITAR estrictamente durante la rehabilitación
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {GUIDE.avoid.map((rule, idx) => (
            <div key={rule.title} className="p-4 rounded-xl bg-rose-50/70 border border-rose-200/60 space-y-1.5">
              <span className="font-bold text-rose-900 block">
                {idx + 1}. ❌ {rule.title}
              </span>
              <p className="text-rose-800 leading-relaxed">
                {rule.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Biomechanical Traction Rationale */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700">
          <Sparkles className="w-4 h-4" />
          <span>EL PRINCIPIO BIOMECÁNICO DEL ALIVIO</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900">
          ¿Por qué la tracción con goma elástica te genera tanto alivio?
        </h3>
        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
          <RichText text={GUIDE.tractionIntro} />
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-700 space-y-2">
          {GUIDE.tractionSteps.map((step, idx) => (
            <div key={step.title} className="flex items-center gap-2">
              <span className={`${TRACTION_STEP_COLORS[idx % TRACTION_STEP_COLORS.length]} font-bold`}>{idx + 1}. {step.title}</span>
              <span>→ {step.text}</span>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          <RichText text={GUIDE.tractionLongTerm} />
        </p>
      </div>

      {/* Postural & Daily Living Adjustments */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Guía de Higiene Postural en la Vida Cotidiana
        </h3>

        <div className="space-y-3 text-xs text-slate-700">
          {GUIDE.posture.map((tip) => (
            <div key={tip.title} className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900 block mb-0.5">{tip.title}:</span>
                <span>{tip.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sports & Physical Activity */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Actividad Física y Deporte
        </h3>
        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
          <RichText text={GUIDE.activityIntro} />
        </p>

        <div className="space-y-4 text-xs">
          {GUIDE.activityGroups.map(({ title, tone, activities }) => {
            const { Icon, cardClass, titleClass, textClass } = ACTIVITY_TONES[tone];
            return (
              <div key={title} className={`p-4 rounded-xl border space-y-3 ${cardClass}`}>
                <div className={`flex items-center gap-2 font-bold ${titleClass}`}>
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{title}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activities.map((activity) => (
                    <div key={activity.title} className="space-y-0.5">
                      <span className={`font-semibold block ${titleClass}`}>{activity.title}</span>
                      <p className={`leading-relaxed ${textClass}`}>{activity.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 text-xs text-slate-700 leading-relaxed space-y-1.5">
          {GUIDE.activityWarnings.map((warning) => (
            <p key={warning}>
              <RichText text={warning} strongClassName="text-slate-900" />
            </p>
          ))}
        </div>
      </div>

      {/* Accordion FAQ */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Preguntas Frecuentes y Dudas Clínicas
        </h3>

        <div className="divide-y divide-slate-100">
          {GUIDE.faqs.map((faq, idx) => (
            <div key={idx} className="py-3.5 first:pt-0 last:pb-0">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left text-xs md:text-sm font-semibold text-slate-800 hover:text-cyan-700 transition-colors"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                )}
              </button>
              {openFaq === idx && (
                <p className="text-xs text-slate-600 mt-2 leading-relaxed pl-1">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
