import { motion } from 'framer-motion';
import { Video, Flame, MapPin } from 'lucide-react';

const values = [
  {
    icon: <Video className="w-8 h-8 text-accent" />,
    title: "Made for Content",
    description: "Every corner is reel-worthy"
  },
  {
    icon: <Flame className="w-8 h-8 text-accent" />,
    title: "Flavor That Hits",
    description: "Not just aesthetic — actually addictive"
  },
  {
    icon: <MapPin className="w-8 h-8 text-accent" />,
    title: "Real Experience",
    description: "Better in real life than on screen"
  }
];

const ValueStrip = () => {
  return (
    <section className="bg-charcoal py-20 border-y border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 blur-[100px] rounded-full" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white/5 group-hover:bg-accent/10 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-heading mb-2 tracking-wide group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-white/60 font-body">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueStrip;
