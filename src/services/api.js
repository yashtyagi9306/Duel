const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

/**
 * POST /api/debate
 * @param {{ topic: string, mode: string, rounds: number }} payload
 * @returns {Promise<object>} data field from the backend response
 */
export async function createDebate(payload) {
  let res;
  try {
    res = await fetch(`${BASE_URL}/api/debate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error("Unable to reach the server. Please check your connection and try again.");
  }

  const json = await res.json().catch(() => {
    throw new Error("The server returned an unexpected response.");
  });

  if (!res.ok || !json.success) {
    throw new Error(json.message ?? "Something went wrong. Please try again.");
  }

  return json.data;
}
