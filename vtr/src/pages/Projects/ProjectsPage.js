import React, { useEffect } from 'react';

import './ProjectsPage.css';
import ProjectJsonData from '../../assets/data/project-content.json';
import ProjectCard from '../../components/Cards/ProjectCard/ProjectCard';
import BannerAdUnit from '../../components/AdCards/BannerAdUnit';
import { useMobileDetect, useTabletDetect } from '../../service/ScreenSizeService';


const ProjectsPage = () => {
  const projectData = ProjectJsonData;
  const isMobile = useMobileDetect();
  const isTablet = useTabletDetect();

  useEffect(() => {
    document.title = 'Showcasing Our Masterpieces: A Portfolio of Web Excellence - Vikas Tiwari - Learn | Apply | Evolve';
    return () => {
      document.title = 'Vikas Tiwari - Learn | Apply | Evolve';
    };
  }, []);
  
  return (
    <div className='vtr_all_projects'>
      <div className="projects_list container">
        <div className="vtr_tm_main_title" data-text-align="center">
          <span>{projectData.title}</span>
          <h2>{projectData.heading}</h2>
          <p>{projectData.desc}</p>
        </div>
        <ul>
          {projectData.projectPageData.map((item,index)=>(
            <React.Fragment key={index}>
              <li
                className="fadeInUp"
                style={{visibility: "visible", animationDuration: '1s'}}
              >
                <div className='project_card_wrp'>
                  <ProjectCard item={item} index={index} />
                </div>
              </li>
              {(isMobile ? index === 1 : isTablet ? index === 2 : index === 3) ? <BannerAdUnit /> : ''}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectsPage;
