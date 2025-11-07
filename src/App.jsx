import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import CardGrid from './components/CardGrid';
import AiChatStub from './components/AiChatStub';

function App() {
  return (
    <div className="min-h-screen bg-[#F2F2F7] dark:bg-neutral-950 selection:bg-blue-200/60">
      <NavBar />
      <main>
        <Hero />
        <CardGrid />
        <AiChatStub />
      </main>
      <footer className="mt-10 pb-10 text-center text-xs text-neutral-500 dark:text-neutral-400">
        Built for VTU students • iOS-inspired design • MVP demo
      </footer>
    </div>
  );
}

export default App;
