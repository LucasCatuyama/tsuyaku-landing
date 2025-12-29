import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: reducedMotion ? 1000 : 120,
    damping: reducedMotion ? 200 : 20,
    mass: 0.2,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[linear-gradient(90deg,var(--accent),var(--accent-2))] origin-left z-[60]"
      style={{ scaleX }}
    />
  );
}


