import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageProvider';
import { fadeUp } from '../motion/variants';

export default function Process() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const steps = t('process.steps') || [];

  return (
    <section id="process" className="bg-[var(--bg-2)] py-14 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center text-[var(--text)] tracking-tight"
          {...fadeUp(reducedMotion, { distance: 14 })}
        >
          {t('process.title')}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <motion.div
              key={idx}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 shadow-[var(--shadow-soft)]"
              {...fadeUp(reducedMotion, { delay: idx * 0.06, distance: 14 })}
            >
              <div className="text-sm font-semibold text-[var(--text)] mb-2">{s.title}</div>
              <div className="text-[var(--muted)] leading-relaxed">{s.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


