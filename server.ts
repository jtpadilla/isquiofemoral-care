import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { buildConsultationPrompt, DEFAULT_GEMINI_MODEL, isGeminiModel, NO_KEY_REPLY } from './src/data/clinicalAdvisor';

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
      const { prompt, context, model } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(200).json({
          reply: NO_KEY_REPLY
        });
      }

      const ai = new GoogleGenAI({ apiKey });

      const response = await ai.models.generateContent({
        // Solo los modelos ofrecidos en la interfaz: el valor llega del cliente
        model: isGeminiModel(model) ? model : DEFAULT_GEMINI_MODEL,
        contents: [
          {
            role: 'user',
            parts: [{ text: buildConsultationPrompt(prompt, context) }]
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
