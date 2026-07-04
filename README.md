# Duel ⚔️

> Challenge Ideas. Not People.

Duel is an AI-powered debate platform where two AI agents debate opposing sides of a user-defined topic, while an AI Judge evaluates the arguments and delivers an unbiased verdict based on logic, reasoning, and evidence.

🌐 **Live Demo:** https://duel-drab.vercel.app/

---

## Features

- AI vs AI structured debates
- Multiple debate modes (Balanced, Academic, Aggressive, Funny)
- Configurable debate rounds
- AI-generated arguments using Groq LLM
- AI Judge with detailed verdict and scoring
- Modern responsive UI
- Real-time backend integration
- Modular full-stack architecture

---

## Tech Stack

### Frontend
- React
- Vite
- React Router
- Tailwind CSS

### Backend
- Node.js
- Express.js

### AI
- Groq API

### Deployment
- Frontend: Vercel
- Backend: Railway

---

## Project Structure

```text
duel/
│
├── src/                  # React frontend
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── data/
│
├── server/               # Express backend
│   ├── controllers/
│   ├── routes/
│   ├── prompts/
│   ├── services/
│   └── index.js
│
├── package.json
└── README.md
```

---

## How It Works

1. Enter a debate topic.
2. Select a debate mode.
3. Choose the number of rounds.
4. Two AI agents generate opposing arguments.
5. An AI Judge evaluates both sides.
6. A detailed verdict is presented with scores and reasoning.

---

## Local Setup

### Clone the repository

```bash
git clone https://github.com/yashtyagi9306/Duel.git
cd Duel
```

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm run dev
```

---

## Environment Variables

### Frontend

```env
VITE_API_URL=YOUR_BACKEND_URL
```

### Backend

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

---

## Future Improvements

- User authentication
- Debate history
- Shareable debate links
- Streaming AI responses
- Multiple AI model selection
- Leaderboards
- PDF debate export
- Speech synthesis

---

## Author

**Yash Tyagi**

GitHub: https://github.com/yashtyagi9306

---

## License

This project is licensed under the MIT License.
