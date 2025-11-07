import React from 'react';
import { FileText, BookOpen, Bot, BarChart3, Briefcase, Lightbulb } from 'lucide-react';

const cards = [
  {
    title: 'Study Hub',
    desc: 'Upload and download VTU notes by scheme, semester, and subject.',
    icon: BookOpen,
    href: '#notes',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Model Papers',
    desc: 'Searchable PDFs with previews and rich metadata.',
    icon: FileText,
    href: '#papers',
    color: 'from-indigo-500 to-violet-400',
  },
  {
    title: 'AI Tutor',
    desc: 'Contextual answers with sources via RAG (stubbed).',
    icon: Bot,
    href: '#ai',
    color: 'from-purple-500 to-pink-400',
  },
  {
    title: 'Results Dashboard',
    desc: 'Input results, view GPA charts and rankings.',
    icon: BarChart3,
    href: '#results',
    color: 'from-emerald-500 to-green-400',
  },
  {
    title: 'Projects',
    desc: 'Curated ideas with tags and tech stacks.',
    icon: Lightbulb,
    href: '#projects',
    color: 'from-orange-500 to-amber-400',
  },
  {
    title: 'Placement Corner',
    desc: 'Aptitude practice and AI mock interviews.',
    icon: Briefcase,
    href: '#placement',
    color: 'from-rose-500 to-red-400',
  },
];

const CardGrid = () => {
  return (
    <section className="relative z-10 -mt-10 sm:-mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {cards.map((c) => (
          <a
            key={c.title}
            href={c.href}
            className="group rounded-3xl p-5 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-sm hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className={`h-10 w-10 rounded-2xl bg-gradient-to-tr ${c.color} text-white grid place-items-center shadow`}> 
              <c.icon size={20} />
            </div>
            <h3 className="mt-4 font-semibold text-neutral-900 dark:text-white text-lg">{c.title}</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{c.desc}</p>
            <div className="mt-4 text-blue-600 group-hover:translate-x-0.5 transition">Explore →</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CardGrid;
