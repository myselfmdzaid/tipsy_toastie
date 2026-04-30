import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram } from 'lucide-react';

const navLinks = [
  { name: 'YOU', path: '/you' },
  { name: 'FOOD', path: '/food' },
  { name: 'REVIEWS', path: '/reviews' },
  { name: 'ART', path: '/art' },
  { name: 'TIPSY SPRAYS', path: '/tipsy-sprays' },
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
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="fixed inset-0 w-full h-screen bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center z-[100]"
            >
              <div className="flex flex-col items-center space-y-8">
                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={itemVariants}>
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="text-5xl md:text-7xl font-heading tracking-[0.2em] text-white hover:text-accent transition-all duration-300 hover:scale-110 block text-center"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div variants={itemVariants} className="pt-12">
                  <a
                    href="https://www.instagram.com/tipsy.toastie.official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-accent hover:border-accent transition-all duration-300 group shadow-lg"
                  >
                    <Instagram size={24} className="group-hover:scale-110 transition-transform" />
                    <span className="font-heading tracking-widest text-xl">FOLLOW THE VIBE</span>
                  </a>
                </motion.div>
                
                <motion.div variants={itemVariants} className="mt-8">
                  <a
                    href="https://maps.app.goo.gl/vZRKLs6Hhcp37NA27"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary px-12 py-4 text-xl shadow-[0_0_20px_rgba(255,102,0,0.4)]"
                  >
                    VISIT NOW
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
