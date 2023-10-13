import { useEffect, useState } from "react";

import "../../css/general.css";
import "./Header.css";
import logo from "../../assets/img/logo/logo.png";
import JsonData from "../../assets/data/content.json";

const Header = () => {
  const headerData = JsonData.header;
  const [isSticky, setIsSticky] = useState(false);
  const [isActiveIndex, setIsActiveIndex] = useState(0);
  const [isHamDrawerOpen, setIsHamDrawerOpen] = useState(false);

  const hbDrawerHandler = () => {
    setIsHamDrawerOpen(!isHamDrawerOpen);
  }

  const navActiveState = (index) => {
    setIsActiveIndex(index);
    hbDrawerHandler();
  }

  useEffect(()=>{
    const allLinks = document.querySelectorAll("a:link");
    allLinks.forEach((link) => {
      const scrollEvent = (event) => {
        event.preventDefault();
        const href = link.getAttribute("href");
        // scroll to top i.e "#"
        if(href === "#") {
            window.scrollTo({
                top:0,
                behavior: "smooth"
            });
        }
        // scroll to other sections with id
        if(href !== "#" && href.startsWith("#")){
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior:"smooth"});  
        }
      }
      link.addEventListener("click", scrollEvent);
      return () => {
        link.removeEventListener("click", scrollEvent);
      };
    });
  },[]);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= 80 ? setIsSticky(true) : setIsSticky(false);
    };
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`vtr_tm_header ${isSticky ? "animate" : ""}`}>
      <div className="container">
        <div className="header_inner">
          <div className="logo">
            <a className="light" href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="trigger" onClick={hbDrawerHandler}>
            <div className={`hamburger hamburger--slider ${isHamDrawerOpen ? 'is-active' : ''}`}>
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
          <div className={`menu ${isHamDrawerOpen ? 'open' : ''}`}>
            <ul className="anchor_nav">
              {headerData.navElements.map((item, index) => (
                <li 
                  key={index} 
                  onClick={navActiveState.bind(null, index)} 
                  className={index === isActiveIndex ? "current" : ""}
                >
                  <a href={`#${item.route}`}>{item.name}</a>
                </li>
              ))}
              <li className="download_cv">
                <a href={logo} download="">
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
