import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { CATALOG_GAMES } from '../../constants';

interface AllGamesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AllGamesModal({ isOpen, onClose }: AllGamesModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-zinc-900 border border-white/10 p-8 rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto relative shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-3xl font-display font-bold text-white mb-6 pr-8">
              GameRealm Catalog
            </h3>

            <div className="space-y-4">
              {CATALOG_GAMES.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white/5 border border-white/10 rounded-2xl flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer group"
                >
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-sm text-zinc-400">{item.desc}</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold bg-zinc-950/80 text-zinc-300 rounded-full border border-white/10">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
