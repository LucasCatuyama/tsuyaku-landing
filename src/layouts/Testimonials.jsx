import testimonials from '../data/testimonials.json';
import TestimonialCard from '../components/TestimonialCard';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section id='testimonial' className="bg-[var(--dark-bg)] py-16">
      <div className=" mx-auto px-6 md:px-12">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-200 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          O que os meus clientes dizem?
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <TestimonialCard data={t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
