import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src="/assets/logo/logo.png" alt="Tipsy Toastie" className="h-16 w-auto" />
            </Link>
            <p className="text-white/60 max-w-md mb-8 leading-relaxed">
              Tipsy Toastie is more than just food. It's an edible art experience designed for the digital age. 
              Come for the visuals, stay for the taste.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/tipsy.toastie.official/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading text-xl mb-6 tracking-wider">Experience</h4>
            <ul className="space-y-4">
              <li><Link to="/menu-catering" className="text-white/60 hover:text-accent transition-colors font-bold text-accent">MENU & BROCHURE</Link></li>
              <li><Link to="/you" className="text-white/60 hover:text-accent transition-colors">YOU</Link></li>
              <li><Link to="/food" className="text-white/60 hover:text-accent transition-colors">FOOD</Link></li>
              <li><Link to="/reviews" className="text-white/60 hover:text-accent transition-colors">REVIEWS</Link></li>
              <li><Link to="/art" className="text-white/60 hover:text-accent transition-colors">ART</Link></li>
              <li><Link to="/tipsy-sprays" className="text-white/60 hover:text-accent transition-colors">TIPSY SPRAYS</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading text-xl mb-6 tracking-wider">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-white/60">
                <MapPin size={20} className="text-accent flex-shrink-0 mt-1" />
                <a 
                  href="https://maps.app.goo.gl/vZRKLs6Hhcp37NA27" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Tipsy Toastie, Pietà, Msida Marina, Malta
                </a>
              </li>
              <li className="flex items-center space-x-3 text-white/60">
                <Phone size={20} className="text-accent flex-shrink-0" />
                <a 
                  href="https://wa.me/35679099962" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  +356 7909 9962
                </a>
              </li>
              <li className="flex items-center space-x-3 text-white/60">
                <Mail size={20} className="text-accent flex-shrink-0" />
                <a 
                  href="mailto:tipsytoastie@gmail.com" 
                  className="hover:text-accent transition-colors"
                >
                  tipsytoastie@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-white/60">
                <Instagram size={20} className="text-accent flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/tipsy.toastie.official/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  @tipsy.toastie.official
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Tipsy Toastie. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
