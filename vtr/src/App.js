import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import './ServiceInitializr';
import './service/AuthService';
import Header from '../src/sections/Header/Header';
import Footer from '../src/sections/Footer/Footer';
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
import ServicesPage from './pages/Services/ServicesPage';
import ContactPage from './pages/Contact/ContactPage';

function App() {
  if (process.env.REACT_APP_ENV === 'local') {
    // analytics.disable();
    console.log("local running");
  }else{
    console.log("prod running");
  }

  useEffect(() => {
    /**
     * @descirption reCaptcha privacy policy widget added
     */ 
    const element = document.getElementById("fire_app_check_[DEFAULT]");
    if (element) {
      element.style.display = 'block';
    }

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

  useEffect(() => {
    /**
     * @description disable right click handler
     */ 
    const handleContextmenu = (event) => {
      event.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
      document.removeEventListener('contextmenu', handleContextmenu)
    }
  }, []);

  return (
    <Router>
      <Loader />
      <div className='vtr-page-wrapper'>
        <div className='vtr_tm_all_wrap'>
          <Header />
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/blogs' element={<BlogsPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/videos' element={<VideosPage />} />
            <Route path='/terms-of-service' element={<TermsPage />} />
            <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
            <Route path='/favourite-products' element={<AffilatesPage />} />
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
