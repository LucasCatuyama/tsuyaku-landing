import { useWhatsAppRedirect } from './hooks/useWhatsAppRedirect';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Service from './sections/Service';
import Situations from './sections/Situations';
import About from './sections/About';
import Reason from './sections/Reason';
import Testimonials from './sections/Testimonials';
import Price from './sections/Price';
import Faq from './sections/Faq';
import Cta from './sections/Cta';
import Footer from './sections/Footer';
import StickyWhatsAppCTA from './components/StickyWhatsAppCTA';
import ScrollProgress from './components/ScrollProgress';

const App = () => {
  const redirectWhatsapp = useWhatsAppRedirect();

  return (
    <>
      <ScrollProgress />
      <Header onContatoClick={redirectWhatsapp}></Header>
      <Hero onContatoClick={redirectWhatsapp}></Hero>
      <Service></Service>
      <Situations />
      <About></About>
      <Reason></Reason>
      <Testimonials></Testimonials>
      <Price></Price>
      <Faq />
      <Cta onContatoClick={redirectWhatsapp}></Cta>
      <Footer></Footer>
      <StickyWhatsAppCTA />
    </>
  );
};

export default App;
