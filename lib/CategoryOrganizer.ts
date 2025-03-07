import genAI from "./GeminiAi";

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const categorizeArticle = async (article: string) => {
  const prompt = `Categorize this article into one of the following categories: Technology, Business, Health, Science, Sports, Entertainment, Education, Environment, Politics, or Finance. Article and just tell me which category it belongs do not provide any additional information just provide the category: ${article}`;
  
  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  
  return text; 
};
