import "./Features.css";
import requirement from "../../assets/img/features/requirement.png";
import design from "../../assets/img/features/design.png";
import startup from "../../assets/img/features/startup.png";
import Section from "../../components/Section/Section";

const Features = () => {
  return (
    <>
      <Section>
        <div className="vtr_tm_features">
          <div className="container">
            <div class="vtr_tm_main_title" data-text-align="center">
              <span>Portfolio</span>
              <h3>Our Commitment</h3>
              <p>
                We believe that success is not just about hard work; it's about
              </p>
            </div>
            <div className="features_list">
              <ul>
                <li
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay='"0.0s"'
                  //   style="visibility: visible; animation-duration: 1s;"
                >
                  <div className="list_inner">
                    <div className="short">
                      <div className="title">
                        <span>01</span>
                        <h3>Dedication</h3>
                      </div>
                      <div className="icon">
                        <img
                          style={{ width: "60px" }}
                          src={requirement}
                          alt="req"
                        />
                      </div>
                    </div>
                    <div className="text">
                      <p>
                        With dedication as our cornerstone, we stand by your side, tirelessly turning your dreams into reality.
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay='"0.2s"'
                  //   style="visibility: visible; animation-duration: 1s;"
                >
                  <div className="list_inner">
                    <div className="short">
                      <div className="title">
                        <span>02</span>
                        <h3>Smart Work</h3>
                      </div>
                      <div className="icon">
                        <img
                          style={{ width: "60px" }}
                          src={design}
                          alt="req"
                        />
                      </div>
                    </div>
                    <div className="text">
                      <p>
                        We prioritize working smart, by emphasizing efficiency, innovation, and problem-solving to maximize results.
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay='"0.4s"'
                  //   style="visibility: visible; animation-duration: 1s;"
                >
                  <div className="list_inner">
                    <div className="short">
                      <div className="title">
                        <span>03</span>
                        <h3>Intelligence</h3>
                      </div>
                      <div className="icon">
                        <img
                          style={{ width: "60px" }}
                          src={startup}
                          alt="req"
                        />
                      </div>
                    </div>
                    <div className="text">
                      <p>
                      Intelligence is at the core of everything we do. We value knowledge, insights, and data-driven decision-making.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Features;
