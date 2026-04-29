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

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <img src="/assets/logo/logo.png" alt="Tipsy Toastie" className="h-10 w-auto group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xl font-heading tracking-widest text-white group-hover:text-accent transition-colors">TIPSY TOASTIE</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-semibold tracking-widest hover:text-accent transition-colors ${location.pathname === link.path ? 'text-accent' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://maps.app.goo.gl/vZRKLs6Hhcp37NA27" // Placeholder for actual maps link
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shadow-[0_0_15px_rgba(255,102,0,0.4)]"
          >
            Visit Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 bg-black/98 backdrop-blur-2xl z-40 md:hidden flex flex-col items-center justify-center space-y-8 p-6 overflow-y-auto"
          >
            <button 
              className="absolute top-8 right-8 text-white p-2"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center space-y-8 w-full max-h-screen py-20">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-heading tracking-widest hover:text-accent transition-colors ${location.pathname === link.path ? 'text-accent' : 'text-white'}`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://maps.app.goo.gl/vZRKLs6Hhcp37NA27"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full text-center py-5 text-xl"
              >
                Visit Now
              </a>
              
              <div className="flex space-x-6 pt-8">
                <a 
                  href="https://www.instagram.com/tipsy.toastie.official/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
