import { useMemo } from 'react';
import { useLanguage } from '../i18n/LanguageProvider';
import { openWhatsApp } from '../utils/whatsapp';

export default function StickyWhatsAppCTA() {
  const { t } = useLanguage();
  const cards = useMemo(() => t('situations.cards') || [], [t]);

  const openDefault = () => openWhatsApp(undefined, t('whatsapp.defaultMessage'));
  const openFor = (card) => openWhatsApp(undefined, t('whatsapp.situationShort', { situation: card.title }));

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--border)] bg-[rgba(7,10,18,0.82)] backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="text-sm font-semibold text-[var(--text)]">{t('stickyCta.title')}</div>
            <div className="text-xs text-[var(--muted)] truncate">{t('stickyCta.subtitle')}</div>
          </div>
          <button
            type="button"
            className="shrink-0 px-4 py-2 rounded-lg text-white font-semibold
            bg-[linear-gradient(135deg,var(--accent),var(--accent-2))]
            hover:brightness-110 active:brightness-95 transition"
            onClick={openDefault}
          >
            {t('stickyCta.button')}
          </button>
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {cards.slice(0, 4).map((card, idx) => (
            <button
              key={card.id ?? idx}
              type="button"
              className="whitespace-nowrap px-3 py-1.5 rounded-full border border-[var(--border)] text-xs text-[var(--text)]
              bg-[var(--surface)] hover:bg-[var(--surface-2)] transition"
              onClick={() => openFor(card)}
            >
              {card.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}


