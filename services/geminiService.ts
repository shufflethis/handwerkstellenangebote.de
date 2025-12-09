import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize only if key exists, otherwise we handle the error gracefully in UI
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const createChatSession = (): Chat | null => {
  if (!ai) return null;

  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `Du bist der digitale Karriereberater von 'handwerkstellenangebote.de'. 
      Deine Aufgabe ist es, Nutzern zu helfen, den passenden Handwerksberuf zu finden oder Tipps für die Bewerbung zu geben.
      
      Verhalte dich:
      - Professionell, aber bodenständig ("Duz-Kultur" ist im Handwerk oft okay, aber bleibe höflich).
      - Ermutigend und lösungsorientiert.
      - Experte für deutsche Handwerksberufe (SHK, Elektro, Bau, Holz, Metall, KFZ, Nahrungsmittel).
      
      Antworte präzise auf Fragen zu:
      - Ausbildungsinhalten
      - Gehaltsaussichten (nutze Durchschnittswerte für Deutschland)
      - Quereinstiegsmöglichkeiten
      - Zukunftschancen (Klimawende, Digitalisierung im Handwerk).
      
      Halte die Antworten kurz (max 150 Wörter), es sei denn, der Nutzer fragt nach Details.`,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Entschuldigung, ich konnte keine Antwort generieren.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.";
  }
};