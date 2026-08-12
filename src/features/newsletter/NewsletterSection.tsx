import { Mail } from 'lucide-react';
import { AnimatedSection } from '../../components/ui/AnimatedSection';
import { SectionHeading } from '../../components/ui/SectionHeading';

export function NewsletterSection() {
  return (
    <section className="py-32 px-6 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/5 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 mb-8 shadow-xl">
            <Mail className="w-8 h-8 text-cyan-400" />
          </div>
          <SectionHeading
            title="JOIN THE VANGUARD"
            subtitle="Subscribe to our newsletter for exclusive developer updates, early access opportunities, and behind-the-scenes content."
          />

          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your transmission address..."
              className="flex-1 bg-zinc-900 border border-zinc-800 rounded-full px-6 py-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-zinc-600 shadow-inner"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-cyan-500 text-zinc-950 font-bold rounded-full hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-95 transform"
            >
              Subscribe
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
