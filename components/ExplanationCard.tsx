interface ExplanationCardProps {
  topic: string;
  explanation: string;
}

export default function ExplanationCard({ topic, explanation }: ExplanationCardProps) {
  return (
    <div className="mt-12">
      {/* Topic label */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px flex-1 bg-[#e8e4df]" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#bbb]">
          Explaining · {topic}
        </span>
        <div className="h-px flex-1 bg-[#e8e4df]" />
      </div>

      {/* Explanation content */}
      <div className="bg-white border border-[#e8e4df] rounded-2xl p-8 shadow-sm">
        <div className="text-[#333] leading-[1.85] text-[15px] whitespace-pre-wrap">
          {explanation}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between text-[10px] text-[#ccc] tracking-wide uppercase">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
          Generated successfully
        </span>
        <span>Groq · Llama 3.3</span>
      </div>
    </div>
  );
}
