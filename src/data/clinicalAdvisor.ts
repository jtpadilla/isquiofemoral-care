// Derivado de spec.md: cámbialo allí primero. Lo comparten server.ts y la versión estática, que llama a Gemini desde el navegador.
export const GEMINI_MODELS = [
  { id: 'gemini-3.8-flash', label: 'Gemini 3.8 Flash' },
  { id: 'gemini-3.7-flash', label: 'Gemini 3.7 Flash' },
  { id: 'gemini-3.6-flash', label: 'Gemini 3.6 Flash' },
];

export const DEFAULT_GEMINI_MODEL = 'gemini-3.6-flash';

export const isGeminiModel = (model: unknown): model is string =>
  GEMINI_MODELS.some(({ id }) => id === model);

export const SYSTEM_INSTRUCTION = `Eres un especialista clínico y fisioterapeuta experto en biomecánica de cadera y Pinzamiento Isquiofemoral (Ischiofemoral Impingement - IFI).
El usuario experimenta síntomas compatibles con pinzamiento isquiofemoral y nota gran alivio con ejercicios de tracción con bandas elásticas.
Tus respuestas deben:
- Explicar con precisión anatómica por qué la tracción (decoaptación de la cabeza femoral y separación lateral del trocánter menor respecto al isquion) alivia el atrapamiento del músculo cuadrado femoral y el nervio ciático adyacente.
- Asesorar sobre corrección de técnica, dosificación de gomas, sensaciones normales vs señales de alarma (dolor punzante, adormecimiento progresivo).
- Enfatizar siempre la activación del glúteo medio/menor para evitar la aducción relativa de cadera en la marcha.
- Explicar que la tracción y neurodinámica se dirigen a la pierna afectada, mientras que el fortalecimiento y la estabilidad pélvica deben trabajarse bilateralmente en ambas piernas para equilibrar la marcha y evitar compensaciones.
- Considerar las cadenas miofasciales cruzadas ascendentes: asimetrías o defensas pélvicas pueden generar compensaciones dolorosas en la cintura escapular y pectorales altos (fascia toracolumbar, protracción escapular y respiración apical), aconsejando un abordaje postural global y valoración médica cervical/dorsal.
- Desaconsejar formalmente estiramientos agresivos de isquiotibiales que compriman el espacio.
- Mantener un tono riguroso, empático y profesional, recordando que la confirmación diagnóstica definitiva requiere resonancia magnética (medición del espacio isquiofemoral < 15mm y edema en el cuadrado femoral) y valoración médica presencial.
Responde de forma clara, directa y estructurada en español.`;

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

export const buildConsultationPrompt = (prompt: string, context: unknown) =>
  `${SYSTEM_INSTRUCTION}\n\nContexto actual del usuario:\n${JSON.stringify(context || {})}\n\nPregunta o consulta:\n${prompt}`;
