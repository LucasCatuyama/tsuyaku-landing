import { motion, useReducedMotion } from 'framer-motion';
import { BadgeCheck, ShieldCheck, Languages, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';
import { fadeUp } from '../motion/variants';

const icons = [
  <Languages key="l" className="w-6 h-6 text-white" />,
  <BadgeCheck key="b" className="w-6 h-6 text-white" />,
  <ShieldCheck key="s" className="w-6 h-6 text-white" />,
  <HeartHandshake key="h" className="w-6 h-6 text-white" />,
];

export default function Proof() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const items = t('proof.items') || [];

  return (
    <section id="proof" className="bg-[var(--bg)] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center text-[var(--text)] tracking-tight"
          {...fadeUp(reducedMotion, { distance: 14 })}
        >
          {t('proof.title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 shadow-[var(--shadow-soft)]"
              {...fadeUp(reducedMotion, { delay: idx * 0.06, distance: 14 })}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] p-3 rounded-full border border-[var(--border)]">
                  {icons[idx] ?? icons[0]}
                </div>
                <div className="text-lg font-semibold text-[var(--text)]">{item.title}</div>
              </div>
              <div className="text-[var(--muted)] leading-relaxed">{item.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


