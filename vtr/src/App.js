import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from '../src/sections/Header/Header';
import Header from '../src/sections/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import BlogsPage from './pages/Blogs/BlogsPage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import VideosPage from './pages/Videos/VideosPage';
import TermsPage from './pages/TC/TermsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicy/PrivacyPolicyPage';
import AffilatesPage from './pages/Affilates/AffilatesPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Loader from './components/Loader/Loader';
import PageNotFound from './components/PageNotFound/PageNotFound';

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
            <Route path='/blogs.html' element={<BlogsPage />} />
            <Route path='/projects.html' element={<ProjectsPage />} />
            <Route path='/videos.html' element={<VideosPage />} />
            <Route path='/terms-of-service.html' element={<TermsPage />} />
            <Route path='/privacy-policy.html' element={<PrivacyPolicyPage />} />
            <Route path='/favourite-products.html' element={<AffilatesPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
        <ScrollToTop></ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
