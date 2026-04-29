import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const blocks = [
  { 
    title: "YOU", 
    tagline: "Real people. Real vibes.", 
    path: "/you", 
    img: "/assets/images/posts/image1.jpg",
    color: "from-blue-500/20"
  },
  { 
    title: "FOOD", 
    tagline: "Irresistible bites.", 
    path: "/food", 
    img: "/assets/images/posts/image2.jpg",
    color: "from-accent/20"
  },
  { 
    title: "REVIEWS", 
    tagline: "They loved it.", 
    path: "/reviews", 
    img: "/assets/images/posts/image3.jpg",
    color: "from-green-500/20"
  },
  { 
    title: "ART", 
    tagline: "Not just food, it’s art.", 
    path: "/art", 
    img: "/assets/images/posts/image4.jpg",
    color: "from-purple-500/20"
  },
  { 
    title: "TIPSY SPRAYS", 
    tagline: "Signature twist.", 
    path: "/tipsy-sprays", 
    img: "/assets/images/posts/image13.jpg",
    color: "from-yellow-500/20"
  },
];

const Highlights = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {blocks.map((block, index) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={block.path} className="relative block h-[400px] md:h-[500px] lg:h-[450px] overflow-hidden rounded-3xl border border-white/5">
                {/* Image */}
                <img 
                  src={block.img} 
                  alt={block.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${block.color} via-black/40 to-black/80 group-hover:via-black/20 group-hover:to-black/60 transition-colors duration-500`} />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-4xl font-heading mb-2 group-hover:text-accent transition-colors">
                    {block.title}
                  </h3>
                  <p className="text-white/60 font-body mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {block.tagline}
                  </p>
                  <div className="flex items-center space-x-2 text-white/40 group-hover:text-white transition-colors">
                    <span className="text-xs uppercase tracking-[0.3em]">Explore</span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
