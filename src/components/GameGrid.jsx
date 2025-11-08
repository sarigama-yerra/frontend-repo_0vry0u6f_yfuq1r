import { ChevronRight } from 'lucide-react';

const games = [
  {
    key: 'gta',
    title: 'GTA',
    description: 'Open-world chaos, cinematic stories, and limitless mods.',
    color: 'from-cyan-500/30 to-blue-500/20',
    accent: 'ring-cyan-400/40',
  },
  {
    key: 'pubg',
    title: 'PUBG',
    description: 'Tactical battle royale. Squad up and drop into intense firefights.',
    color: 'from-blue-500/30 to-indigo-500/20',
    accent: 'ring-blue-400/40',
  },
  {
    key: 'bgmi',
    title: 'BGMI',
    description: 'Mobile battle royale action tuned for competitive play.',
    color: 'from-teal-500/30 to-cyan-500/20',
    accent: 'ring-teal-400/40',
  },
  {
    key: 'fs20',
    title: 'FS 20',
    description: 'Farming Simulator 20 — cultivate, harvest, and build your empire.',
    color: 'from-sky-500/30 to-cyan-500/20',
    accent: 'ring-sky-400/40',
  },
];

function GameCard({ title, description, color, accent }) {
  return (
    <a
      href={`#${title.toLowerCase()}`}
      className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-6 ring-1 ring-inset ${accent}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-40`} />
      <div className="relative">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <div className="rounded-full bg-cyan-500/20 p-2 text-cyan-300 ring-1 ring-inset ring-cyan-400/30">
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
        <p className="mt-3 text-sm text-slate-300">{description}</p>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-[0.9rem] bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </a>
  );
}

export default function GameGrid() {
  return (
    <section id="games" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Games</h2>
          <p className="mt-2 text-slate-300">Dive into curated content across your favorite titles.</p>
        </div>
        <a href="#contact" className="hidden sm:inline text-cyan-400 hover:text-cyan-300">Request a collab →</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {games.map((g) => (
          <GameCard key={g.key} {...g} />
        ))}
      </div>
    </section>
  );
}
