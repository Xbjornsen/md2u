import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: process.env.REACT_APP_ORG_KEY,
  apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Define an array to store conversation history
let conversation = [];

export const sendQuestionToGpt = async (question) => {
  try {
    if (conversation.length === 0) {
      // Append system message with name to conversation
      conversation.push({"role": "system", "content": "Reply to the following questions like you are a doctor, choose a name and a title, your default name for now is Jerome"});
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
