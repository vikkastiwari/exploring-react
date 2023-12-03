import './ProjectsPage.css';
import ProjectJsonData from '../../assets/data/project-content.json';
import ProjectCard from '../../components/Cards/ProjectCard/ProjectCard';

const ProjectsPage = () => {
  const projectData = ProjectJsonData;

  return (
    <div className='vtr_all_projects'>
      <div className="projects_list container">
        <div className="vtr_tm_main_title" data-text-align="center">
          <h2>{projectData.heading}</h2>
          <p>{projectData.desc}</p>
        </div>
        <ul>
          {projectData.projectPageData.map((item,index)=>(
            <li
              key={index}
              className="fadeInUp"
              style={{visibility: "visible", animationDuration: '1s'}}
            >
              <div className='project_card_wrp'>
                <ProjectCard item={item} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectsPage;
