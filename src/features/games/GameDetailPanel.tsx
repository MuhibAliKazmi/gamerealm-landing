import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Game } from '../../types';

interface GameDetailPanelProps {
  game: Game;
  onClose: () => void;
}

export function GameDetailPanel({ game, onClose }: GameDetailPanelProps) {
  return (
    <div className="absolute inset-0 z-20 bg-zinc-950/95 backdrop-blur-xl p-8 flex flex-col border-t border-white/10">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
      >
        <X className="w-5 h-5" />
      </button>

      <h4 className="text-2xl font-bold text-white mb-6 pr-10">
        What's Included in {game.title}
      </h4>
      <ul className="space-y-4 flex-1 overflow-y-auto pr-2">
        {game.features.map((feature, idx) => (
          <li key={idx} className="flex gap-3 items-start text-zinc-300">
            <CheckCircle2 className="w-5 h-5 shrink-0 text-cyan-400" />
            <span className="text-sm font-medium">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#buy"
        className={`mt-6 w-full py-3 rounded-xl bg-gradient-to-r ${game.gradient} text-white font-bold text-center hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center gap-2`}
      >
        Pre-Order Now <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
