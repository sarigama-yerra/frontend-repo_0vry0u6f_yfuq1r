import { useState } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Games', href: '#games' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-slate-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-cyan-500/20 text-cyan-400 ring-1 ring-inset ring-cyan-400/30">
            <Gamepad2 className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold tracking-wide text-white">dkeditzofficial</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#games"
            className="inline-flex items-center gap-2 rounded-md bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold px-4 py-2 transition-colors"
          >
            Explore
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:text-white hover:bg-slate-800 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900/95">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-slate-200 hover:bg-slate-800/80"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#games"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold"
            >
              Explore
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
