import {
  ChatOpenAI
} from "@langchain/openai";
import {
  ChatPromptTemplate
} from "@langchain/core/prompts";

export const handler = async (event, context) => {
  const query = event.body;

  if (!query) {
    return {
      statusCode: 400,
      body: JSON.stringify("No query provided."),
    }
  }

  try {
    const llm = new ChatOpenAI({
      model: "gpt-4o",
      temperature: 0,
      maxTokens: 4000,
      // other params...
    });

    const aiMsg = await llm.invoke([{
        role: "system",
        content: "You are a helpful buddy that can assist me with my questions. Be funny, nice and engaging.",
      },
      {
        role: "user",
        content: query,
      },
    ]);

    return {
      statusCode: 200,
      body: JSON.stringify(aiMsg.content),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error.message),
    }
  }
}
