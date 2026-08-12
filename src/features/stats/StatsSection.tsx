import { motion } from 'motion/react';
import { STATS } from '../../constants';

export function StatsSection() {
  return (
    <section
      id="about"
      className="py-24 border-y border-white/10 bg-zinc-900/30 relative overflow-hidden"
    >
      <div className="absolute left-0 top-0 w-1/3 h-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-0 top-0 w-1/3 h-full bg-violet-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center space-y-3"
            >
              <span className="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500 drop-shadow-sm">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-zinc-400 uppercase tracking-widest">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
