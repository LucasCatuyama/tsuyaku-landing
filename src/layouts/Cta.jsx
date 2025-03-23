import { motion } from "framer-motion";
import Button from "../components/Button";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const Cta = ({ onContatoClick }) => {
  return (
    <section className="relative bg-gradient-to-br from-orange-100 via-yellow-50 to-white py-24 px-6 md:px-12 overflow-hidden">
      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight"
          variants={fadeIn}
          custom={0}
        >
          Tradução humana, empática e eficiente.
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-4"
          variants={fadeIn}
          custom={1}
        >
          Tenha apoio profissional em qualquer situação no Japão. Conte com um atendimento acolhedor, ágil e totalmente em português.
        </motion.p>

        <motion.p
          className="text-md text-gray-500 mb-10"
          variants={fadeIn}
          custom={2}
        >
          Entre em contato agora mesmo. A primeira ligação é gratuita e sem compromisso.
        </motion.p>

        <motion.div variants={fadeIn} custom={3}>
          <motion.div {...pulseAnimation} className="inline-block">
            <Button onClick={onContatoClick}>
              Solicitar atendimento agora
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Cta;
