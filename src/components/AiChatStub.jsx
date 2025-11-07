import React, { useState } from 'react';
import { Bot, Send } from 'lucide-react';

const seedAnswers = [
  {
    q: 'What is RAG?',
    a: 'RAG stands for Retrieval-Augmented Generation. It combines a semantic search retriever with a generator to answer with context.',
    sources: ['Intro to RAG.pdf', 'Semantic Search Notes.md'],
  },
  {
    q: 'How to calculate SGPA?',
    a: 'SGPA = (Sum of (grade points × course credits)) / Total credits in the semester.',
    sources: ['VTU Grading Guide.pdf'],
  },
];

const AiChatStub = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m your AI Tutor. Ask anything about VTU notes, papers, or results.' },
  ]);
  const [input, setInput] = useState('');

  const onSend = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    const match = seedAnswers.find((s) => text.toLowerCase().includes(s.q.toLowerCase().split(' ')[0]));
    const answer = match
      ? `${match.a}\n\nSources: ${match.sources.join(', ')}`
      : 'This is a stubbed AI. In production, I will use embeddings + RAG to answer with citations.';

    setMessages((prev) => [...prev, { role: 'user', content: text }, { role: 'assistant', content: answer }]);
    setInput('');
  };

  return (
    <section id="ai" className="max-w-6xl mx-auto px-4 mt-12 mb-20">
      <div className="rounded-3xl p-4 sm:p-6 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 text-white grid place-items-center shadow">
            <Bot size={18} />
          </div>
          <h2 className="font-semibold text-neutral-900 dark:text-white">AI Tutor</h2>
        </div>

        <div className="mt-4 h-64 overflow-y-auto space-y-3 pr-1">
          {messages.map((m, idx) => (
            <div key={idx} className={`text-sm ${m.role === 'assistant' ? 'text-neutral-800 dark:text-neutral-200' : 'text-neutral-600 dark:text-neutral-300'}`}>
              <span className="font-medium">{m.role === 'assistant' ? 'Tutor' : 'You'}: </span>
              {m.content}
            </div>
          ))}
        </div>

        <form onSubmit={onSend} className="mt-4 flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question…"
            className="flex-1 px-4 py-2.5 rounded-full bg-white dark:bg-neutral-800 border border-black/5 dark:border-white/10 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-600 text-white shadow hover:shadow-md active:scale-95 transition">
            <Send size={16} /> Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default AiChatStub;
