import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendChatToAssistant = async (
  message: string,
  history: { role: string; text: string }[]
): Promise<string> => {
  try {
    const formattedHistory = history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }]
    }));

    // We use a specific model good for text interactions
    const model = "gemini-3-flash-preview";
    
    const systemInstruction = `
      Eres el asistente virtual amable y profesional de "FisioElisa", una clínica de fisioterapia avanzada en Chiclana.
      
      Detalles de la clínica:
      - Especialidad: Terapia manual, tecnología avanzada (Indiba, Neuromodulación), suelo pélvico.
      - Precios: Sesión normal 30€, Sesión Avanzada 35€.
      - Ubicación: C. de la Plaza, 123, Chiclana.
      - Horario: Lun - Jue 09:00 - 14:00 y 16:00 - 21:00. Viernes 09:00 - 14:00.
      
      Tu objetivo es responder dudas breves sobre tratamientos, precios y horarios. 
      Sé conciso, empático y anima siempre a "Pedir Cita".
      No des diagnósticos médicos complejos, recomienda siempre una valoración presencial.
    `;

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      },
      history: formattedHistory as any,
    });

    const result = await chat.sendMessage({ message: message });
    return result.text || "Disculpa, no he podido procesar tu consulta. Por favor llama a la clínica.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Lo siento, hubo un error técnico. Por favor intenta más tarde.";
  }
};