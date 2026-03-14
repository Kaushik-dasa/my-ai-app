"use client";
import { useState } from "react";

interface TopicInputProps {
  onExplain: (topic: string) => void;
  loading: boolean;
}

export default function TopicInput({ onExplain, loading }: TopicInputProps) {
  const [topic, setTopic] = useState("");

  function handleSubmit() {
    onExplain(topic);
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        placeholder="e.g. Photosynthesis, Gravity, World War II..."
        className="flex-1 bg-white border border-[#e0dbd5] focus:border-[#c084fc] outline-none text-[#1a1a1a] placeholder-[#ccc] px-5 py-4 rounded-2xl text-sm transition-colors duration-200 shadow-sm"
        disabled={loading}
      />
      <button
        onClick={handleSubmit}
        disabled={loading || !topic.trim()}
        className="px-7 py-4 bg-[#1a1a1a] hover:bg-[#333] disabled:opacity-30 disabled:cursor-not-allowed text-white font-semibold rounded-2xl text-sm whitespace-nowrap transition-all duration-200 shadow-sm"
      >
        {loading ? "Thinking..." : "Explain →"}
      </button>
    </div>
  );
}
