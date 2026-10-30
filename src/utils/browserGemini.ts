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

const errorMessage = (error: unknown) => {
  const status = (error as { status?: number })?.status;
  if (status === 400 || status === 401 || status === 403) {
    return 'Google ha rechazado la clave de API. Compruébala o borra la clave y añade otra.';
  }
  if (status === 429) {
    return 'Tu clave ha alcanzado su límite de uso. Inténtalo más tarde o revisa tu cuota en Google AI Studio.';
  }
  return 'No se pudo conectar con Gemini. Comprueba tu conexión e inténtalo de nuevo.';
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
    return errorMessage(error);
  }
};
