import { motion } from 'framer-motion';
import { Utensils, Droplets, Flame, Sparkles } from 'lucide-react';
import { useState } from 'react';
import MediaModal from '../shared/MediaModal';

const menuImages = [
  '/assets/menu/menu1.jpg',
  '/assets/menu/menu2.jpg',
  '/assets/menu/menu3.jpg',
  '/assets/menu/menu4.jpg'
];

const pngAssets = [
  '/assets/menu/png1.png',
  '/assets/menu/png2.png',
  '/assets/menu/png3.png',
  '/assets/menu/png4.png'
];

const toasties = [
  { name: '3-Cheese', price: '€8' },
  { name: 'Caramelised Pear', price: '€8' },
  { name: 'Carbonara', price: '€9' },
  { name: 'Not So Ham & Cheese', price: '€9' },
  { name: 'Pulled Pork', price: '€9' },
  { name: 'What The Duck', price: '€10' },
  { name: 'Nasty Rabbit', price: '€10' },
  { name: 'Panko Chicken', price: '€9' },
];

const sides = [
  { name: 'Parmesan Potato Wedges', price: '€4' },
];

const drinks = [
  { name: 'Lemonades', price: '€4' },
  { name: 'Ice Tea', price: '€4' },
];

const sauces = [
  'Aji Amarillo Honey Mustard',
  'Spicy Mayo',
  'Banana Ketchup',
  'Truffle & Porcini Mayo',
  'Black Pepper Parmesan Mayo',
];

const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalTitle, setModalTitle] = useState("");

  const openLightbox = (images, title) => {
    setModalImages(images);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  return (
    <section id="menu" className="py-12 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading mb-4 text-white"
          >
            Fast. Melty. <span className="text-accent">Criminally Good.</span>
          </motion.h2>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {menuImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 cursor-pointer"
              onClick={() => openLightbox([img], `Menu Item ${index + 1}`)}
            >
              <img 
                src={img} 
                alt={`Menu ${index + 1}`} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Menu Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Toasties */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading text-accent">Toasties</h3>
            <div className="space-y-3">
              {toasties.map((item) => (
                <div key={item.name} className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-lg font-body text-white/80">{item.name}</span>
                  <span className="text-accent font-heading text-lg">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sides & Drinks */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading text-accent">Sides</h3>
              <div className="space-y-3">
                {sides.map((item) => (
                  <div key={item.name} className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-lg font-body text-white/80">{item.name}</span>
                    <span className="text-accent font-heading text-lg">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-heading text-accent">Drinks</h3>
              <div className="space-y-3">
                {drinks.map((item) => (
                  <div key={item.name} className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-lg font-body text-white/80">{item.name}</span>
                    <span className="text-accent font-heading text-lg">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sauces */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading text-accent">Sauces</h3>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-3">
              {sauces.map((sauce) => (
                <div key={sauce} className="text-base text-white/60 font-body flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-accent" />
                  {sauce}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <MediaModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        images={modalImages} 
        title={modalTitle}
      />
    </section>
  );
};

export default Menu;
