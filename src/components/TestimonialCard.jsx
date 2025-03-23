import quotes from '../assets/quotes.png'; 

const TestimonialCard = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md max-w-sm">
      <img src={quotes} alt="quote icon" className="w-6 h-6 mb-4 text-orange-400" />

      <h3 className="text-xl font-bold mb-2">{data.quote}</h3>

      <p className="text-gray-600 mb-4">{data.description}</p>

      <div className="border-t pt-4 flex justify-between items-center">
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < data.rating ? 'text-orange-400' : 'text-gray-300'}>
              ★
            </span>
          ))}
        </div>
        <span className="text-sm text-gray-700">{data.author}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
