import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/20 selection:text-cyan-200">
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-40" aria-hidden>
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <GameGrid />
        {/* Simple about section to anchor links */}
        <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
            <h2 className="text-2xl font-bold text-white">About dkeditzofficial</h2>
            <p className="mt-3 text-slate-300 max-w-3xl">
              Curating high-quality edits, guides, and highlights across GTA, PUBG, BGMI, and FS 20. Designed with a futuristic, minimal aesthetic and electric blue accents for an immersive dark-mode experience.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
