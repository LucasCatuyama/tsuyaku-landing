import { createContext, useCallback, useContext, useEffect, useMemo } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';
import { SUPPORTED_LANGS, tFor, TRANSLATIONS } from './translations';

const LanguageContext = createContext(null);

function normalizeLang(candidate) {
  const raw = (candidate || '').toLowerCase();
  if (raw.startsWith('pt')) return 'pt';
  if (raw.startsWith('en')) return 'en';
  return null;
}

function detectInitialLanguage() {
  const candidates = Array.isArray(navigator.languages) ? navigator.languages : [navigator.language];
  for (const c of candidates) {
    const normalized = normalizeLang(c);
    if (normalized && SUPPORTED_LANGS.includes(normalized)) return normalized;
  }
  return 'pt';
}

export function LanguageProvider({ children }) {
  const [lang, setLangRaw] = useLocalStorageState('tsuyaku.lang', detectInitialLanguage());

  // If user previously had an unsupported language saved (e.g. JA), auto-fallback to PT.
  useEffect(() => {
    if (!SUPPORTED_LANGS.includes(lang)) setLangRaw('pt');
  }, [lang, setLangRaw]);

  const setLang = useCallback(
    (next) => {
      const normalized = normalizeLang(next) || 'pt';
      setLangRaw(normalized);
    },
    [setLangRaw],
  );

  const t = useCallback((key, vars) => tFor(lang, key, vars), [lang]);

  const value = useMemo(() => {
    const labels = SUPPORTED_LANGS.map((l) => ({ value: l, label: tFor(lang, `language.${l}`) }));
    return { lang, setLang, t, labels, supported: SUPPORTED_LANGS };
  }, [lang, setLang, t]);

  useEffect(() => {
    document.documentElement.lang = lang;

    const title = tFor(lang, 'meta.title') || TRANSLATIONS.pt.meta.title;
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', tFor(lang, 'meta.description'));
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}


