import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { topic } = await req.json();

    if (!topic) {
      return NextResponse.json({ error: "Topic is required" }, { status: 400 });
    }

    const prompt = `Explain the study topic "${topic}" in a clear, student-friendly way.
    Include:
    - A simple definition
    - Key concepts or points
    - A real-world example
    - Why it's important to learn
    Start directly with the explanation.`;

    const result = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
    });

    const explanation = result.choices[0].message.content;

    return NextResponse.json({ explanation });
  } catch (error) {
    console.error("Groq API error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}