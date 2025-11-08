import { Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const socials = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  ];

  return (
    <footer id="contact" className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h3 className="text-white text-xl font-semibold">dkeditzofficial</h3>
          <p className="mt-2 text-slate-400 max-w-md">
            Follow for updates, drops, and behind-the-scenes content across your favorite games.
          </p>
        </div>
        <div className="flex items-center gap-3 md:justify-end">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-slate-200 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} dkeditzofficial. All rights reserved.
      </div>
    </footer>
  );
}
