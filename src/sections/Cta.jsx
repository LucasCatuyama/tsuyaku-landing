import { motion, useReducedMotion } from 'framer-motion';
import Button from '../components/Button';
import { useLanguage } from '../i18n/LanguageProvider';
import { fadeUp } from '../motion/variants';

const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const Cta = ({ onContatoClick }) => {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();

  return (
    <section className=" relative bg-[var(--light-bg)] py-24 px-6 md:px-10 overflow-hidden">
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight"
          {...fadeUp(reducedMotion, { distance: 16 })}
        >
          {t('cta.title')}
        </motion.h2>

        <motion.p
          className="text-lg text-left md:text-xl text-gray-700 mb-4"
          {...fadeUp(reducedMotion, { delay: 0.05 })}
        >
          {t('cta.p1')}
        </motion.p>

        <motion.p
          className="text-lg text-left text-gray-700 mb-10"
          {...fadeUp(reducedMotion, { delay: 0.1 })}
        >
          {t('cta.p2')}
        </motion.p>

        <motion.div {...fadeUp(reducedMotion, { delay: 0.15 })}>
          <motion.div
            {...(reducedMotion ? {} : pulseAnimation)}
            className="inline-block"
          >
            <Button onClick={onContatoClick}>
              {t('cta.button')}
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Cta;

