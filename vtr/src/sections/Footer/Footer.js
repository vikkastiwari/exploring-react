import Section from "../../components/Section/Section";
import './Footer.css';

const Footer = () => {
  return (
    <Section>
      <div className="vtr_tm_copyright">
        <div className="container">
          <div className="inner">
            <div
              className="left wow fadeInLeft"
              data-wow-duration="1s"
              style={{visibility: "visible", animationDuration: '1s'}}
            >
              <p>
                Developed with love by &nbsp; 
                <a
                  href="https://www.linkedin.com/in/vikas-tiwari-1b051818b/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Vikas Tiwari
                </a>
                &nbsp; © 2023
              </p>
            </div>
            <div
              className="right wow fadeInRight"
              data-wow-duration="1s"
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