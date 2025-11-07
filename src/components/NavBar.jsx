import React, { useEffect, useState } from 'react';
import { Home, User, Moon, Sun } from 'lucide-react';

const NavBar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('lw-theme');
    const initial = saved || 'light';
    setTheme(initial);
    if (initial === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('lw-theme', next);
    if (next === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="sticky top-0 z-20 backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-2xl bg-gradient-to-tr from-indigo-500 via-blue-500 to-cyan-400 shadow-sm" />
          <span className="font-semibold tracking-tight text-neutral-900 dark:text-white">Learn Wave</span>
        </div>
        <nav className="hidden sm:flex items-center gap-4 text-neutral-600 dark:text-neutral-300">
          <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-neutral-800/70 shadow-sm hover:shadow transition">
            <Home size={18} />
            <span className="text-sm">Home</span>
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-neutral-800/70 shadow-sm hover:shadow transition">
            <User size={18} />
            <span className="text-sm">Profile</span>
          </button>
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-neutral-800/70 shadow-sm hover:shadow transition"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            <span className="text-sm">{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
