import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageProvider';
import { fadeUp } from '../motion/variants';

const Price = () => {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();

  return (
    <section id="price" className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center ">
        <motion.h2
          className="text-4xl font-bold mb-10 text-gray-700"
          {...fadeUp(reducedMotion, { distance: 16 })}
        >
          {t('price.title')}
        </motion.h2>

        <motion.div
          className="space-y-6 text-lg text-gray-700"
          {...fadeUp(reducedMotion, { delay: 0.05 })}
        >
          <p>
            <strong className="text-gray-700 text-xl">¥5000</strong>{' '}
            {t('price.firstSuffix')}
          </p>
          <p>
            <strong className="text-gray-700 text-xl">¥1000</strong>{' '}
            {t('price.afterSuffix')}
          </p>
          <p className="text-gray-600">
            {t('price.noteBefore')}{' '}
            <strong className="text-yellow-600">{t('price.free')}</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Price;

