import { motion } from 'motion/react';
import { ShoppingCart, Star, Shield, Zap } from 'lucide-react';
import type { Edition } from '../../types';

interface EditionCardProps {
  edition: Edition;
  index: number;
}

const FEATURE_ICONS = [Star, Shield, Zap];

export function EditionCard({ edition, index }: EditionCardProps) {
  const baseClasses =
    'bg-zinc-950/60 backdrop-blur-md border border-white/10 p-8 rounded-3xl relative overflow-hidden';
  const highlightedClasses =
    'bg-zinc-900/80 backdrop-blur-md border border-cyan-500/50 p-8 rounded-3xl relative overflow-hidden transform md:-translate-y-4 shadow-[0_0_30px_rgba(6,182,212,0.15)]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={edition.highlighted ? highlightedClasses : baseClasses}
    >
      {edition.highlighted && (
        <div className="absolute top-0 right-0 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
          RECOMMENDED
        </div>
      )}

      <h3 className="text-2xl font-bold text-white mb-2">{edition.name}</h3>
      <div className="text-4xl font-display font-bold text-cyan-400 mb-6">
        {edition.price}
      </div>

      <ul className="space-y-4 mb-8 text-sm">
        {edition.features.map((feature, idx) => {
          const Icon = FEATURE_ICONS[idx] || Star;
          return (
            <li
              key={idx}
              className={`flex gap-3 items-center ${
                feature.included ? 'text-zinc-300' : 'text-zinc-400 opacity-50'
              }`}
            >
              <Icon
                className={`w-4 h-4 ${
                  feature.included ? 'text-cyan-500' : ''
                }`}
              />
              {feature.label}
            </li>
          );
        })}
      </ul>

      <button
        className={`w-full py-3 rounded-full flex items-center justify-center gap-2 font-semibold transition-all ${
          edition.highlighted
            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]'
            : 'bg-white/10 hover:bg-white/20 border border-white/20 text-white'
        }`}
      >
        <ShoppingCart className="w-4 h-4" /> Add to Cart
      </button>
    </motion.div>
  );
}
