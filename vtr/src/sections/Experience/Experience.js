import './Experience.css';
import Section from "../../components/Section/Section";

import icon_e1 from '../../assets/img/exp/e1.svg';
import icon_e2 from '../../assets/img/exp/e2.svg';
import icon_e3 from '../../assets/img/exp/e3.svg';
import thumb_37x25 from '../../assets/img/thumb/37-25.jpg';
import timeline_1 from '../../assets/img/exp/timeline_1.jpg';
import timeline_2 from '../../assets/img/exp/timeline_2.jpg';
import timeline_3 from '../../assets/img/exp/timeline_3.jpg';

const Experience = () => {
  return (
    <Section>
      <div className="vtr_tm_timeline">
        <div className="container bigger">
          <div className="timeline_inner">
            <div className="container">
              <div className="vtr_tm_main_title" data-text-align="center">
                <span>Experience</span>
                <h3>Creative Timeline</h3>
                <p>
                Fusce sollicitudin eros id ex maximus gravida non vitae
                ante. Cras ac mi a dolor suscipit rutrum ut vitae mi.
                </p>
              </div>
              <div className="timeline_list">
                <span className="line"></span>
                <ul>
                  <li
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                    style={{visibility: 'visible', animationDuration: '1s'}}
                  >
                    <ul className="items">
                      <li>
                        <div className="list_inner">
                          <div className="details">
                            <img
                              className="svg"
                              src={icon_e1}
                              alt="icon_e1"
                            />
                            <div className="title">
                              <h3>UI/UX Designer</h3>
                              <span>Senior Designer</span>
                            </div>
                            <div className="text">
                              <p>
                                Nunc hendrerit, justo vel ultricieselei fen
                                pretium leo, ac finibus nulla eros.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <div className="year">
                            <span>2020-now</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <div className="image">
                            <img src={thumb_37x25} alt="" />
                            <div
                              className="main"
                              data-img-url="img/timeline/1.jpg"
                              style={{backgroundImage: `url(${timeline_1})`}}
                            ></div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                    style={{visibility: 'visible', animationDuration: '1s'}}
                  >
                    <ul className="items">
                      <li>
                        <div className="list_inner">
                          <div className="details">
                            <img
                              className="svg"
                              src={icon_e2}
                              alt=""
                            />
                            <div className="title">
                              <h3>Graphic Designer</h3>
                              <span>Junior Designer</span>
                            </div>
                            <div className="text">
                              <p>
                                Nunc hendrerit, justo vel ultricieselei fen
                                pretium leo, ac finibus nulla eros.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <div className="year">
                            <span>2018-2020</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <div className="image">
                            <img src={thumb_37x25} alt="" />
                            <div
                              className="main"
                              data-img-url="img/timeline/2.jpg"
                              style={{backgroundImage: `url(${timeline_2})`}}
                            ></div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                    style={{visibility: 'visible', animationDuration: '1s'}}
                  >
                    <ul className="items">
                      <li>
                        <div className="list_inner">
                          <div className="details">
                            <img
                              className="svg"
                              src={icon_e3}
                              alt=""
                            />
                            <div className="title">
                              <h3>Content Manager</h3>
                              <span>Sales Manager</span>
                            </div>
                            <div className="text">
                              <p>
                                Nunc hendrerit, justo vel ultricieselei fen
                                pretium leo, ac finibus nulla eros.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <div className="year">
                            <span>2016-2018</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <div className="image">
                            <img src={thumb_37x25} alt="" />
                            <div
                              className="main"
                              data-img-url="img/timeline/3.jpg"
                              style={{backgroundImage: `url(${timeline_3})`}}
                            ></div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
