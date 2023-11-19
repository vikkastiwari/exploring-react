import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from '../src/sections/Header/Header';
import Header from '../src/sections/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import BlogsPage from './pages/Blogs/BlogsPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Loader from './components/Loader/Loader';
import ProjectsPage from './pages/Projects/ProjectsPage';
import TermsPage from './pages/TC/TermsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicy/PrivacyPolicyPage';
import AffilatesPage from './pages/Affilates/AffilatesPage';

function App() {

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
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
    <Router>
      <Loader />
      <div className='vtr-page-wrapper'>
        <div className='vtr_tm_all_wrap'>
          <Header />
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/blogs' element={<BlogsPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/terms' element={<TermsPage />} />
            <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
            <Route path='/affilates' element={<AffilatesPage />} />
          </Routes>
          <Footer />
        </div>
        <ScrollToTop></ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
