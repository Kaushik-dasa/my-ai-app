"use client";
import { useState } from "react";
import TopicInput from "@/components/TopicInput";
import ExplanationCard from "@/components/ExplanationCard";

export default function Home() {
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [topic, setTopic] = useState("");

  async function handleExplain(inputTopic: string) {
    if (!inputTopic.trim()) {
      setError("Please enter a topic to continue.");
      return;
    }
    setError("");
    setExplanation("");
    setTopic(inputTopic);
    setLoading(true);
    try {
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: inputTopic }),
      });
      if (!res.ok) throw new Error("API failed");
      const data = await res.json();
      setExplanation(data.explanation);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f5f2] text-[#1a1a1a] font-[family-name:var(--font-main)]">
      {/* Top bar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-[#e8e4df]">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#999]">EXPL·AI</span>
        <span className="text-xs text-[#bbb] tracking-wide">Study Explainer</span>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-20">
        {/* Hero */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-[#aaa] mb-4">Learn anything, instantly</p>
          <h1 className="text-[3.5rem] font-black leading-[1.05] tracking-tight text-[#1a1a1a] mb-5">
            What do you<br />
            want to<br />
            <span className="text-[#c084fc]">understand?</span>
          </h1>
          <p className="text-[#888] text-base leading-relaxed max-w-sm">
            Type any topic — from science to history — and get a clear, student-friendly explanation in seconds.
          </p>
        </div>

        {/* Input */}
        <TopicInput onExplain={handleExplain} loading={loading} />

        {/* Error */}
        {error && (
          <div className="mt-4 flex items-center gap-2 text-sm text-red-500">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" />
            {error}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="mt-12 flex items-center gap-3 text-[#aaa] text-sm">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 bg-[#c084fc] rounded-full animate-bounce [animation-delay:0ms]" />
              <span className="w-1.5 h-1.5 bg-[#a78bfa] rounded-full animate-bounce [animation-delay:120ms]" />
              <span className="w-1.5 h-1.5 bg-[#818cf8] rounded-full animate-bounce [animation-delay:240ms]" />
            </div>
            Generating your explanation...
          </div>
        )}

        {/* Result */}
        {explanation && !loading && (
          <ExplanationCard topic={topic} explanation={explanation} />
        )}

        {/* Examples */}
        {!explanation && !loading && (
          <div className="mt-14">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#ccc] mb-3">Try an example</p>
            <div className="flex flex-wrap gap-2">
              {["Photosynthesis", "Newton's Laws", "Binary Search", "World War II", "Black Holes", "DNA"].map((t) => (
                <button
                  key={t}
                  onClick={() => handleExplain(t)}
                  className="px-4 py-1.5 text-xs text-[#999] border border-[#e0dbd5] rounded-full hover:border-[#c084fc] hover:text-[#c084fc] transition-all duration-200"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="text-center pb-10 text-[10px] tracking-widest uppercase text-[#ccc]">
        Powered by Groq · MY-AI-Assistant
      </footer>
    </main>
  );
}
