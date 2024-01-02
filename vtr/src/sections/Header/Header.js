import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

import "../../css/general.css";
import "./Header.css";
import logoLight from "../../assets/img/logo/logo-light.png";
import logoDark from "../../assets/img/logo/logo-dark.png";
import JsonData from "../../assets/data/home-content.json";

const Header = () => {
  const headerData = JsonData.header;
  const [isSticky, setIsSticky] = useState(false);
  const [isHamDrawerOpen, setIsHamDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Analytics pageview event
    ReactGA.pageview(location,location?.pathname);
    
    window.scrollTo(0, 0);
    if(location?.pathname !== '/'){
      setIsSticky(true);
    }else{
      setIsSticky(false);
    }
    console.log(`The current URL is ${location?.pathname}`);
  }, [location]);


  const hbDrawerHandler = (index, itemName) => {
    setIsHamDrawerOpen(!isHamDrawerOpen);
    if(index || index===0){
      ReactGA.event({
        category:"Header",
        action:itemName,
        label:"nav_index_clicked",
        value:index
      });
    }
  }

  /**
   * Description - Code for adding smooth scroll on click of links
   * Note: This code added for smooth scroll on cross browser
   */ 
  useEffect(()=>{
    const allLinks = document.querySelectorAll("a:link");
    allLinks.forEach((link) => {
      const scrollEvent = (event) => {
        const href = link.getAttribute("href");
        // scroll to top i.e "#"
        if(href === "#") {
          event.preventDefault();
          window.scrollTo({
              top:0,
              behavior: "smooth"
          });
        }
        // scroll to other sections with id
        if(href !== "#" && href.startsWith("#")){
          event.preventDefault();
          const sectionEl = document.querySelector(href);
          sectionEl.scrollIntoView({behavior:"smooth"});  
        }
      }
      link.addEventListener("click", scrollEvent);
      return () => {
        link.removeEventListener("click", scrollEvent);
      };
    });
  },[location?.pathname]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    /* ********* Header Sticky Logic ************ */ 
    if(location?.pathname === '/'){
      scrollPosition >= 80 ? setIsSticky(true) : setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className={`vtr_tm_header ${isSticky ? "animate" : ""}`}>
      <div className="container">
        <div className="header_inner">
          <div className="logo">
            <a className="light" href="/">
              {isSticky ? <img src={logoDark} alt="" /> : <img src={logoLight} alt="" />}
            </a>
          </div>
          <div className="trigger vtr_cursor_ptr" onClick={hbDrawerHandler}>
            <div className={`hamburger hamburger--slider ${isHamDrawerOpen ? 'is-active' : ''}`}>
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
          <div className={`menu ${isHamDrawerOpen ? 'open' : ''}`}>
            <ul className="anchor_nav">
              {
                headerData.navElements.map((item, index) => (
                  <li
                    key={index} 
                    onClick={() => hbDrawerHandler(index,item.name)} 
                  >
                    <Link to={`/${item.route}`}>{item.name}</Link> 
                  </li> 
                )
              )}
              <li 
                className="download_cv" 
                onClick={() => {
                  ReactGA.event({
                    category:"Header",
                    action:'yt_subscribed',
                    label:"Subscribe button"
                  })}
                }>
                <a href={headerData.download.url} target='_blank' rel="noreferrer">
                  {headerData.download.name}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
