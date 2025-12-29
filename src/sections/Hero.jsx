import { motion, useReducedMotion } from 'framer-motion';
import Button from '../components/Button';
import myImage from '../assets/my-photo.jpeg';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';
import { fadeUp } from '../motion/variants';

const Hero = ({ onContatoClick }) => {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="bg-[var(--light-bg)] flex flex-col justify-center px-6 pt-24 md:px-12 relative"
      style={{ minHeight: "100vh" }}
    >
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 py-12"
        initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reducedMotion ? 0.001 : 0.9, ease: 'easeOut' }}
      >
        {/* Imagem */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          {...fadeUp(reducedMotion, { delay: 0.05, distance: 18 })}
        >
          <img
            src={myImage}
            alt={t('hero.imageAlt')}
            className="rounded-2xl shadow-md object-cover w-full max-w-md sm:h-auto "
            style={{ maxHeight: "450px" }}
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          className="w-full md:w-1/2 items-center justify-center sm: h-auto"
          {...fadeUp(reducedMotion, { delay: 0.15, distance: 18 })}
        >
            <h1 className="text-4xl text-gray-800 md:text-5xl font-bold mb-6 leading-tight">
            {t('hero.title')}
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            {t('hero.p1Before')}{' '}
            <strong className="text-yellow-600">Lucas Catuyama</strong>{' '}
            {t('hero.p1After')}
            </p>

            <p className="text-lg md:text-xl text-gray-700 mb-6">
            {t('hero.p2')}
            </p>
          <div className="flex items-center justify-center">
            <Button className="justify-center items-center" onClick={onContatoClick}>
              {t('hero.cta')}
            </Button>
          </div>  
        </motion.div>
      </motion.div>

      {/* Scroll cue - seta animada */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-[var(--button-blue)] cursor-pointer"
        animate={reducedMotion ? undefined : { y: [0, 10, 0] }}
        transition={reducedMotion ? undefined : { duration: 1.5, repeat: Infinity }}
        onClick={() => {
            const target = document.getElementById('services');
            if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            }
        }}
        >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;

