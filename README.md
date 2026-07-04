# Duel — AI Debate Platform

Duel is an AI-powered debate platform where two AI agents argue opposite sides of any topic across multiple rounds. An AI Judge evaluates the debate and declares a winner based on logic, evidence, rebuttal quality, consistency, and persuasiveness.

---

## Features

- **AI vs AI debates** — Challenger and Defender argue any topic you choose
- **Four debate modes** — Balanced, Academic, Aggressive, Funny
- **Configurable rounds** — 1, 3, or 5 rounds per debate
- **AI Judge verdict** — Detailed analysis with per-metric scoring
- **Premium UI** — Dark, minimal design with smooth animations

---

## Tech Stack

**Frontend**
- React 18 + Vite
- Tailwind CSS
- Motion (motion.dev)
- React Router DOM
- Lucide React

**Backend**
- Node.js + Express
- OpenAI SDK (`gpt-4o-mini`)
- CORS + dotenv

---

## Folder Structure

```
duel/
├── src/                          # Frontend source
│   ├── components/
│   │   ├── arena/                # Arena page components
│   │   ├── create/               # Create Duel page components
│   │   └── verdict/              # Verdict page components
│   ├── data/                     # Mock data (dev/fallback)
│   ├── pages/                    # Route-level page components
│   └── services/
│       └── api.js                # Frontend API service
└── server/                       # Backend source
    ├── controllers/
    │   └── debate.controller.js  # Request validation
    ├── prompts/                  # Prompt engineering modules
    │   ├── challenger.prompt.js
    │   ├── defender.prompt.js
    │   ├── judge.prompt.js
    │   └── shared.js
    ├── routes/
    │   └── debate.routes.js      # API route registration
    ├── services/
    │   ├── debate.service.js     # Debate generation pipeline
    │   └── openai.service.js     # OpenAI client
    └── index.js                  # Express server entry
```

---

## Environment Variables

### Backend (`server/.env`)

| Variable         | Description                  | Required |
|------------------|------------------------------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key          | ✅        |
| `PORT`           | Server port (default: 3001)  | ❌        |

Copy the example file and fill in your key:

```bash
cp server/.env.example server/.env
```

---

## Running Locally

### Prerequisites

- Node.js 18+
- An OpenAI API key with access to `gpt-4o-mini`

### Backend

```bash
cd server
cp .env.example .env       # then add your OPENAI_API_KEY
npm install
npm run dev                # http://localhost:3001
```

Verify the server is running:

```bash
curl http://localhost:3001
# { "success": true, "message": "Duel Backend Running" }
```

### Frontend

```bash
# from project root
npm install
npm run dev                # http://localhost:5173
```

The frontend automatically calls `http://localhost:3001` in development. To point it at a different backend URL, set `VITE_API_URL` in a `.env` file at the project root:

```
VITE_API_URL=https://your-backend.example.com
```

---

## API

### `POST /api/debate`

Generate a complete AI debate and verdict.

**Request**
```json
{
  "topic": "Should AI replace teachers?",
  "mode": "balanced",
  "rounds": 3
}
```

**Response**
```json
{
  "success": true,
  "data": {
    "topic": "...",
    "mode": "balanced",
    "rounds": 3,
    "debate": [
      { "round": 1, "challenger": "...", "defender": "..." }
    ],
    "verdict": {
      "winner": "challenger",
      "confidence": 87,
      "summary": "...",
      "scores": {
        "challenger": { "logic": 9.1, "evidence": 8.7, "rebuttal": 8.9, "consistency": 9.3, "persuasiveness": 8.8 },
        "defender":   { "logic": 8.2, "evidence": 8.4, "rebuttal": 7.9, "consistency": 8.1, "persuasiveness": 7.7 }
      },
      "analysis": {
        "strengths":     { "challenger": "...", "defender": "..." },
        "weaknesses":    { "challenger": "...", "defender": "..." },
        "turningPoint":  "...",
        "finalDecision": "..."
      }
    }
  }
}
```

Valid modes: `balanced`, `academic`, `aggressive`, `funny`. Rounds: 1–5.

---

## Deployment

### Backend

Deploy `server/` as a standard Node.js application. Set `OPENAI_API_KEY` and optionally `PORT` as environment variables on your platform. No build step required — `node index.js` starts the server.

### Frontend

```bash
npm run build   # outputs to dist/
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, Cloudflare Pages, etc.). Set `VITE_API_URL` to your production backend URL as a build-time environment variable.

The frontend is a SPA — configure your host to serve `index.html` for all routes.

---

## Future Improvements

- **User accounts** — save and revisit past debates
- **Streaming responses** — show arguments as they are generated token by token
- **Live audience mode** — real-time voting during debates
- **Share debates** — public URLs for individual verdict pages
- **Custom personas** — debate against historical figures or fictional characters
- **Leaderboard** — track win/loss records across topics
