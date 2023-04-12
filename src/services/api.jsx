import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-5jVLD7P6QQprTECZRSYRARxj",
    apiKey: APIKEY,
});
const openai = new OpenAIApi(configuration);

export const sendQuestionToGpt = async (question) => {

  try {

    const response = await openai.createChatCompletion(    {
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": question}]
      });
      console.log(response.data.choices[0].message.content)
    return response.data.choices[0].message.content; // Assuming the response data contains the generated response from GPT
  } catch (error) {
    console.error("Error sending question to GPT:", error);
    return null; // Return null or handle error as needed
  }
};
