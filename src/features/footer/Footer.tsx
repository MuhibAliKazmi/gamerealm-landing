export function Footer() {
  return (
    <footer className="bg-transparent pt-16 pb-8 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="font-display font-bold text-2xl tracking-tighter flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-violet-500 rounded-md shadow-[0_0_20px_rgba(6,182,212,0.5)]" />
              GAMEREALM
            </div>
            <p className="text-zinc-400 max-w-sm">
              Pushing the boundaries of immersive multiplayer experiences and next-generation
              gaming technology.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li>
                <a href="#games" className="hover:text-cyan-400 transition-colors">
                  Games
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  Studio
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-cyan-400 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} GameRealm Interactive. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zinc-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-zinc-400 transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
