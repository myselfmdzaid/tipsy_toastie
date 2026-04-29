import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useRef } from 'react';

const reviews = [
  {
    id: 1,
    quote: "Worth every bite",
    user: "Instagram User",
    video: "/assets/images/posts/video1.mp4",
    stars: 5
  },
  {
    id: 2,
    quote: "Did not expect this",
    user: "Local Foodie",
    video: "/assets/images/posts/video2.mp4",
    stars: 5
  },
  {
    id: 3,
    quote: "The vibe is insane",
    user: "Tech Traveler",
    video: "/assets/images/posts/video3.mp4",
    stars: 5
  },
  {
    id: 4,
    quote: "Best toastie ever",
    user: "Content Creator",
    video: "/assets/images/posts/video4.mp4",
    stars: 5
  }
];

const ReviewsCarousel = () => {
  const [active, setActive] = useState(0);
  const scrollRef = useRef(null);

  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-heading mb-4 text-shadow-lg">They Loved It</h2>
          <div className="flex justify-center space-x-1 text-accent">
            {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 pb-12"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="min-w-full md:min-w-[400px] snap-center relative rounded-3xl overflow-hidden aspect-[9/16] bg-black group"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
              >
                <source src={review.video} type="video/mp4" />
              </video>

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              <div className="absolute top-8 right-8">
                <Quote size={40} className="text-accent/20" />
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex mb-2">
                  {[...Array(review.stars)].map((_, i) => <Star key={i} size={14} fill="#ff6600" className="text-accent" />)}
                </div>
                <h4 className="text-2xl font-heading mb-1 italic text-shadow-lg">"{review.quote}"</h4>
                <p className="text-white/40 text-sm uppercase tracking-widest text-shadow-lg">— {review.user}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2">
          {reviews.map((_, i) => (
            <button 
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${active === i ? 'w-8 bg-accent' : 'bg-white/20'}`}
              onClick={() => {
                setActive(i);
                scrollRef.current?.scrollTo({ left: i * 400, behavior: 'smooth' });
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
