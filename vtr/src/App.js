import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import './service/AuthService';
import Header from './sections/Header/Header';
import Footer from './sections/Footer/Footer';
import LazyLoad from './hoc/LazyLoad';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Loader from './components/Loader/Loader';
import PageNotFound from './components/PageNotFound/PageNotFound';

/**
 * @description Lazy load page modules
 */ 
const HomePage = LazyLoad(() => import('./pages/Home/HomePage'));
const BlogsPage = LazyLoad(() => import('./pages/Blogs/BlogsPage'));
const ProjectsPage = LazyLoad(() => import('./pages/Projects/ProjectsPage'));
const VideosPage = LazyLoad(() => import('./pages/Videos/VideosPage'));
const TermsPage = LazyLoad(() => import('./pages/TC/TermsPage'));
const PrivacyPolicyPage = LazyLoad(() => import('./pages/PrivacyPolicy/PrivacyPolicyPage'));
const AffilatesPage = LazyLoad(() => import('./pages/Affilates/AffilatesPage'));
const ServicesPage = LazyLoad(() => import('./pages/Services/ServicesPage'));
const ContactPage = LazyLoad(() => import('./pages/Contact/ContactPage'));

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
            <Route path='/blogs' element={<BlogsPage />} />
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
