import { useEffect } from 'react';

import './App.css';
import HomePage from './pages/Home/HomePage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Loader from './components/Loader/Loader';

function App() {

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Loader fade out added
      const loaderContainer = document.querySelector('.vtr-preloader');
      if (loaderContainer) {
        loaderContainer.classList.add('fade-out');
      }
      // Page made visible
      const pagerContainer = document.querySelector('.vtr-page-wrapper');
      if (pagerContainer) {
        pagerContainer.classList.add('visible');
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Loader />
      <div className='vtr-page-wrapper'>
        <HomePage></HomePage>
        <ScrollToTop></ScrollToTop>
      </div>
    </>
  );
}

export default App;
