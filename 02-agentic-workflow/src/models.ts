import { createAzure } from "@ai-sdk/azure";

const azure = createAzure({
  resourceName: "default-afsd",
  apiKey: process.env.AZURE_OPENAI_KEY,
});

export const gpt4o = azure("default-gpt-4o");
