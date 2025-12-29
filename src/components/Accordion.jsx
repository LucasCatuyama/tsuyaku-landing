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
          <div key={idx} className="rounded-xl border border-gray-200 bg-white overflow-hidden">
            <button
              id={buttonId}
              type="button"
              className="w-full px-4 py-4 text-left flex items-center justify-between gap-4"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
            >
              <span className="font-semibold text-gray-800">{item.q}</span>
              <span className="text-gray-500">{isOpen ? '–' : '+'}</span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={isOpen ? 'px-4 pb-4' : 'px-4 pb-4 hidden'}
            >
              <p className="text-gray-700 leading-relaxed">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}


