import './App.css';

import About from './sections/About/About';
import Blog from './sections/Blog/Blog';
import Contact from './sections/Contact/Contact';
import Experience from './sections/Experience/Experience';
import Features from './sections/Features/Features';
import Footer from './sections/Footer/Footer';
import Header from './sections/Header/Header';
import Home from './sections/Home/Home';
import Services from './sections/Services/Services';
import Subscribe from './sections/Subscribe/Subscribe';
import Work from './sections/Work/Work';

function App() {
  return (
    <div className="vtr_tm_all_wrap">
      <Header />
      <Home />
      <Features />
      <About />
      <Services />
      <Work />
      <Experience />
      <Blog />
      <Subscribe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
