
import { GoogleGenAI } from "@google/genai";

export const getGeminiTroubleshooter = async (userQuery: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = 'gemini-3-flash-preview';

  try {
    const response = await ai.models.generateContent({
      model,
      contents: userQuery,
      config: {
        systemInstruction: `You are an expert mechanic specializing in Isuzu D-Max trucks (2002-2011 models).
        The user is diagnosing their truck using the "Flash Code" (Jumper Wire Pin 4 & 6) method.
        
        KNOWLEDGE BASE (Detailed Codes):
        - 12: Normal
        - 14: Camshaft Sensor (P0340)
        - 15: Crankshaft Sensor (P0335)
        - 21: Fuel Temp Sensor
        - 24: Vehicle Speed Sensor (VSS)
        - 32: Turbo Boost Sensor (P0237/P0238)
        - 42: Overboost (P0234)
        - 43: SCV Valve Performance
        - 45: EGR System
        - 53: Supply Pump (P0251)
        - 91: MAF Air Flow Sensor
        - 118: Rail Pressure High (P0088)
        - 151: Fuel Regulator (P0089)
        - 227: Fuel Leak (P0093)
        - 245: Rail Pressure Sensor (P0192)
        
        INSTRUCTIONS:
        1. Provide technical but easy-to-follow diagnostic steps in Thai.
        2. Always emphasize safety: "Turn off ignition before connecting or disconnecting jumper wires."
        3. Explain what the codes mean in plain language.
        4. If a code isn't in the list, suggest using a dedicated scanner (Tech-2 or G-Scan).`,
        temperature: 0.7,
      },
    });

    return response.text || "ขออภัย ไม่พบข้อมูลที่ต้องการ";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "ขออภัย เกิดข้อผิดพลาดในการเชื่อมต่อกับ AI กรุณาลองใหม่ภายหลัง";
  }
};
