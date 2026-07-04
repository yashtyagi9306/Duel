"use strict";

const OpenAI = require("openai");

const apiKey = (process.env.GROQ_API_KEY || "").trim();

if (!apiKey) {
  throw new Error("GROQ_API_KEY is not set in environment variables.");
}

const openai = new OpenAI({
  apiKey,
  baseURL: "https://api.groq.com/openai/v1",
});

/**
 * Verifies connectivity by listing available models.
 * @returns {Promise<{ success: true, model: string }>}
 */
async function testConnection() {
  try {
    const response = await openai.models.list();
    const first = response.data?.[0]?.id ?? "unknown";
    return { success: true, model: first };
  } catch (err) {
    const isAuthError = err?.status === 401;
    throw new Error(
      isAuthError
        ? "Invalid Groq API key. Check GROQ_API_KEY in your .env file."
        : `Groq connection failed: ${err.message}`
    );
  }
}

module.exports = { openai, testConnection };
