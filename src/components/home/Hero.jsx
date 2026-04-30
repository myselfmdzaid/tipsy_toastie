import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

const headlines = [
  "This isn't food. It's a whole vibe.",
  "Eat. Shoot. Repeat.",
  "Where your next reel begins."
];

const Hero = () => {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/assets/images/posts/video3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background" />
      </div>

      {/* Floating Characters (Parallax) */}
      <motion.img 
        style={{ y: y1 }}
        src="/assets/characters/char1.png" 
        alt="" 
        className="absolute top-1/4 left-10 w-24 md:w-40 opacity-40 blur-[2px] pointer-events-none hidden md:block" 
      />
      <motion.img 
        style={{ y: y2 }}
        src="/assets/characters/char2.png" 
        alt="" 
        className="absolute bottom-1/4 right-10 w-24 md:w-48 opacity-40 blur-[1px] pointer-events-none hidden md:block" 
      />
      <motion.img 
        style={{ y: y1 }}
        src="/assets/characters/char3.png" 
        alt="" 
        className="absolute top-1/3 right-1/4 w-20 md:w-32 opacity-30 blur-[3px] pointer-events-none hidden md:block" 
      />

      {/* Hero Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-6"
      >
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          src="/assets/logo/logo.png"
          alt="Tipsy Toastie"
          className="h-24 md:h-40 mx-auto mb-8 drop-shadow-[0_0_30px_rgba(255,102,0,0.5)]"
        />

        <div className="h-24 md:h-32 mb-4 overflow-hidden">
          <motion.h1
            key={headlineIndex}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl md:text-7xl lg:text-8xl font-heading leading-tight text-shadow-lg"
          >
            {headlines[headlineIndex]}
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-white/80 mb-12 font-accent tracking-widest text-shadow-lg"
        >
          Come for the visuals. Stay for the taste.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
        >
          <a href="https://maps.app.goo.gl/vZRKLs6Hhcp37NA27" target="_blank" rel="noopener noreferrer" className="btn-primary px-12 py-4 text-lg">
            Visit Now
          </a>
          <a 
            href="https://www.instagram.com/tipsy.toastie.official/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary flex items-center space-x-3 px-10 py-4 text-lg group"
          >
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              <Play size={16} fill="currentColor" />
            </div>
            <span>Watch the Vibe</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
