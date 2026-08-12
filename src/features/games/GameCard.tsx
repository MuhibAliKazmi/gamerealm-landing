import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import type { Game } from '../../types';
import { GameDetailPanel } from './GameDetailPanel';

interface GameCardProps {
  game: Game;
  index: number;
}

export function GameCard({ game, index }: GameCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer border border-white/5"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
      />
      <div className={`absolute inset-0 ${game.overlay} backdrop-blur-[2px]`} />

      <img
        src={game.image}
        alt={game.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90" />

      <div className="absolute inset-0 p-8 flex flex-col">
        <div className="flex justify-between items-start">
          <span className="px-4 py-1.5 text-xs font-semibold bg-zinc-950/80 text-white rounded-full backdrop-blur-md border border-white/10">
            {game.status}
          </span>
          <div
            className={`p-3 rounded-2xl bg-gradient-to-br ${game.gradient} bg-opacity-20 backdrop-blur-md border border-white/10 group-hover:scale-110 transition-transform duration-500`}
          >
            <game.icon className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="mt-auto transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-cyan-300 text-sm font-medium mb-2 tracking-wide uppercase">
            {game.genre}
          </p>
          <h3 className="text-3xl font-display font-bold text-white mb-4">{game.title}</h3>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <button
              onClick={() => setIsExpanded(true)}
              className="inline-flex items-center gap-2 text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors relative z-10"
            >
              View Details <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <GameDetailPanel game={game} onClose={() => setIsExpanded(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
