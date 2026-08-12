import { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { AnimatedSection } from '../../components/ui/AnimatedSection';
import { SectionHeading } from '../../components/ui/SectionHeading';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: 'Press Inquiries',
    value: 'press@gamerealm.com',
  },
  {
    icon: MessageSquare,
    label: 'Player Support',
    value: 'support@gamerealm.com',
  },
];

export function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ name: '', email: '', message: '' });
  };

  const updateField = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 px-6 bg-transparent relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="CONTACT HQ"
          subtitle="Have questions about the game or want to reach out to the development team? Drop us a line."
        />

        <AnimatedSection className="bg-zinc-950/60 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-zinc-400 mb-8 text-sm leading-relaxed">
                Whether you&apos;re a player looking for support, a creator wanting to
                collaborate, or press requesting a review copy, our team is ready to connect.
              </p>

              <div className="space-y-6">
                {CONTACT_METHODS.map((method) => (
                  <div
                    key={method.label}
                    className="flex items-center gap-4 text-zinc-300"
                  >
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                      <method.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">
                        {method.label}
                      </div>
                      <div className="font-medium">{method.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={updateField('name')}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={updateField('email')}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={updateField('message')}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all resize-none"
                  placeholder="How can we help?"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
