import '../../css/animation.css';
import './Subscribe.css';
import dots from '../../assets/img/subscribe/dots.jpg';
import Section from "../../components/Section/Section";

const Subscribe = () => {
  return (
    <Section>
      <div className="vtr_tm_subscribe">
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
                <span className="subtitle">Subscribe Now</span>
                <h3 className="title">Get My Newsletter</h3>
                <p className="text">
                  Get latest news, updates, tips and trics in your inbox
                </p>
              </div>
              <div
                className="right wow fadeInRight"
                data-wow-duration="1s"
                style={{visibility: "visible", animationDuration: '1s'}}
              >
                <div className="field">
                  <input type="text" placeholder="Your email here" />
                  <input type="submit" value="Send Now" />
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