import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY });

export async function POST(request: Request) {
  const { prompt } = await request.json();
  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a helpful assistant for SoftSell.' },
      { role: 'user', content: prompt },
    ],
  });
  return NextResponse.json({ reply: completion.choices[0].message.content });
}