import { Link } from "react-router-dom";

import "./Work.css";
import JsonData from '../../assets/data/home-content.json';
import Section from "../../components/Section/Section";
import ProjectJsonData from '../../assets/data/project-content.json';

import ProjectCard from "../../components/Cards/ProjectCard/ProjectCard";

const Work = () => {
  const portfolioData = JsonData.portfolio;
  const projectData = ProjectJsonData;

  const commonData = JsonData.common;

  return (
    <>
      <Section id="portfolio">
        <div className="vtr_tm_portfolio vtr_section_padding">
          <div className="container">
            <div className="vtr_tm_main_title" data-text-align="center">
              <span>{portfolioData.title}</span>
              <h3>{portfolioData.heading}</h3>
              <p>
                {portfolioData.desc}
              </p>
            </div>
            <div
              className="portfolio_list vtr_slider_tl_down fadeInUp"
              style={{visibility: 'visible', animationDuration: '1s'}}
            >
              <ul
                className="gallery_zoom grid"
              >
                {projectData.projectPageData.map((item,index)=>(
                  (index < 6) ? 
                    <li
                      key={index}
                      className="grid-item"
                    >
                      <ProjectCard item={item} index={index} />
                    </li> : ''
                ))}
              </ul>
            </div>
            <div className="vtr_tm_button vtr_align_center">
              <Link to="/projects" className="anchor">
                {commonData.viewMoreBtnText}
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Work;
