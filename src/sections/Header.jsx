import { useEffect, useState } from 'react';
import Button from '../components/Button';
import { useLanguage } from '../i18n/LanguageProvider';

const Header = ({ onContatoClick }) => {
  const { lang, setLang, t, supported } = useLanguage();
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
      className={`fixed top-0 left-0 w-full bg-[var(--header-bg)] backdrop-blur border-b border-[var(--border)] z-50 transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Logo e botão do menu */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[var(--text)] tracking-tight">
            {t('brand.name')}
          </h1>
    
          <button
            className="sm:hidden text-[var(--text)] text-3xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
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
          <a
            href="#hero"
            className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {t('nav.home')}
          </a>
          <a
            href="#services"
            className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {t('nav.services')}
          </a>
          <a
            href="#situations"
            className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {t('nav.situations')}
          </a>
          <a
            href="#about"
            className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {t('nav.about')}
          </a>
          <a
            href="#testimonial"
            className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {t('nav.testimonials')}
          </a>
          <a
            href="#price"
            className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {t('nav.price')}
          </a>
          <a
            href="#faq"
            className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {t('nav.faq')}
          </a>

          <div className="flex items-center gap-3">
            <label className="text-sm text-[var(--muted)]" htmlFor="lang">
              {t('language.label')}
            </label>
            <select
              id="lang"
              className="border border-[var(--border)] rounded-lg px-2 py-1 bg-[var(--surface)] text-[var(--text)]"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              {supported.map((l) => (
                <option key={l} value={l}>
                  {t(`language.${l}`)}
                </option>
              ))}
            </select>
          </div>

          <Button
            onClick={() => {
              setMenuOpen(false);
              onContatoClick?.();
            }}
          >
            {t('nav.contact')}
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

