import { useState } from 'react';

import "./Testimonial.css";
import Section from "../../components/Section/Section";
import JsonData from '../../assets/data/content.json';
import quote from '../../assets/img/testimonial/quote.svg';

const Testimonial = () => {
  const testimonialData = JsonData.testimonial;
  const [activeElement, setActiveElement] = useState(0);

  const onAvtrClick = (index) => {
    setActiveElement(index);
  }

  return (
    <Section>
      <div className="vtr_tm_testimonials">
        <div className="container">
          <div className="vtr_tm_main_title" data-text-align="center">
            <span>Testimonials</span>
            <h3>What My Clients Say</h3>
            <p>
              Most common methods for designing websites that work well on desktop
              is responsive and adaptive design
            </p>
          </div>
          <div className="testimonials_inner wow fadeInUp" data-wow-duration="1s" style={{visibility: 'visible', animationDuration: '1s'}}>
            <div className="leftpart">
              <ul>
                {testimonialData.clientImage.map((item,index) => (
                  <li key={index} className={index === activeElement ? 'active' : ''} data-index={index+1}>
                    <div className="image">
                      <img src={require(`../../assets/img/thumb/${testimonialData.thumb_37x45}`)} alt="" />
                      <div
                        className="main"
                        style={{backgroundImage:`url(${require(`../../assets/img/testimonial/${item.src}`)})`}}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rightpart">
              <div className="rightpart_in">
                <div className="main_title">
                  <h3>
                    <span className="big">
                      Testimonials
                      <span className="small">
                        Testimonials
                        <img className="svg" src={quote} alt="" />
                      </span>
                    </span>
                  </h3>
                </div>
                <div className="quotes">
                  <ul>
                    {testimonialData.clientMessage.map((item,index) => (
                      <li key={index+1} className={index === activeElement ? "active" : ""} data-index={index+1}>
                        <p>
                          {item.message}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="details">
                  <div className="infos">
                    <div className="avatars">
                      <ul className="grid-sort">
                        {testimonialData.clientImage.map((item,index) => (
                          <li key={index} className={`grid-item ${index}`} onClick={onAvtrClick.bind(null,index)}>
                            <span>
                              <div
                                style={{backgroundImage:`url(${require(`../../assets/img/testimonial/${item.src}`)})`}}                            ></div>
                            </span>
                            <span className="hidden">1</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="short">
                      <ul className="name">
                        {testimonialData.clientName.map((item,index) => (
                          <li key={index} className={index === activeElement ? "active" : ""} data-index={index+1}>
                            <h3>{item.name}</h3>
                          </li>
                        ))}
                      </ul>
                      <ul className="job">
                        {testimonialData.clientName.map((item,index) => (
                          <li key={index} className={index === activeElement ? "active" : ""} data-index={index+1}>
                            <span>{item.job}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonial;
