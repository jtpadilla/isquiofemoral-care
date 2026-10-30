import { buildConsultationPrompt, GEMINI_MODEL } from '../data/clinicalAdvisor';

const STORAGE_KEY = 'isquiofemoral_gemini_api_key';

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

const errorMessage = (error: unknown, apiKey: string) => {
  const status = (error as { status?: number })?.status;
  // El detalle permite distinguir la causa; nunca debe incluir la clave
  const detail = `${error instanceof Error ? error.message : String(error)}`.split(apiKey).join('[clave]').slice(0, 300);
  console.error('Error al llamar a Gemini:', status ?? 'sin respuesta', detail);

  if (status === 400 || status === 401 || status === 403) {
    return `Google ha rechazado la clave de API (error ${status}). Compruébala o borra la clave y añade otra.`;
  }
  if (status === 404) {
    return `El modelo ${GEMINI_MODEL} no está disponible para tu clave (error 404).`;
  }
  if (status === 429) {
    return 'Tu clave ha alcanzado su límite de uso (error 429). Inténtalo más tarde o revisa tu cuota en Google AI Studio.';
  }
  if (status && status >= 500) {
    return `El servicio de Gemini no está disponible en este momento (error ${status}). Inténtalo de nuevo en unos minutos.`;
  }
  if (status) {
    return `Gemini ha devuelto un error inesperado (error ${status}).`;
  }
  return `No se pudo conectar con Gemini. Comprueba tu conexión y desactiva los bloqueadores de contenido para este sitio. Detalle: ${detail}`;
};

export const askGemini = async (apiKey: string, prompt: string, context: unknown) => {
  try {
    // El SDK solo se descarga cuando alguien usa el consultor
    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: [{ role: 'user', parts: [{ text: buildConsultationPrompt(prompt, context) }] }],
    });
    return response.text || 'Gemini no ha devuelto ninguna respuesta. Prueba a reformular la pregunta.';
  } catch (error) {
    return errorMessage(error, apiKey);
  }
};
