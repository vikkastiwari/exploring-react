import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ReactGA from 'react-ga4';

import JsonData from '../../assets/data/home-content.json';
import Section from "../../components/Section/Section";
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const yearRef = useRef(null);
  const footerData = JsonData.footer;

  const updateYear = () => {
    if (yearRef.current) {
      yearRef.current.textContent = currentYear;
    }
  };

  useEffect(() => {
    updateYear();
  }); 

  return (
    <Section>
      <div className="vtr_tm_copyright">
        <div className="container">
          <div className="inner">
            <div
              className="left fadeInLeft"
              style={{visibility: "visible", animationDuration: '1s'}}
            >
              <p>
                {footerData.copyright}&nbsp; 
                <a
                  href={footerData.linkedIn}
                  rel="noreferrer"
                  target="_blank"
                  onClick={() => {
                    ReactGA.event({
                      category:"Social",
                      action:"linkedIn_visited",
                      label:"LinkedIn"
                    })
                  }}
                >
                  {footerData.name}&nbsp; 
                </a>
                &copy; &nbsp; 
                <span ref={yearRef} className="year">2024</span>
              </p>
            </div>
            <div
              className="right fadeInRight"
              style={{visibility: "visible", animationDuration: '1s'}}
            >
              <ul>
                {footerData.list.map((item,index)=>(
                  <li key={index}>
                    <Link to={item.route} target="_blank" onClick={() => {
                      ReactGA.event({
                        category:"Misc page",
                        action:"misc_page_visited",
                        label:item.name
                      })
                    }}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;