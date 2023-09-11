import './App.css';
import './assets/fonts/fontello.06d9b37e.woff2';
import About from './sections/About/About';
import Features from './sections/Features/Features';
import Header from './sections/Header/Header';
import Home from './sections/Home/Home';

function App() {
  return (
    <div className="vtr_tm_all_wrap">
      <Header />
      <Home />
      <Features />
      <About />
    </div>
  );
}

export default App;
