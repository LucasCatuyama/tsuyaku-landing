import { motion, useReducedMotion } from 'framer-motion';
import Accordion from '../components/Accordion';
import { useLanguage } from '../i18n/LanguageProvider';
import { fadeUp } from '../motion/variants';

export default function Faq() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const items = t('faq.items') || [];

  return (
    <section id="faq" className="bg-[var(--bg-2)] py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center text-[var(--text)] tracking-tight"
          {...fadeUp(reducedMotion, { distance: 16 })}
        >
          {t('faq.title')}
        </motion.h2>

        <motion.div {...fadeUp(reducedMotion, { delay: 0.05 })}>
          <Accordion items={items} />
        </motion.div>
      </div>
    </section>
  );
}


