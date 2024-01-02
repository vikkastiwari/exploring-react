import { useEffect } from 'react';

import './HomePage.css';
import About from '../../sections/About/About';
import Blog from '../../sections/Blog/Blog';
import Experience from '../../sections/Experience/Experience';
import Features from '../../sections/Features/Features';
import Home from '../../sections/Home/Home';
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
      <Work />
      <Experience />
      <Testimonial />
      <Blog />
      <Subscribe />
    </>
  );
}

export default HomePage;
