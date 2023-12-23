import './ScrollToTop.css';
import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / totalHeight) * 100;
    setScrollProgress(progress);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`progressbar ${scrollProgress > 1 ? 'animate' : ''}`}>
        <div className="vtr_cursor_ptr" onClick={scrollToTop}>
          <span className="emoji" style={{bottom: "165px"}}>🚀</span>
          <span className="text" style={{bottom: "160px"}}>
             To Top
          </span>
        </div>
        <span className="line" style={{height: scrollProgress}}></span>
      </div>
    </>
  );
};

export default ScrollToTop;