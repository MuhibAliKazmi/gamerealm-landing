import { CreditCard, ShieldCheck, Wallet } from 'lucide-react';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { EDITIONS } from '../../constants';
import { EditionCard } from './EditionCard';

function PaymentMethod({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm">
      {children}
    </span>
  );
}

export function BuySection() {
  return (
    <section id="buy" className="py-32 px-6 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="PRE-ORDER GAMEREALM"
          subtitle="Choose your edition and prepare to enter the most immersive digital realm ever created."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {EDITIONS.map((edition, index) => (
            <EditionCard key={edition.name} edition={edition} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">
            Secure Payment Options
          </p>
          <div className="flex justify-center items-center gap-6 text-zinc-400 flex-wrap">
            <PaymentMethod>
              <CreditCard className="w-5 h-5" /> Credit Card
            </PaymentMethod>
            <PaymentMethod>
              <Wallet className="w-5 h-5" /> PayPal
            </PaymentMethod>
            <PaymentMethod>
              <ShieldCheck className="w-5 h-5" /> Secure Checkout
            </PaymentMethod>
          </div>
        </div>
      </div>
    </section>
  );
}
