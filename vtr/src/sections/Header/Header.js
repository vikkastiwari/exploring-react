import { useEffect, useState } from "react";

import "../../css/general.css";
import "./Header.css";
import logo from "../../assets/img/logo/logo.png";
import JsonData from "../../assets/data/content.json";

const Header = () => {
  const headerData = JsonData.header;
  const [isSticky, setIsSticky] = useState(false);
  const [isHamDrawerOpen, setIsHamDrawerOpen] = useState(false);

  const hbDrawerHandler = () => {
    setIsHamDrawerOpen(!isHamDrawerOpen);
  }

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
    <>
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
            <div className="menu">
              <ul className="anchor_nav">
                {headerData.navElements.map((item, index) => (
                  <li key={index} className={index === 0 ? "current" : ""}>
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
    </>
  );
};

export default Header;
