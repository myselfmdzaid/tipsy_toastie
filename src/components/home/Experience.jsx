import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Video Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative group"
          >
            <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] md:aspect-square">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source src="/assets/images/posts/video2.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-heading leading-tight text-shadow-lg">
              Most places serve food. <br />
              <span className="text-accent">We serve moments you remember.</span>
            </h2>
            <p className="text-xl text-white/60 leading-relaxed max-w-lg text-shadow-lg">
              Every toastie we make is a canvas. Every bite is a story. 
              We've crafted an environment where the lighting is always right, 
              the music is always a vibe, and the food is always a masterpiece.
            </p>
            <div className="pt-4">
              <button className="btn-primary">Discover the Art</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
