import React, { useEffect } from 'react';
import "./Loader.css";

const Loader = () => {

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
    <div className="vtr-preloader">
      <div className="vtr-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
