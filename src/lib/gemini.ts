import { GoogleGenAI } from '@google/genai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error("VITE_GEMINI_API_KEY が設定されていません。");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const buildPrompt = (title: string, level: string): string => {
  switch (level) {
    case "short":
      return `次の漫画を一言で面白く要約してください：「${title}」`;
    case "medium":
      return `次の漫画を100文字程度で要約してください：「${title}」`;
    case "detailed":
      return `次の漫画を詳しく、面白いところを紹介してください：「${title}」`;
    default:
      return `次の内容を要約してください：「${title}」`;
  }
};

export const generateSummary = async (title: string, level: string): Promise<string> => {
  const prompt = buildPrompt(title, level);

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-001',
      contents: prompt,
    });

    if (!response.text) {
      console.error("Gemini API のレスポンスに text がありません");
      return "要約が取得できませんでした。";
    }

    return response.text;
  } catch (error) {
    console.error("Gemini API呼び出しエラー:", error);
    return "要約中にエラーが発生しました。";
  }
};
