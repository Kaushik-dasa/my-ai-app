# 📚 EXPL·AI — Study Topic Explainer

> Enter any study topic and get a clear, student-friendly explanation instantly — powered by Groq + Llama 3.3.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![Groq](https://img.shields.io/badge/Groq-LLaMA_3.3-orange?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

---

## ✨ What is this?

**EXPL·AI** is a minimalist AI-powered study tool that explains any topic in a clear, student-friendly way. Just type a topic — like *Photosynthesis*, *Newton's Laws*, or *Binary Search* — and get an instant breakdown with definitions, key concepts, real-world examples, and why it matters.

---

## 🚀 Live Demo

👉 **[my-ai-app.vercel.app](https://my-ai-app.vercel.app)** *(update with your actual Vercel URL after deploying)*

---

## 🖼️ Screenshots

| Home | Explanation |
|------|-------------|
| Clean minimal input UI | Structured AI explanation |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| AI Model | Llama 3.3 70B via [Groq API](https://groq.com/) |
| Deployment | [Vercel](https://vercel.com/) |

---

## ⚡ Features

- 🔍 **Instant explanations** for any study topic
- 🧠 **Student-friendly format** — definitions, key points, real-world examples
- 💨 **Blazing fast** — powered by Groq's ultra-low latency inference
- 🎨 **Minimalist UI** — clean, distraction-free, eye-catching design
- 📱 **Fully responsive** — works on mobile and desktop
- 🆓 **Free to use** — Groq free tier, no credit card needed
- 🔒 **Secure** — API keys never exposed to the browser

---

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- A free [Groq API key](https://console.groq.com)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Kaushik-dasa/my-ai-app.git
cd my-ai-app

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Add your Groq API key to .env.local

# 4. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables

Create a `.env.local` file in the root of your project:

```env
GROQ_API_KEY=your_groq_api_key_here
```

Get your free Groq API key at [console.groq.com](https://console.groq.com) — no credit card required.

---

## 📁 Project Structure

```
my-ai-app/
├── app/
│   ├── api/
│   │   └── explain/
│   │       └── route.ts        # Groq API integration
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Main UI page
├── components/
│   ├── TopicInput.tsx          # Input + submit button
│   └── ExplanationCard.tsx     # Explanation display card
├── .env.local                  # Environment variables (not committed)
├── .env.example                # Example env file
└── README.md
```

---

## 🌐 Deploying to Vercel

1. Push your code to GitHub (see below)
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"Add New Project"** and import your repo
4. Under **Environment Variables**, add:
   - `GROQ_API_KEY` = your Groq API key
5. Click **Deploy** 🎉

---

## 📤 Pushing to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# First commit
git commit -m "🚀 Initial commit — EXPL·AI Study Topic Explainer"

# Add your GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/my-ai-app.git

# Push to GitHub
git push -u origin main
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Built with ❤️ by **Kaushik** · [github.com/Kaushik-dasa](https://github.com/Kaushik-dasa)

---

> *"The best way to learn is to explain it simply."* — Richard Feynman
