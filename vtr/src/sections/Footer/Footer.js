import { useEffect, useRef } from "react";
import Section from "../../components/Section/Section";
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const yearRef = useRef(null);

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
                Developed with love by&nbsp; 
                <a
                  href="https://www.linkedin.com/in/vikas-tiwari-1b051818b/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Vikas Tiwari&nbsp; 
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
                <li>
                  <a href="/">Terms &amp; Condition</a>
                </li>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;