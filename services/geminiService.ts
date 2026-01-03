
import { GoogleGenAI } from "@google/genai";

// Initialize the GoogleGenAI client using the environment variable API_KEY directly.
// Use the mandatory named parameter for the constructor.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askSermonAssistant = async (question: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User is asking a question about Harbor Church sermons or spiritual growth: "${question}". 
      Harbor Church values: Anchor in Christ, Safe Harbor (Community), and Navigation (Living with Purpose). 
      Provide a encouraging, thoughtful response in a pastoral tone. Keep it under 150 words.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });
    // Extract text output directly from the .text property of GenerateContentResponse.
    return response.text || "I'm having trouble connecting to my anchor right now. Please try again later.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I couldn't process your request at this moment. Grace and peace.";
  }
};

export const generatePrayerPrompt = async () => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: "Provide a short, 1-sentence daily prayer prompt based on nautical metaphors of faith and safety.",
            config: {
                temperature: 0.8,
            }
        });
        // Extract text output directly from the .text property.
        return response.text || "Lord, be my anchor in the shifting tides today.";
    } catch (error) {
        return "May God's peace be your steady current today.";
    }
};
