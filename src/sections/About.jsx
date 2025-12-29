import { motion, useReducedMotion } from 'framer-motion';
import { BookOpen, GraduationCap, Languages, Briefcase } from "lucide-react";
import { useLanguage } from '../i18n/LanguageProvider';
import { fadeUp } from '../motion/variants';

const icons = [
  <Languages key="l" className="w-6 h-6 text-white" />,
  <BookOpen key="b" className="w-6 h-6 text-white" />,
  <Briefcase key="br" className="w-6 h-6 text-white" />,
  <GraduationCap key="g" className="w-6 h-6 text-white" />,
];

const About = () => {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const steps = t('about.steps') || [];

  return (
    <section id="about" className="bg-[var(--bg-2)] py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-[var(--text)] tracking-tight"
          {...fadeUp(reducedMotion, { distance: 16 })}
        >
          {t('about.title')}
        </motion.h2>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4"
              {...fadeUp(reducedMotion, { delay: index * 0.08, distance: 14 })}
            >
              <div className="bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] p-3 rounded-full shadow-[var(--shadow-soft)] border border-[var(--border)]">
                {icons[index] ?? icons[0]}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--text)] mb-1">{step.title}</h3>
                <p className="text-[var(--muted)]">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

