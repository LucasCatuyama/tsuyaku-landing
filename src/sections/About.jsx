import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Languages, Briefcase } from "lucide-react";

const steps = [
  {
    icon: <Languages className="w-6 h-6 text-white" />,
    title: "Alfabetização no Japão",
    text: "Fui alfabetizado no Japão, vivenciando desde cedo a cultura e o idioma no dia a dia.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    title: "JLPT N1",
    text: "Alcancei a certificação máxima do japonês (N1), comprovando domínio avançado da língua.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-white" />,
    title: "Experiência Profissional",
    text: "Atuei como tradutor em uma empresa japonesa com foco na expansão para o Brasil.",
  },
  // {
  //   icon: <GraduationCap className="w-6 h-6 text-white" />,
  //   title: "Formação Acadêmica",
  //   text: "Sou graduado em Administração e atualmente curso Engenharia de Software no Brasil.",
  // },
];

const About = () => {
  return (
    <section id="about" className="bg-[var(--light-bg)] py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-700"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Sobre mim
        </motion.h2>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-[var(--button-blue)] p-3 rounded-full shadow">
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{step.title}</h3>
                <p className="text-gray-600">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

