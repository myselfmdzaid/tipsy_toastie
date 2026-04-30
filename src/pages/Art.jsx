import PageLayout from '../components/PageLayout';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const artContent = [
  {
    video: '/assets/videos/art/video1.mp4',
    title: "The Melting Masterpiece",
    description: "Watch as the golden cheese meets the heat, creating a mesmerizing cascade of flavor that's as fluid as it is delicious."
  },
  {
    video: '/assets/videos/art/video2.mp4',
    title: "Symmetry in Spice",
    description: "Every drizzle and every dash of spice is placed with precision, turning a simple toastie into a balanced work of culinary art."
  },
  {
    video: '/assets/videos/art/video3.mp4',
    title: "Textural Harmony",
    description: "From the crunch of the artisan bread to the softness of the premium fillings, we compose a symphony for your senses."
  },
  {
    video: '/assets/videos/art/video4.mp4',
    title: "Vibrant Palette",
    description: "We use only the freshest, most colorful ingredients to ensure your meal is as visually striking as it is satisfying."
  },
  {
    video: '/assets/videos/art/video5.mp4',
    title: "The Signature Finish",
    description: "The final mist of our secret Tipsy Spray adds an ethereal layer of aroma and shine, completing the edible canvas."
  }
];

const highlightLink = "https://www.instagram.com/stories/highlights/18076212050067936/";

const Art = () => {
  return (
    <PageLayout 
      title="ART" 
      tagline="Food as a canvas." 
      videoBanner={artContent[0].video}
    >
      <div className="max-w-6xl mx-auto space-y-32">
        {artContent.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24`}
          >
            <div className="w-full md:w-3/5 aspect-video rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative group">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source src={item.video} type="video/mp4" />
              </video>
              
              {/* Redirect Icon */}
              <a 
                href={highlightLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-accent transition-all duration-300 z-10 hover:scale-110 opacity-0 group-hover:opacity-100"
                title="View on Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            <div className="w-full md:w-2/5 space-y-6">
              <span className="text-accent font-accent text-2xl">Piece No. 0{index + 1}</span>
              <h3 className="text-4xl lg:text-5xl font-heading">{item.title}</h3>
              <p className="text-xl text-white/40 leading-relaxed font-body">
                {item.description}
              </p>
              <div className="w-12 h-[1px] bg-white/20" />
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Art;
