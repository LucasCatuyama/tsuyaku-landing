import { motion } from 'framer-motion';
import { Stethoscope, FileText, Landmark } from 'lucide-react';

const services = [
  {
    icon: <Stethoscope className="w-8 h-8 text-[var(--button-blue)]" />,
    title: 'Acompanhamento ao médico',
    description: 'Tradução e apoio durante consultas, exames e atendimentos hospitalares.',
  },
  {
    icon: <Landmark className="w-8 h-8 text-[var(--button-blue)]" />,
    title: 'Acompanhamento a órgãos públicos',
    description: 'Apoio em prefeitura, imigração, correios e outros serviços públicos.',
  },
  {
    icon: <FileText className="w-8 h-8 text-[var(--button-blue)]" />,
    title: 'Tradução de documentos',
    description: 'Tradução de certificados, contratos, formulários e documentos oficiais.',
  },
];

const Service = () => {
  return (
    <section id="services" className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-700"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Serviços Prestados
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[var(--light-bg)] p-6 rounded-2xl shadow hover:shadow-md transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
