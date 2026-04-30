import PageLayout from '../components/PageLayout';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const heroVideo = '/assets/videos/tipsy_sprays/video1.mp4';
const sprayAssets = [
  { src: '/assets/images/tipsy_sprays/image1.jpg', link: 'https://www.instagram.com/p/DURhP-RCLVU/' },
  { src: '/assets/images/tipsy_sprays/image2.jpg', link: 'https://www.instagram.com/p/DUX3_7ziJ9l/' },
  { src: '/assets/images/tipsy_sprays/image3.jpg', link: 'https://www.instagram.com/p/DUdL170iDTS/' },
  { src: '/assets/images/tipsy_sprays/image4.jpg', link: 'https://www.instagram.com/p/DUpt63eiEgR/' },
  { src: '/assets/images/tipsy_sprays/image5.jpg', link: 'https://www.instagram.com/p/DUqXWBwiEO8/' },
];

const highlightLink = "https://www.instagram.com/stories/highlights/17978684780972585/";

const TipsySprays = () => {
  return (
    <PageLayout 
      title="TIPSY SPRAYS" 
      tagline="Not just a topping. A signature move." 
      videoBanner={heroVideo}
    >
      <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 aspect-square rounded-3xl overflow-hidden border border-accent/20 relative group"
        >
          <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover">
            <source src={heroVideo} type="video/mp4" />
          </video>

          {/* Redirect Icon for Hero Video */}
          <a 
            href={highlightLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 right-6 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-accent transition-all duration-300 z-10 hover:scale-110"
            title="View on Instagram"
          >
            <Instagram size={20} />
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 space-y-8"
        >
          <h2 className="text-5xl md:text-7xl font-heading leading-tight">The <span className="text-accent text-glow">Final Touch</span> that defines us.</h2>
          <p className="text-xl text-white/60 leading-relaxed font-body">
            Our signature Tipsy Sprays are what separate a toastie from a Tipsy Toastie. 
            Infused with secret flavors and crafted to elevate every bite, it's the 
            mist that makes the magic.
          </p>
          <ul className="space-y-4">
            {['Secret Formula', 'Flavor Explosion', 'Reel-Ready Mist', 'Signature Aroma'].map((item, i) => (
              <li key={i} className="flex items-center space-x-3 text-white/80">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="font-heading tracking-widest text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {sprayAssets.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-2xl overflow-hidden aspect-[3/4] group relative cursor-pointer"
          >
            <img 
              src={item.src} 
              alt={`Spray ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            
            {/* Redirect Icon for Grid Image */}
            <a 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-accent transition-all duration-300 z-10 hover:scale-110 opacity-0 group-hover:opacity-100"
              title="View Post"
              onClick={(e) => e.stopPropagation()}
            >
              <Instagram size={16} />
            </a>

            <a 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
              <span className="font-heading tracking-widest bg-black/50 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">VIEW POST</span>
            </a>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
};

export default TipsySprays;
