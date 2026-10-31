import { buildConsultationPrompt, DEFAULT_GEMINI_MODEL, isGeminiModel } from '../data/clinicalAdvisor';

const STORAGE_KEY = 'isquiofemoral_gemini_api_key';
const MODEL_STORAGE_KEY = 'isquiofemoral_gemini_model';

export const loadModel = () => {
  try {
    const saved = localStorage.getItem(MODEL_STORAGE_KEY);
    return isGeminiModel(saved) ? saved : DEFAULT_GEMINI_MODEL;
  } catch {
    return DEFAULT_GEMINI_MODEL;
  }
};

export const saveModel = (model: string) => {
  try {
    localStorage.setItem(MODEL_STORAGE_KEY, model);
  } catch {
    // Sin almacenamiento disponible, la selección dura hasta recargar
  }
};

// Vive en el módulo para sobrevivir al cambio de pestaña de la app; se pierde al recargar o cerrar
let sessionKey: string | null = null;

export const loadApiKey = () => {
  if (sessionKey) return sessionKey;
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

export const saveApiKey = (key: string, remember: boolean) => {
  sessionKey = key;
  if (!remember) return;
  try {
    localStorage.setItem(STORAGE_KEY, key);
  } catch {
    // Sin almacenamiento disponible, la clave se queda solo en memoria
  }
};

export const clearApiKey = () => {
  sessionKey = null;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Nada que borrar si el almacenamiento no está disponible
  }
};

const errorMessage = (error: unknown, apiKey: string, model: string) => {
  const status = (error as { status?: number })?.status;
  // El detalle permite distinguir la causa; nunca debe incluir la clave
  const detail = `${error instanceof Error ? error.message : String(error)}`.split(apiKey).join('[clave]').slice(0, 300);
  console.error('Error al llamar a Gemini:', status ?? 'sin respuesta', detail);

  if (status === 400 || status === 401 || status === 403) {
    return `Google ha rechazado la clave de API (error ${status}). Compruébala o borra la clave y añade otra.`;
  }
  if (status === 404) {
    return `El modelo ${model} no está disponible para tu clave (error 404). Prueba a seleccionar otro.`;
  }
  if (status === 429) {
    return `Tu clave ha alcanzado su límite de uso con ${model} (error 429). Prueba a seleccionar otro modelo, inténtalo más tarde o revisa tu cuota en Google AI Studio.`;
  }
  if (status && status >= 500) {
    return `${model} no está disponible en este momento (error ${status}). Prueba a seleccionar otro modelo o inténtalo de nuevo en unos minutos.`;
  }
  if (status) {
    return `Gemini ha devuelto un error inesperado (error ${status}).`;
  }
  return `No se pudo conectar con Gemini. Comprueba tu conexión y desactiva los bloqueadores de contenido para este sitio. Detalle: ${detail}`;
};

export const askGemini = async (apiKey: string, model: string, prompt: string, context: unknown) => {
  try {
    // El SDK solo se descarga cuando alguien usa el consultor
    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model,
      contents: [{ role: 'user', parts: [{ text: buildConsultationPrompt(prompt, context) }] }],
    });
    return response.text || 'Gemini no ha devuelto ninguna respuesta. Prueba a reformular la pregunta.';
  } catch (error) {
    return errorMessage(error, apiKey, model);
  }
};
