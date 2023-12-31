import './Experience.css';

import Section from "../../components/Section/Section";
import JsonData from '../../assets/data/home-content.json';
import thumb_37x25 from '../../assets/img/thumb/37-25.jpg';

const Experience = () => {

  const experienceData = JsonData.experience;

  return (
    <Section id="experience">
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
                                  src={require(`../../assets/img/exp/${item.src}`)}
                                  alt="company brand logo"
                                />
                                <div className="title">
                                  <h3>{item.role}</h3>
                                  <span>{item.employer}</span>
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
                                style={{backgroundImage:`url(${require(`../../assets/img/exp/${item.timelineSrc}`)})`}}
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
