
import './Services.css';

import JsonData from '../../assets/data/home-content.json';
import Section from "../../components/Section/Section";

const Services = () => {
  const servicesData = JsonData.services;

  return (
    <Section id="services">
      <div className="vtr_tm_services vtr_section_padding">
        <div className="container">
          <div className="vtr_tm_main_title" data-text-align="center">
            <span>{servicesData.title}</span>
            <h3>{servicesData.heading}</h3>
            <p>
              {servicesData.desc}
            </p>
          </div>
          <div className="service_list">
            <ul>
              {servicesData.lists.map((item,i)=>(
                <li
                  key={i}
                  className={i%2 !== 0 ? "fadeInLeft" : "fadeInRight"}
                  style={{visibility: 'visible', animationDuration: '1s'}}
                >
                  <div
                    className="list_inner tilt-effect1"
                  >
                    <span className="icon">
                      <img
                        src={require(`../../assets/img/services/${item.src}`)}
                        alt="req"
                      />
                    </span>
                    <div className="title">
                      <h3>{item.name}</h3>
                      <span className="price">
                        {item.price[0]} <span>{item.price[1]}</span>
                      </span>
                    </div>
                    <div className="text">
                      <p>
                        {item.desc}
                      </p>
                    </div>
                    <a className="vtr_tm_full_link" href="/">{}</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
