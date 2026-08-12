import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { FEATURED_GAMES } from '../../constants';
import { GameCard } from './GameCard';
import { AllGamesModal } from './AllGamesModal';

export function FeaturedGames() {
  const [isAllGamesOpen, setIsAllGamesOpen] = useState(false);

  return (
    <section id="games" className="py-32 px-6 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            title="FEATURED TITLES"
            subtitle="Experience our latest creations, built with cutting-edge engine technology and passionate craftsmanship."
            centered={false}
            className="mb-0"
          />
          <button
            onClick={() => setIsAllGamesOpen(true)}
            className="group flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium cursor-pointer shrink-0"
          >
            View All Games
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_GAMES.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>
      </div>

      <AllGamesModal
        isOpen={isAllGamesOpen}
        onClose={() => setIsAllGamesOpen(false)}
      />
    </section>
  );
}
