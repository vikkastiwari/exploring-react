import { useEffect, useState } from 'react';

import '../../css/general.css';
import './Header.css';
import logo from '../../assets/img/logo/logo.png';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      (window.scrollY >= 80) ? setIsSticky(true) : setIsSticky(false);
    };
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`vtr_tm_header ${isSticky ? 'animate' : ''}`}>
        <div className="container">
          <div className="header_inner">
            <div className="logo">
              <a className="light" href="/">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="menu">
              <ul className="anchor_nav">
                <li className="current">
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#service">Service</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li className="download_cv">
                  <a href="img/cv/1.jpg" download="">
                    Download CV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>   
    </>
  );
}

export default Header;
