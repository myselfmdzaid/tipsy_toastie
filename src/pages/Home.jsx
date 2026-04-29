import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import ValueStrip from '../components/home/ValueStrip';
import Experience from '../components/home/Experience';
import MasonryGrid from '../components/home/MasonryGrid';
import Highlights from '../components/home/Highlights';
import ReviewsCarousel from '../components/home/ReviewsCarousel';
import Location from '../components/home/Location';
import FinalCTA from '../components/home/FinalCTA';

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Hero />
      <ValueStrip />
      <Experience />
      <MasonryGrid />
      <Highlights />
      <ReviewsCarousel />
      <Location />
      <FinalCTA />
    </motion.main>
  );
};

export default Home;
