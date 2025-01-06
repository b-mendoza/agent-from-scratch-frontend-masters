import { openai } from './ai';

// type RunLLMArgs = {
//   model: 'gpt-4o-mini'
//   messages: AIMessage[]
//   temperature: number
// }

type RunLLMArgs = {
  userMessage: string;
};

export const runLLM = async (args: RunLLMArgs) => {
  //   const { messages, model, temperature = 0.1 } = args
  const { userMessage } = args;

  const completions = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'user',
        content: userMessage,
      },
    ],
    temperature: 0.1,
  });

  return completions.choices[0].message.content;
};
