import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 ring-1 ring-inset ring-cyan-400/20 backdrop-blur">
            Futuristic Gaming Hub
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            dkeditzofficial
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-2xl">
            A multi-game content platform featuring GTA, PUBG, BGMI, and FS 20. Immerse in a sleek dark interface with electric-blue energy.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#games"
              className="inline-flex items-center gap-2 rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-5 py-3 transition-colors"
            >
              <Rocket className="h-5 w-5" /> Explore Games
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 px-5 py-3"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-950/60 to-slate-950" />
    </section>
  );
}
