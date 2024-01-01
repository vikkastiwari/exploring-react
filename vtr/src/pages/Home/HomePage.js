import { useEffect } from 'react';

import './HomePage.css';
import About from '../../sections/About/About';
import Blog from '../../sections/Blog/Blog';
import Contact from '../../sections/Contact/Contact';
import Experience from '../../sections/Experience/Experience';
import Features from '../../sections/Features/Features';
import Home from '../../sections/Home/Home';
import Services from '../../sections/Services/Services';
import Subscribe from '../../sections/Subscribe/Subscribe';
import Testimonial from '../../sections/Testimonial/Testimonial';
import Work from '../../sections/Work/Work';
import BannerAdUnit from '../../components/AdCards/BannerAdUnit';

const HomePage = () => {

  useEffect(() => {
    document.title = 'Home - Vikas Tiwari - Learn | Apply | Evolve';
    return () => {
      document.title = 'Vikas Tiwari - Learn | Apply | Evolve';
    };
  }, []);

  return (
    <>
      <Home />
      <Features />
      <BannerAdUnit />
      <About />
      <Services />
      <Work />
      <Experience />
      <Testimonial />
      <Blog />
      <Subscribe />
      <Contact />
    </>
  );
}

export default HomePage;
