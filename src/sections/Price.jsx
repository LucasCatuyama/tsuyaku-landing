import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageProvider';
import { fadeUp } from '../motion/variants';
import Button from '../components/Button';
import { useWhatsAppRedirect } from '../hooks/useWhatsAppRedirect';

const Price = () => {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const redirectWhatsapp = useWhatsAppRedirect();

  return (
    <section id="price" className="bg-[var(--bg)] py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-[var(--text)] tracking-tight"
          {...fadeUp(reducedMotion, { distance: 16 })}
        >
          {t('price.title')}
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-6 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 shadow-[var(--shadow-soft)]"
          {...fadeUp(reducedMotion, { delay: 0.05 })}
        >
          <div className="md:col-span-2">
            <div className="text-[var(--muted)] space-y-3">
              <p>
                <strong className="text-[var(--text)] text-xl">¥5000</strong>{' '}
                {t('price.firstSuffix')}
              </p>
              <p>
                <strong className="text-[var(--text)] text-xl">¥1000</strong>{' '}
                {t('price.afterSuffix')}
              </p>
              <p className="text-[var(--muted-2)]">
                {t('price.noteBefore')}{' '}
                <strong className="text-white">{t('price.free')}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Button onClick={redirectWhatsapp}>{t('hero.cta')}</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Price;

