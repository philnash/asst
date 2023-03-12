import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output, env } from "node:process";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({ apiKey: env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);
const readline = createInterface({ input, output });

const chatbotType = await readline.question(
  "What type of chatbot would you like to create? "
);
const messages = [{ role: "system", content: chatbotType }];
let userInput = await readline.question("Say hello to your new assistant.\n\n");

while (userInput !== ".exit") {
  messages.push({ role: "user", content: userInput });
  try {
    const response = await openai.createChatCompletion({
      messages,
      model: "gpt-3.5-turbo",
    });

    const botMessage = response.data.choices[0].message;
    if (botMessage) {
      messages.push(botMessage);
      userInput = await readline.question("\n" + botMessage.content + "\n\n");
    } else {
      userInput = await readline.question("\nNo response, try asking again\n");
    }
  } catch (error) {
    console.log(error.message);
    userInput = await readline.question(
      "\nSomething went wrong, try asking again\n"
    );
  }
}

readline.close();
