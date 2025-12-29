import { motion, useReducedMotion } from 'framer-motion';
import { BadgeCheck, Languages, School, BookOpen, Code, Heart } from "lucide-react";
import { useLanguage } from '../i18n/LanguageProvider';
import { fadeUp } from '../motion/variants';

const icons = [
  <Languages key="l" className="w-8 h-8 text-[var(--button-blue)]" />,
  <School key="s" className="w-8 h-8 text-[var(--button-blue)]" />,
  <BadgeCheck key="b" className="w-8 h-8 text-[var(--button-blue)]" />,
  <Code key="c" className="w-8 h-8 text-[var(--button-blue)]" />,
  <BookOpen key="bo" className="w-8 h-8 text-[var(--button-blue)]" />,
  <Heart key="h" className="w-8 h-8 text-[var(--button-blue)]" />,
];

const Reason = () => {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const motivos = t('reasons.items') || [];

  return (
    <section className="bg-[var(--bg)] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-[var(--text)] tracking-tight"
          {...fadeUp(reducedMotion, { distance: 16 })}
        >
          {t('reasons.title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {motivos.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[var(--surface)] border border-[var(--border)] p-6 rounded-2xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow)] transition duration-300"
              {...fadeUp(reducedMotion, { delay: index * 0.08 })}
            >
              <div className="flex items-center gap-4 mb-4">
                {icons[index] ?? icons[0]}
                <h3 className="text-xl font-semibold text-[var(--text)]">{item.title}</h3>
              </div>
              <p className="text-[var(--muted)] text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reason;

