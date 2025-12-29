import { motion } from "framer-motion";
import Button from "../components/Button";
import myImage from "../assets/my-photo.jpeg";
import { ChevronDown } from "lucide-react"; // Ícone de seta

const Hero = ({ onContatoClick }) => {
  return (
    <section
      id="hero"
      className="bg-[var(--light-bg)] flex flex-col justify-center px-6 pt- md:px-12 relative"
      style={{ minHeight: "100vh" }}
    >
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 py-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Imagem */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={myImage}
            alt="Tradução e suporte no Japão"
            className="rounded-2xl shadow-md object-cover w-full max-w-md sm:h-auto "
            style={{ maxHeight: "450px" }}
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          className="w-full md:w-1/2 items-center justify-center sm: h-auto"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
            <h1 className="text-4xl text-gray-800 md:text-5xl font-bold mb-6 leading-tight">
            Quebre a barreira do idioma no Japão
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            Olá! Me chamo <strong className="text-yellow-600">Lucas Catuyama</strong> e ofereço tradução profissional e acompanhamento presencial para brasileiros que vivem no Japão. 
            Conte com apoio em hospitais, prefeituras e qualquer situação em que a comunicação clara seja essencial.
            </p>

            <p className="text-lg md:text-xl text-gray-700 mb-6">
            Atendimento humano, rápido e com empatia. <br /> Vamos conversar e entender sua necessidade.
            </p>
          <div className="flex items-center justify-center">
            <Button className="justify-center items-center" onClick={onContatoClick}>Conversar no WhatsApp</Button>
          </div>  
        </motion.div>
      </motion.div>

      {/* Scroll cue - seta animada */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-[var(--button-blue)] cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() => {
            const target = document.getElementById('services');
            if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            }
        }}
        >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;

