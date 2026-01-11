
import { GoogleGenAI } from "@google/genai";

// Function to handle troubleshooting queries using Gemini API
export const getGeminiTroubleshooter = async (userQuery: string) => {
  // Always initialize GoogleGenAI with the API key from process.env directly inside the function
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = 'gemini-3-flash-preview';

  try {
    const response = await ai.models.generateContent({
      model,
      contents: userQuery,
      config: {
        systemInstruction: `You are a specialist mechanic for Isuzu D-Max trucks. 
        The user is using the "Flash Code" (Jumper Wire) method to diagnose their car.
        - Code 12 = Normal
        - Code 24 = Pedal Sensor
        - Code 32 = Turbo Boost
        - Pin 4 and 6 are used for jumping.
        Provide helpful, technical, but easy-to-understand advice in Thai. 
        Include safety warnings (Turn off ignition before pulling the wire).`,
        temperature: 0.7,
      },
    });

    // Extract the text content from the response object directly using the .text property
    return response.text || "ขออภัย ไม่พบข้อมูลที่ต้องการ";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "ขออภัย เกิดข้อผิดพลาดในการเชื่อมต่อกับ AI กรุณาลองใหม่ภายหลัง";
  }
};
