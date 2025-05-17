'use client';

import { useState, useRef, useEffect } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll on new messages
  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  const send = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    // add user message
    setMessages((m) => [...m, { from: 'user', text: trimmed }]);
    setInput('');

    // call API
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: trimmed }),
      });
      const { reply } = await res.json();
      setMessages((m) => [...m, { from: 'bot', text: reply }]);
    } catch {
      setMessages((m) => [...m, { from: 'bot', text: 'Oops, something went wrong.' }]);
    }
  };

  // Closed → just the “Ask us…” pill
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="
          fixed bottom-4 right-4 sm:bottom-6 sm:right-6
          inline-block
          bg-gray-900/60 backdrop-blur-lg
          text-white font-semibold
          px-4 py-2 sm:px-6 sm:py-3
          rounded-full
          shadow-[0_0_20px_rgba(94,117,255,0.25)]
          ring-1 ring-white/10
          hover:shadow-[0_0_25px_rgba(94,117,255,0.35)]
          transition
          mb-6
        "
      >
        Ask us…
      </button>
    );
  }

  // Open → full chat panel
  return (
    <div
      className="
        fixed bottom-4 right-4 sm:bottom-6 sm:right-6
        w-[90vw] max-w-xs sm:w-80
        h-[60vh] sm:h-[500px]
        bg-black text-white
        shadow-2xl rounded-lg
        flex flex-col overflow-hidden
        p-4 sm:p-6
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-semibold">Chat with us</span>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-white text-2xl leading-none"
          aria-label="Close chat"
        >
          ×
        </button>
      </div>

      {/* Scrollable messages */}
      <div
        ref={scrollRef}
        className="flex-1 mb-4 overflow-y-auto space-y-3"
      >
        {messages.map((m, i) => (
          <div
            key={i}
            className={`${m.from === 'user' ? 'justify-end flex' : 'justify-start flex'}`}
          >
            <span
              className={`
                inline-block max-w-[70%] px-3 py-2 rounded-lg
                ${m.from === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'}
              `}
            >
              {m.text}
            </span>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="flex border-t border-gray-700 pt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder="Type your message..."
          className="
            flex-1 bg-transparent placeholder-gray-400
            focus:outline-none px-3 py-2 text-white
          "
        />
        <button
          onClick={send}
          className="ml-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
