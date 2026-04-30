import { motion } from 'framer-motion';
import { Briefcase, Users, Clock, Globe, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { useState } from 'react';
import MediaModal from '../shared/MediaModal';

const cateringImages = [
  '/assets/tipsy_toastie_catering_brochure/cb1.jpg',
  '/assets/tipsy_toastie_catering_brochure/cb2.jpg',
  '/assets/tipsy_toastie_catering_brochure/cb3.jpg',
  '/assets/tipsy_toastie_catering_brochure/cb4.jpg',
  '/assets/tipsy_toastie_catering_brochure/cb5.jpg'
];

const pngAssets = [
  '/assets/tipsy_toastie_catering_brochure/png1.png',
  '/assets/tipsy_toastie_catering_brochure/png2.png',
  '/assets/tipsy_toastie_catering_brochure/png3.png'
];

const services = ['Afterwork', 'Corporate', 'Team-building', 'Private Parties', 'BBQ'];
const pricing = [
  { plan: 'Essential', price: '€10', desc: 'per person' },
  { plan: 'Signature', price: '€15', desc: 'incl. sauces & sides' },
  { plan: 'Premium', price: '€20', desc: 'per person' }
];
const addOns = ['Paint - Eat - Sip', 'Cocktail Sessions', 'Clothes Customisation'];

const Catering = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalTitle, setModalTitle] = useState("");

  const openLightbox = (images, title) => {
    setModalImages(images);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  return (
    <section id="catering" className="py-12 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading mb-4 text-white"
          >
            Catering & <span className="text-accent">Experiences</span>
          </motion.h2>
        </div>

        {/* Gallery */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {cateringImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-[3/4] w-[calc(50%-12px)] md:w-[calc(20%-12px)] rounded-xl overflow-hidden border border-white/10 cursor-pointer"
              onClick={() => openLightbox([img], `Catering Experience ${index + 1}`)}
            >
              <img 
                src={img} 
                alt={`Catering ${index + 1}`} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-10">
            {/* Services */}
            <div>
              <h3 className="text-2xl font-heading mb-6 text-accent">Services</h3>
              <div className="flex flex-wrap gap-3">
                {services.map((service) => (
                  <span key={service} className="px-5 py-2 rounded-lg bg-white/5 border border-white/10 text-base font-body text-white/80">
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h3 className="text-2xl font-heading mb-6 text-accent">Pricing</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {pricing.map((item) => (
                  <div key={item.plan} className="p-5 rounded-xl bg-white/5 border border-white/5 text-center">
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{item.plan}</p>
                    <p className="text-3xl font-heading text-accent">{item.price}</p>
                    <p className="text-white/60 text-[10px]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div>
              <h3 className="text-2xl font-heading mb-6 text-accent">Add-ons</h3>
              <ul className="space-y-3">
                {addOns.map((addon) => (
                  <li key={addon} className="flex items-center gap-3 text-lg font-body text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {addon}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-10">
            {/* Details */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/5 space-y-6">
              <h3 className="text-2xl font-heading mb-2">The Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Users className="text-accent shrink-0" size={20} />
                  <div>
                    <p className="text-white text-sm font-bold">15+ Guests</p>
                    <p className="text-white/40 text-[10px]">Minimum requirement</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="text-accent shrink-0" size={20} />
                  <div>
                    <p className="text-white text-sm font-bold">Malta</p>
                    <p className="text-white/40 text-[10px]">Service area</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-accent shrink-0" size={20} />
                  <div>
                    <p className="text-white text-sm font-bold">48h+ Lead Time</p>
                    <p className="text-white/40 text-[10px]">Advance booking</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="text-accent shrink-0" size={20} />
                  <div>
                    <p className="text-white text-sm font-bold">Dietary Options</p>
                    <p className="text-white/40 text-[10px]">Veg, Vegan, GF</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <p className="text-white/40 text-xs leading-relaxed italic">
                  * Includes food, staff, and setup.
                </p>
              </div>
            </div>

            {/* Process */}
            <div className="text-center">
              <h3 className="text-xl font-heading mb-6 tracking-widest uppercase">How it works</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-white/60 text-sm font-body">
                <span>Submit form</span>
                <span className="hidden md:block text-accent">→</span>
                <span>Confirmation in 2h</span>
                <span className="hidden md:block text-accent">→</span>
                <span className="text-accent font-bold">We serve</span>
              </div>
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

export default Catering;
