import { useId, useState } from 'react';

export default function Accordion({ items = [] }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = idx === openIndex;
        const buttonId = `${baseId}-btn-${idx}`;
        const panelId = `${baseId}-panel-${idx}`;

        return (
          <div
            key={idx}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-[var(--shadow-soft)]"
          >
            <button
              id={buttonId}
              type="button"
              className="w-full px-4 py-4 text-left flex items-center justify-between gap-4 hover:bg-[var(--surface-2)] transition"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
            >
              <span className="font-semibold text-[var(--text)]">{item.q}</span>
              <span className="text-[var(--muted)]">{isOpen ? '–' : '+'}</span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={isOpen ? 'px-4 pb-4' : 'px-4 pb-4 hidden'}
            >
              <p className="text-[var(--muted)] leading-relaxed">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}


