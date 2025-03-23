import { useEffect, useState } from 'react';
import Button from '../components/Button';

const Header = ({ onContatoClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false); // rolando para baixo
      } else {
        setShowHeader(true); // rolando para cima
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Logo e botão do menu */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">
            Tradução em Izumo
          </h1>
    
          <button
            className="sm:hidden text-gray-800 text-3xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Navegação responsiva */}
        <nav
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } flex-col sm:flex sm:flex-row sm:items-center sm:space-x-6`}
        >
          <a href="#hero" className="text-gray-600 hover:text-orange-500 transition-colors">
            Início
          </a>
          <a href="#services" className="text-gray-600 hover:text-orange-500 transition-colors">
            Serviços
          </a>
          <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors">
            Sobre mim
          </a>
          <a href="#testimonial" className="text-gray-600 hover:text-orange-500 transition-colors">
            Depoimentos
          </a>
          <a href="#price" className="text-gray-600 hover:text-orange-500 transition-colors">
            Preços
          </a>
          <Button onClick={onContatoClick}>Entre em contato</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
