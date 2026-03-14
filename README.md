# EXPL·AI — Study Topic Explainer

<p>
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/></a>
  <a href="https://typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/></a>
  <a href="https://groq.com"><img src="https://img.shields.io/badge/Groq-LLaMA_3.3-F55036?style=for-the-badge" alt="Groq"/></a>
  <a href="https://vercel.com"><img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/></a>
  <img src="https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge" alt="MIT License"/>
</p>

A minimalist AI-powered web app that explains any study topic instantly in a clear, student-friendly way.

**Live Demo → [expl-ai.vercel.app](https://expl-ai.vercel.app)**

---

## About

EXPL·AI lets you type any topic — *Photosynthesis*, *Newton's Laws*, *Binary Search*, *World War II* — and instantly get a structured explanation with:

- A simple definition
- Key concepts and points
- A real-world example
- Why it matters to learn

No signup. No cost. Just type and learn.

---

## Tech Stack

| | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| AI Model | Llama 3.3 70B |
| AI Inference | Groq API |
| Deployment | Vercel |

---

## How the AI Works

This app uses the **Groq API** with the **Llama 3.3 70B** model to generate explanations.

When a user submits a topic:

1. The request hits a **Next.js server-side API route** at `/api/explain`
2. The route builds a structured prompt asking Llama 3.3 to explain the topic in a student-friendly way
3. The prompt is sent to **Groq's inference API** using the `groq-sdk`
4. Groq returns the response at ultra-low latency (usually under 2 seconds)
5. The explanation is sent back to the frontend and displayed

The API key is stored securely in environment variables and **never exposed to the browser** — all AI calls happen server-side.

```
User → Frontend → /api/explain (server) → Groq API → Llama 3.3 → Response
```

---

## Features

- Instant AI explanations for any study topic
- Student-friendly structured format
- Blazing fast responses via Groq inference
- Minimalist, distraction-free UI
- Fully responsive — works on mobile and desktop
- API key secured server-side, never exposed
- Free to use — no login required

---

## Getting Started

### Prerequisites

- Node.js 18+
- Free Groq API key from [console.groq.com](https://console.groq.com) — no credit card needed

### Installation

```bash
# Clone the repo
git clone https://github.com/Kaushik-dasa/my-ai-app.git
cd my-ai-app

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your GROQ_API_KEY to .env.local

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
GROQ_API_KEY=your_groq_api_key_here
```

Get your free key at [console.groq.com](https://console.groq.com).

---

## Project Structure

```
my-ai-app/
├── app/
│   ├── api/
│   │   └── explain/
│   │       └── route.ts        # Groq API call (server-side)
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Main page UI
├── components/
│   ├── TopicInput.tsx          # Input field + submit button
│   └── ExplanationCard.tsx     # Displays the AI explanation
├── .env.example                # Example environment file
└── README.md
```

---

## Deployment

This app is deployed on **Vercel**. To deploy your own:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repo
3. Add `GROQ_API_KEY` under Environment Variables
4. Click Deploy

Every `git push` to `main` triggers an automatic redeployment.

---

## Author

Built by **Kaushik** · [github.com/Kaushik-dasa](https://github.com/Kaushik-dasa)

---

> *"The best way to learn is to explain it simply."* — Richard Feynman
