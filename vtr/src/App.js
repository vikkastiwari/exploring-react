import './App.css';

import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Features from './sections/Features/Features';
import Footer from './sections/Footer/Footer';
import Header from './sections/Header/Header';
import Home from './sections/Home/Home';
import Services from './sections/Services/Services';
import Subscribe from './sections/Subscribe/Subscribe';

function App() {
  return (
    <div className="vtr_tm_all_wrap">
      <Header />
      <Home />
      <Features />
      <About />
      <Services />
      <Subscribe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
