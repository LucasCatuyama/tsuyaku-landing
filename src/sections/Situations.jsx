import { motion, useReducedMotion } from 'framer-motion';
import Button from '../components/Button';
import { useLanguage } from '../i18n/LanguageProvider';
import { fadeUp } from '../motion/variants';
import { openWhatsApp } from '../utils/whatsapp';

export default function Situations() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const cards = t('situations.cards') || [];

  const handleSelect = (card) => {
    const message = t('whatsapp.situationShort', { situation: card.title });
    openWhatsApp(undefined, message);
  };

  return (
    <section id="situations" className="bg-[var(--light-bg)] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-4 text-center text-gray-800"
          {...fadeUp(reducedMotion, { distance: 16 })}
        >
          {t('situations.title')}
        </motion.h2>

        <motion.p className="text-gray-700 text-center mb-10" {...fadeUp(reducedMotion, { delay: 0.05 })}>
          {t('situations.subtitle')}
        </motion.p>

        <div className="text-center text-sm text-gray-600 mb-3">{t('situations.chipsLabel')}</div>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {cards.map((card, idx) => (
            <motion.button
              key={card.id ?? idx}
              type="button"
              className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-800 hover:border-[var(--button-blue)] hover:text-[var(--button-blue)] transition"
              onClick={() => handleSelect(card)}
              {...fadeUp(reducedMotion, { delay: idx * 0.04, distance: 10 })}
            >
              {card.title}
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id ?? idx}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition"
              {...fadeUp(reducedMotion, { delay: idx * 0.06 })}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap">{t('situations.ctaHint')}</span>
              </div>

              <div className="mt-5">
                <p className="text-sm font-semibold text-gray-800 mb-2">{t('situations.checklistTitle')}</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {(card.bring || []).map((x, i) => (
                    <li key={i}>{x}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <Button onClick={() => handleSelect(card)}>{t('hero.cta')}</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


