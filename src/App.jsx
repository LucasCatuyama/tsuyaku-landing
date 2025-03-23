import Button from './components/Button';
import Header from './layouts/Header';
import Testimonials from './layouts/Testimonials';

const App = () => {
  const redirectWhatsapp = () => {
    const phone = import.meta.env.VITE_WHATSAPP_PHONE;
    const message = "Olá! Quero saber mais sobre o Tsuyaku.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  
    const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);
  
    if (isMobile) {
      // Melhor comportamento para celular
      window.location.href = url;
    } else {
      // Abre em nova aba no desktop
      window.open(url, "_blank");
    }
  };

  return (
    <>
      <Header></Header>
      <Button onClick={() => redirectWhatsapp()}>
        Mandar
      </Button>
      <Testimonials></Testimonials>
    </>
  );
};

export default App;
