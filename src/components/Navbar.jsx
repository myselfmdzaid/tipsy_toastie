import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram } from 'lucide-react';

const navLinks = [
  { name: 'MENU & BROCHURE', path: '/menu-catering', desc: 'The full taste experience', priority: true },
  { name: 'FOOD', path: '/food', desc: 'Our edible masterpieces', priority: true },
  { name: 'YOU', path: '/you', desc: 'Real people, real vibes', priority: false },
  { name: 'REVIEWS', path: '/reviews', desc: 'What they say about us', priority: false },
  { name: 'ART', path: '/art', desc: 'More than just food', priority: false },
  { name: 'TIPSY SPRAYS', path: '/tipsy-sprays', desc: 'Our signature twist', priority: false },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    opened: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    opened: { opacity: 1, x: 0 }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group relative z-[101]">
          <img src="/assets/logo/logo.png" alt="Tipsy Toastie" className="h-10 w-auto group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xl font-heading tracking-widest text-white group-hover:text-accent transition-colors">TIPSY TOASTIE</span>
        </Link>

        {/* Hamburger Icon */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[101] w-10 h-10 flex flex-col justify-center items-center space-y-1.5 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-8 h-0.5 bg-white block transition-transform"
          />
          <motion.span 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-8 h-0.5 bg-white block transition-opacity"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-8 h-0.5 bg-white block transition-transform"
          />
        </button>

        {/* Full Screen Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 w-full h-screen bg-black z-[100] flex flex-col"
            >
              <div className="container mx-auto px-8 pt-32 pb-12 h-full flex flex-col">
                {/* Clean List Menu */}
                <div className="flex flex-col space-y-6">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="block group"
                      >
                        <h3 className="text-3xl font-heading tracking-widest text-white group-hover:text-accent transition-colors">
                          {link.name}
                        </h3>
                        <div className="h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-300 mt-1" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Footer Section */}
                <div className="mt-auto space-y-6 pb-8">
                  <a
                    href="https://www.instagram.com/tipsy.toastie.official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-white/60 hover:text-accent transition-colors group"
                  >
                    <Instagram size={24} />
                    <span className="font-heading tracking-widest text-xl">FOLLOW THE VIBE</span>
                  </a>
                  
                  <a
                    href="https://maps.app.goo.gl/vZRKLs6Hhcp37NA27"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full py-5 text-xl text-center block shadow-[0_0_20px_rgba(255,102,0,0.4)]"
                  >
                    VISIT NOW
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
