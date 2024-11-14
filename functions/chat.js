import {
  ChatOpenAI
} from "@langchain/openai";
import {
  ChatPromptTemplate
} from "@langchain/core/prompts";

export const handler = async () => {
  // const llm = new ChatOpenAI({
  //   model: "gpt-4o",
  //   temperature: 0,
  //   // other params...
  // });

  // const prompt = ChatPromptTemplate.fromMessages([
  //   [
  //     "system",
  //     "You are a helpful assistant that translates {input_language} to {output_language}.",
  //   ],
  //   ["human", "{input}"],
  // ]);

  // const chain = prompt.pipe(llm);
  // const aiMsg = await chain.invoke({
  //   input_language: "English",
  //   output_language: "German",
  //   input: "I love programming.",
  // });

  // const aiMsg = await llm.invoke([{
  //     role: "system",
  //     content: "You are a helpful assistant that translates English to French. Translate the user sentence.",
  //   },
  //   {
  //     role: "user",
  //     content: "I love programming.",
  //   },
  // ]);

  return {
    statusCode: 200,
    body: JSON.stringify("Hello from chat.js!"),
  }
}
