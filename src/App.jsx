import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ExitIntentPopup from './components/ExitIntentPopup';
import FloatingCTA from './components/FloatingCTA';

// Pages
import Home from './pages/Home';
import You from './pages/You';
import Food from './pages/Food';
import Reviews from './pages/Reviews';
import Art from './pages/Art';
import TipsySprays from './pages/TipsySprays';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-background selection:bg-accent/30 selection:text-white">
      <div className="grain-overlay" />
      <CustomCursor />
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/you" element={<You />} />
          <Route path="/food" element={<Food />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/art" element={<Art />} />
          <Route path="/tipsy-sprays" element={<TipsySprays />} />
        </Routes>
      </AnimatePresence>

      <Footer />
      <FloatingCTA />
      <ExitIntentPopup />
    </div>
  );
}

export default App;
