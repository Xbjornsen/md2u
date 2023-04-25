
import { Configuration, OpenAIApi } from "openai";
import prompts from "../prompts/gptPrompts.json"; // Import the JSON file
// Get the current date
const currentDate = new Date();

// Extract the year, month, and day from the date object
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1 to get the correct month
const day = currentDate.getDate();

// Create a formatted string for the date
const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;


const configuration = new Configuration({
  organization: process.env.REACT_APP_ORG_KEY,
  apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Define an array to store conversation history
let conversation = [];

export const sendQuestionToGpt = async (question, promptId) => {
  try {
    if (conversation.length === 0) {
      const prompt = prompts.prompts.find(p => p.id === promptId);
      if (prompt) {
        // Append system message to conversation from the prompt object, including current date and time
        conversation.push({
          "role": prompt.role,
          "content": `Current Date and time for reference${formattedDate}, ${prompt.content} `
        });
      }
    }


    // Append user message to conversation with role "user"
    conversation.push({"role": "user", "content": question});
    
    const response = await openai.createChatCompletion({
      "model": "gpt-3.5-turbo",
      "messages": conversation.map(message => ({
        role: message.role,
        content: message.content
      }))  // Pass the conversation history to the API with roles preserved
    });

    // Append GPT-3's response to conversation with role "assistant"
    conversation.push({"role": "assistant", "content": response.data.choices[0].message.content});
    
    // Extract GPT-3's response
    const assistantResponse = response.data.choices[0].message.content;
    
    return assistantResponse;
  } catch (error) {
    console.error("Error sending question to GPT:", error);
    return null; // Return null or handle error as needed
  }
};
