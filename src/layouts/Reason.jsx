import { motion } from "framer-motion";
import { BadgeCheck, Languages, School, BookOpen, Code, Heart } from "lucide-react";

const motivos = [
  {
    icon: <Languages className="w-8 h-8 text-[var(--button-blue)]" />,
    title: "Fluência em Japonês",
    description: "Certificação JLPT N1 e domínio completo do idioma.",
  },
  {
    icon: <School className="w-8 h-8 text-[var(--button-blue)]" />,
    title: "Vivência no Japão",
    description: "Fui alfabetizado e estudei no Japão, com conhecimento cultural profundo.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-[var(--button-blue)]" />,
    title: "Formação Acadêmica",
    description: "Graduado em Administração e cursando Engenharia de Software.",
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-[var(--button-blue)]" />,
    title: "Experiência como Professor",
    description: "Já atuei como professor de japonês com foco em clareza e didática.",
  },
  {
    icon: <Code className="w-8 h-8 text-[var(--button-blue)]" />,
    title: "Tradutor com visão técnica",
    description: "Experiência em tradução com sensibilidade linguística e precisão.",
  },
  {
    icon: <Heart className="w-8 h-8 text-[var(--button-blue)]" />,
    title: "Atendimento Humanizado",
    description: "Empatia, paciência e compromisso em cada atendimento, pensando no bem-estar do cliente.",
  },
];

const Reason = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Por que me escolher
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {motivos.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[var(--light-bg)] p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reason;
