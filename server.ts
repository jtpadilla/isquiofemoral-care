import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // API Route: AI Clinical & Biomechanical Consultation for Ischiofemoral Impingement
  app.post('/api/consultation', async (req, res) => {
    try {
      const { prompt, context } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(200).json({
          reply: `Nota: La clave GEMINI_API_KEY no está configurada en las variables de entorno. Sin embargo, basándonos en la evidencia de fisioterapia y biomecánica sobre el Pinzamiento Isquiofemoral:
1. La tracción con goma elástica descomprime el espacio entre el trocánter menor y el isquion, aliviando la compresión sobre el músculo cuadrado femoral y el nervio ciático.
2. Evita la hiperextensión de cadera combinada con aducción y rotación externa.
3. Prioriza el fortalecimiento del glúteo medio para evitar la caída de la pelvis (signo de Trendelenburg) durante la marcha.`
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const systemInstruction = `Eres un especialista clínico y fisioterapeuta experto en biomecánica de cadera y Pinzamiento Isquiofemoral (Ischiofemoral Impingement - IFI).
El usuario experimenta síntomas compatibles con pinzamiento isquiofemoral y nota gran alivio con ejercicios de tracción con bandas elásticas.
Tus respuestas deben:
- Explicar con precisión anatómica por qué la tracción (decoaptación de la cabeza femoral y separación lateral del trocánter menor respecto al isquion) alivia el atrapamiento del músculo cuadrado femoral y el nervio ciático adyacente.
- Asesorar sobre corrección de técnica, dosificación de gomas, sensaciones normales vs señales de alarma (dolor punzante, adormecimiento progresivo).
- Enfatizar siempre la activación del glúteo medio/menor para evitar la aducción relativa de cadera en la marcha.
- Desaconsejar formalmente estiramientos agresivos de isquiotibiales que compriman el espacio.
- Mantener un tono riguroso, empático y profesional, recordando que la confirmación diagnóstica definitiva requiere resonancia magnética (medición del espacio isquiofemoral < 15mm y edema en el cuadrado femoral) y valoración médica presencial.
Responde de forma clara, directa y estructurada en español.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          {
            role: 'user',
            parts: [{ text: `${systemInstruction}\n\nContexto actual del usuario:\n${JSON.stringify(context || {})}\n\nPregunta o consulta:\n${prompt}` }]
          }
        ]
      });

      return res.json({ reply: response.text });
    } catch (error: any) {
      console.error('Error in consultation API:', error);
      return res.status(500).json({
        error: 'No se pudo generar la respuesta de consulta biomecánica.',
        details: error?.message || 'Error desconocido'
      });
    }
  });

  // Vite middleware in dev or static files in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
