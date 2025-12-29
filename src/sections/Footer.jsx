import { useLanguage } from '../i18n/LanguageProvider';

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="flex flex-col items-center justify-center p-6 bg-[var(--bg)] text-[var(--muted-2)] border-t border-[var(--border)] sm:flex-row">
            <p>
              © 2025 <span className="font-semibold text-[var(--text)]">{t('footer.brand')}</span>
            </p>
            <p className="sm:ml-3">{t('footer.rights')}</p>
        </footer>
    )
};

export default Footer;

