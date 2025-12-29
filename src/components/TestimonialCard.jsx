import quotes from '../assets/quote-yellow.png'; 

const TestimonialCard = ({ data }) => {
  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 shadow-[var(--shadow-soft)] max-w-sm min-h-full">
      <img src={quotes} alt="quote icon" className="w-6 h-6 mb-4 opacity-90" />

      <h3 className="text-xl font-bold mb-2">{data.quote}</h3>

      <p className="text-[var(--muted)] mb-4">{data.description}</p>

      <div className="border-t border-[var(--border)] pt-4 flex justify-between items-center">
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < data.rating ? 'text-[var(--accent)]' : 'text-[rgba(234,240,255,0.22)]'}>
              ★
            </span>
          ))}
        </div>
        <span className="text-sm text-[var(--muted-2)]">{data.author}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
