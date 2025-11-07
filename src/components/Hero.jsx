import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Learn Wave
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300">
            Your iOS-inspired VTU hub for notes, model papers, results analytics, AI tutoring, and placements.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#notes"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-blue-600 text-white shadow-lg hover:shadow-xl transition active:scale-95"
            >
              Explore Notes
            </a>
            <a
              href="#ai"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white/70 dark:bg-neutral-800/70 text-neutral-900 dark:text-white backdrop-blur border border-black/5 dark:border-white/10 shadow hover:shadow-md transition"
            >
              Ask AI Tutor
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white dark:from-neutral-900/30 dark:via-neutral-900/60 dark:to-neutral-900" />
    </section>
  );
};

export default Hero;
