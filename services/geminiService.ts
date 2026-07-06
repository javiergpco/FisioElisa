import { GoogleGenAI } from "@google/genai";

// CRÍTICO: Evita crash inicial si process.env.API_KEY es undefined.
const apiKey = process.env.API_KEY || "API_KEY_MISSING_PLACEHOLDER";
const ai = new GoogleGenAI({ apiKey });

export const sendChatToAssistant = async (
  message: string,
  history: { role: string; text: string }[]
): Promise<string> => {
  try {
    // Verificación segura dentro de la función
    if (apiKey === "API_KEY_MISSING_PLACEHOLDER") {
      console.warn("API Key no configurada.");
      return "El sistema de chat está en mantenimiento (Falta configuración API). Por favor contacta por teléfono.";
    }

    const formattedHistory = history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }]
    }));

    const model = "gemini-3-flash-preview";
    
    const systemInstruction = `
      Eres el asistente virtual amable y profesional de "FisioElisa", una clínica de fisioterapia avanzada en Chiclana.
      
      Detalles de la clínica:
      - Especialidad: Terapia manual, tecnología avanzada (Winback, Neuromodulación), suelo pélvico.
      - Precios: Tratamientos generales desde 40€. Neurología desde 45€. Diatermia estética desde 50€.
      - Ubicación: Centro Comercial Las Redes. Portal 1, Local 31. 11130 Chiclana de la Frontera (Cádiz).
      - Horario: Lun - Jue 09:00 - 14:00 y 16:00 - 21:00. Viernes 09:00 - 14:00.
      
      Tu objetivo es responder dudas breves sobre tratamientos, precios y horarios. 
      Sé conciso, empático y anima siempre a "Pedir Cita".
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