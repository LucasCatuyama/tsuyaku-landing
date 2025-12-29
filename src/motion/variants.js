export const VIEWPORT_ONCE = { once: true, amount: 0.25 };

const EASE = [0.22, 1, 0.36, 1]; // easeOut-ish

export function fadeUp(reducedMotion, { delay = 0, distance = 24, duration = 0.6 } = {}) {
  const d = reducedMotion ? 0 : distance;
  const dur = reducedMotion ? 0.001 : duration;
  return {
    initial: { opacity: 0, y: d },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay, duration: dur, ease: EASE },
    viewport: VIEWPORT_ONCE,
  };
}

export function fadeIn(reducedMotion, { delay = 0, duration = 0.5 } = {}) {
  const dur = reducedMotion ? 0.001 : duration;
  return {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { delay, duration: dur, ease: EASE },
    viewport: VIEWPORT_ONCE,
  };
}

export function staggerContainer(reducedMotion, { delayChildren = 0.1, staggerChildren = 0.08 } = {}) {
  if (reducedMotion) {
    return {
      initial: {},
      whileInView: {},
      viewport: VIEWPORT_ONCE,
    };
  }

  return {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { delayChildren, staggerChildren },
    },
    viewport: VIEWPORT_ONCE,
  };
}


