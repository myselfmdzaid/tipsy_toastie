import { motion } from 'framer-motion';
import Menu from '../components/home/Menu';
import Catering from '../components/home/Catering';

const MenuCatering = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 min-h-screen bg-black relative overflow-hidden"
    >
      {/* Sticker Style PNGs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.img 
          src="/assets/tipsy_toastie_catering_brochure/png3.png" 
          className="absolute top-[15%] left-[5%] w-24 md:w-32 opacity-80"
          initial={{ rotate: -15 }}
          whileInView={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.img 
          src="/assets/menu/png2.png" 
          className="absolute top-[40%] right-[2%] w-28 md:w-40 opacity-70"
          initial={{ rotate: 10 }}
          whileInView={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.img 
          src="/assets/menu/png3.png" 
          className="absolute bottom-[30%] left-[2%] w-24 md:w-36 opacity-75"
          initial={{ rotate: -5 }}
          whileInView={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-heading mb-4 text-white">
            Menu & <span className="text-accent">Brochure</span>
          </h1>
          <p className="text-lg text-white/40 font-body tracking-[0.2em] uppercase">
            Taste the vibe. Explore the experience.
          </p>
        </div>

        <Menu />
        
        <Catering />

        <div className="absolute bottom-10 left-0 w-full flex justify-around pointer-events-none opacity-80">
          <img src="/assets/tipsy_toastie_catering_brochure/png3.png" className="w-16 h-16 object-contain" alt="" />
          <img src="/assets/tipsy_toastie_catering_brochure/png2.png" className="w-20 h-20 object-contain" alt="" />
        </div>
      </div>
    </motion.main>
  );
};

export default MenuCatering;
