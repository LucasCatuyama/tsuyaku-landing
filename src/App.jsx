import { useWhatsAppRedirect } from './hooks/useWhatsAppRedirect';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Service from './sections/Service';
import About from './sections/About';
import Reason from './sections/Reason';
import Testimonials from './sections/Testimonials';
import Price from './sections/Price';
import Cta from './sections/Cta';
import Footer from './sections/Footer';

const App = () => {
  const redirectWhatsapp = useWhatsAppRedirect();

  return (
    <>
      <Header onContatoClick={redirectWhatsapp}></Header>
      <Hero onContatoClick={redirectWhatsapp}></Hero>
      <Service></Service>
      <About></About>
      <Reason></Reason>
      <Testimonials></Testimonials>
      <Price></Price>
      <Cta onContatoClick={redirectWhatsapp}></Cta>
      <Footer></Footer>
      
    </>
  );
};

export default App;
