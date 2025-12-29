import { useLanguage } from '../i18n/LanguageProvider';

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="flex flex-col items-center justify-center p-4 bg-[var(--light-bg)] text-gray-700/70 sm:flex-row">
            <p>
              © 2025 <span className="font-semibold">{t('footer.brand')}</span>
            </p>
            <p>{t('footer.rights')}</p>
        </footer>
    )
};

export default Footer;

