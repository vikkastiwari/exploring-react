import './Experience.css';
import Section from "../../components/Section/Section";
import JsonData from '../../assets/data/content.json';

import icon_e1 from '../../assets/img/exp/e1.svg';
import icon_e2 from '../../assets/img/exp/e2.svg';
import icon_e3 from '../../assets/img/exp/e3.svg';
import thumb_37x25 from '../../assets/img/thumb/37-25.jpg';
import timeline_1 from '../../assets/img/exp/timeline_1.jpg';
import timeline_2 from '../../assets/img/exp/timeline_2.jpg';
import timeline_3 from '../../assets/img/exp/timeline_3.jpg';

const Experience = () => {

  const experienceData = JsonData.experience;

  return (
    <Section>
      <div className="vtr_tm_timeline vtr_section_padding">
        <div className="container bigger">
          <div className="timeline_inner">
            <div className="container">
              <div className="vtr_tm_main_title" data-text-align="center">
                <span>{experienceData.title}</span>
                <h3>{experienceData.heading}</h3>
                <p>
                  {experienceData.desc}
                </p>
              </div>
              <div className="timeline_list">
                <span className="line"></span>
                <ul>
                  {experienceData.list.map((item,index)=>(
                    <li
                      key={index}
                      className="fadeInUp"
                      style={{visibility: 'visible', animationDuration: '1s'}}
                    >
                      <ul className="items">

                          <li>
                            <div className="list_inner">
                              <div className="details">
                                <img
                                  className="svg"
                                  src={icon_e1}
                                  alt="company brand logo"
                                />
                                <div className="title">
                                  <h3>{item.role}</h3>
                                  <span>{item.designation}</span>
                                </div>
                                <div className="text">
                                  <p>
                                    {item.desc}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </li>
                        <li>
                          <div className="list_inner">
                            <div className="year">
                              <span>{item.range}</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="image">
                              <img src={thumb_37x25} alt={item.alt} />
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
                  ))}
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
