import PageLayout from '../components/PageLayout';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  { video: '/assets/videos/reviews/video1.mp4', quote: "Worth every bite", stars: 5 },
  { video: '/assets/videos/reviews/video2.mp4', quote: "Did not expect this", stars: 5 },
  { video: '/assets/videos/reviews/video3.mp4', quote: "The vibe is insane", stars: 5 },
  { video: '/assets/videos/reviews/video4.mp4', quote: "Best toastie ever", stars: 5 },
  { video: '/assets/videos/reviews/video5.mp4', quote: "Insta-worthy & delicious", stars: 5 },
  { video: '/assets/videos/reviews/video6.mp4', quote: "Truly an experience", stars: 5 },
];

const Reviews = () => {
  return (
    <PageLayout 
      title="REVIEWS" 
      tagline="Don’t take our word. Watch theirs." 
      videoBanner={reviews[0].video}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-3xl overflow-hidden bg-charcoal border border-white/10 group relative aspect-[9/16]"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
            >
              <source src={review.video} type="video/mp4" />
            </video>

            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent">
              <div className="flex space-x-1 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="#ff6600" className="text-accent" />
                ))}
              </div>
              <Quote size={32} className="text-accent/40 mb-4" />
              <h3 className="text-2xl font-heading mb-2 italic tracking-wide">"{review.quote}"</h3>
              <p className="text-white/40 text-sm uppercase tracking-[0.2em]">Verified Reaction</p>
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Reviews;
