import { ShoppingCart } from 'lucide-react';
import { NAV_LINKS } from '../../constants';

export function NavigationBar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-display font-bold text-xl tracking-tighter flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-tr from-cyan-500 to-violet-500 rounded-sm shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
          GAMEREALM
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-zinc-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
            <ShoppingCart className="w-[18px] h-[18px]" />
            Cart (0)
          </button>
          <a
            href="#buy"
            className="px-5 py-2.5 bg-white text-black font-semibold text-sm rounded-full hover:bg-zinc-200 transition-colors"
          >
            Buy Now
          </a>
        </div>
      </div>
    </nav>
  );
}
