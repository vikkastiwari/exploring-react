import "./About.css";
import Section from "../../components/Section/Section";
import JsonData from '../../assets/data/content.json';

import thumb_64x49 from "../../assets/img/thumb/64-49.jpg";
import about_1 from "../../assets/img/about/about-1.jpg";
import a1 from "../../assets/img/about/performance.svg";
import a2 from "../../assets/img/about/idea.svg";
import a3 from "../../assets/img/about/verified.svg";

const About = () => {
  const aboutData = JsonData.about;
  
  return (
    <Section id="about">
      <div className="vtr_tm_about vtr_section_padding">
        <div className="container">
          <div className="vtr_tm_main_title" data-text-align="center">
            <span>{aboutData.title}</span>
            <h3>{aboutData.heading}</h3>
            <p>
              {aboutData.desc}
            </p>
          </div>
          <div className="about_inner">
            <div className="left">
              <div className="image_wrap">
                <img src={thumb_64x49} alt="" />
                <div
                  className="main"
                  data-img-url="img/about/1.jpg"
                  style={{ backgroundImage: `url(${about_1})` }}
                ></div>
                <div className="">
                  <span
                    className="icon_2 wow fadeIn"
                    style={{
                      visibility: "visible",
                      animationDuration: "1s",
                      animationDelay: "0.2s",
                    }}
                  >
                    <img src={a2} alt="idea"></img>
                  </span>
                </div>
                <div className="">
                  <span
                    className="icon_3 wow fadeIn"
                    style={{
                      visibility: "visible",
                      animationDuration: "1s",
                      animationDelay: "0.4s",
                    }}
                  >
                    <img src={a3} alt="a1"></img>
                  </span>
                </div>
                <div className="">
                  <span
                    className="icon_1 wow fadeIn"
                    style={{
                      visibility: "visible",
                      animationDuration: "1s",
                      animationDelay: "0.6s",
                    }}
                  >
                    <img src={a1} alt="performance"></img>
                  </span>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title">
                <span>{aboutData.me.title}</span>
                <h3>{aboutData.me.heading}</h3>
              </div>
              <div className="text">
                {aboutData.me.desc.map((list,index) => (
                  <p key={index}>
                    {list}
                  </p>
                ))}
              </div>
              <div className="vtr_tm_button">
                <a className="anchor" href="#portfolio">
                  {aboutData.btnText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
