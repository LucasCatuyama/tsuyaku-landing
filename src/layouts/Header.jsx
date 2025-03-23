import { useState } from 'react';
import Button from '../components/Button';

const Header = ({ onContatoClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">Tsuyaku</h1>

        {/* Botão de menu (mobile only) */}
        <button
          className="sm:hidden text-gray-800 text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Menu de navegação */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-white px-4 py-4 sm:static sm:flex sm:items-center sm:space-x-6 sm:w-auto sm:p-0 sm:bg-transparent sm:block`}
        >
          <ul className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Início
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Serviços
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Sobre mim
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Preços
              </a>
            </li>
            <li>
              <Button onClick={onContatoClick}>Entre em contato</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
