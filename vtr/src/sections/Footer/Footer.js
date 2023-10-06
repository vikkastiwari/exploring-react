import { useEffect, useRef } from "react";

import jsonData from '../../assets/data/content.json';
import Section from "../../components/Section/Section";
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const yearRef = useRef(null);
  const footerData = jsonData.footer;

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
                    <a href={item.route}>{item.name}</a>
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