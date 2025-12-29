import testimonials from '../data/testimonials.json';
import TestimonialCard from '../components/TestimonialCard';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageProvider';
import { fadeUp, fadeIn } from '../motion/variants';

export default function Testimonials() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();

  return (
    <section id='testimonial' className="bg-[var(--bg-2)] py-16">
      <div className=" mx-auto px-6 md:px-12">
        <motion.h2
          className="text-4xl font-bold text-center text-[var(--text)] mb-12 tracking-tight"
          {...fadeUp(reducedMotion, { distance: 16 })}
        >
          {t('testimonials.title')}
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-8"
          {...fadeIn(reducedMotion, { delay: 0.05 })}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              {...fadeUp(reducedMotion, { delay: i * 0.06 })}
            >
              <TestimonialCard data={t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

