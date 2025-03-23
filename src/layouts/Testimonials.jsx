import testimonials from '../data/testimonials.json';
import TestimonialCard from '../components/TestimonialCard';

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} data={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
