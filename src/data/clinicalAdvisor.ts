// Derivado de spec.md: cámbialo allí primero. Lo comparten server.ts y la versión estática, que llama a Gemini desde el navegador.
import { AdvisorMessage } from '../types';
import { EXERCISES_DATABASE } from './exercisesData';
import { GYM_PLAN } from './gymPlan';
import { GUIDE, POST_SESSION_TIP, QUICK_START_ROUTINE, ROUTINE_PRESETS } from './clinicalContent';

export const GEMINI_MODELS = [
  { id: 'gemini-3.8-flash', label: 'Gemini 3.8 Flash' },
  { id: 'gemini-3.7-flash', label: 'Gemini 3.7 Flash' },
  { id: 'gemini-3.6-flash', label: 'Gemini 3.6 Flash' },
];

export const DEFAULT_GEMINI_MODEL = 'gemini-3.8-flash';

export const isGeminiModel = (model: unknown): model is string =>
  GEMINI_MODELS.some(({ id }) => id === model);

export const SYSTEM_INSTRUCTION = `Eres un especialista clínico y fisioterapeuta experto en biomecánica de cadera y Pinzamiento Isquiofemoral (Ischiofemoral Impingement - IFI).
Esta aplicación es de uso personal de una sola persona. A continuación de estas instrucciones recibes la documentación de la aplicación y, si lo ha aportado, su contexto personal.

Cómo responder:
- Responde solo a lo que se pregunta, con una extensión proporcionada a la pregunta. Respeta el formato y la longitud que te pidan.
- Ten en cuenta la conversación anterior para interpretar cada mensaje y no repitas explicaciones ya dadas.
- Usa la documentación de la aplicación como referencia principal y mantén sus dosis, series y criterios sin cambiarlos.
- Si la documentación no cubre algo, dilo y distingue con claridad lo que es conocimiento general. No inventes cifras, estudios ni fuentes.
- Presenta el alivio con la tracción como compatible con el diagnóstico, nunca como confirmación ni como prueba. La confirmación requiere valoración médica presencial y resonancia magnética (medición del espacio isquiofemoral < 15mm y edema en el cuadrado femoral).
- Si el contexto personal y la guía se contradicen, señala expresamente el conflicto, sin decidir por tu cuenta cuál prevalece, y recomienda acordarlo con el profesional que lleve el caso.
- Si la consulta describe una señal de alarma, avísalo primero, usando los criterios de la documentación.
- Mantén un tono riguroso, empático y profesional.

Conocimiento que debes aplicar solo cuando venga al caso:
- La tracción (decoaptación de la cabeza femoral y separación lateral del trocánter menor respecto al isquion) busca aliviar el atrapamiento del músculo cuadrado femoral y el nervio ciático adyacente.
- La técnica, la dosificación de gomas y las sensaciones normales frente a las señales de alarma (dolor punzante, adormecimiento progresivo).
- La activación del glúteo medio/menor evita la aducción relativa de cadera en la marcha.
- La tracción y la neurodinámica se dirigen a la pierna afectada, mientras que el fortalecimiento y la estabilidad pélvica se trabajan en ambas piernas para equilibrar la marcha y evitar compensaciones.
- Las cadenas miofasciales cruzadas ascendentes: asimetrías o defensas pélvicas pueden generar compensaciones dolorosas en la cintura escapular y pectorales altos (fascia toracolumbar, protracción escapular y respiración apical).
- Los estiramientos agresivos de isquiotibiales se desaconsejan porque pueden comprimir el espacio.

Responde de forma clara y directa en español, usando Markdown solo cuando ayude.`;

export const NO_KEY_REPLY = `Nota: La clave GEMINI_API_KEY no está configurada en las variables de entorno. Sin embargo, basándonos en la evidencia de fisioterapia y biomecánica sobre el Pinzamiento Isquiofemoral:
1. La tracción con goma elástica descomprime el espacio entre el trocánter menor y el isquion, aliviando la compresión sobre el músculo cuadrado femoral y el nervio ciático.
2. Evita la hiperextensión de cadera combinada con aducción y rotación externa.
3. Prioriza el fortalecimiento del glúteo medio para evitar la caída de la pelvis (signo de Trendelenburg) durante la marcha.`;

export const ADVISOR_GREETING = `Hola. Soy tu consultor biomecánico especializado en Pinzamiento Isquiofemoral (IFI).
Que los ejercicios de tracción con goma elástica te alivien es un dato útil: es compatible con que la decoaptación lateral del fémur descomprima el túnel entre el trocánter menor y el isquion, aunque no confirma el diagnóstico, que requiere valoración médica y resonancia magnética.

¿Tienes dudas sobre cómo ajustar la goma, qué ejercicios realizar según tus sensaciones o cómo modificar tu marcha?`;

export const ADVISOR_SAMPLE_QUESTIONS = [
  '¿A qué altura exacta debe anclarse la goma elástica?',
  '¿Por qué me baja un calambre por la parte posterior del muslo al caminar?',
  '¿Puedo hacer sentadillas o estirar los isquiotibiales?',
  '¿Cómo ajusto la tracción si siento molestia en la ingle anterior?',
  '¿Por qué me duele la escápula o el pecho alto si la molestia empezó en la cadera?',
];

// El simulador queda fuera: sus cifras son ilustrativas y no deben usarse como datos clínicos
const APP_DOCUMENTATION = JSON.stringify({
  ejercicios: EXERCISES_DATABASE.map(({ diagramType, phase, ...exercise }) => exercise),
  rutinaRapida: QUICK_START_ROUTINE,
  rutinas: ROUTINE_PRESETS,
  recomendacionTrasLaSesion: POST_SESSION_TIP,
  guia: GUIDE,
  planGimnasio: GYM_PLAN,
});

const ADVISOR_BASE_PROMPT = `${SYSTEM_INSTRUCTION}

## Documentación de la aplicación (JSON)
${APP_DOCUMENTATION}`;

export const MAX_PERSONAL_CONTEXT_LENGTH = 20000;

export const isPersonalContext = (value: unknown): value is string =>
  typeof value === 'string' && value.length <= MAX_PERSONAL_CONTEXT_LENGTH;

const buildSystemPrompt = (personalContext: string) =>
  personalContext.trim()
    ? `${ADVISOR_BASE_PROMPT}\n\n## Contexto personal aportado por el usuario\n${personalContext.trim()}`
    : ADVISOR_BASE_PROMPT;

const MAX_HISTORY_MESSAGES = 20;

export const isAdvisorConversation = (messages: unknown): messages is AdvisorMessage[] =>
  Array.isArray(messages) &&
  messages.length > 0 &&
  messages.every((m) => (m?.role === 'user' || m?.role === 'model') && typeof m?.text === 'string') &&
  messages[messages.length - 1].role === 'user';

export const buildAdvisorRequest = (model: string, messages: AdvisorMessage[], personalContext = '') => {
  const recent = messages.slice(-MAX_HISTORY_MESSAGES);
  // Gemini exige que la conversación empiece con un mensaje del usuario
  const firstUser = recent.findIndex(({ role }) => role === 'user');
  return {
    model,
    contents: recent.slice(firstUser).map(({ role, text }) => ({ role, parts: [{ text }] })),
    config: { systemInstruction: buildSystemPrompt(personalContext) },
  };
};
