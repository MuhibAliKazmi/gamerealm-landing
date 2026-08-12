import { NavigationBar } from './features/navigation/NavigationBar';
import { HeroSection } from './features/hero/HeroSection';
import { FeaturedGames } from './features/games/FeaturedGames';
import { BuySection } from './features/preorder/BuySection';
import { StatsSection } from './features/stats/StatsSection';
import { NewsletterSection } from './features/newsletter/NewsletterSection';
import { ContactSection } from './features/contact/ContactSection';
import { Footer } from './features/footer/Footer';
import { ScrollCanvasBackground } from './features/background/ScrollCanvasBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-transparent text-zinc-50 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      <ScrollCanvasBackground />
      <NavigationBar />

      <main>
        <HeroSection />
        <FeaturedGames />
        <BuySection />
        <StatsSection />
        <NewsletterSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
