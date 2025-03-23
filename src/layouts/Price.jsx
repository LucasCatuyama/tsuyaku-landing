import { motion } from 'framer-motion';

const Price = () => {
  return (
    <section id="price" className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-10 text-gray-700"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Preços
        </motion.h2>

        <motion.div
          className="space-y-6 text-lg text-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            <strong className="text-orange-400 text-xl">¥3000</strong> pela primeira hora
          </p>
          <p>
            <strong className="text-orange-400 text-xl">¥1000</strong> por hora adicional
          </p>
          <p className="text-gray-600">
            A ligação para agendamento é <strong className="text-green-600">gratuita</strong> e sem compromisso.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Price;
