import Header from './layouts/Header';
import Hero from './layouts/Hero';
import Service from './layouts/Service';
import About from './layouts/About';
import Reason from './layouts/Reason';
import Testimonials from './layouts/Testimonials';
import Price from './layouts/Price';
import Cta from './layouts/Cta';
import Footer from './layouts/Footer';


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
      <Header onContatoClick={redirectWhatsapp}></Header>
      <Hero onContatoClick={redirectWhatsapp}></Hero>
      <Service></Service>
      <About></About>
      <Reason></Reason>
      <Testimonials></Testimonials>
      <Price></Price>
      <Cta></Cta>
      <Footer></Footer>
    </>
  );
};

export default App;
