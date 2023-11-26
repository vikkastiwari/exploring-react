import "./Features.css";
import JsonData from '../../assets/data/home-content.json';
import Section from "../../components/Section/Section";

const Features = () => {
  const featuresData = JsonData.features;

  return (
    <Section>
      <div className="vtr_tm_features vtr_section_padding">
        <div className="container">
          <div className="vtr_tm_main_title" data-text-align="center">
            <span>{featuresData.title}</span>
            <h3>{featuresData.heading}</h3>
            <p>{featuresData.desc}</p>
          </div>
          <div className="features_list">
            <ul>
              {featuresData.list.map((item,index) => (
                <li
                  key={index}
                  className="fadeInUp"
                  style={{visibility: "visible", animationDuration: '1s'}}
                >
                  <div className="list_inner">
                    <div className="short">
                      <div className="title">
                        <span>{item.index}</span>
                        <h3>{item.name}</h3>
                      </div>
                      <div className="icon">
                        <img
                          style={{ width: "60px" }}
                          src={require(`../../assets/img/features/${item.src}`)}
                          alt="req"
                        />
                      </div>
                    </div>
                    <div className="text">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Features;
