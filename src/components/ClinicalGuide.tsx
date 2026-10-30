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

export const ClinicalGuide: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Por qué la resonancia magnética es la prueba definitiva?',
      a: 'La RMN pélvica permite medir con precisión milimétrica el Espacio Isquiofemoral (IFS) y el Espacio del Cuadrado Femoral (QFS). Un IFS menor a 15 mm (normal ~23 mm) y un QFS menor a 10 mm en presencia de edema de señal alta (T2/STIR) en el vientre muscular del cuadrado femoral confirman el diagnóstico.'
    },
    {
      q: '¿Por qué siento dolor tipo "ciática" o calambre si el problema es en la cadera?',
      a: 'El nervio ciático desciende inmediatamente posterior al músculo cuadrado femoral dentro del estrecho túnel isquiofemoral. Cuando el espacio se reduce o el músculo se inflama (edema), el nervio sufre compresión mecánica e isquemia local, generando pseudociática o dolor irradiado por la cara posterior del muslo.'
    },
    {
      q: '¿Por qué los estiramientos tradicionales de isquiotibiales empeoran mi dolor?',
      a: 'Al doblar el tronco hacia adelante con piernas estiradas, la tuberosidad isquiática bascula hacia atrás y arriba, comprimiendo con fuerza brutal los tejidos profundos contra el fémur. Estirar los isquiotibiales de forma pasiva es uno de los errores más frecuentes que cronifican el pinzamiento isquiofemoral.'
    },
    {
      q: '¿Cuánto tiempo al día debo aplicar los ejercicios de tracción con goma?',
      a: 'Se recomiendan de 2 a 3 series de 45-60 segundos por sesión, 1 o 2 veces al día (por ejemplo por la mañana y al terminar el día). La tracción no debe forzarse con dolor, sino experimentarse como una suave apertura y alivio descompresivo.'
    }
  ];

  const activityGroups = [
    {
      title: 'Suelen tolerarse mejor',
      Icon: CheckCircle,
      cardClass: 'bg-emerald-50/70 border-emerald-200/60',
      titleClass: 'text-emerald-900',
      textClass: 'text-emerald-800',
      activities: [
        { name: 'Bicicleta estática o de paseo', note: 'La cadera trabaja en flexión y no llega a la extensión. Si el sillín presiona la zona dolorosa, ajústalo o acorta las sesiones. Mantén las rodillas alineadas, sin cerrarlas.' },
        { name: 'Caminar en el agua y ejercicios acuáticos suaves', note: 'El agua reduce la carga. Mantén el paso corto y sin cruzar las piernas.' },
        { name: 'Ejercicios de esta guía', note: 'Trabajan el glúteo medio sin llevar la cadera a la extensión forzada. Sigue la progresión por fases.' }
      ]
    },
    {
      title: 'Posibles con adaptaciones',
      Icon: AlertTriangle,
      cardClass: 'bg-amber-50/70 border-amber-200/60',
      titleClass: 'text-amber-900',
      textClass: 'text-amber-800',
      activities: [
        { name: 'Caminar', note: 'Paso corto, pies sobre dos raíles paralelos y sin arrastrar la pierna hacia atrás. Aumenta la distancia de forma gradual.' },
        { name: 'Elíptica', note: 'La zancada la marca la máquina y puede llevar la pierna demasiado atrás. Elige la zancada más corta, poca resistencia y sesiones breves al principio. Déjala si reproduce el dolor.' },
        { name: 'Musculación', note: 'Prioriza máquinas y rangos controlados: abductores, prensa y sentadilla sin que las rodillas se cierren. Evita la máquina de aductores. En el hip thrust y el puente, no pases de la línea del cuerpo.' },
        { name: 'Natación', note: 'Empieza con crol o espalda suaves y patada corta. Evita la braza mientras sea dolorosa, porque su patada combina aducción y rotación.' },
        { name: 'Yoga y pilates', note: 'Avisa a tu instructor y omite la postura de la paloma, las flexiones hacia delante con piernas estiradas, las posturas de zancada amplia y las extensiones de cadera forzadas.' }
      ]
    },
    {
      title: 'Mejor evitar mientras haya síntomas',
      Icon: ShieldAlert,
      cardClass: 'bg-rose-50/70 border-rose-200/60',
      titleClass: 'text-rose-900',
      textClass: 'text-rose-800',
      activities: [
        { name: 'Correr, sobre todo a ritmo rápido', note: 'La zancada larga repite la extensión de cadera en cada paso. Retómalo de forma progresiva, con pasos cortos y con supervisión profesional.' },
        { name: 'Zancadas y sentadilla búlgara', note: 'Colocan la pierna retrasada justo en la posición que cierra el espacio.' },
        { name: 'Peso muerto pesado', note: 'Pospón la carga elevada. El peso muerto a una pierna de la fase 3 se reserva para cuando las fases anteriores ya no den síntomas.' },
        { name: 'Fútbol, artes marciales y deportes de patada', note: 'Combinan extensión rápida de cadera, cambios de dirección y cruces de pierna.' },
        { name: 'Pádel, tenis y baloncesto', note: 'Incluyen zancadas amplias, frenadas y giros difíciles de controlar.' }
      ]
    }
  ];

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
          El pinzamiento isquiofemoral es una causa extraarticular frecuentemente subdiagnosticada de dolor en la nalga y cadera posterior.
          Ocurre por un estrechamiento mecánico del espacio comprendido entre la <strong>tuberosidad isquiática</strong> (el hueso sobre el que nos sentamos) 
          y el <strong>trocánter menor del fémur</strong>, atrapando al músculo <strong>cuadrado femoral</strong> y comprimiendo el <strong>nervio ciático</strong>.
        </p>
      </div>

      {/* The 4 Red Line Rules (What NEVER to do) */}
      <div className="bg-white rounded-2xl border border-rose-200/90 p-6 md:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-700">
          <ShieldAlert className="w-4 h-4" />
          <span>ERRORES FRECUENTES QUE AGRAVAN EL PINZAMIENTO</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900">
          Qué debes EVITAR estrictamente durante la rehabilitación
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200/60 space-y-1.5">
            <span className="font-bold text-rose-900 block">
              1. ❌ Estiramientos clásicos de isquiotibiales hacia adelante
            </span>
            <p className="text-rose-800 leading-relaxed">
              Inclinarse hacia los dedos de los pies aplasta el vientre del cuadrado femoral y tensa el nervio ciático irritado. Sustitúyelo siempre por deslizamientos neurodinámicos sin tensión (sliders).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200/60 space-y-1.5">
            <span className="font-bold text-rose-900 block">
              2. ❌ Sentarse con las piernas cruzadas
            </span>
            <p className="text-rose-800 leading-relaxed">
              Cruzar las piernas coloca la cadera en aducción profunda y rotación extrema, cerrando al mínimo el espacio isquiofemoral. Mantén siempre las rodillas separadas y apoyadas en superficies con soporte.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200/60 space-y-1.5">
            <span className="font-bold text-rose-900 block">
              3. ❌ Zancadas largas hacia atrás o hiperextensión
            </span>
            <p className="text-rose-800 leading-relaxed">
              En cada zancada larga de marcha o carrera, la pierna retrasada entra en hiperextensión + aducción, produciendo un impacto repetitivo del trocánter menor contra el isquion.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200/60 space-y-1.5">
            <span className="font-bold text-rose-900 block">
              4. ❌ Asientos duros sin almohadilla isquiática
            </span>
            <p className="text-rose-800 leading-relaxed">
              El apoyo directo sobre superficies rígidas comprime el túnel isquiofemoral inferior. Utiliza un cojín o toalla doblada bajo los muslos para descargar la tuberosidad isquiática.
            </p>
          </div>
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
          Cuando una articulación presenta un conflicto de choque óseo, la respuesta fisiológica automática es la contractura refleja de los rotadores profundos para "bloquear" la articulación.
          Esto crea un <strong>círculo vicioso patomecánico</strong>:
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-700 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-rose-600 font-bold">1. Estrechamiento inicial</span>
            <span>→ Choque del trocánter menor con el isquion</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-600 font-bold">2. Inflamación y edema</span>
            <span>→ El cuadrado femoral aumenta de volumen, ocupando aún más espacio</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-700 font-bold">3. Tracción con banda</span>
            <span>→ Ejerce fuerza decoaptante perpendicular que desplaza el fémur 3-6 mm lateralmente</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-600 font-bold">4. Alivio instantáneo</span>
            <span>→ Cesa la compresión, se restaura la microcirculación y se alivia el ciático</span>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          <strong>La clave a largo plazo:</strong> La goma da un alivio inmediato extraordinario, pero para que el beneficio sea permanente necesitamos que el 
          <strong> glúteo medio y los estabilizadores pélvicos</strong> tomen el relevo de mantener abierto el espacio durante la marcha normal.
        </p>
      </div>

      {/* Postural & Daily Living Adjustments */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Guía de Higiene Postural en la Vida Cotidiana
        </h3>

        <div className="space-y-3 text-xs text-slate-700">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-900 block mb-0.5">Al dormir de lado:</span>
              <span>Coloca un cojín o almohada gruesa entre tus rodillas. Esto mantiene la pierna de arriba en posición neutra/abducción y previene que caiga en aducción forzada durante las 8 horas de sueño.</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-900 block mb-0.5">Al conducir o trabajar sentado:</span>
              <span>Evita que las rodillas queden más altas que las caderas (asientos deportivos hundidos). Utiliza un cojín en forma de cuña que eleve ligeramente la pelvis y mantenga los pies bien apoyados en el suelo.</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-900 block mb-0.5">Al caminar o pasear:</span>
              <span>Camina como si pisaras sobre dos raíles paralelos de tren, no sobre una sola línea de cuerda floja. Acorta ligeramente el paso y evita arrastrar la pierna hacia atrás.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sports & Physical Activity */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Actividad Física y Deporte
        </h3>
        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
          <strong>Es una orientación general, no una lista validada:</strong> no hay estudios que clasifiquen cada deporte para esta patología. Se basa en evitar la posición que suele provocar los síntomas: extensión de cadera con aducción y rotación externa. La tolerancia varía de una persona a otra, así que acuerda tu caso con tu médico o fisioterapeuta.
        </p>

        <div className="space-y-4 text-xs">
          {activityGroups.map(({ title, Icon, cardClass, titleClass, textClass, activities }) => (
            <div key={title} className={`p-4 rounded-xl border space-y-3 ${cardClass}`}>
              <div className={`flex items-center gap-2 font-bold ${titleClass}`}>
                <Icon className="w-4 h-4 shrink-0" />
                <span>{title}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activities.map((activity) => (
                  <div key={activity.name} className="space-y-0.5">
                    <span className={`font-semibold block ${titleClass}`}>{activity.name}</span>
                    <p className={`leading-relaxed ${textClass}`}>{activity.note}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 text-xs text-slate-700 leading-relaxed space-y-1.5">
          <p>
            <strong className="text-slate-900">Cuándo parar:</strong> interrumpe la actividad si aparece dolor punzante, hormigueo, adormecimiento o dolor que baja por la pierna, o si los síntomas empeoran al día siguiente. Coméntalo con tu médico o fisioterapeuta antes de retomarla.
          </p>
          <p>
            <strong className="text-slate-900">Busca atención urgente</strong> si notas pérdida de fuerza en la pierna, adormecimiento en la zona genital o pérdida de control de la orina o las heces.
          </p>
        </div>
      </div>

      {/* Accordion FAQ */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Preguntas Frecuentes y Dudas Clínicas
        </h3>

        <div className="divide-y divide-slate-100">
          {faqs.map((faq, idx) => (
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
