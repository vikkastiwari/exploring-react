import '../../css/animation.css';
import './Subscribe.css';
import JsonData from '../../assets/data/content.json';

import dots from '../../assets/img/subscribe/dots.jpg';
import Section from "../../components/Section/Section";

const Subscribe = () => {
  const subscribeData = JsonData.subscirbe;

  return (
    <Section>
      <div className="vtr_tm_subscribe vtr_section_margin">
        <div className="container">
          <div className="inner">
            <div className="background">
              <div
                className="dots"
                style={{backgroundImage:`url(${dots})`}}
              ></div>
              <div className="overlay"></div>
            </div>
            <div className="content">
              <div
                className="left wow fadeInLeft"
                data-wow-duration="1s"
                style={{visibility: "visible", animationDuration: '1s'}}
              >
                <span className="subtitle">{subscribeData.subtitle}</span>
                <h3 className="title">{subscribeData.title}</h3>
                <p className="text">
                  {subscribeData.desc}
                </p>
              </div>
              <div
                className="right wow fadeInRight"
                data-wow-duration="1s"
                style={{visibility: "visible", animationDuration: '1s'}}
              >
                <div className="field">
                  <input type="text" placeholder={subscribeData.placeholder} />
                  <input type="submit" value={subscribeData.value} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Subscribe;